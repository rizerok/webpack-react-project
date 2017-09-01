import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from 'react-router-dom';

import { getTracks } from './actions/tracks';
import reducer  from './reducers';
import About from './About';
import Track from './Track';

const store = createStore(reducer,applyMiddleware(thunk));

//console.log(store.getState());

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
                <div>
                    <button onClick={this.props.onGetTracks}
                    >Get tracks</button>
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
            // const payload = {
            //     id: Date.now().toString(),
            //     name: trackName
            // };
            dispatch({type: 'ADD_TRACK',payload:trackName});
        },
        onFindTrack: (trackName) => {
            dispatch({type: 'FIND_TRACK',payload:trackName});
        },
        onGetTracks:()=>{
            dispatch(getTracks());
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
            <div>
                <TrackToolbar />
                <TrackList />
                <Router>
                    <div>
                        <Link to='/track/0'>0</Link>
                        <Link to='/track/1'>1</Link>
                        <Switch>
                            <Route exact path='/' render={()=><h1>Home</h1>}/>
                            <Route path='/about' component={About} />
                            <Route path='/track/:id' component={Track} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </Provider>
    </div>

), document.getElementById('root'));