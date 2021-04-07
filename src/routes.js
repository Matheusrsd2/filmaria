import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/index'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'

const Routes = () => {
    return (
        <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favoritos" component={Favoritos} />
            <Route exact path="/filme/:id" component={Filme} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;