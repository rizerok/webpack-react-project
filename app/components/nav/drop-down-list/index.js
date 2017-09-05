import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './nav-drop-down-list.styl';

class NavDropDownList extends React.Component{
    constructor(props){
        super(props);
        //this.navList = null;
        console.log('in nav ',props);
    }
    render(){
        let navList = null;
        if(this.props.nav){
            navList = <ul className={style.list}>
                {this.props.nav.map((n,i)=>(
                    <li className={style.listItem} key={i}>
                        <NavLink to={n.url}>{n.title}</NavLink>
                    </li>
                ))}
            </ul>;
        }
        return (
            
                <nav className={style.navDropDownList}>
                    {navList}
                </nav>
            
        );
    }
}

export default NavDropDownList;