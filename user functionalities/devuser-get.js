require("dotenv").config();
const axios=require("axios");
const url="https://api.devrev.ai/dev-users.get";
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;
axios.get(url,{
    'headers':{
        'Authorization':accessToken,
    },
    params:{
        id:'don:identity:dvrv-us-1:devo/1175dK9kvs:devu/1'
    },
})
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log(error);
})

