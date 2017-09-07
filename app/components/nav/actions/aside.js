export const switchAside = (openState,eventFn) => dispatch => {
    if(openState){
        dispatch({type:'NAV_ASIDE_OPEN'});
    }else{
        document.removeEventListener('click',eventFn);
        dispatch({type:'NAV_ASIDE_CLOSE'});
    }
};

export const addCloseEventFn = (eventFn) => dispatch => {
    document.addEventListener('click',eventFn);
    dispatch({type:'NAV_ASIDE_ADD_CLOSE_EVENT',payload:{eventFn}});
};

