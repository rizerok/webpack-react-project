import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import style from './page-router.styl';

import PageDefault from '../default';

class PageRouter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Route path="/page/:slug" component={PageDefault} />
        );
    }
}

export default PageRouter;