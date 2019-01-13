import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import {PsButton} from '../components/PsButton';
// import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
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
      chapterNum: '',
      summary: '',
      topic: '',
      wordCount: '',
      psalm1: '',
      psalm2: '',
      invalidMsg: '',
      changePage: false,
      changePage2: false
    }
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {

  }

  // comapre two forms submission button
  submitForm(e) {
    e.preventDefault();

    // check for validity
    if (this.state.psalm1 < 1 || this.state.psalm1 > 150 || this.state.psalm2 < 1 || this.state.psalm2 > 150) {
      this.setState({
        invalidMsg: 'Choose a psalm between 1 and 150.',
        psalm1: '',
        psalm2: ''
      })
    }
    else if (this.state.psalm1 === this.state.psalm2) {
      this.setState({
        invalidMsg: 'Choose two different psalms to compare.',
        psalm1: '',
        psalm2: ''
      })
    }
    // pass the requested psalms as props and switch to comparision page
    else {
      this.setState({changePage: true})
    }
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
    db.ref('psalms').push({
      author: this.state.author, 
      book: this.state.book, 
      firstVerse: this.state.firstVerse, 
      headings: this.state.headings, 
      chapterNum: this.state.chapterNum, 
      summary: this.state.summary, 
      topic: this.state.topic,
      wordCount: this.state.wordCount
    });
    // reset form
    this.setState({
      author: '',
      book: '',
      firstVerse: '',
      headings: '',
      chapterNum: '',
      summary: '',
      topic: '',
      wordCount: ''
    });
  }

  // change page to compare all psalms
  changePage() {
    this.setState({changePage2: true})
  }

  render() {
    const psalms = [];
    for (let i=1; i<151; i++) {
      psalms.push(i);
    };

    // console.log(this.props)

    // this.state.changePage compares 2 psalms; changePage2 compare all psalms
    if (this.state.changePage === true){
      return <Redirect to={`/psalmsCompare/${this.state.psalm1}&${this.state.psalm2}`} />
    }
    else if (this.state.changePage2){
      return <Redirect to = {`/psalmsCompareAll`} />
    }

    return(
      <Container className='psalmContainer'>
        <PsHeader psalmId="Comparisons" />
        <Row className='psalmsContent'>
          <Col>
            <Row>
              <h5>Click a Psalm to see the deets.</h5>
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
              {/* compare all psalms */}
              <Col>
                <Row>
                    <h5>Compare all the Psalms</h5>
                </Row>
                <Row>
                  <PsButton id='psalmsCompare' value={this.state.author} changePage={this.changePage}>Compare All the Psalms</ PsButton>    
                  {/* <button className='btn btn-primary' onClick={this.submitForm}>Compare these two</button> */}

                </Row>
              </Col>
              {/* compare two psalms */}
              <Col>
                <Row>
                  <p>Compare two Psalms.</p>
                </Row>
                <Row>
                  <Form>
                    <FormGroup row>
                      <Col sm={5} align='center'>
                        <Label for='psalm1'>Psalm #1</Label>
                        <Input type='number' name='psalm1' value={this.state.psalm1} onChange={this.handleChange} placeholder='44' />
                      </Col>
                      <Col sm={5} align='center'>
                        <Label for='psalm2'>Psalm #2</Label>
                        <Input type='number' name='psalm2' value={this.state.psalm2} onChange={this.handleChange} placeholder='131' title='A psalm between 1 and 150' />
                      </Col>
                    </FormGroup>
                    <p id='invalidMsg'>{this.state.invalidMsg}</p>
                    <button type='submit' className='btn btn-primary' onClick={this.submitForm}>Compare these two</button>
                  </Form>
                </Row>
              </Col>
              {/* fern image */}
              <img classname='fern' alt='fern' src={require('../assets/images/fern.png')}></img>
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
                    <Input type='number' name='wordCount' value={this.state.wordCount} onChange= {this.handleChange} placeholder='word count' />

                    <button type='submit' value='Submit'>Submit Data</button>
                  </Form>
                </Row>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    )    
  }
};

export default PsalmsLanding;
