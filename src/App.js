import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Stories from './components/Stories';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Stories} />
          <Route exact path='/new' component={Stories} />
          <Route exact path='/show' component={Stories} />
          <Route exact path='/ask' component={Stories} />
          <Route exact path='/jobs' component={Stories} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
