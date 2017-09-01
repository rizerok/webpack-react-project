import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTracks } from './actions/tracks';

class Track extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return <div>
            <h1>Track</h1>
            <button onClick={this.props.onGetTracks}></button>
        </div>;
    }
}


export default withRouter(connect(
    state => {
        console.log(123,state);
        return {tracks:state.tracks};
    },
    dispatch => ({
        onAddTrack: (trackName) => {
            const payload = {
                id: Date.now().toString(),
                name: trackName
            };
            dispatch({type: 'ADD_TRACK',payload:payload});
        },
        onFindTrack: (trackName) => {
            dispatch({type: 'FIND_TRACK',payload:trackName});
        },
        onGetTracks:()=>{
            dispatch(getTracks());
        }
    })
)(Track));