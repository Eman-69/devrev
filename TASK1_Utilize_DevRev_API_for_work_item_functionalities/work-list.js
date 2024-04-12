//Import package to fetch PAT from .env file and store the PAT 
require("dotenv").config();
const fs=require('fs');
const accessToken=process.env.PERSONAL_ACCESS_TOKEN;

//Importing Axios
const axios=require("axios");

//URL for API call to list work item
const url="https://api.devrev.ai/works.list";
// File path where you want to store the JSON data
const filePath = 'response_data.json';
//Get request to list work itmes by passing PAT as header
axios.get(url,{
    'headers':{
        'Authorization':accessToken,
    },
})
//Response is going to be the list of all the work items
.then(response=>{
    // Convert JavaScript object to JSON string
    const jsonData = JSON.stringify(response.data, null, 2);
    console.log(jsonData);

    // Write JSON data to file
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('Data has been successfully written to', filePath);
        }
    });

})
.catch(error=>{
    console.log(error);
})

