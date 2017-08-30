import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import './style.styl';

const Home = () => (<h1>Home</h1>);
const Menu = () => (<h1>Menu</h1>);
const MenuSection = ({match}) => (<h1>{match.params.section}</h1>);

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/menu/:section" component={MenuSection} />
        </div>
    </Router>
);

ReactDOM.render((
    <App />
), document.getElementById('root'));