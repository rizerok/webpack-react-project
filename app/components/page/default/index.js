import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from './page-default.styl';

import { getPage } from '../actions/page';

class PageDefault extends React.Component{
    constructor(props){
        super(props);
        this.page = null;
        console.log('constructor',props);
        this.slug = props.match.params.slug;
    }
    getPage(){
        console.log('getPage',this.page);
        this.props.getPage(this.slug);
    }
    componentWillMount(){
        console.log('componentWillMount');
        this.getPage();
    }
    componentWillReceiveProps(nextProps){
        console.log(this.slug,nextProps.match.params.slug);
        if(this.slug !== nextProps.match.params.slug){
            this.slug = nextProps.match.params.slug;
            this.getPage();
        }else{
            this.slug = nextProps.match.params.slug;
        }

        this.page = nextProps.page;
        console.log('componentWillReceiveProps',this.page);
    }
    componentDidUpdate(){
        console.log(this.page.slug);
    }
    render(){
        let content;
        console.log('render',this.props);
        if(this.page){
            content = (
                <div>
                    <div>{this.page.title}</div>
                    <div>{this.page.content}</div>
                </div>
            );
        }else{
            content = <div>Loading...</div>;
        }
        return content;
    }
}

export default withRouter(connect(
    state => {
        console.log('component connect state',state);
        return state;
    },
    dispatch  => ({
        getPage: (slug) => {
            dispatch(getPage(slug));
        }
    })
)(PageDefault));