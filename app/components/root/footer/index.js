import React from 'react';

import style from './root-footer.styl';

import NavList from 'components/nav/list';

class RootFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {site_info} = this.props.company;
        return (
            <div className={style.footer}>
                <NavList nav={this.props.nav} />
                <div>{site_info}</div>
            </div>
        );
    }
}

export default RootFooter;