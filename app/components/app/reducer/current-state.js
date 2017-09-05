const initialData = {
    isFetching:true
};

export default function(state,action){
    switch(action.type){
        case 'CURRENT_STATE_REQUEST':{
            return action.payload.isFetching;
        }
        case 'CURRENT_STATE_RECEIVE':{
            return action.payload.isFetching;
        }    
    }
    return state;
}