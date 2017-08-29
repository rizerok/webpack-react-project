import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import './style.styl';

const Home = (props) => {
    console.log(props);
    return <h1>Home</h1>;
};
//replace - replace state
// const Links = () => (
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to={{pathname:'/about'}}>About</Link>
//         <Link replace to="/contact">Contact</Link>
//     </nav>
// );

const isActiveFunc = (match,location) => {
    console.log('active',match,location);
    return match;
};

const Links = () => (
    <nav>
        <NavLink activeClassName="active1" to="/">Home</NavLink>
        <NavLink activeStyle={{color:'green'}} 
                 to={{pathname:'/about'}}>About</NavLink>
        <NavLink
            isActive={isActiveFunc}
            replace
            to="/contact">Contact</NavLink>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links/>
            <Route exact path="/" component={Home} />
            {/*<Route path="/about" render={()=><h1>About</h1>} />*/}
            {/*<Route
                path="/about"
                children={({match})=> match && <h1>About</h1>} />*/}
            <Route path="/about" render={()=><h1>About</h1>} />
            <Route path="/contact" render={()=><h1>Contact</h1>} />
        </div>
    </Router>
);

ReactDOM.render((
    <App />
), document.getElementById('root'));