import React, { Component } from 'react';
import './../App.css';

import firebase from './../services/firebase';

import Popup from 'reactjs-popup'

export default class Sorteio extends Component{

    constructor(props){
        super(props);
            this.state = {
                disponivel: 0,
                reservado: 0,
                pago: 0,
                selecionado: 0,
                nome: '',
                celular: ' ',
                meusnumeros: [],
                numerosselecionados: [],
                sorteio: { descricao: [], numeros: []},
            }
            this.handlerAtualizar = this.handlerAtualizar.bind(this)
            this.handlerConsultarNumero = this.handlerConsultarNumero.bind(this)
            this.handlerNumerosSelecionado = this.handlerNumerosSelecionado.bind(this)
        }

        async componentDidMount(){
            let id = this.props.match.params.id
            await firebase.database().ref('sorteios').child(id).on('value', (item)=>{
                let dados = item.val()
                this.setState({sorteio: dados})
            this.handlerAtualizar(dados)
              });
        }

        handlerAtualizar(dados){
            let state = this.state
            state.disponivel = 0;
            state.reservado = 0;
            state.pago = 0;
            state.selecionado = 0;
            dados.numeros.map((item, index)=>{
                if(item.status == "disponivel"){
                        state.disponivel++
                }else{
                    if(item.status == "reservado"){
                        state.reservado++
                    }else{
                        if(item.status == "selecionado"){
                            state.selecionado++
                        }else{
                        state.pago++
                    }
                }
            }
        })
            this.setState({dados})
        }

        handlerConsultarNumero(){
            let state = this.state
            state.meusnumeros = []
            state.sorteio.numeros.map((item, index)=>{
                if(item.telefone == state.celular){
                       state.meusnumeros.push({
                           index: index,
                           status: item.status
                       })
                }
            })
            this.setState({state})
        }

        handlerNumerosSelecionado(){
            let state = this.state
            state.numerosselecionados = []
            state.sorteio.numeros.map((item, index)=>{
                if(item.status == 'selecionado'){
                       state.numerosselecionados.push({
                           index: index,
                           status: item.status
                       })
                }
            })
            this.setState({state})
        }

        handlerConfirmar(){
            let id = this.props.match.params.id
            let state = this.state
            state.numerosselecionados.map((item)=>{
                firebase.database().ref('sorteios').child(id).child('numeros').child(item.index).set({
                    telefone: state.celular,
                    nome: state.nome,
                    status: 'reservado'
                })
            })
        }

