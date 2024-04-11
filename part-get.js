
require("dotenv").config();
const axios=require("axios");
const url="https://api.devrev.ai/parts.get";
const id="don:core:dvrv-us-1:devo/1175dK9kvs:capability/3";
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;
const params={
    'id':id,
}
axios.get(url,{
    'headers':{
        'Authorization':accessToken,
    },params
})
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log(error);
})

    