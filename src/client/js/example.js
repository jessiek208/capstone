import { countDown } from "./countdown";
import { getWeather } from "./weather";

//Global Variables
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const maxRows = '&maxRows=1'
const apiKey = '&username=jessiek208'



document.getElementById('submit').addEventListener('click', performAction);
//when generate is clicked, execute performAction function below

//takes zipcode and uses it in the getTepm function below
function performAction(e) {
    getLocationData(baseURL, maxRows, apiKey)
        .then(function (locationData) {
            console.log(locationData);
            const latitude = locationData.postalCodes[0].lat;
            const longitude = locationData.postalCodes[0].lng;
            return [latitude, longitude];
        })
        .then(function (latitude, longitude) {
            postEntry('/add', { latitude: latitude, longitude: longitude });
            //updateUI();
            Client.getWeather();
        })
        .catch((err) => {
            console.log(err)
        }
        );
    
};



//function takes zipcode and fetches data from the API using created link
const getLocationData = async (baseURL, maxRows, apiKey) => {
    const placeName = document.getElementById('destination').value;
    const res = await fetch(baseURL + placeName + maxRows + apiKey);
    const locationData = await res.json();
    return locationData;
};


//POST request to server    
const postEntry = async (url = '', data = {}) => {
    //console.log(JSON.stringify(data));
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
        document.getElementById('weather').innerHTML = allData.latitude + ',' + allData.longitude;
    } catch (error) {
        console.log(error);
    }
};



export { performAction, postEntry }