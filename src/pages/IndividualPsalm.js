import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

class IndividualPsalm extends Component {
  constructor(props){
    super(props);
    this.state = {
      psalmId: '',
      wholeChapeter: '',
      freq:[]
    }
    this.getPsalm = this.getPsalm.bind(this);
    this.getWords = this.getWords.bind(this);
    this.countWords = this.countWords.bind(this);
    this.displayCountedWords = this.displayCountedWords.bind(this);
  }
  componentDidMount() {
    this.setState({psalmId: this.props.match.params.psalmId});
    // console.log(this.props.match.params.psalmId);
    // console.log(this);
    // console.log(this.state.psalmId);
    this.getPsalm();
  }

  // api to api.esv.org to get the current psalm
  getPsalm() {
    let apiKey = 'fd8b3c5ed779240885a2d077adfdbd0fd6c3a25a';
    const passage = `Psalm ${this.state.psalmId}`;
    const queryURL = 'https://api.esv.org/v3/passage/text/';
    const config = {
      headers: {
        'Authorization': apiKey
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
  }


  // put api result into array, filter out unwanted words 
  getWords(string) {
    // replace . with spaces. Split string at spaces into individual words in an array. Start a new array of objects to hold words and their frequency.
    const words = string.toLowerCase().replace(/[.,;!?]/g, '').split(/\s/);

    // filter out articles, conjunctions
    const dontCount = ['and', 'or', 'but', 'the', 'by', 'a', 'an', 'on', 'to', 'is', 'in', 'for', 'are', 'of', ''];

    // loop through each dontCount word
    dontCount.forEach(function(noWord){
      // loop through each word from the psalm array
      for (let i=0; i<words.length; i++){
        // if the psalm array word is equal to the dontCount word, remove the psalm word from the array
        if (noWord === words[i]) {
          words.splice(i, 1)
        }
      }
  })
    // console.log(words)
    this.setState({freq: words});
    this.countWords();
  }

  // count the frequency of words in the psalm
  countWords() {
    const words = this.state.freq;
    console.log(words)
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
    console.log(freq)
    this.displayCountedWords();
  }

  // filters out words that only show up once in the psalm; sorts from greatest to least; displays in the table
  displayCountedWords(){
    console.log('here')
    const freq = this.state.freq;
    const newFreq=[]; // new array to hold updated list

    // filter out any words that only show up once
    for (let word in freq) {
      if (freq[word] > 1){
        newFreq[word]=freq[word];
      }
    }

    // sort from greatest to least
    // console.log(newFreq.but);
    // for (let i=0; i<newFreq.length;i++){
    //   console.log(newFreq(i));
    // }
    for (let key in newFreq) {
      // console.log(key)
    }
    // console.log(newFreq.sort(function(a,b){return a-b}))
  
    // console.log(Array.isArray(newFreq));
    // display in table
  }

  render() {
    return(
      <div>
        <Container>
          <Row>
            <h1>{`Psalm ${this.state.psalmId}`}</h1>
            <p>{this.state.wholeChapeter}</p>
          </Row>
          <Row>

          </Row>
          <Row>
            <Link to='/psalms'>Return to Psalms Home</Link>
          </Row>
        </Container>
      </div>
    )  
  }
}

export default IndividualPsalm;
