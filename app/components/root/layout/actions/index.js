const initialQueryUrls = [
    '/api/navigation.json',
    '/api/company.json'
];

export const getNav = () => dispatch =>{
    dispatch({
        type:'REQUEST_NAV'
    });
    fetch('/api/navigation.json')
        .then(resp=>resp.json())
        .then(nav=>{
            console.log(nav);
            dispatch({
                type:'RECEIVE_NAV',
                payload:nav
            });
        });
};