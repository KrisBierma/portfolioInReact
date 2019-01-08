// compares two psalms
import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
// import axios from 'axios';
// import firebase from '../components/Firebase/firebase';
import PsHeader from '../components/PsHeader';
import Footer from '../components/Footer';
import PsChap from '../components/PsChap';
import PsalmData from '../components/psalmData';
import PsWordCount from '../components/PsWordCount';

class PsalmsComparison extends Component {
  constructor(props){
    super(props);
    this.state = {
      psalm1: this.props.match.params.psalmId.split('&')[0],
      psalm2: this.props.match.params.psalmId.split('&')[1],
      freq: [],
      freq2: []
    }
    this.getPsWordCount = this.getPsWordCount.bind(this);
    this.groupWordsParent = this.groupWordsParent.bind(this);
  }

  // callback for child (psChap) to call to get data from it, save it here (the parent) and have another child (psWordCount) call it
  getPsWordCount(params){
    this.setState({freq: params[0], count: params[1]});
  }

  groupWordsParent(params) {
    // console.log(params)
    this.setState({
      freq2: params
    })
  }

  render() {
    return(
    <Container className='psalmContainer'>
      <PsHeader heading={`Psalms ${this.state.psalm1} and ${this.state.psalm2}`} />

      <Row className='psalmsContent'>
        <Col>
          <Row>
            <Col>
              <p>Psalm {this.state.psalm1}</p>
              <PsChap chapterNum={this.state.psalm1} getPsWordCount={this.getPsWordCount} groupWordsParent={this.groupWordsParent} />
            </Col>
            <Col>
              <p>Psalm {this.state.psalm1}</p>
              <PsChap chapterNum={this.state.psalm2} getPsWordCount={this.getPsWordCount} groupWordsParent={this.groupWordsParent} />
            </Col>
          </Row>
          <Row>
            <Col>
              <PsWordCount freq={this.state.freq}/>
            </Col>
            <Col>
              <PsWordCount freq={this.state.freq}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <PsalmData chapterNum={this.state.psalm1} />
            </Col>
            <Col>
              <PsalmData chapterNum={this.state.psalm2} />
            </Col>
          </Row>       
        </Col>
      </Row>
      <Footer></Footer>
  </Container>
  )
}
};

export default PsalmsComparison;
