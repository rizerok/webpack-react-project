const initialData = {
    open:false
};

export default function(state = initialData,action){
    switch (action.type){
        case 'NAV_ASIDE_OPEN':{
            return {
                ...state,
                open:true
            };
        }
        case 'NAV_ASIDE_CLOSE':{
            return {
                ...state,
                open:false
            };
        }
    }
    return state;
}