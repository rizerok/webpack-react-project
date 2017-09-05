import React from 'react';
import style from './root-header.styl';
import { Provider } from 'react-redux';

import NavDropDownList from 'components/nav/drop-down-list';


class RootHeader extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return (
            <NavDropDownList nav={this.props.nav} />
        );
    }
}

export default RootHeader;