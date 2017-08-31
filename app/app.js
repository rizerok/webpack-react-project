import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

function playlist(state = [],action){//reducer
    console.log(action);
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist,
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
    }
    addTrack(e){
        this.props.onAddTrack(this.textInput.value);
        this.textInput.value = '';
    }
    componentDidUpdate(){
        //console.log(this.state.inputData);
    }
    render(){
        return (
            <div>
                <input type="text"
                       ref={(input) => {this.textInput = input;}}
                />
                <button onClick={this.addTrack}
                >Add Track</button>

            </div>
        );
    }
}

const TrackToolbar = connect(
    state => ({
        playlist:state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK',payload:trackName});
        }
    })
)(_TrackToolbar);

class _TrackList extends React.Component{
    render(){
        return (
            <ul className="list">
                {this.props.playlist.map((item,i)=>
                    <li key={i}>{item}</li>
                )}
            </ul>
        );
    }
}

const TrackList = connect(
    state => ({
        playlist:state
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