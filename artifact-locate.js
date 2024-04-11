require("dotenv").config();
const axios=require("axios");

const accessToken=process.env.PERSONAL_ACCESS_TOKEN;

const artifact_locate_url="https://api.devrev.ai/artifacts.locate";

const id="don:core:dvrv-us-1:devo/1175dK9kvs:artifact/10";
const headers={
    'Authorization':accessToken,
    "Content-Type":'application/json'
}
const params={
    id:id,
}
axios.get(artifact_locate_url,{headers,params})
.then(response=>{
    console.log(response.status);
})
.catch(error=>{
    console.log(error.response.data);
})