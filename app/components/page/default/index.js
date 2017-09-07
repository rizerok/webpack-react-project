import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import style from './page-default.styl';

import { getPage } from '../actions/page';

import UiPreloader from 'components/ui/preloader';

class PageDefault extends React.Component{
    constructor(props){
        super(props);
        this.page = null;
        this.slug = props.match.params.slug;
    }
    getPage(){
        this.props.getPage(this.slug);
    }
    componentWillMount(){
        this.getPage();
    }
    componentWillReceiveProps(nextProps){
        if(this.slug !== nextProps.match.params.slug){
            this.slug = nextProps.match.params.slug;
            this.getPage();
        }else{
            this.slug = nextProps.match.params.slug;
        }
        this.page = nextProps.page;
    }
    render(){
        let content;
        if(this.page){
            content = (
                <div>
                    <div>{this.page.title}</div>
                    <div>{this.page.content}</div>
                </div>
            );
        }else{
            content = <UiPreloader />;
        }
        return (
            <div className={style.pageDefault}>
                {content}
            </div>
        );
    }
}

export default withRouter(connect(
    (state,ownProps) => {
        const {slug} = ownProps.match.params;
        const {list} = state.pages;
        const newState = {page:list.find(p=>p.slug===slug)};
        return newState;
    },
    dispatch  => ({
        getPage: (slug) => {
            dispatch(getPage(slug));
        }
    })
)(PageDefault));