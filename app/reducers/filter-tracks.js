const initialState = '';

export default function filterTracks(state = initialState,action){//reducer
    switch(action.type){
        case 'FIND_TRACK':{
            return action.payload;
        }
    }
    return state;
}