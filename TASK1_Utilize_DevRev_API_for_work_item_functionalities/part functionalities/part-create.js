
require("dotenv").config();
const axios=require("axios");
const url="https://api.devrev.ai/parts.create";
const id="don:core:dvrv-us-1:devo/1175dK9kvs:capability/3";
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;
const data={
    "type": "capability",
    "name": "part1",
    "owned_by": 
        ["don:identity:dvrv-us-1:devo/1175dK9kvs:devu/1"],
    "parent_part": 
        ["don:core:dvrv-us-1:devo/1175dK9kvs:capability/3"],
    
}
axios.post(url,data,{
    'headers':{
        'Authorization':accessToken,
        "Content-Type":"application/json"
    }
})
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log(error);
})

    