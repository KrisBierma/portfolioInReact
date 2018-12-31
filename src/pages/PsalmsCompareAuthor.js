import React, { Component } from 'react';
import Footer from '../components/Footer';
import { Col, Row, Container } from 'reactstrap';
import PsHeader from '../components/PsHeader';

class PsalmsCompareAuthor extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  render() {
    return(
      <Container className='psalmContainer'>
        <PsHeader heading='Compare Authors'></PsHeader>

        <Footer></Footer>        
      </Container>

    )
  }
}

export default PsalmsCompareAuthor;