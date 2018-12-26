import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import PsHeader from '../components/PsHeader';
import Footer from '../components/Footer';
// import firebase from '../components/Firebase/firebase';
import PsalmData from '../components/psalmData';
import PsChap from '../components/PsChap';
import PsWordCount from '../components/PsWordCount';

class IndividualPsalm extends Component {
  constructor(props){
    super(props);
    this.state = {
      author: '',
      book: '',
      firstVerse: '',
      headings: '',
      chapterNum: this.props.match.params.chapterNum,
      summary: '',
      topic: '',
      wholeChapeter: '',
      freq:[]
    }
    this.getPsalm = this.getPsalm.bind(this);
    this.getWords = this.getWords.bind(this);
    this.countWords = this.countWords.bind(this);
    this.sortWords = this.sortWords.bind(this);
    this.renderWords = this.renderWords.bind(this);
    this.getPsWordCount = this.getPsWordCount.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params);
    // this.getPsalm();
  }

  // callback in parent, sent as props to PsChap child to get freq array to send to child pswordcount
  getPsWordCount(params) {
    this.setState({freq: params})
  }

  // api to api.esv.org to get the current psalm
  // getPsalm() {
  //   // let apiKey = process.env.REACT_APP_ESV_API_KEY;
  //   // console.log(process.env.REACT_APP_ESV_API_KEY)
  //   const passage = `Psalm ${this.state.chapterNum}`;
  //   const queryURL = 'https://api.esv.org/v3/passage/text/';
  //   const config = {
  //     headers: {
  //       'Authorization': process.env.REACT_APP_ESV_API_KEY
  //     },
  //     params : {
  //       'q': passage,
  //       'include-headings': false,
  //       'include-footnotes': false,
  //       'include-verse-numbers': false,
  //       'include-short-copyright': false,
  //       'include-passage-references': false,
  //       'indent-poetry': false,
  //       'indent-paragraphs': 0
  //     }
  //   };

  //   axios.get(queryURL, config).then((res) =>{
  //     // console.log(res.data);
  //     // console.log(res.data.passages[0]);
  //     this.setState({wholeChapeter: res.data.passages[0]});
  //     this.getWords(this.state.wholeChapeter);
  //   });
  // }


  // put api result into array, filter out unwanted words 
  // getWords(string) {
    // replace . with spaces. Split string at spaces into individual words in an array. Start a new array of objects to hold words and their frequency.
  //   const words = string.toLowerCase().replace(/[.,;!?]/g, '').split(/\s/);

  //   // filter out articles, conjunctions
  //   const dontCount = ['and', 'or', 'but', 'the', 'by', 'a', 'an', 'on', 'to', 'is', 'in', 'for', 'are', 'of', ''];

  //   // loop through each dontCount word
  //   dontCount.forEach(function(noWord){
  //     // loop through each word from the psalm array
  //     for (let i=0; i<words.length; i++){
  //       // set var to catch blank space with ascii code NaN
  //       let blankSpace = words[i].charCodeAt(0);

  //       // if the psalm array word is equal to the dontCount word, remove the psalm word from the array
  //       if (noWord === words[i] || isNaN(blankSpace)) {
  //         words.splice(i, 1)
  //       }
  //     }
  //   }
  // )
  //   // console.log(words)
  //   this.setState({freq: words});
  //   this.countWords();
  // }

  // count the frequency of words in the psalm
  // countWords() {
  //   const words = this.state.freq;
  //   // console.log(words)
  //   const freq=[];
  //   let amount = 1;
  //   let flag;

  //   // add first word to array
  //   if (freq[0]===undefined){
  //     flag=false;
  //     var obj = {wordle:words[0], value:0};
  //     freq.push(obj);
  //   }

    // once first word is added, cycle through all the other words
    // if (freq[0]!==undefined) {
    //   words.forEach(function(w){
    //     flag=false;
    //     let place, truePlace;
    //     // cycle through array of obj, compare word from array with word from psalm
    //     for (let i=0; i<amount; i++){
    //       place=i;
    //         // if find current word in the array, flag true
    //         if (freq[i].wordle===w){
    //           flag=true;
    //           truePlace = i;
    //         } 
    //     }

        // if word is already there, ++ to value
  //       if (flag){
  //         freq[truePlace].value+=1;  
  //       }
  //       // else push the new word obj to the array
  //       else {
  //         var obj = {wordle:w, value:0};
  //         freq.push(obj);
  //         freq[place+1].value+=1;  
  //             amount++;
  //       }
  //     })
  //   }
  //   this.setState({freq: freq})
  //   this.sortWords();
  // }

  // filters out words that only show up once in the psalm; sorts from greatest to least; displays in the table
  // sortWords(){
  //   // console.log(this.state.freq)
  //   const freq = this.state.freq;
  //   const newFreq=[]; // new array to hold updated list

  //   // filter out any words that only show up once
  //   for (let i=0; i<freq.length;i++){
  //     if (freq[i].value > 1){
  //       newFreq.push(freq[i]);
  //     }
  //   }

    // sort words from greatest to least
  //   newFreq.sort(function(a,b){return b.value-a.value});
  //   this.setState({freq:newFreq});
  // }

  // renderWords(props){
  //   // const freq = this.state.freq;
  //   return(    
  //     <tr>
  //       <td>{props.wordle}</td>
  //       <td>{props.value}</td>
  //     </tr>
  //   )
  // }

  render() {
    return(
      <Container className='psalmContainer'>
        <PsHeader chapterNum={this.state.chapterNum} />
        
        <Row className='psalmsContent'>
          <Col>
            <Row>
              {/* <PsChap chapterNum={this.state.chapterNum} /> */}
              <Col xs='6' sm='8'>
                {/* <p>{this.state.wholeChapeter}</p> */}
                <PsChap chapterNum={this.state.chapterNum} getPsWordCount={this.state.getPsWordCount} />

              </Col>
              <Col>
                <PsWordCount />
                {/* <table className='wordTable'>
                  <thead>
                    <tr>
                      <th>Word</th>
                      <th>Count</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.freq.map((row, i) => (
                    <tr key={`${row.wordle}.${i}`}>
                      <td>{row.wordle}</td>
                      <td>{row.value}</td>
                    </tr>
                    ))
                    }               
                  </tbody>
                </table>   */}
              </Col>
            </Row>

            <Row>
              <PsalmData chapterNum={this.state.chapterNum} />
            </Row>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    )  
  }
}

export default IndividualPsalm;
