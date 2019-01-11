import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import axios from 'axios';
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
      freq:[],
      freq2:[],
      frequentPhrases: []
    }
    this.getPsWordCount = this.getPsWordCount.bind(this);
    this.groupWordsParent = this.groupWordsParent.bind(this);
    this.frequentPhrases = this.frequentPhrases.bind(this);
  }

  // callback here in parent, sent as props to PsChap child to get freq array to bring back here to state to then send to child pswordcount
  getPsWordCount(params) {
    console.log(params)
    this.setState({
      freq: params[0],
      count: params[1]
    })
  }

  groupWordsParent(params) {
    // console.log(params)
    this.setState({
      freq2: params
    })
  }

  frequentPhrases(params) {
    this.setState({
      frequentPhrases: params
    });
  }

  render() {
    return(
      <Container className='psalmContainer'>
        <PsHeader heading={`Psalm ${this.state.chapterNum}`} />
        
        <Row className='psalmsContent'>
          <Col>
            <Row>
              <Col xs='6' sm='8'>
                <PsChap chapterNum={this.state.chapterNum} getPsWordCount={this.getPsWordCount} groupWordsParent={this.groupWordsParent} frequentPhrases={this.frequentPhrases}/>
                <h5>Frequent Phrases</h5>
                {this.state.frequentPhrases.map((f) => {
                  return(
                  <p key={f[0]+f[1]+'-'+f[5]+f[6]+f[10]+''+ f.length}>{f}</p>
                  )})}
              </Col>
              <Col>
                <PsWordCount freq={this.state.freq} freq2={this.state.freq2} />
              </Col>
            </Row>

            <Row>
              <PsalmData chapterNum={this.state.chapterNum} />
            </Row>
            <Row>
              <p>Grouping words takes out passive verbs, conjuntions and articles, and it combines like terms.</p>
            </Row>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    )  
  }
}

export default IndividualPsalm;
