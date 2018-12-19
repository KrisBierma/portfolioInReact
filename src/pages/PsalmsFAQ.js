import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
// import {PsButton} from '../components/PsButton';
import { Link } from 'react-router-dom';
import './Psalms.css';
import PsHeader from '../components/PsHeader';
import Footer from '../components/Footer';

class PsalmsFaq extends Component {

  render() {
    return(
      <Container className='psalmContainer'>
        <PsHeader psalmId="FAQs" />
        <Row className='psalmsContent'>
          <Col>
            <Row>
              <h4>What is this site?</h4>
              <p>How cool would it be, I thought, to graph the words from a psalm. I wanted to know if a particular psalm was God-centric or self-centric, and I though an actual word count would help with that.</p>
            </Row>
            <Row>
              <h4>What translation are you using?</h4>
              <p>I like the English Standard Version (ESV) becuase it takes out any verse or other reference from the chapter and instead reads like a normal book of poetry. <Link className='psalmLink' to='https://www.esv.org/'>This</Link> is the website I used.</p>
            </Row>
            <Row>
              <h4>Another Question</h4>
              <p>Another answer.</p>
            </Row>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    )    
  }
};

export default PsalmsFaq;
