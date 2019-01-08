import React, { Component } from 'react';
// import { Col, Row } from 'reactstrap';
import axios from 'axios';

class PsChap extends Component {
  constructor(props){
    super(props);
    this.state = {
      chapterNum: this.props.chapterNum,
      wholeChapeter: '',
      freq: [],
      // newFreq2: [],
      count: '',
      groupedFreq: [],
      data2: []
    }
    this.getPsalm = this.getPsalm.bind(this);
    this.getWords = this.getWords.bind(this);
    this.countFreqOfWords = this.countFreqOfWords.bind(this);
    this.sortWords = this.sortWords.bind(this);
    this.groupWords = this.groupWords.bind(this);
    this.recurringLines = this.recurringLines.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.match.params);
    this.getPsalm();
  }

  // api to api.esv.org to get the current psalm
  getPsalm() {
    // let apiKey = process.env.REACT_APP_ESV_API_KEY;
    // console.log(process.env.REACT_APP_ESV_API_KEY)
    const passage = `Psalm ${this.state.chapterNum}`;
    const queryURL = 'https://api.esv.org/v3/passage/text/';
    const config = {
      headers: {
        'Authorization': process.env.REACT_APP_ESV_API_KEY
      },
      params : {
        'q': passage,
        'include-headings': false,
        'include-footnotes': false,
        'include-verse-numbers': false,
        'include-short-copyright': false,
        'include-passage-references': false,
        'indent-poetry': false,
        'indent-paragraphs': 0
      }
    };

    // build in resiliency: setTimeout, fallback, error msgs
    const timeout = 5000;
    axios.get(queryURL, config, timeout)
    .then((res) =>{
      // console.log(res.data);
      // console.log(res.data.passages[0]);
      this.setState({wholeChapeter: res.data.passages[0]});
      this.getWords(this.state.wholeChapeter);
      this.recurringLines();
    })
    .catch(error => {
      console.log(error);
      this.setState({wholeChapeter: "There was an error getting this chapter from ESV. Please try again later!"})
    });

    // just gets first verse
    const passage2 = `Psalm ${this.state.chapterNum}:1`;
    const config2 = {
      headers: {
        'Authorization': process.env.REACT_APP_ESV_API_KEY
      },
      params : {
        'q': passage2,
        'include-headings': false,
        'include-footnotes': false,
        'include-verse-numbers': false,
        'include-short-copyright': false,
        'include-passage-references': false,
        'indent-poetry': false,
        'indent-paragraphs': 0
      }
    };
    axios.get(queryURL, config2).then((res) =>{
      // console.log(res.data);
      console.log(res.data.passages[0]);
    });
  }

  // put api result into array, filter out unwanted words 
  // also counts words to find length of psalm
  getWords(string) {
    // replace . with spaces. Split string at spaces into individual words in an array. Start a new array of objects to hold words and their frequency.
    const words = string.replace(/[.,;!?]/g, '').split(/\s/);

    // put all to lowerCase except Lord, God, I, O
    for (let i=0; i<words.length; i++) {
      if (words[i] !== 'I' && words[i] !== 'LORD' && words[i] !== 'God' && words[i] !== 'O') {
        words[i] = words[i].toLowerCase();
      }
    }

    // filter out articles, conjunctions
    const dontCount = ['and', 'or', 'but', 'the', 'by', 'a', 'an', 'on', 'to', 'is', 'in', 'for', 'are', 'of', '', 'with'];

    // loop through each dontCount word
    dontCount.forEach(function(noWord){
      // loop through each word from the psalm array
      for (let i=0; i<words.length; i++){
        // set var to catch blank space with ascii code NaN
        let blankSpace = words[i].charCodeAt(0);

        // if the psalm array word is equal to the dontCount word, remove the psalm word from the array
        if (noWord === words[i] || isNaN(blankSpace)) {
          words.splice(i, 1)
        }
      }
    }
  )
    // console.log(words)
    this.setState({
      freq: words,
      count: string.split(' ').length
    });
    this.countFreqOfWords();
  }

  // count the frequency of words in the psalm
  countFreqOfWords() {
    const words = this.state.freq;
    // console.log(words)
    const freq=[];
    let amount = 1;
    let flag;

    // add first word to array
    if (freq[0]===undefined){
      flag=false;
      var obj = {wordle:words[0], value:0};
      freq.push(obj);
    }

    // once first word is added, cycle through all the other words
    if (freq[0]!==undefined) {
      words.forEach(function(w){
        flag=false;
        let place, truePlace;
        // cycle through array of obj, compare word from array with word from psalm
        for (let i=0; i<amount; i++){
          place=i;
            // if find current word in the array, flag true
            if (freq[i].wordle===w){
              flag=true;
              truePlace = i;
            } 
        }

        // if word is already there, ++ to value
        if (flag){
          freq[truePlace].value+=1;  
        }
        // else push the new word obj to the array
        else {
          var obj = {wordle:w, value:0};
          freq.push(obj);
          freq[place+1].value+=1;  
              amount++;
        }
      })
    }
    this.setState({freq: freq})
    this.sortWords();
  }

  // find recurring lines of 3+ words
  recurringLines() {
    // change psalm to array
    const arr = this.state.wholeChapeter.replace(/[.,;!?]/g, '').split(/\s/).filter(word => word !== '');
    // console.log(arr)
    let tempArr = [];
    let phrases = [];
    let indexOfPhrases = [];
    // loop through all once, comparing each word to all the others
    for (let i=0; i<arr.length; i++) {
      // loop all second time to find matches
      for (let j=0; j<arr.length; j++) {
        // check if three words in a row match and that the word isn't checking itself
        if (i!== j && arr[i] === arr[j] && arr[i+1] === arr[j+1] && arr[i+2] === arr[j+2]) {
          tempArr = [];
          let t2 = [];

          // a match of 3 words in a row gets pushed to tempArr
          tempArr.push(arr[i], arr[i+1], arr[i+2]);

          // check to see if 4 or more words match and push to tempArr if so
          let k = 3;
          while (arr[i+k] === arr[j+k]) {
            tempArr.push(arr[i+k]);
            k++;
          }          
          t2 = tempArr.join(' ');

          // check if the phrase is already included and if the index of either of them are already included
          function check() {
            if (phrases.indexOf(t2) === -1 && indexOfPhrases.includes(i) === false && indexOfPhrases.includes(j) === false) {
              return true;
            }
          }
          if (check()) {phrases.push(t2)}; 

          // if the index of the word wasn't already there, it gets pushed to indexOfPhrases to know which words were already included
          for (let l = 0; l < 3; l++) {
            if (indexOfPhrases.includes(i + l) === false) {
              indexOfPhrases.push(i + l);
            }
          }
          for (let l = 0; l < 3; l++) {
            if (indexOfPhrases.includes(j + l) === false) {
              indexOfPhrases.push(j + l);
            }
          }
          }
      }
    }
    // console.log(phrases); 
    // call the func in the parent 'individualPsalm' component to pass the data to it so it can get displayed
    this.props.frequentPhrases(phrases);
  }

  // filters out words that only show up once in the psalm; sorts from greatest to least; displays in the table
  sortWords(){
    console.log(this.state.freq)
    const freq = this.state.freq;
    const newFreq=[]; // new array to hold updated list

    // filter out any words that only show up once
    for (let i=0; i<freq.length;i++){
      if (freq[i].value > 1){
        newFreq.push(freq[i]);
      }
    }

    // sort words from greatest to least
    newFreq.sort(function(a,b){return b.value-a.value});
    // call this function in the parent (individualPsalm) which sends the freq array back to parent to use in pswordCount
    const data = [newFreq, this.state.count];
    // console.log(this.props)
    console.log(data);
    this.props.getPsWordCount(data);

    // deep clone of array of obj from MDN
    const d = data[0];
    let clone = JSON.parse(JSON.stringify(d)); 
    // console.log(clone)

    this.setState({data2: clone});
    this.groupWords(freq);
    
    // this.props.groupWords(data);
  }

  // for use in parent IndividualPsalm when 'group words' is clicked (this data goes through parent IndividualPsalm to child PsWordCount)
  groupWords(freq) {
    // const data2 = this.state.data2;
    // get all words (even if they're in there only once) so they get included in 'group words' count
    const data2 = freq;
    const newFreq2 = [];
    // console.log(freq)
    // these are the words to consolidate (not really synonyms, but that's what we're calling them)
    const synonyms = [['God', 'LORD'], ['he', 'him', 'his'], ['nor', 'not'], ['I', 'me', 'my', 'mine'], ['you', 'your'], ['their', 'them'], ['has', 'have', 'had'], ['commands', 'commandments', 'precepts', 'statues', 'law', 'decrees', 'decress', 'rules'], ['faithful', 'faithfulness']];

    // loop through the words frequency array (twice) for each pair of words
    synonyms.forEach(s => {
      // start with first word in the synonyms array
      let s1 = s[0];
      // loop through data2 array to see if s1 is in there
      for (let i=0; i<data2.length; i++) {
        // if s1 is there
        if (data2[i].wordle === s1) {
          // start arrays to hold the synonyms found and their locations
          let tempArr = [{'wordle': s[0], 'value': data2[i].value}];
          let locations = [data2.indexOf(data2[i])];

          // loop through whole array x times to find if all the words are there. x is the length of the specific synonyms array
          for (let j=1; j<s.length; j++) {
            s1 = s[j];
            for (let k=0; k<data2.length; k++){
              // if more synonyms are found, add to temp arrays
              if (data2[k].wordle === s1) {
                tempArr.push(data2[k]);
                locations.push(data2.indexOf(data2[k]));
              }
            }
          }
          // consolidate all the found synonyms and values into once index of the data2 array and remove the other locations/values
          let tempValue = tempArr.reduce(function(prev, cur) {
            return prev + cur.value;
          }, 0);
          let tempWords = tempArr[0].wordle;
          console.log(tempArr)
          for (let i = 1; i<tempArr.length; i++) {
            tempWords += `, ${tempArr[i].wordle}`
            console.log(tempWords)
          }          
          data2[locations[0]].wordle = tempWords;
          data2[locations[0]].value = tempValue;
          for (let i=1; i<tempArr.length; i++){
            data2.splice(locations[i], 1);          
          }
          // sort data
          data2.sort(function(a,b){return b.value-a.value});

          // stop the first loop once once the first synonym is found
          break;
        }
      }
    })
    // filter out any words that only show up once
    for (let i=0; i<data2.length;i++){
      if (data2[i].value > 1){
        newFreq2.push(data2[i]);
      }
    }
    // call the func in the parent 'individualPsalm' component to pass the data to it so it can then go to PsWordCount
    console.log(newFreq2)
    this.props.groupWordsParent(newFreq2);
  }

  render() {
    return(
      <p>{this.state.wholeChapeter}</p>
    )
  }
}

export default PsChap;
