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
      count: '',
      groupedFreq: [],
      data2: []
    }
    this.getPsalm = this.getPsalm.bind(this);
    this.getWords = this.getWords.bind(this);
    this.countFreqOfWords = this.countFreqOfWords.bind(this);
    this.sortWords = this.sortWords.bind(this);
    this.groupWords = this.groupWords.bind(this);
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

    axios.get(queryURL, config).then((res) =>{
      // console.log(res.data);
      // console.log(res.data.passages[0]);
      this.setState({wholeChapeter: res.data.passages[0]});
      this.getWords(this.state.wholeChapeter);
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
    const dontCount = ['and', 'or', 'but', 'the', 'by', 'a', 'an', 'on', 'to', 'is', 'in', 'for', 'are', 'of', ''];

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

  // filters out words that only show up once in the psalm; sorts from greatest to least; displays in the table
  sortWords(){
    // console.log(this.state.freq)
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
    this.props.getPsWordCount(data);

    // deep clone of array of obj from MDN
    const d = data[0];
    let clone = JSON.parse(JSON.stringify(d)); 
    // console.log(clone)

    this.setState({data2: clone});
    this.groupWords();
    
    // this.props.groupWords(data);
  }

  // for use in parent IndividualPsalm when 'group words' is clicked (this data goes through parent IndividualPsalm to child PsWordCount)
  groupWords() {
    const data2 = this.state.data2;
    // these are the words to consolidate (not really synonyms, but that's what we're calling them)
    const synonyms = [['God', 'LORD'], ['he', 'him', 'his'], ['nor', 'not'], ['I', 'me', 'my', 'mine'], ['you', 'your'], ['their', 'them']];

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
          for (let i = 1; i<tempArr.length; i++) {
            tempWords += `, ${tempArr[i].wordle}`
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
    // call the func in the parent 'individualPsalm' component to pass the data to it so it can then go to PsWordCount
    this.props.groupWordsParent(data2);
  }

  render() {
    return(
      <p>{this.state.wholeChapeter}</p>
    )
  }
}

export default PsChap;
