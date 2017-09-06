let stateShape = {
    primary:{
        company:{
            phone:'88002006000',
            siteInfo:'@ 2017 company name'
        },
        nav:{
            list:[
                {
                    url:'/page/page1',
                    title:'Page1',
                    top:true,
                    bottom:false
                }
            ]
        },
        state:{
            isFetching:true
        }
    },
    currentState:{
        isFirstFetch:true,
        isFetching:true
    },
    pages:{
        list:[
            {
                slug:'page1',
                title:'Page1',
                content:'Super page1',
                isFetching:''
                
            }
        ]
    },
    rootLayout:{
        isFetching:true
    }
};