import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route path='*' component={Portfolio} />
        </Switch>      
      </BrowserRouter>
    )
  }
}

export default App;
