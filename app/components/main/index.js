import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

import style from './main.styl';

import Home from 'components/home';
import About from 'components/about';

import PageDefault from 'components/page/default';
import PageRouter from 'components/page/router';

class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" render={()=><div>About</div>} />
                <Route path="/page" component={PageRouter} />
                <Route render={()=><div>Page not found</div>} />
            </Switch>
        );
    }
}
//<Route path="/page" component={PageRouter} />
export default Main;