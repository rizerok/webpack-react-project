const initialData = {
    isFirstFetch:true,
    isFetching:true
};

export default function(state = initialData,action){
    switch(action.type){
        case 'CURRENT_STATE_REQUEST':{
            return {
                ...state,
                isFetching:true
            };
        }
        case 'CURRENT_STATE_RECEIVE':{
            return {
                ...state,
                isFirstFetch:false,
                isFetching:false
            };
        }    
    }
    return state;
}