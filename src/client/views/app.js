/* Global Variables */

//const { request } = require("http");

// Create a new date instance dynamically with JS
let d = new Date(); 
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

//Access Weather API with Fetch
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',us&appid=2af1d51a7c755c0ad75becae4e91561f&units=imperial';


document.getElementById('submit').addEventListener('click', performAction);
//when generate is clicked, execute performAction function below

function performAction(e){
    let destinationID = document.getElementById('destination').value;
    let inputType = document.querySelector('input[name="search-type"]:checked').value;
    let departingDate = document.getElementById('depart').value;
    console.log(destinationID);
    console.log(inputType);
    console.log(departingDate);
}


/*
//takes zipcode and uses it in the getTepm function below
function performAction(e){
    const userContent = document.getElementById('feelings').value;
    const zipcode = document.getElementById('zip').value;
    getTemp(baseURL, zipcode, apiKey)
    .then(function(data){
        console.log(data);
        const temperature = data.main.temp;
        postEntry('/add', {date: newDate, temp: temperature, content: userContent});
        updateUI();
    });
};


//function takes zipcode and fetches data from the API using created link
const getTemp = async (baseURL, zipcode, apiKey) => {
    const res = await fetch (baseURL+zipcode+apiKey);
    try {
        const data = await res.json();
        return data;
    }   catch(error) {
        console.log("error", error);
    }
};

//POST request to server    
const postEntry = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log(error);
    }
};

//updates UI by pulling data with element IDs and inserting it into divs
const updateUI = async () => {
    const request = await fetch ('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = "Date: " + allData.date;
        document.getElementById('temp').innerHTML = "Temperature: " + allData.temp + " F";
        document.getElementById('content').innerHTML = "Journal Entry: " + allData.journalEntry;
    } catch(error) {
        console.log(error);
    }
};*/