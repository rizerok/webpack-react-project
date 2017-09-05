const initialState = {
    phone:'',
    siteInfo:''
};

export default function(state = initialState,action){
    switch(action.type){
        case 'COMPANY_REQUEST':{
            break;
        }
        case 'COMPANY_RECEIVE':{
            return {
                ...state,
                ...action.payload
            };
        }    
    }
    return state;
}