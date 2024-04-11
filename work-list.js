//Import package to fetch PAT from .env file and store the PAT 
require("dotenv").config();
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;

//Importing Axios
const axios=require("axios");

//URL for API call to list work item
const url="https://api.devrev.ai/works.list";

//Get request to list work itmes by passing PAT as header
axios.get(url,{
    'headers':{
        'Authorization':accessToken,
    },
})
//Response is going to be the list of all the work items
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log(error);
})

