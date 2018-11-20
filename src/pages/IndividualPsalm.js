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
    this.getPsalm=this.getPsalm.bind(this);
    this.countWords = this.countWords.bind(this);
  }
  componentDidMount() {
    this.setState({psalmId: this.props.match.params.psalmId});
    console.log(this.props.match.params.psalmId);
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
        'include-passage-references': false
      }
    };

    axios.get(queryURL, config).then((res) =>{
      // console.log(res.data);
      // console.log(res.data.passages[0]);
      this.setState({wholeChapeter: res.data.passages[0]});
      this.countWords(this.state.wholeChapeter);
    });
  }

  // count the frequency of words in the psalm
  countWords(string) {
    // replace . with spaces. Split string at spaces into individual words in an array. Start a new array of objects to hold words and their frequency.
    const words = string.toLowerCase().replace(/[.,;!?]/g, '').split(/\s/);
    const freq=[];
    
    // loop through each word in the string. if the word isn't in the frequency array, add it and git it a count of 0. If it's already in there, +1 the count.
    words.forEach(function(w){
      if (!freq[w]){
        freq[w] = 0;
      }
      freq[w] +=1;
    });

    // filter out articles, conjunctions
    const dontCount = ['and', 'or', 'the', ' ', 'by', 'a', 'an', 'on', 'to', 'is', 'in', 'for', 'are', 'of', ''];
    let flag = false; // true=the word is in the dontCount list
    const newFreq = []; // updated list of words from psalm, minus dontCount words
    // loop through each word in freq array
    // word is each key in the freq array
    for (let word in freq) {
      flag=false;
      // loop through each word in dontCount array
      // w is each word in the dontCount array
      dontCount.forEach(function(w) {
        // console.log(w, word, freq[word])
        if (!flag){
          if (w===word) return flag=true;
          else flag=false       
        }
      })
      if (!flag) {newFreq[word]=freq[word];}
    }
    this.setState({freq: newFreq});
    this.displayCountedWords();
  }

  // filters out words that only show up once in the psalm; sorts from greatest to least; displays in the table
  displayCountedWords(){
    const freq = this.state.freq;
    const newFreq=[]; // new array to hold updated list

    // filter out any words that only show up once
    for (let word in freq) {
      if (freq[word] > 1){
        newFreq[word]=freq[word];
      }
    }

    // sort from greatest to least
    console.log(newFreq[0]);
    // for (let i=0; i<newFreq.length;i++){
    //   console.log(newFreq(i));
    // }
    for (let key in newFreq) {
      console.log(key)
    }
    console.log(newFreq.sort(function(a,b){return a-b}))
  
    console.log(Array.isArray(newFreq));
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
