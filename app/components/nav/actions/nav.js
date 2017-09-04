export const getNav = () => dispatch => {
    setTimeout(()=>{
        fetch('/api/navigation.json')
            .then(resp=>resp.json())
            .then(nav=>{
                dispatch({type:'GET_NAV',nav});
            });
    },2000);
};