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

class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className={style.main}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" render={()=><div>About</div>} />
                    <Route path="/page/:slug" component={PageDefault} />
                    <Route render={()=><div>Page not found</div>} />
                </Switch>
            </div>
            
        );
    }
}
//<Route path="/page" component={PageRouter} />
export default Main;