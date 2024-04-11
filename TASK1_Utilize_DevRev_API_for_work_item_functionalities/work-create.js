//Import package to fetch PAT from .env file and store the PAT 
require("dotenv").config();
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;


//Importing Axios
const axios=require("axios");

//URL for API call to create work item
const url="https://api.devrev.ai/works.create";

//Data required to create the work
//Data involves type(issue/ticket), display_id of the parts applied, user_id of the users that is going to own the work, Title of the work
const data={
    "type": "issue",
    "applies_to_part": "CAPL-3",
    "owned_by": [
     "don:identity:dvrv-us-1:devo/1175dK9kvs:sysu/1"
],
    "title": "work1",
}

//Post request to create work by passing PAT as header along with the data
axios.post(url,data,{
    'headers':{
        'Authorization':accessToken,
        'Content-Type':'application/json'
    },
})
//Response is going to be the work details of the created work
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.log(error);
})

