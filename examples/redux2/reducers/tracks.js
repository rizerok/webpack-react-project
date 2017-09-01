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
        case 'DELETE_TRACK':{
            // let tracks = [...state];
            // let idx = tracks.indexOf(action.pauload);
            // if (idx > -1) {
            //     tracks.splice(idx, 1);
            // } else {
            //     console.log('not found');
            // }
            return state;
        }
        case 'FIND_TRACK':{
            console.log(state.find((s)=>action.payload===s.name));
            return state;
        }
    }
    return state;
}