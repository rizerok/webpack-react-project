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
        const {phone} = this.props.company;
        return (
            <div className={style.header}>
                <NavDropDownList
                    nav={this.props.nav}
                    active
                />
                <a href={`tel:${phone}`}>{phone}</a>
            </div>
            
        );
    }
}

export default RootHeader;