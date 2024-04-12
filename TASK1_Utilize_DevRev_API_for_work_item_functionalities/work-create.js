//Import package to fetch PAT from .env file and store the PAT 
require("dotenv").config();
const prompt=require("prompt-sync")();
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;
//Importing Axios
const axios=require("axios");

//URL for API call to create work item
const url="https://api.devrev.ai/works.create";

//Data required to create the work
//Data involves type(issue/ticket), display_id of the parts applied, user_id of the users that is going to own the work, Title of the work
let type = prompt('issue or ticket: ');
console.log('You entered:', type);
let applies_to_part = prompt('display_id of applies_to_part: ');
console.log('You entered:', applies_to_part);
let owned_by = prompt('id of owned_by: ');
console.log('You entered:', owned_by);
let title = prompt('Title of workitem: ');
console.log('You entered:', title);

const data={
    "type": type,
    "applies_to_part": applies_to_part,
    "owned_by": [
     owned_by,
],
    "title": title,
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

