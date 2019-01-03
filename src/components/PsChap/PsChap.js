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
    console.log(this.props)
    this.props.getPsWordCount(data);

    // deep clone of array of obj from MDN
    const d = data[0];
    let clone = JSON.parse(JSON.stringify(d)); 
    console.log(clone)

    this.setState({data2: clone});
    this.groupWords();
    
    // this.props.groupWords(data);
  }

  // for use in parent IndividualPsalm when 'group words' is clicked (this data goes through parent IndividualPsalm to child PsWordCount)
  groupWords() {
    console.log(this.props);
    const data2 = this.state.data2;
    // these are the words to consolidate
    const synonyms = [['God', 'LORD'], ['he', 'him', 'his'], ['nor', 'not'], ['me', 'my', 'mine']];
    // loop through the words frequency array (twice) for each pair of words
    synonyms.forEach(s => {
      let s1 = s[0];
      let s2 = s[1];
      let tempWords = '';
        for (let i=0; i<data2.length; i++) {
          // only go through next loop if the word matches a synonym
          if (data2[i].wordle === s1) {
            for (let j=1; j<data2.length-1; j++) {
                  console.log(data2[i].wordle, s1, data2[j].wordle, s2);
                if (data2[i].wordle === s1 && data2[j].wordle === s2 || data2[j].wordle === tempWords) {

                  // put both words together and add the values
                  data2[i].wordle = `${s1}, ${s2}`;
                  data2[i].value = data2[i].value + data2[j].value;
                  // if (s.length === 3) {
                  //   tempWords = data2[i].wordle;
                  //   console.log(tempWords);
                  // }
                  // remove the second word, i.e. Lord, him
                  data2.splice(j, 1);
                  // break;
                }    
                // for three synonyms, compare first and third word
                // if same, consolidate
                if (s.length === 3) {
                  let s3 = s[2];
                  // console.log(s3);
                if (data2[i].wordle === s1 && data2[j].wordle === s3) {
                  // console.log(data2[i].wordle, s1, data2[j].wordle, s3);
                  // put both words together and add the values
                  data2[i].wordle = `${s1}, ${s3}`;
                  data2[i].value = data2[i].value + data2[j].value;
                  // remove the second word, i.e. Lord, him
                  data2.splice(j, 1);
                  // set up temporary compilation of words
                  if (s.length === 3) {
                    tempWords = data2[i].wordle;
                    // console.log(tempWords);
                  }
                  // the second word becomes the third (in case the first and third words were a match but the second is still to be found)
                  s2 = s[2];
                  // break;
                }
              }
            }
          }
      }
    })
    console.log(data2)

    this.props.groupWordsParent(data2);
  }

  render() {
    return(
      <p>{this.state.wholeChapeter}</p>
    )
  }
}

export default PsChap;
