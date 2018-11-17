import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import {PsButton} from '../components/PsButton';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Psalms.css';

class PsalmsLanding extends Component {

  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    let apiKey = 'fd8b3c5ed779240885a2d077adfdbd0fd6c3a25a';
    const passage = 'John 11';
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
      console.log(res.data.passages);
    });
  }

  changePage(id) {
    <Link to='/psalmsCompare' />
    console.log(id);
  }

  render() {
    const psalms = [];
    for (let i=1; i<151; i++) {
      psalms.push(i);
    };

    return(
      <div>
      <Container>
        <Row>
          <h1>PsalmsLanding</h1>
        </Row>
        <Row>
          <p>How cool would it be, I thought, to graph the words from a psalm. I wanted to know if a particular psalm was God-centric or self-centric, and an actual word count would help with that.</p>
        </Row>

        <PsButton key='pageChange' id='psalmsCompare' changePage={this.changePage}>Psalms Comparison Chart</ PsButton>
<ul>
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

        <Row>
            <Link to="/">← Back to Authors</Link>
        </Row>

      </Container>
      </div>    
    )    
  }
};

export default PsalmsLanding;
