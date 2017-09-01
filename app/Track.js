import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTracks } from './actions/tracks';

class Track extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    getTrackName(){
        let track = this.props.tracks
            .find(t=>t.id===+this.props.match.params.id);
        //console.log(this.props.tracks,this.props.match.params.id);
        console.log(track);
        if(track){
            return track.name;
        }else{
            return 'not found';
        }
    }
    componentWillUpdate(){
        //debugger;
    }
    render(){
        return <div>
            <h1>Track: {this.getTrackName()}</h1>
            <button onClick={this.props.onGetTracks}>Get From Api</button>
        </div>;
    }
}

export default withRouter(connect(
    state => {
        //console.log(123,state);
        return {tracks:state.tracks};
    },
    dispatch => ({})
)(Track));