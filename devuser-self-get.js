require("dotenv").config();
const axios=require("axios");
const self_url="https://api.devrev.ai/dev-users.self";
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;
axios.get(self_url,{
    'headers':{
        'Authorization':accessToken,
    }
})
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log(error);
})

