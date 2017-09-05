import React from 'react';

import style from './ui-preloader.styl';

export default  () => {
    let rings = [];
    for(let i = 0;i<4;i++){
        rings.push(<div className={style.ring} key={i}></div>);
    }
    
    return (
    <div className={style.preloaderContainer}>
        {rings}
    </div>);
};