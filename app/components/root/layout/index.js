import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import style from './root-layout.styl';
import RootHeader from '../header';
import RootFooter from '../footer';
import Main from 'components/main';

import { getPrimaryData } from './actions';

class RootLayout extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getPrimaryData().then(()=>console.log('data have been received'));
        this.navList = [];
        console.log('componentWillMount',this);
    }
    componentWillReceiveProps(nextProps){
        this.navList = nextProps.nav.list;
        this.splitNavData();
    }
    splitNavData(){
        this.navHeader = this.navList.filter(n=>n.top);
        this.navFooter = this.navList.filter(n=>n.bottom);
    }
    render(){
        return (
            <div className={style.rootLayout}>
                <header className={style.header}>
                    <RootHeader nav={this.navHeader} phone={this.props.company.phone}></RootHeader>
                </header>
                <main className={style.main}>
                    <Main></Main>
                </main>
                <footer className={style.footer}>
                    <RootFooter nav={this.navFooter} info={this.props.company}></RootFooter>
                </footer>
            </div>
        );
    }
}

export default withRouter(connect(
    state => {
        return state;
    },
    dispatch => ({
        getPrimaryData:() => {
            return dispatch(getPrimaryData());
        }
    })
)(RootLayout));