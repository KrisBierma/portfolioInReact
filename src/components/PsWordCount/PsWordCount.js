// gets array of words from sibling component PsChap.js (via parent individualPsalm's state) to put into table
import React from 'react';

const PsWordCount = (props) => (
  <table className='wordTable'>
    <thead>
      <tr>
        <th>Word</th>
        <th>Count</th>
      </tr>
    </thead>

    <tbody>
      {props.freq.map((row, i) => (
      <tr key={`${row.wordle}.${i}`}>
        <td>{row.wordle}</td>
        <td>{row.value}</td>
      </tr>
      ))
      }               
    </tbody>
  </table>  
)

export default PsWordCount;
