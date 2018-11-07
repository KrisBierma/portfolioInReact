import React, {Component} from 'react';
import {Container, Row, ButtonGroup} from "reactstrap";
import PsButton from '../components/PsButton';

class PsalmsLanding extends Component {

  // changePage = () => {
  //   console.log('change page')
  // }

  render() {
    return(
      <div>
      <Container>
        <Row>
          <h1>PsalmsLanding</h1>
        </Row>
        <Row>
          <p>How cool would it be, I thought, to graph the words from a psalm. I wanted to know if a particular psalm was God-centric or self-centric, and an actual word count would help with that.</p>
        </Row>

        <PsButton changePage={this.changePage} id='pageChange'>Psalms Comparioson Chart</ PsButton>

      </Container>
      </div>    
    )    
  }
};

export default PsalmsLanding;
