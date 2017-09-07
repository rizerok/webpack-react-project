import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import classnames from 'classnames';

import style from './nav-list.styl';

class NavList extends React.Component{
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

export default NavList;