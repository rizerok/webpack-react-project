import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
//import 'babel-polyfill';

import reducer from './reducers';


// const initialState = {
//     tracks:[
//         'Smells like spirit',
//         'Enter Sandman'
//     ],
//     playlist:[
//         'My home playlist',
//         'My work playlist'
//     ]
// };
//
// function playlist(state = initialState,action){//reducer
//     console.log(action);
//     if(action.type === 'ADD_TRACK'){
//         return {
//             ...state,
//             tracks: [...state.tracks,action.payload]
//         };
//     }
//     return state;
// }

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

console.log(store.getState());

store.subscribe(()=>{
    console.log('subscribe',store.getState());
});

class _TrackToolbar extends React.Component{
    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.findTrack = this.findTrack.bind(this);
    }
    addTrack(e){
        this.props.onAddTrack(this.addInput.value);
        this.addInput.value = '';
    }
    findTrack(e){
        //console.log(this.searchInput.value);
        this.props.onFindTrack(this.findInput.value);
        this.findInput.value = '';
    }
    componentDidUpdate(){
        //console.log(this.state.inputData);
    }
    render(){
        return (
            <div>
                <div>
                    <input type="text"
                           ref={(input) => {this.addInput = input;}}
                    />
                    <button onClick={this.addTrack}
                    >Add Track</button>
                </div>
                <div>
                    <input type="text"
                           ref={(input) => {this.findInput = input;}}
                    />
                    <button onClick={this.findTrack}
                    >Find Track</button>
                </div>
            </div>
        );
    }
}

const TrackToolbar = connect(
    state => ({
        tracks:state.tracks
    }),
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
        }
    })
)(_TrackToolbar);

class _TrackList extends React.Component{
    render(){
        return (
            <ul className="list">
                {this.props.tracks.map((item,i)=>
                    <li key={i}>{item.name}</li>
                )}
            </ul>
        );
    }
}

const TrackList = connect(
    state => ({
        tracks:state.tracks.filter(track => track.name.indexOf(state.filterTracks) > -1)
    }),
    dispatch => ({})
)(_TrackList);

ReactDOM.render((
    <div>
        <Provider store={store}>
            <TrackToolbar />
        </Provider>
        <Provider store={store}>
            <TrackList />
        </Provider>
    </div>

), document.getElementById('root'));