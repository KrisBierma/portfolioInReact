import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

class IndividualPsalm extends Component {
  constructor(props){
    super(props);
    this.state = {
      psalmId: '',
      wholeChapeter: ''
    }
    this.getPsalm=this.getPsalm.bind(this);
  }
  componentDidMount() {
    this.setState({psalmId: this.props.match.params.psalmId});
    console.log(this.props.match.params.psalmId);
    // console.log(this);
    // console.log(this.state.psalmId);
    this.getPsalm();
  }

  getPsalm() {
    let apiKey = 'fd8b3c5ed779240885a2d077adfdbd0fd6c3a25a';
    const passage = `Psalm ${this.state.psalmId}`;
    const queryURL = 'https://api.esv.org/v3/passage/text/';
    const config = {
      headers: {
        'Authorization': apiKey
      },
      params : {
        'q': passage,
        'include-headings': false,
        'include-footnotes': false,
        'include-verse-numbers': false,
        'include-short-copyright': false,
        'include-passage-references': false
      }
    };

    axios.get(queryURL, config).then((res) =>{
      // console.log(res.data.passages);
      this.setState({wholeChapeter: res.data.passages});
    });
  }

  render() {
    return(
      <div>
        <Container>
          <Row>
            <h1>{`Psalm ${this.state.psalmId}`}</h1>
            <p>{this.state.wholeChapeter}</p>
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
