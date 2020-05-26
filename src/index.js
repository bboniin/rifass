import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Footer from './pages/footer';
import Routes from './routes';
import Header from './pages/header';

import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <Routes/>
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
