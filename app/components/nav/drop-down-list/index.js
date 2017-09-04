import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './nav-drop-down-list.styl';

import { getNav } from '../actions/nav';

class NavDropDownList extends React.Component{
    constructor(props){
        super(props);
        this.navData = null;
    }
    getNav(){
        this.props.getNav();
    }
    componentWillMount(){
        this.getNav();
    }
    componentWillReceiveProps(nextProps){
        this.navData = nextProps.nav;
    }
    render(){
        let navList = null;
        if(this.navData){
            navList = <ul className={style.list}>
                {this.navData.map((n,i)=>(
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

export default connect(
    state => {
        console.log(state);
        return state;
    },
    dispatch => ({
        getNav:()=>{
            dispatch(getNav());
        }
    })
)(NavDropDownList);