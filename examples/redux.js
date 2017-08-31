import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './style.styl';


function playlist(state = [],action){
    console.log(action);
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist);

window.store = store; 

console.log(store.getState());

store.subscribe(()=>{
    console.log('subscribe',store.getState());
});

store.dispatch({type:'ADD_TRACK',payload:'Smells like spirit'});
store.dispatch({type:'ADD_TRACK',payload:'OP op'});


class App extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let app = ReactDOM.findDOMNode(this);
        this.input = app.querySelector('addTrack');
        //console.log(app);
    }
    _addTrack(){
        let trackName = this.input[0].value;
        store.dispatch({type:'ADD_TRACK',payload:trackName});
    }
    render(){
        return (
            <div>
                <input type="text" className="trackInput" />
                <button className="addTrack"
                        onClick={this._addTrack}
                >Add Track</button>
                <ul className="list"></ul>
            </div>
        );
    }
}

ReactDOM.render((
    <App />
), document.getElementById('root'));