//Global Variables
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const maxRows = '&maxRows=1'
const locationAPIKey = '&username=jessiek208'


document.getElementById('submit').addEventListener('click', performAction);
//when generate is clicked, execute performAction function below

//takes zipcode and uses it in the getTepm function below
function performAction(e) {
    getLocationData(baseURL, maxRows, locationAPIKey)
        .then(function (locationData) {
            const latitude = locationData.postalCodes[0].lat;
            const longitude = locationData.postalCodes[0].lng;
            const country = locationData.postalCodes[0].countryCode;
            postEntry('/add', { latitude: latitude, longitude: longitude, country: country });
            Client.getWeather();
            Client.getPhoto();
            Client.tripLength();
        })
        .catch((err) => {
            console.log(err)
        }
        );
    
};



//function takes zipcode and fetches data from the API using created link
const getLocationData = async (baseURL, maxRows, locationAPIKey) => {
    const city = document.getElementById('city').value;
    const stateCountry = document.getElementById('statecountry').value;
    const res = await fetch(baseURL + city + ',' + stateCountry + maxRows + locationAPIKey);
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

export { performAction, postEntry }