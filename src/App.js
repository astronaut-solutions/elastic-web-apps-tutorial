import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Store from './components/Store';
import MainLayout from './components/MainLayout';

class App extends Component {
  render() {
    return (
      <Provider store={new Store()}>
        <Router>
          <Route component={MainLayout} />
        </Router>
      </Provider>
    );
  }
}

export default App;
