import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/index'

const Routes = () => {
    return (
        <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;