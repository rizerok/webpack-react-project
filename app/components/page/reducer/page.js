const initialState = {
    slug:'',
    title:'',
    content:''
};

export default function playlist(state = initialState,action){
    switch(action.type){
        case 'GET_PAGE':{
            console.log('reducer',action.page);
            return action.page;
        }
    }
    return state;
}