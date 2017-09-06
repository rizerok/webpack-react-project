import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import style from './nav-burger.styl';

import { switchAside } from '../actions/aside';

class NavBurger extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        console.log(3332,this.props);
        const {switchAside,open} = this.props;
        switchAside(!open);
    }
    render(){
        console.log(this.props,111);
        return (
            <button onClick={this.toggle}
                className={style.button}>
                <span className={classnames(
                    style.burger,
                    {
                        [style.isActive]:this.props.open
                    })
                }>
                    <span></span>
                </span>
            </button>
        );
    }
}

export default connect(
    state => state.asideMenu,
    dispatch => ({
        switchAside:(open)=>dispatch(switchAside(open))
    })
)(NavBurger);