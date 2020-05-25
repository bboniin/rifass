import React, { Component } from 'react';
import './../App.css';

class Header extends Component{
  render(){
    return(
    <div class="header">
        <div class="logo">
            <img src={ require('./../../src/logo.jpeg')} style={{width: '100%', height: 100}}/>
        </div>
        <div class="viewrotas">
             <a class="rotas" href="/">INICIO</a>
             <a class="rotas" href="/sorteios">SORTEIOS</a>
             <a class="rotas" href="/pagamentos">COMO PAGAR?</a> 
             <a class="rotas" href="/contato">FALE CONOSCO</a>
       </div>
    </div>
    )
  };
}

export default Header;
