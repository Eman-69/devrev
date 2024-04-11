//Import package to fetch PAT from .env file and store the PAT 
require("dotenv").config();
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;

//Importing Axios   
const axios=require("axios");

//URL for API call to delete work item
const url="https://api.devrev.ai/works.delete";

//Data required to delete the work
//Data involves id of the work
const id="don:core:dvrv-us-1:devo/1175dK9kvs:issue/15";
const data={
    "id":id
}

//Post request to delete work by passing PAT as header along with the data
axios.post(url,data,{
    'headers':{
        'Authorization':accessToken,
        'Content-Type':'application/json'
    },
})
//Response is going to be empty string to show that data is deleted
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.log(error);
})

