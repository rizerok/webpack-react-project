export const getCompanyInfo = () => dispatch =>{
    dispatch({
        type:'COMPANY_REQUEST'
    });
    return fetch('/api/company.json')
        .then(resp=>resp.json())
        .then(data=>{
            return dispatch({
                type:'COMPANY_RECEIVE',
                payload:data
            });
        });
};

export const getNav = () => dispatch =>{
    dispatch({
        type:'NAV_REQUEST'
    });
    return fetch('/api/navigation.json')
        .then(resp=>resp.json())
        .then(data=>{
            return dispatch({
                type:'NAV_RECEIVE',
                payload:data
            });
        });
};

export const getPrimaryData = () => dispatch =>{
    dispatch({
        type:'PRIMARY_DATA_REQUEST'
    });
    return Promise.all([
        dispatch(getCompanyInfo()),
        dispatch(getNav())
    ]).then(data=>{
        return dispatch({
            type:'PRIMARY_DATA_RECEIVE'
        });
    });
};