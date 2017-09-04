import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import style from './page-router.styl';

import PageDefault from '../default';
import store from '../store';

class PageRouter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider store={store}>
                <Route path="/page/:slug" component={PageDefault} />
            </Provider>
        );
    }
}

export default PageRouter;