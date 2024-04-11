require("dotenv").config();
const axios=require("axios");

const accessToken=process.env.PERSONAL_ACCESS_TOKEN;

const data={
    "file_name":"jb.json"
};
const artifact_prepare_url="https://api.devrev.ai/artifacts.prepare";
axios.post(artifact_prepare_url,data,{
    'headers':{
        'Authorization':accessToken,
        'Content-Type':'application/json'
    },
})
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log("error is====",error);
})