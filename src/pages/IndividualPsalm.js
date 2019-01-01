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
      freq:[]
    }
    this.getPsWordCount = this.getPsWordCount.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props.match.params);
  // }

  // callback in parent, sent as props to PsChap child to get freq array to bring back here to state to then send to child pswordcount
  getPsWordCount(params) {
    console.log(params)
    this.setState({
      freq: params[0],
      count: params[1]
    })
  }

  render() {
    return(
      <Container className='psalmContainer'>
        <PsHeader heading={`Psalm ${this.state.chapterNum}`} />
        
        <Row className='psalmsContent'>
          <Col>
            <Row>
              <Col xs='6' sm='8'>
                <PsChap chapterNum={this.state.chapterNum} getPsWordCount={this.getPsWordCount} />
              </Col>
              <Col>
                <PsWordCount freq={this.state.freq}/>
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
