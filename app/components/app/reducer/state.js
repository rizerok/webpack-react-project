const initialState = {
    isFetching:true
};

export default function(state = initialState,action){
    switch(action.type){
        case 'PRIMARY_DATA_REQUEST':{
            break;
        }
        case 'PRIMARY_DATA_RECEIVE':{
            return {
                ...state,
                isFetching:false
            };
        }
    }
    return state;
}