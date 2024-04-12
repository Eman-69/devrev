//Import package to fetch PAT from .env file and store the PAT 
require("dotenv").config();
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;
const prompt=require("prompt-sync")();

//Importing Axios   
const axios=require("axios");

//URL for API call to create work item
const url="https://api.devrev.ai/works.update";

//Data required to update the work
//Data involves id of the work and the attribute to be updated
//The attribute we are updating is the title of the work,  we are inputting the title of the work runtime

let id = prompt('id of work item: ');
console.log('You entered:', id);
let newTitle = prompt('New Title of workitem: ');
console.log('You entered:', newTitle);
const data={
    "id":id,
    "title": newTitle
}


//Post request to update work by passing PAT as header along with the data and new updated title of the work
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

