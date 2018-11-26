import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './PsHeader.css';

const PsHeader = (props) => (
  <Container>
     <Row>
      <Col>
        <h1>{`Psalm ${props.psalmId}`}</h1>
      </Col>
      <Col>
        <Link to='/psalms'>Return to Psalms Home</Link>
      </Col>
     </Row>
   </Container>
);

export default PsHeader;
