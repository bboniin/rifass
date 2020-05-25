import React, { Component } from 'react';
import './../App.css';

import firebase from './../services/firebase'
import Popup from 'reactjs-popup'

export default class AdmSorteio extends Component{

    constructor(props){
        super(props);
            this.state = {
                sorteio: {
                    nome: 'Moto Honda',
                    descricao: "dasdas\nfdasfasdfsdaffasdf\n",
                    pagamento: "rifa de 20 reais e tals",
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
                },
            
            }
            
        }

        componentDidMount(){
             let rota = firebase.database().ref('sorteios')
             rota.on('value', (item)=>{
                let dados = item.val()
                this.setState({nome: dados.nome})
              });
        }

    render(){

        let dados = this.state
        return(
            <div>
            <div class="container-sorteio" style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            
                <div class="dados-sorteio">
                    <img src="https://www.rifasdovale.com.br/images/sorteios/lander-250cc-20200508/rifasdovale_1588892584.jpg" style={{width: '100%', height: '80%'}}></img>
                    <div  style={{margin: '3%'}}>
                        <p class="data-sorteio">Foto do Sorteio</p>
                        <input type="file"  style={{marginTop: 10}}/>
                    </div>
                </div>
                <div class="dados-sorteio">
                    
                    <div class="titulo-sorteio">
                     <p class="data-sorteio">Titulo do Sorteio</p>
                    <textarea value={this.state.nome} onChange={(text)=>this.setState({nome: text.target.value})}  style={{width: '100%', height: 25, fontSize: 20, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
                    </div>
                    <hr/>
                <div class="infos-sorteio">
               
                <p class="data-sorteio">Descrição</p>
                <textarea value={this.state.nome} onChange={(text)=>this.setState({nome: text.target.value})}  style={{width: '100%', height: 80, fontSize: 17, padding: 10, marginTop: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
     <br/>
                <p class="data-sorteio">Detalhes do Pagamento</p>
                <textarea value={this.state.nome} onChange={(text)=>this.setState({nome: text.target.value})}  style={{width: '100%', height: 25, fontSize: 17, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
    <br/>
                <p class="data-sorteio">Data do Sorteio</p>
    <textarea value={this.state.nome} onChange={(text)=>this.setState({nome: text.target.value})}  style={{width: '100%', height: 25, fontSize: 17, padding: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
                </div>
                </div>
                <hr style={{width: '100%', height: 1, opacity: 0.4}}/>
                <div>
                    <div class="opcoes" style={{width: '100%', alignItems: 'center'}}>
                       <a> <div class="botao-sorteio" style={{backgroundColor: '#555'}}>
                            <p>TODOS</p>
                        </div>
                           </a>
                        <div class="botao-sorteio" style={{backgroundColor: '#000'}}>
                             <p>Disponiveis: 0</p>
                        </div>
                        <div class="botao-sorteio" style={{backgroundColor: '#EB9C4D'}}>
                             <p>Reservados: 0</p>
                        </div>
                        <div class="botao-sorteio" style={{backgroundColor: '#59BA41'}}>
                             <p>Pago: 0</p>
                        </div>
                        <Popup trigger={<button class="botao-sorteio" style={{backgroundColor: '#C02942', borderWidth: 0}}>Meus Números</button>} modal>
    {close => (
      <div style={{backgroundColor: "#252525", borderWidth: 0, padding: 0}}>
        <a className="close" onClick={close}>
          Close
        </a>
        <div className="header">CONSULTAR RESERVAS</div>
        <div className="actions">
              <div>
                   <p class="data-sorteio">Descrição</p>
                <input value={this.state.nome} onChange={(text)=>this.setState({nome: text.target.value})}  style={{width: '90%', height: 'auto', fontSize: 17, padding: 10, marginTop: 10, marginTop: 10, backgroundColor: '#b8b8b8'}}/>
            <br/>
              </div>
          <button
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
                    </div>
                    <div class="numeros-sorteio">
                        {
                            dados.sorteio.numeros.map(function(item, index){
                                return(
                                    <div title={`Número: ${("0000" + index).slice(-3)}\nPertence: José Bonifacio`} class="numero" onClick={()=>{alert(("0000" + index).slice(-3))}}>
                                        {("0000" + index).slice(-3)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        );
    };
};