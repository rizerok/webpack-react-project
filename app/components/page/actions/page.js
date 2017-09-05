export const getPage = (slug) => (dispatch,getState) => {//actions creator
    //find in cache
    const store = getState();
    let page = store.pages && store.pages.list && store.pages.list.find(p=>p.slug===slug);
    if(page){
        return dispatch({//action
            type:'GET_PAGE',
            payload:{
                page,
                source:'cache'
            }
        });
    }
    //if no find - fetch
    dispatch({//action
        type:'GET',
        payload:{
            page,
            source:'cache'
        }
    });
    setTimeout(()=>{

        fetch(`/api/${slug}.json`,{
            method:'GET'
        })
            .then(resp=>resp.json())
            .then(page=>{
                //console.log('action with fetch',page);
                //https://github.com/acdlite/flux-standard-action
                dispatch({//action
                    type:'GET_PAGE',
                    payload:{
                        page,
                        source:'fetch'
                    }
                });
            });

    },2000);
};
