import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';

class IndividualPsalm extends Component {
  render() {
    return(
      <div>
        <Container>
          <Row>
            <h1>Psalm 1</h1>
          </Row>
          <Row>
            <Link to='/psalms'>Return to Psalms Home</Link>
          </Row>
        </Container>
      </div>
    )  
  }
}

export default IndividualPsalm;
