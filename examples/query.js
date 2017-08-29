import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './style.styl';

const Links = () => (
    <nav>
        <Link to="/?id=123">Inline</Link>
        <Link to={{pathname:'/',search:'id=456'}}>Object</Link>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links></Links>
            <Route path="/" render={({match,location})=>(
                <div>
                    <p>root</p>
                    <p>{JSON.stringify(match)}</p>
                    <p>{JSON.stringify(location)}</p>
                    <p>{new URLSearchParams(location.search).get('id')}</p>
                </div>
            )} />
        </div>
    </Router>
);

ReactDOM.render((
    <App />
), document.getElementById('root'));