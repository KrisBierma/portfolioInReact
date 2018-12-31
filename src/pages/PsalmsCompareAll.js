import React, { Component } from 'react';
import { Container } from 'reactstrap';
import firebase from '../components/Firebase/firebase';
import Footer from '../components/Footer';
import PsHeader from '../components/PsHeader';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { Redirect } from 'react-router-dom';

class PsalmsCompareAll extends Component {
  constructor(props){
    super(props);
      this.state = {
        everything:[],
        columns:[],
        data:[],
        changePage:false,
        chapterNum:''
      }
    this.renderTable=this.renderTable.bind(this);
    this.changeToSpecificPsalm=this.changeToSpecificPsalm.bind(this);
  }

  componentDidMount(){
    this.renderTable();
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
          {Header: 'Chapter', accessor:'chapter', minWidth:65, maxWidth:75, id: 'row'},
          {Header: 'Book', accessor:'book', minWidth:65, maxWidth:75},
          {Header: 'Author', accessor:'author'},
          {Header: 'First Verse', accessor:'firstV', minWidth:150,
            style:{
              width: "100%",
              height: "100%",
              whiteSpace: 'normal'
          }},
          {Header: 'Topics', accessor:'topics', style:{whiteSpace: 'normal'}},
          {Header: 'Headings', accessor:'headings', style:{whiteSpace:
          'normal'}}      
        ]
      })
    });
  }
// make frozen true for top header row


  changeToSpecificPsalm() {
    console.log('hi')
  }

  render(){
    // console.log(this.state.everything)
    // console.log(this.state.columns)
    // console.log(this.state.changePage)
    if (this.state.changePage) {
      return <Redirect to={`/psalm/${this.state.chapterNum}`} />
    }

    return(
      <Container>
        <PsHeader heading='Compare All' />
        <ReactTable 
          data={this.state.everything} 
          columns={this.state.columns} 
          showPagination={false} 
          minRows={0} 
          isExpanded={true} 
          className='-highlight -striped'
          getTableProps={(state,rowInfo, column, instance, row, indexKey) => {
            return {
              // onScroll: e => {
              //   if (this.tableScrollTop === e.target.scrollTop) {
              //     let left = e.target.scrollLeft > 0 ? e.target.scrollLeft : 0;
              //     // $(".ReactTable .rt-tr .frozen").css({ left: left });
              //   } else {
              //     this.tableScrollTop = e.target.scrollTop;
              //   }
              // }
            };
          }}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e) => {
                // console.log(instance);
                console.log(rowInfo.original.chapter)
                // console.log(column)
                const chapterNum = rowInfo.original.chapter;
                this.setState({chapterNum:chapterNum, changePage:true})
              }
            }
          }}
          />
        <Footer></Footer>
      </Container>
    )
  }
};

export default PsalmsCompareAll;
