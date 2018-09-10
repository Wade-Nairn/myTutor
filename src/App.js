import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Main from './components/Main';

import './App.css';


class App extends Component {
  render() {
    return (
        <Provider store={store} >
          <Router>
            <div className="App">
              <Header />
              <Route path='/' component={Main} />
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
