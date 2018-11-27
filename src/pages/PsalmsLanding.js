import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import {PsButton} from '../components/PsButton';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Psalms.css';
import PsHeader from '../components/PsHeader';
import Footer from '../components/Footer';

class PsalmsLanding extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {

  }

  submitForm() {
    
  }

  render() {
    const psalms = [];
    for (let i=1; i<151; i++) {
      psalms.push(i);
    };

    return(
      <Container className='psalmContainer'>
        <PsHeader psalmId="Comparisons" />
        <Row className='psalmsContent'>
          <Col>
            <Row>
              <h4>What is this site?</h4>
              <p>How cool would it be, I thought, to graph the words from a psalm. I wanted to know if a particular psalm was God-centric or self-centric, and I though an actual word count would help with that.</p>
            </Row>
            <Row>
              <h4>Click a Psalm to see the deets.</h4>
              <ul className='allPsalms'>
                {psalms.map((psalm) => {
                  return(
                    <li
                    id={`psalm${psalm}`}
                    key={psalm}
                    className='psalmsList'
                    >
                    <Link to={`/psalm/${psalm}`}>{psalm}</Link>
                    </li>     
                  )})}
              </ul>
            </Row>
            <Row>
              <Col>
                <Row>
                  <h4>Compare Psalms</h4>
                </Row>
                <Row>
                  <Col>
                    <PsButton key='pageChange' id='psalmsCompare' changePage={this.changePage}>Psalms Comparison Chart</ PsButton>    
                  </Col>
                  <Col>
                    <p>Compare two Psalms.</p>
                    <Form>
                      <FormGroup row>
                        <Col sm={5} align='center'>
                          <Label for='psalm1'>Psalm #1</Label>
                          <Input type='number' name='psalm1' id='psalm1' placeholder='44' />
                        </Col>
                        <Col sm={5} align='center'>
                          <Label for='psalm1'>Psalm #2</Label>
                          <Input type='number' name='psalm2' id='psalm2' placeholder='131' />
                        </Col>
                      </FormGroup>
                      <button type='submit' className='btn btn-primary' onClick={this.submitForm}>Compare these two</button>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    )    
  }
};

export default PsalmsLanding;
