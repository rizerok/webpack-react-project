import React from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';

import store from './store';

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>My app</div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;