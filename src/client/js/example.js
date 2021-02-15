
/*
function performAction(e){
    let destinationID = document.getElementById('destination').value;
    let inputType = document.querySelector('input[name="search-type"]:checked').value;
    let departingDate = document.getElementById('depart').value;
    console.log(destinationID);
    console.log(inputType);
    console.log(departingDate);
    getLocation(destinationID, inputType);
}


function getLocation(destinationID, inputType){
    //check input type to see if it is city
    //if city, look up with this API key method
    //if zip, look up with this API key method
    //
}

let d = new Date(); 
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
*/

import { countDown } from "./countdown";

//Global Variables
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const maxRows = '&maxRows=1'
const apiKey = '&username=jessiek208'


document.getElementById('submit').addEventListener('click', performAction);
//when generate is clicked, execute performAction function below

//takes zipcode and uses it in the getTepm function below
function performAction(e) {
    const placeName = document.getElementById('destination').value;
    console.log(baseURL + placeName + maxRows + apiKey);
    const tripDate = document.getElementById('depart').value;
    Client.countDown(tripDate);
    getLocationData(baseURL, placeName, maxRows, apiKey)
        .then(function (locationData) {
            console.log(locationData);
            const latitude = locationData.postalCodes[0].lat;
            console.log(latitude);
            return latitude;
        })
        .then(function (latitude) {
            postEntry('/add', { latitude: latitude });
            updateUI();
        })
        .catch((err) => {
            console.log(err)
        }
        );
};


//function takes zipcode and fetches data from the API using created link
const getLocationData = async (baseURL, placeName, maxRows, apiKey) => {
    const res = await fetch(baseURL + placeName + maxRows + apiKey);

    const locationData = await res.json();
    return locationData;

};


//POST request to server    
const postEntry = async (url = '', data = {}) => {
    console.log(JSON.stringify(data));
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
    } catch (error) {
        console.log(error);
    }
};

//updates UI by pulling data with element IDs and inserting it into divs
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('weather').innerHTML = allData.latitude;
    } catch (error) {
        console.log(error);
    }
};

/*

async function postData(url) {
    try {
        const results = await fetch('http://localhost:8081/analyze', {
            method: 'POST',
            body: JSON.stringify({ articleLink: url }),
            headers: {
                "Content-Type": "application/JSON",
            }
        })
        const data = await results.json();
                //console.log("response from /analyze", data);
                document.getElementById('scoretag').innerHTML = 'Score Tag: ' + data.score_tag;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + data.subjectivity;
                document.getElementById('irony').innerHTML = 'Score Tag: ' + data.irony;
    } catch (error) {
        return (error);
    }
}
*/
export { performAction, postEntry }