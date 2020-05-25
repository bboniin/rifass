import React, { Component } from 'react';
import './../App.css';

class Footer extends Component{
  render(){
    return(
    <div class="footer">
        <div class="banner">
            <h2 class="titulofooter">ESCOLHA O SORTEIO</h2>
            <p class="textofooter"> 
            Escolha o prêmio que gostaria de concorrer, verifique a descrição, regulamento do sorteio e fotos em caso de dúvidas entre em contato com o administrador
            </p>
        </div>
        
        <div class="banner">
            <h2 class="titulofooter">SELECIONE SEUS NÚMEROS</h2>
            <p class="textofooter">{} 
            Você pode escolher quantos números desejar!
            <br/>
            Mais números, mais chances de ganhar
            </p>
        </div>
        
        <div class="banner">
            <h2 class="titulofooter">FAÇA O PAGAMENTO</h2>
            <p class="textofooter"> 
            Faça o pagamento em umas das contas exibidas.<br/>
            Envie o comprovante ao administrador via whatsapp.
            </p>
        </div>
        
        <div class="banner">
            <h2 class="titulofooter">AGUARDE O SORTEIO</h2>
            <p class="textofooter"> 
            Aguarde o sorteio pela Loteria Federal
            <br/>
            Cruze os dedos
            <br/>
            Você pode ser o próximo sorteado
            </p>
        </div>
    </div>
    )
  };
}

export default Footer;
