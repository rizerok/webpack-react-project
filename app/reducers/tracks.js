const initialState = [
    
];

export default function playlist(state = initialState,action){//reducer
    switch(action.type){
        case 'ADD_TRACK':{
            return [
                ...state,
                action.payload
            ];
        }
        case 'FETCH_TRACKS_SUCCESS':{
            return action.payload;
        }
    }
    return state;
}