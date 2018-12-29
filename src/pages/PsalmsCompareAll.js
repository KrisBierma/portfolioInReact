import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import firebase from '../components/Firebase/firebase';
import Footer from '../components/Footer';
import PsHeader from '../components/PsHeader';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class PsalmsCompareAll extends Component {
  constructor(props){
    super(props);
      this.state = {
        everything:[],
        columns:[],
        data:[]
      }
    this.renderTable=this.renderTable.bind(this);
    this.orderBy=this.orderBy.bind(this);
  }

  componentDidMount(){
    this.renderTable();
  }

  // this orders the table by certain rows' data when that table heading is clicked
  orderBy() {
    console.log('hi')
  }

  // get all data from firebase db, input to table
  renderTable() {
    let that = this; // 'this' doesn't work inside functions
    const db = firebase.database();

    db.ref().on('value', function(s){
      // console.log(s.val()); // gives everything
      // that.setState({everything: s.val()});

      // console.log(that.state.everything)
      s.forEach(function(childsnap){
        // console.log(childsnap.key)
        // console.log(childsnap.val())
        const c = childsnap.val();

        // save data from db one chapter at a time
        let data = {
          chapter: c.chapterNum,
          book: c.book,
          author: c.author,
          firstV: c.firstVerse,
          topics: c.topic,
          headings: c.headings
        };

        // push the data into the array of all chapters
        let x = that.state.everything;
        x.push(data);
        that.setState({everything: x});
      })

      // set the columns names inside this func (outside and the rows don't populate correctly)
      that.setState({
        columns:[
          {Header: 'Chapter', accessor:'chapter'},
          {Header: 'Book', accessor:'book'},
          {Header: 'Author', accessor:'author'},
          {Header: 'First Verse', accessor:'firstV'},
          {Header: 'Topics', accessor:'topics'},
          {Header: 'Headings', accessor:'headings'}
        ]
      })
    });
  }

  render(){
    console.log(this.state.everything)
    console.log(this.state.columns)
    console.log(this.state.data)
    return(
      <Container>
        <PsHeader heading='Compare All' />
        <ReactTable data={this.state.everything} columns={this.state.columns} showPagination={false} minRows={0}/>
        {/* <table>
          <thead>
            <tr>
              <th>Chapter</th>
              <th>Book</th>
              <th>Author</th>
              <th onClick={this.orderBy()}>First Verse</th>
              <th>Topic</th>
              <th>Headings</th>
            </tr>
          </thead>
          <tbody>
            {this.state.everything.map(psalm => (
              <tr>
                <td>{psalm.id}</td>
                <td>{psalm.book}</td>
                <td>{psalm.author}</td>
                <td>{psalm.firstV}</td>
                <td>{psalm.topic}</td>
                <td>{psalm.headings}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <Footer></Footer>
      </Container>
    )
  }
};

export default PsalmsCompareAll;
