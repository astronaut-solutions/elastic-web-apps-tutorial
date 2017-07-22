import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';

import MainLayout from './components/MainLayout';

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={MainLayout} />
      </Router>
    );
  }
}

export default App;
