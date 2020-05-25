import React, { Component } from 'react';
import './../App.css';


export default class Pagamentos extends Component{

    constructor(props){
        super(props);
            this.state = {
                pagamentos: [{
                    imagem: 'https://www.rifasdovale.com.br/images/bancos/1.jpg', texto: "Banco do Brasil - 1\nTitular: Antônio G lins\nCPF: 287.916.304-87\nAgência: 5749-5\nConta: 32190\nTipo: Conta Corrente"
                },
                {
                    imagem: 'https://www.rifasdovale.com.br/images/bancos/34.jpg', texto: "Banco do Brasil - 1\nTitular: Antônio G lins\nCPF: 287.916.304-87\nAgência: 5749-5\nConta: 32190\nTipo: Conta Corrente"
                },
                {
                    imagem: 'https://www.rifasdovale.com.br/images/bancos/260.jpg', texto: "Banco do Brasil - 1\nTitular: Antônio G lins\nCPF: 287.916.304-87\nAgência: 5749-5\nConta: 32190\nTipo: Conta Corrente"
                },
                {
                    imagem: 'https://www.rifasdovale.com.br/images/bancos/26.jpg', texto: "Banco do Brasil - 1\nTitular: Antônio G lins\nCPF: 287.916.304-87\nAgência: 5749-5\nConta: 32190\nTipo: Conta Corrente"
                },
                {
                    imagem: 'https://www.rifasdovale.com.br/images/bancos/33.jpg', texto: "Banco do Brasil - 1\nTitular: Antônio G lins\nCPF: 287.916.304-87\nAgência: 5749-5\nConta: 32190\nTipo: Conta Corrente"
                },
                {
                    imagem: 'https://www.rifasdovale.com.br/images/bancos/mercadopago.jpg', texto: "Banco do Brasil - 1\nTitular: Antônio G lins\nCPF: 287.916.304-87\nAgência: 5749-5\nConta: 32190\nTipo: Conta Corrente"
                },
                {
                    imagem: 'https://www.rifasdovale.com.br/images/bancos/1.jpg', texto: "Banco do Brasil - 1\nTitular: Antônio G lins\nCPF: 287.916.304-87\nAgência: 5749-5\nConta: 32190\nTipo: Conta Corrente"
                }]
            }
    }

    render(){
        return(
        <div>
            <div class="divtitulo">
                <h1 style={{textAlign: "center"}}>DADOS PARA PAGAMENTO VIA TRANSFERÊNCIA</h1>
            </div>
            <div class="containerpg">
                <div class="divsubtitulo">
                    <h3>* Para realizar seu pagamento você deve efetivar transferência para uma de nossas contas.</h3>
                </div>
                <hr style={{width: '100%', height: 1, backgroundColor: '#FFF'}}/>
                 <div class="pagamentos">
                {
                    this.state.pagamentos.map((item)=>{
                        return(
                            <div style={{display: 'flex', margin: 5, marginTop: 20, flexDirection: 'column',width: '14%', height: 'auto', whiteSpace: 'normal', alignItems: 'center',justifyContent: 'center'}}>
                                 <img src={item.imagem} style={{width: '90%', height: 100, maxHeight: 300}}/>
                                
                                 <p style={{textAlign: 'center', width: '90%', color: '#fff', lineHeight: 2}}>{item.texto}</p>

                            </div>
                        )
                    })
                }
            </div>
            </div>
           
        </div>
        );
    };
};