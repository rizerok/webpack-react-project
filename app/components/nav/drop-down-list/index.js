import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import style from './nav-drop-down-list.styl';

class NavDropDownList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let navList = null;
        if(this.props.nav){
            navList = <ul className={style.list}>
                {this.props.nav.map((n,i)=>(
                    <li key={i}>
                        <NavLink className={style.listItem}
                                 to={n.url}
                                 exact={n.url==='/'}
                                 activeClassName={classnames({
                                    [style.isActive]:this.props.active
                                 })}>
                            {n.title}
                        </NavLink>
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