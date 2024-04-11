//Import package to fetch PAT from .env file and store the PAT 
require("dotenv").config();
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;

//Importing Axios   
const axios=require("axios");

//URL for API call to get work item
const url="https://api.devrev.ai/works.get";

//Data required to get the work
//Data involves id of the work and the attribute to be updated
//The attribute we are taking work_id as input during runtime
const id=process.argv[2];
const data={
    "id":id,
}


//Post request to get work by passing PAT as header along with the data
axios.post(url,data,{
    'headers':{
        'Authorization':accessToken,
        'Content-Type':'application/json'
    },
})
//Response is going to be the list of all the work items after updating
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log(error);
})

