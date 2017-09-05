const initialState = {
    list:[
        
    ]
};

export default function playlist(state = initialState,action){
    switch(action.type){
        case 'GET_PAGE':{
            console.log('reducer',action);
            let list = state.list;
            if(action.payload.source==='fetch'){
                list.push(action.payload.page);
            }
            return {
                ...state,
                list
            };
        }
    }
    return state;
}