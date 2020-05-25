import React, { Component } from 'react';
import './../App.css';


export default class Contato extends Component{
    render(){
        return(
            <div class="container">
                <p class="titulofale">Olá, olha como é fácil entrar em contato conosco...</p>
                <p class="titulofale" style={{fontSize: 14}}>Logo a baixo iremos disponibilizar alguns botões com links para os nossos contatos referente a cada sorteio é só clicar no botão.</p>
                <div class="botaoredes">
                    <p class="textobotao">GRUPO DO WHATSAPP</p>
                </div>
                <hr style={{width: '80%', opacity: 0.4}}/>
                <div class="botaoredes" style={{backgroundColor: '#C02942'}}>
                    
                <p class="textobotao">NOSSO INSTAGRAM</p>
                </div>
            </div>
        );
    };
};