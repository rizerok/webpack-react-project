const initialState = {
    list:[
        
    ]
};

export default function(state = initialState,action){
    switch(action.type){
        case 'NAV_REQUEST':{
            break;
        }
        case 'NAV_RECEIVE':{
            return {
                ...state,
                list:action.payload
            };
        }    
    }
    return state;
}