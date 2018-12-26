import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PsalmsLanding from './pages/PsalmsLanding';
import Portfolio from './pages/Portfolio';
import IndividualPsalm from './pages/IndividualPsalm';
import PsalmsComparison from './pages/PsalmsComparison';
import psalmsFAQ from './pages/PsalmsFAQ';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route exact path='/psalms' component={PsalmsLanding} />
          <Route exact path='/psalmsCompare/:psalmId' component={PsalmsComparison} />
          <Route exact path='/psalm/:chapterNum' component={IndividualPsalm} /> 
          <Route exact path='/psalmsFAQ' component={psalmsFAQ} />
          <Route path='*' component={Portfolio} />
          {/* <Redirect path */}
        </Switch>      
      </BrowserRouter>
    )
  }
}

export default App;
