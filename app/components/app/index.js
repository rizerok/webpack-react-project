import React from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import RootLayout from 'components/root/layout/';

window.store = store;

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <RootLayout></RootLayout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;