    render(){

        let dados = this.state
        return(
            <div>
            <div class="container-sorteio">
                <div class="dados-sorteio" >
                    <img src={dados.sorteio.foto} style={{width: '100%', height: '100%', maxHeight: 300}}/>
                </div>
                <div class="dados-sorteio">
                    
                    <div class="titulo-sorteio" style={{marginTop: 0}}>
                    <h2 style={{marginTop: 0, marginBottom: 0}}>{dados.sorteio.nome}</h2>
                    </div>
                    <hr style={{width: '100%', height: 1, backgroundColor: '#FFF'}}/>
                    <div class="infos-sorteio">
                        <p class="data-sorteio">{dados.sorteio.descricao}</p>
                     </div>
                        
                    <br/>
                    <p class="data-sorteio">* Comprando uma centena por R$ {parseInt(dados.sorteio.valor).toFixed(2)}.
                    <br/>Você concorre a um {dados.sorteio.nome}.</p><br/>
                    <p class="data-sorteio"> Sorteio: {dados.sorteio.data}</p>
                </div>
                
                
                <hr style={{width: '100%', height: 1, opacity: 0.4}}/><div style={{display: 'flex', height: 'auto', width: '100%', justifyContent: 'center'}}>

                <Popup 
                        closeOnDocumentClick
                        class="botao-sorteio"
                        trigger={<button 
                            onClick={()=>{this.handlerNumerosSelecionado()}}
                            class="botao-sorteio" style={{backgroundColor: '#59BA41', minWidth: 120, borderRadius: 5, borderWidth: 0, width: '32%', height: 80, fontWeight: 'bold'}}>CONFIRMAR RESERVA</button>} 
                        modal
                        >
                        {close => (
                        <div style={{backgroundColor: "#252525", borderWidth: 0, margin: -6, padding: 50, display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p class="titulo-popup">
                                Concluir
                            </p>
                            <a class="titulo-popup" onClick={close}>
                            x
                            </a>   
                            </div>
                            <p class="titulo-popup">
                                Número(s) selecionado(s)
                            </p>
                            <div class="numeros-sorteio" style={{justifyContent: 'flex-start'}}>
                                {
                                    dados.numerosselecionados.map((item, index)=>{
                                        return(
                                            <div class="numero" style={{backgroundColor: '#EB9C4D'}}>
                                                {("000" + item.index).slice(-3)}
                                            </div>
                                        )
                                })
                            }
                            </div>
                            <p class="titulo-popup">
                                Valor: {"R$ " + (dados.numerosselecionados.length*dados.sorteio.valor).toFixed(2)}
                            </p>
                            <div>
                                <p style={{color: '#ddd', marginBottom: 40}}> Para concluir sua aposta, preencha os dados:</p>
                            </div>
                            <div class="info-telefone">
                                <p class="data-sorteio">NOME *</p>
                                <input value={this.state.nome} onChange={(text)=>this.setState({nome: text.target.value})}  style={{width: '100%', height: 18, fontSize: 17, padding: 10, marginTop: 10, marginBottom: 40,borderWidth: 0, backgroundColor: '#303030'}}/>
                            <br/>
                            </div>
                            <div class="info-telefone">
                                <p class="data-sorteio">CELULAR *</p>
                                <input value={this.state.celular} onChange={(text)=>this.setState({celular: text.target.value})}  style={{width: '100%', height: 18, fontSize: 17, padding: 10, marginTop: 10, marginBottom: 40,borderWidth: 0, backgroundColor: '#303030'}}/>
                            <br/>
                            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <div class="botaoredes" style={{ margin: 20}} onClick={()=>{
                                    if(this.state.celular != '' && this.state.nome != ''){
                                    this.handlerConfirmar()
                                    }
                                    close()
                                    }}>
                                    <p class="textobotao">CONFIRMAR</p>
                                </div>
                                <div class="botaoredes" style={{backgroundColor: '#C02942', margin: 8}} onClick={close}>
                                    
                                <p class="textobotao">FECHAR</p>
                                </div>
                               </div>       
                           </div>
                        </div>
                        )}
                    </Popup>
                </div>
                <div>
                    <div class="opcoes" style={{width: '100%', alignItems: 'center'}}>
                    <div class="botao-sorteio" style={{backgroundColor: '#555'}}>
                            <p>TODOS</p>
                        </div>
                        <div class="botao-sorteio" style={{backgroundColor: '#000'}}>
                             <p>Disponiveis: {dados.disponivel}</p>
                        </div>
                        <div class="botao-sorteio" style={{backgroundColor: '#EB9C4D'}}>
                             <p>Reservados: {dados.reservado}</p>
                        </div>
                        <div class="botao-sorteio" style={{backgroundColor: '#59BA41'}}>
                             <p>Pago: {dados.pago}</p>
                        </div>
                        <Popup 
                        closeOnDocumentClick
                        class="botao-sorteio"
                        trigger={<button class="botao-sorteio" style={{backgroundColor: '#C02942', borderWidth: 0}}>Meus Números</button>} 
                        modal
                        >
                        {close => (
                        <div style={{backgroundColor: "#252525", borderWidth: 0, margin: -6, padding: 50, display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p class="titulo-popup">
                                CONSULTAR RESERVAS
                            </p>
                            <a class="titulo-popup" onClick={close}>
                            x
                            </a>   
                            </div>
                            <div class="numeros-sorteio">
                                {
                                    dados.meusnumeros.map((item, index)=>{
                                        if(item.status == "disponivel"){
                                        return(
                                            <div class="numero" style={{backgroundColor: '#000000'}}>
                                                {("000" + item.index).slice(-3)}
                                            </div>
                                        )
                                        }else{
                                            if(item.status == "reservado"){
                                                return(
                                                    <div class="numero" style={{backgroundColor: '#EB9C4D'}}>
                                                        {("000" + item.index).slice(-3)}
                                                    </div>
                                                )
                                            }else{
                                                return(
                                                    <div class="numero" style={{backgroundColor: '#59BA41'}}>
                                                        {("000" + item.index).slice(-3)}
                                                    </div>
                                                )
                                                
                                            }
                                        }
                                    
                                })
                            }
                            </div>
                            <div class="info-telefone">
                                <p class="data-sorteio">CELULAR *</p>
                                <input value={this.state.celular} onChange={(text)=>this.setState({celular: text.target.value})}  style={{width: '100%', height: 18, fontSize: 17, padding: 10, marginTop: 10, marginBottom: 40,borderWidth: 0, backgroundColor: '#303030'}}/>
                            <br/>
                            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <div class="botaoredes" style={{ margin: 20}} onClick={()=>{this.handlerConsultarNumero()}}>
                                    <p class="textobotao">CONSULTAR</p>
                                </div>
                                <div class="botaoredes" style={{backgroundColor: '#C02942', margin: 8}} onClick={close}>
                                    
                                <p class="textobotao">FECHAR</p>
                                </div>
                               </div>       
                           </div>
                        </div>
                        )}
                    </Popup>
                    </div>
                    <div class="numeros-sorteio">
                        {
                            dados.sorteio.numeros.map((item, index)=>{
                                if(item.status == "disponivel"){
                                    return(
                                        <div class="numero" style={{backgroundColor: '#000000'}}
                                        onClick={()=>{
                                            let dados = this.state;
                                            dados.sorteio.numeros[index].status = 'selecionado';
                                            this.setState({dados});
                                            this.handlerNumerosSelecionado()
                                        }}>
                                            {("000" + index).slice(-3)}
                                        </div>
                                    )
                                }else{
                                    if(item.status == "reservado"){
                                    return(
                                            <div class="numero" style={{backgroundColor: '#EB9C4D'}}>
                                                {("000" + index).slice(-3)}
                                            </div>
                                        )
                                    }else{
                                        if(item.status == "selecionado"){
                                            return(
                                                <div class="numero" style={{backgroundColor: '#EB9C4D'}}>
                                                    {("000" + index).slice(-3)}
                                                </div>
                                            )
                                        }else{
                                        return(
                                            <div class="numero" style={{backgroundColor: '#59BA41'}}>
                                                {("000" + index).slice(-3)}
                                            </div>
                                        )
                                        }
                                    }
                                 }
                                
                               
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        );
    };
};