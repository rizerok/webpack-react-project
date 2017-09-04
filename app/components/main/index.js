import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';
import style from './main.styl';

import Home from 'components/home';
import About from 'components/about';
//import PageRouter from 'components/page/router';
import PageDefault from 'components/page/default';
import store from 'components/page/store';

class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
        <Provider store={store}>

                <div>
                    <NavLink to="/about">123</NavLink>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" render={()=><div>About</div>} />
                        <Route path="/page/:slug" component={PageDefault} />
                        <Route render={()=><div>Page not found</div>} />
                    </Switch>
                </div>

        </Provider>
        );
    }
}
//<Route path="/page" component={PageRouter} />
export default Main;