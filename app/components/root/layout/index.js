import React from 'react';
import style from './root-layout.styl';
import RootHeader from '../header';
import RootFooter from '../footer';
import Main from 'components/main';


class RootLayout extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className={style.rootLayout}>
                <header className={style.header}>
                    <RootHeader></RootHeader>
                </header>
                <main className={style.main}>
                    <div>Content</div>
                </main>
                <footer className={style.footer}>
                    <RootFooter></RootFooter>
                </footer>
            </div>
        );
    }
}

export default RootLayout;