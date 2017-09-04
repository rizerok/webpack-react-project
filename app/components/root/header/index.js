import React from 'react';
import style from './root-header.styl';
import { Provider } from 'react-redux';

import NavDropDownList from 'components/nav/drop-down-list';


class RootHeader extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>Header</div>
        );
    }
}

export default RootHeader;