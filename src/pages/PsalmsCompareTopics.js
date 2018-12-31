import React, { Component } from 'react';
import Footer from '../components/Footer';
import { Col, Row, Container } from 'reactstrap';
import PsHeader from '../components/PsHeader';

class PsalmsCompareTopic extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  render() {
    return(
      <Container className='psalmContainer'>
        <PsHeader heading='Compare Topics'></PsHeader>

        <Footer></Footer>        
      </Container>

    )
  }
}

export default PsalmsCompareTopic;