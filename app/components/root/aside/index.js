import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

class RootAside extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return (
            <aside className={classnames({
                //style
            })}>
                <aside></aside>
            </aside>
        );
    }
}