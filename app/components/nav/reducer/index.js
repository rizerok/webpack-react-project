const initialState = {nav:[]};

export default function(state = initialState,action){
    switch(action.type){
        case 'GET_NAV':{
            return {nav:action.nav};
        }
    }
    return state;
}