import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import axios from 'axios';
import firebase from '../components/Firebase/firebase';
import PsHeader from '../components/PsHeader';
import Footer from '../components/Footer';


class PsalmsComparison extends Component {
  constructor(props){
    super(props);
    this.state = {
      psalm1: '',
      psalm2: ''
    }
  }

  componentDidMount(){

  }


  render() {
    return(

    <Container className='psalmContainer'>
      <PsHeader psalmId={`${this.state.psalm1} and ${this.state.psalm2}`} />

      <Row className='psalmsContent'>
        <h2>Psalms Comparison Chart</h2>

        <Col>
          <h4>Psalm {this.state.psalm1}</h4>
          <table>
            <tr>
              <th>Book</th>
              <th>Psalm Number</th>
              <th>Author</th>
              <th>Description</th>
              <th>First Verse</th>
              <th>Summary</th>
            </tr>
          </table>
        </Col>
        <Col>          
          <h4>Psalm {this.state.psalm1}</h4>
          <table>
            <tr>
              <th>Book</th>
              <th>Psalm Number</th>
              <th>Author</th>
              <th>Description</th>
              <th>First Verse</th>
              <th>Summary</th>
            </tr>
          </table>
        </Col>

      </Row>
      <Footer></Footer>
  </Container>
  )
}
};

export default PsalmsComparison;
