import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import {PsButton} from '../components/PsButton';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './Psalms.css';
import PsHeader from '../components/PsHeader';
import Footer from '../components/Footer';
import firebase from '../components/Firebase/firebase'; // delete later

class PsalmsLanding extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      book: '',
      firstVerse: '',
      headings: '',
      chapterNum: 0,
      summary: '',
      topic: '',
      psalm1: 1,
      psalm2: 2
    }
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  // comapre two forms submission button
  submitForm(e) {
    e.preventDefault();
    // get the two psalms and pass and switch to comparision page

    this.setState({
      psalm1: 1,
      psalm2: 2
    }) 
  }

  // after each keystroke, update state with value of form
  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    // get name from input box and value from user input
    this.setState({[name]: value});
  }

  // after submitting psalm info on form, push to db
  handleSubmit(event) {
    event.preventDefault();
    const db = firebase.database();
    db.ref().push({
      author: this.state.author, 
      book: this.state.book, 
      firstVerse: this.state.firstVerse, 
      headings: this.state.headings, 
      chapterNum: this.state.chapterNum, 
      summary: this.state.summary, 
      topic: this.state.topic
    });
    // reset form
    this.setState({
      author: '',
      book: '',
      firstVerse: '',
      headings: '',
      chapterNum: '',
      summary: '',
      topic: ''
    });
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
            {/* <Row>
              <h4>What is this site?</h4>
              <p>How cool would it be, I thought, to graph the words from a psalm. I wanted to know if a particular psalm was God-centric or self-centric, and I though an actual word count would help with that.</p>
            </Row> */}
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
                    <PsButton key='pageChange' id='psalmsCompare' value={this.state.author} changePage={this.changePage}>Psalms Comparison Chart</ PsButton>    
                  </Col>
                  <Col>
                    <p>Compare two Psalms.</p>
                    <Form>
                      <FormGroup row>
                        <Col sm={5} align='center'>
                          <Label for='psalm1'>Psalm #1</Label>
                          <Input type='number' name='psalm1' onChange={this.handleChange} placeholder='44' />
                        </Col>
                        <Col sm={5} align='center'>
                          <Label for='psalm2'>Psalm #2</Label>
                          <Input type='number' name='psalm2' onChange={this.handleChange} placeholder='131' />
                        </Col>
                      </FormGroup>
                      <button type='submit' className='btn btn-primary' onClick={this.submitForm}>Compare these two</button>
                    </Form>
                  </Col>
                </Row>

                {/* just for data entry */}
                <Row>
                  <Form onSubmit={this.handleSubmit}>
                    <Input type='string' name='author' value={this.state.author} onChange = {this.handleChange} placeholder='Author' />
                    <Input type='string' name='book' value={this.state.book} onChange = {this.handleChange} placeholder='Book' />
                    <Input type='string' name='firstVerse' value={this.state.firstVerse} onChange= {this.handleChange} placeholder='first verse' />
                    <Input type='string' name='headings' value={this.state.headings} onChange= {this.handleChange} placeholder='headings' />
                    <Input type='number' name='chapterNum' value={this.state.chapterNum} onChange= {this.handleChange} placeholder='chapter' />
                    <Input type='string' name='summary' value={this.state.summary} onChange= {this.handleChange} placeholder='summary' />
                    <Input type='string' name='topic' value={this.state.topic} onChange= {this.handleChange} placeholder='topic' />

                    <button type='submit' value='Submit'>Submit Data</button>
                  </Form>
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
