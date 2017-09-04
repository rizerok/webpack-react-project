export const getPage = (slug) => dispatch => {//actions creator
    setTimeout(()=>{
        
        fetch(`/api/${slug}.json`,{
            method:'GET'
        })
            .then(resp=>resp.json())
            .then(page=>{
                console.log('action with fetch',page);
                //https://github.com/acdlite/flux-standard-action
                dispatch({//action
                    type:'GET_PAGE',
                    payload:page
                });
            });
        
    },2000);

};
