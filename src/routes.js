import React from 'react'
import { Switch, Route,} from 'react-router-dom';
import Contato from './pages/contato';
import Inicio from './pages/inicio';
import Sorteio from './pages/sorteio';
import Pagamentos from './pages/pagamentos';
import Sorteios from './pages/sorteios'
import AdmSorteio from './pages/admsorteio';
import CriarSorteio from './pages/criarsorteio'

const Routes = () =>{
    return(
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route path="/contato" component={Contato}/>
                <Route path="/admin/sorteio" component={AdmSorteio}/>
                <Route path="/pagamentos" component={Pagamentos}/>
                <Route path="/admin/criar-sorteio" component={CriarSorteio}/>
                <Route path="/sorteios" component={Sorteios}/>
                <Route path="/:id" component={Sorteio}/>
            </Switch>
    );
}

export default Routes;