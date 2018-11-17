import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PsalmsLanding from './pages/PsalmsLanding';
import Portfolio from './pages/Portfolio';
import IndividualPsalm from './pages/IndividualPsalm';
import PsalmsComparison from './pages/PsalmsComparison';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/psalms' component={PsalmsLanding} />
        <Route exact path='/psalmsCompare' component={PsalmsComparison} />
        <Route exact path='/psalm/:psalmId' component={IndividualPsalm} /> 
        {/* <Route exact path='/psalm/:psalmId' render={(props) => (    <IndividualPsalm {...props} />)} /> */}
        {/* <Route path='*' component={Portfolio} /> */}
      </div>
      </Router>      
    )
  }
}

export default App;
