import React, { Component } from 'react';
import Footer from '../components/Footer';
import { Container } from 'reactstrap';
import PsHeader from '../components/PsHeader';
// import ReactTable from "react-table";

class PsalmsCompareTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: []
    }
    this.renderTable=this.renderTable.bind(this);
  }

  componentDidMount() {
    this.renderTable();
  }

  // make chart wth 2 headings: topics, psalms
  renderTable() {
    this.setState({
      columns:[
        {Header: 'Topics', accessor: 'topics'},
        {Header: 'Psalms', accessor: 'psalms'}
      ]
    })
  }

  render() {
    return(
      <Container className='psalmContainer'>
        <PsHeader heading='Compare Topics'></PsHeader>
        <div className='compareTableDiv'>
          <p>Is it centered on God, his people, or is it an individual cry for help?</p>
          {/* insert chart */}
        </div>
        <Footer></Footer>        
      </Container>

    )
  }
}

export default PsalmsCompareTopic;