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
      freq: []
      // freq2: []
    }
    this.getPsWordCount = this.getPsWordCount.bind(this);
  }

  // need freq1 and freq2

  // callback for child (psChap) to call to get data from it, save it here (the parent) and have another child (psWordCount) call it
  getPsWordCount(params){
    console.log('hi')
    this.setState({freq: params});
  }

  render() {
    console.log(this.state.psalm1)
    return(
    <Container className='psalmContainer'>
      <PsHeader heading={`Psalms ${this.state.psalm1} and ${this.state.psalm2}`} />

      <Row className='psalmsContent'>
        <Col>
          <Row>
            <Col>
              <p>Psalm {this.state.psalm1}</p>
              <PsChap chapterNum={this.state.psalm1} getPsWordCount={this.getPsWordCount} />
            </Col>
            <Col>
              <p>Psalm {this.state.psalm1}</p>
              <PsChap chapterNum={this.state.psalm2} getPsWordCount={this.getPsWordCount} />
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
