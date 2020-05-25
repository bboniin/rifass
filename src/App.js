import React, { Component } from 'react';
import './App.css';
import Contato from './pages/contato';
import Header from './pages/header';
import Footer from './pages/footer';

class App extends Component{
  render(){
    return(
    <div style={{flex: 1}}>
    <header>
      <Header/>
    </header>
       <Contato/>
    <footer>
       <Footer/>
    </footer>

    </div>

    )
  };
}

export default App;
