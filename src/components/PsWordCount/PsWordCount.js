// gets array of words from PsChap.js to put into table
import React from 'react';
import { Col } from 'reactstrap';

const PsWordCount = (props) => (

      <Col>
          <table className='wordTable'>
            <thead>
              <tr>
                <th>Word</th>
                <th>Count</th>
              </tr>
            </thead>

            <tbody>
              {this.state.freq.map((row, i) => (
              <tr key={`${row.wordle}.${i}`}>
                <td>{row.wordle}</td>
                <td>{row.value}</td>
              </tr>
              ))
              }               
            </tbody>
          </table>  
        </Col>

)

export default PsWordCount;
