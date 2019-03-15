import React, { Component } from 'react';
import logo from 'logo.svg';
import 'App.scoped.scss';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header/>
          <Main/>
          <Footer/>

      </div>
    );
  }
}

export default App;
