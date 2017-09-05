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
        isFetching:true
    },
    // header:{
    //     navFilter:'header'
    // },
    // footer:{
    //     navFilter:'footer'
    // },
    // aside:{
    //     navFilter:'aside'
    // },
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