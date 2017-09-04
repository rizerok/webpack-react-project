import React from 'react';
import style from './root-header.styl';
import { Provider } from 'react-redux';

import NavDropDownList from 'components/nav/drop-down-list';
import store from 'components/nav/store';

class RootHeader extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Provider store={store}>
                <div>
                    <NavDropDownList />
                </div>
            </Provider>
        );
    }
}

export default RootHeader;