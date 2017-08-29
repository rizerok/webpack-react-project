import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import './style.styl';

const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact/xxx/xxx/xxx">Contact</Link>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links></Links>
            <Switch>
                <Route exact path="/" render={()=><h1>Home</h1>} />
                <Route path="/about" render={()=><h1>About</h1>} />
                <Route render={()=><h1>Page not found</h1>} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render((
    <App />
), document.getElementById('root'));