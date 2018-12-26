import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './PsHeader.css';

const PsHeader = (props) => (
  <div>
     <Row className='psHeader fixedTop'>
      <Col>
        <h1>{`Psalm ${props.chapterNum}`}</h1>
      </Col>
      <Col>
      <Row>
        <ul className='psList'>
          <li><Link to='/psalms'>Return to Psalms Home</Link></li>
          <li><Link to='/PsalmsFAQ'>FAQs</Link></li>
          <li><Link to="/">Kris's Portfolio</Link></li>
        </ul>
        </Row>
      </Col>
     </Row>
   </div>
);

export default PsHeader;
