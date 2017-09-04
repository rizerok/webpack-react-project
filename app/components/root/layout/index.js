import React from 'react';
import style from './root-layout.styl';
import RootHeader from '../header';
import RootFooter from '../footer';
import Main from 'components/main';

import {
    BrowserRouter
} from 'react-router-dom';

class RootLayout extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <BrowserRouter>
                <div className={style.rootLayout}>
                    <header className={style.header}>
                        <RootHeader></RootHeader>
                    </header>
                    <main className={style.main}>
                        <Main></Main>
                    </main>
                    <footer className={style.footer}>
                        <RootFooter></RootFooter>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default RootLayout;