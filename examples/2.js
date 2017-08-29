import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './style.styl';

const App = () => (
    <Router>
        <div>
            <Route path="/:page?/:subpage?" render={({match})=>(
                <h1>
                    PAGE: {match.params.page || 'Home'}<br />
                    SUBPAGE: {match.params.subpage}
                </h1>
            )} />
        </div>
    </Router>
);
 
ReactDOM.render((
    <App />
), document.getElementById('root'));