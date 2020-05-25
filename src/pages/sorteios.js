import React, { Component } from 'react';
import './../App.css';

import firebase from './../services/firebase'

export default class Sorteios extends Component{

    constructor(props){
        super(props);
            this.state = {
                sorteios: [],
                exibirsorteios: []
            }
        }

        componentDidMount(){
            firebase.database().ref('sorteios').on('value', (item)=>{
                var sorteios = []
              item.forEach((valor)=>{
                  sorteios.push({
                      nome: valor.val().nome,
                      foto: valor.val().foto,
                      status: valor.val().status,
                      data: valor.val().data,
                      id: valor.val().id
                  })
              })
                this.setState({sorteios, exibirsorteios: sorteios})
              });
             
        }

    render(){

        let dados = this.state

        return(
            <div>
            <div class="container-sorteio" style={{justifyContent: 'flex-start'}}>
            <div class="opcoes" style={{width: '100%', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <div class="botao-sorteio" style={{backgroundColor: '#555'}}>
                            <p>TODOS</p>
                        </div>
                        <div class="botao-sorteio" style={{backgroundColor: '#555'}}>
                             <p>ABERTOS</p>
                        </div>
                        <div class="botao-sorteio" style={{backgroundColor: '#555'}}>
                             <p>ENCERRADOS</p>
                        </div>
                        <div class="botao-sorteio" style={{backgroundColor: '#555'}}>
                             <p>EM BREVE</p>
                        </div>
                </div>
                <div class="containersorteio">
                {
                    dados.exibirsorteios.map((item)=>{
                        return(
                            <div class="sorteio" onClick={()=>window.location=`/${item.id}`}>
                        <img class="mini-imagem"src={item.foto}/>
                        <h3 class="nome-sorteio">{item.nome}</h3>
                        <p class="data-sorteio">Sorteio dia {item.data}</p>
                        <div class="botao-sorteios">
                             <p class="textobotao">COMPRAR RIFA</p>
                        </div>
                    
                    </div>
                        )
                    })
                }
                <div class="sorteio" style={{justifyContent: 'center', alignItems: 'center'}} onClick={()=>window.location=`/admin/criar-sorteio`}>
                    <img src="https://image.flaticon.com/icons/svg/1665/1665578.svg" style={{width: '30%', height: '30%', marginBottom: 10}}/> 
                     <p class="data-sorteio">CRIAR SORTEIO</p>
                </div>
                  
                </div>
                
            </div>
        </div>
        );
    };
};