require("dotenv").config();
const axios=require("axios");
const url="https://api.devrev.ai/parts.list";
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;
axios.get(url,{
    'headers':{
        'Authorization':accessToken,
    },
})
.then(response=>{
    console.log(response.data.parts);
})
.catch(error=>{
    console.log(error);
})

