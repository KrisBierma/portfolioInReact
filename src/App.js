import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PsalmsLanding from './pages/PsalmsLanding';
import Portfolio from './pages/Portfolio';
import IndividualPsalm from './pages/IndividualPsalm';
import PsalmsComparison from './pages/PsalmsComparison';
import psalmsFAQ from './pages/PsalmsFAQ';
// do i need switch rom react router?
class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        {/* <div> */}
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/psalms' component={PsalmsLanding} />
        <Route exact path='/psalmsCompare' component={PsalmsComparison} />
        <Route exact path='/psalm/:psalmId' component={IndividualPsalm} /> 
        <Route exact path='/psalmsFAQ' component={psalmsFAQ} />
        <Route path='*' component={Portfolio} />
        {/* <Route exact path='/psalm/:psalmId' render={(props) => (    <IndividualPsalm {...props} />)} /> */}
        {/* <Route path='*' component={Portfolio} /> */}
        {/* <Redirect path */}
      {/* </div> */}
      </Switch>      
      </Router>
    )
  }
}

export default App;
