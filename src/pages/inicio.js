import React, { Component } from 'react';
import { Zoom } from 'react-slideshow-image'
import './../App.css';

import firebase from './../services/firebase'

        

export default class Inicio extends Component{
    
    constructor(props){
        super(props);
            this.state = {
                exibirsorteios: [],
                fotos: [{
                    imagem: 'https://www.rifasdovale.com.br/images/slider/rifasdovale_1590158556.jpg'
                },
                {
                    imagem: 'https://www.rifasdovale.com.br/images/slider/rifasdovale_1589880854.jpg'
                },
                {
                    imagem: 'https://www.rifasdovale.com.br/images/slider/rifasdovale_1587478263.jpg'
                }]
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
                this.setState({exibirsorteios: sorteios})
              });
             
        }  

    render(){

        const zoomOutProperties = {
            duration: 1000,
            transitionDuration: 5000,
            infinite: true,
            indicators: false,
            scale: 1.1,
            arrows: false,
            style: {
                width: '100%',
                marginTop: 20,
                marginBottom: 50
            }
          }

        return(
            <div class="container" style={{margin: 0, height: 'auto'}}>
               <Zoom {...zoomOutProperties}>
        {
            this.state.fotos.map((item)=>{
                return(
                    <div class="slider">
                    
                        <img src={item.imagem} />
                    
                    </div>
                )
            })
        }
      </Zoom>
      
      <p class="titulofale">Quem somos</p>
                <p class="titulofale" style={{fontSize: 16, textAlign: 'center', width: '50%', lineHeight: 2}}>Rifas do Litoral é um Pagamento Único, da Modalidade Filantropia Premiável regulamentada na  Lei Federal n. 13.019/14 art. 84 b , 84 c. Adquirindo nossas rifas você estará contribuindo com instituições de caridade da nossa região da baixada santista.</p>
                
                <p class="titulofale">Sorteios</p>
                <div style={{display: 'flex', flexDirection: 'row', overflow: 'auto', width: '100%'}}>
                {
                    this.state.exibirsorteios.map((item)=>{
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
                } {
                    this.state.exibirsorteios.map((item)=>{
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
                 {
                    this.state.exibirsorteios.map((item)=>{
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
                </div>
            </div>
        );
    };
};