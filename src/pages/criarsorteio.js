import React, { Component } from 'react';
import './../App.css';

import firebase from './../services/firebase';
import Popup from 'reactjs-popup'

export default class CriarSorteio extends Component{

    constructor(props){
        super(props);
            this.state = {
                    nome: 'Moto Honda',
                    quantidade: '100',
                    id: 'toyota',
                    descricao: "dasdas\nfdasfasdfsdaffasdf\n",
                    valor: "40",
                    data: "vai sere aesse dia",
                    foto:  "https://www.rifasdovale.com.br/images/sorteios/lander-250cc-20200508/rifasdovale_1588892584.jp",
                    numeros: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},]
                        
            }
    }

        handlerCriarSorteio(){
            let dados = this.state
            firebase.database().ref('sorteios').child(dados.id).set({
                nome: dados.nome,
                id: dados.id,
                foto: dados.foto,
                descricao: dados.descricao,
                valor: dados.valor,
                data: dados.data,
                numeros: dados.quantidade,
            })
        }

    render(){

        let dados = this.state
        return(
            <div>
            <div class="container-sorteio" style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
            
                <div class="dados-sorteio">
                    
                    <div class="titulo-sorteio">
                     <p class="data-sorteio">Titulo do Sorteio</p>
                    <input  type="text" value={this.state.nome} onChange={(text)=>this.setState({nome: text.target.value})}  style={{width: '100%', height: 12, fontSize: 20, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
                    </div>
                    <hr style={{width: '100%', height: 1, opacity: 0.4}}/>
                <div class="infos-sorteio">
               
                <p class="data-sorteio">Descrição</p>
                <textarea value={this.state.descricao} onChange={(text)=>this.setState({descricao: text.target.value})}  style={{width: '100%', height: 80, fontSize: 17, padding: 10, marginTop: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
     <br/>
                <p class="data-sorteio">Valor</p>
                <input type="number" value={this.state.valor} onChange={(text)=>this.setState({valor: text.target.value})}  style={{width: '100%', height: 12, fontSize: 17, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
    <br/>
                <p class="data-sorteio">Data do Sorteio</p>
                <input type="date" value={this.state.data} onChange={(text)=>this.setState({data: text.target.value})}  style={{width: '100%', height: 12, fontSize: 17, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
    <br/>
                <p class="data-sorteio">Quantidade</p>
                <input  type="number" value={this.state.quantidade} onChange={(text)=>this.setState({quantidade: text.target.value})}  style={{width: '100%', height: 12, fontSize: 17, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
   </div>
                </div>

                
                <div class="dados-sorteio">
                    <img src="https://www.rifasdovale.com.br/images/sorteios/lander-250cc-20200508/rifasdovale_1588892584.jpg" style={{width: '100%', height: '50%'}}></img>
                    <div  style={{margin: '3% 4% 3% 0'}}>
                    <br/>
                <p class="data-sorteio">Foto</p>
                <input placeholder="url da foto"value={this.state.foto} onChange={(text)=>this.setState({foto: text.target.value})}  style={{width: '100%', height: 12, fontSize: 17, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
    <br/> <br/>
                <p class="data-sorteio">URL</p>
                <input placeholder="/sorteio/nome-do-sorteio" value={this.state.id} onChange={(text)=>this.setState({id: text.target.value})}  style={{width: '100%', height: 12, fontSize: 17, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
    <br/>
                    </div>
                </div>

                
                <div class="botaoredes"
                onClick={()=>{
                    var number = []
                    for(let i = 0; i<parseInt(dados.quantidade); i++){
                        number.push({
                            nome: '',
                            telefone: '',
                            status: 'disponivel',
                        })
                    }
                    firebase.database().ref('sorteios').child(dados.id).set({
                        status: 'aberto',
                        nome: dados.nome,
                        foto: dados.foto,
                        valor: dados.valor,
                        data: dados.data,
                        descricao: dados.descricao,
                        numeros: number
                    })
                }}>
                    <p class="textobotao">CRIAR SORTEIO</p>
                </div>

                
                <hr style={{width: '100%', height: 1, opacity: 0.4}}/>
               
            </div>
            
        </div>
        );
    };
};