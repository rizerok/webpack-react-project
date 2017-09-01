const initialState = [
    
];

let currId = 0;

export default function playlist(state = initialState,action){//reducer
    switch(action.type){
        case 'ADD_TRACK':{
            return [
                ...state,
                {
                    id:currId++,
                    name:action.payload
                }
            ];
        }
        case 'FETCH_TRACKS_SUCCESS':{
            return action.payload;
        }
    }
    return state;
}