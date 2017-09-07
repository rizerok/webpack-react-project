import React from 'react';
import style from './root-header.styl';
import { Provider } from 'react-redux';

import NavDropDownList from 'components/nav/drop-down-list';
import NavBurger from 'components/nav/burger';


class RootHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {phone} = this.props.company;
        return (
            <div className={style.header}>
                <NavDropDownList
                    nav={this.props.nav}
                    active
                />
                <NavBurger />
                <a href={`tel:${phone}`}>{phone}</a>
            </div>
            
        );
    }
}

export default RootHeader;