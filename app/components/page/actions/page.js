export const getPage = (slug) => dispatch => {
    setTimeout(()=>{
        
        fetch(`/api/${slug}.json`,{
            method:'GET'
        })
            .then(resp=>resp.json())
            .then(page=>{
                console.log('action with fetch',page);
                dispatch({type:'GET_PAGE',page});
            });
        
    },2000);

};