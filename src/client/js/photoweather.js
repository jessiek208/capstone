const basePhotoURL = 'https://pixabay.com/api/?key=';
const photoAPIKey = '20265960-569dac0c556388eadf818376b';
const searchStart = '&q=';
const plus = '+';
const tightenResults = '&image_type=photo&category=travel';
const weatherAPIKey = '&key=0d9eee58f122436792eb9b0cbb611e43';
const weatherForecastURL = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const weatherHistoryURL = 'http://api.weatherbit.io/v2.0/history/daily?';
const weatherLat= '&lat=';
const weatherLon= '&lon=';
const weatherUnits = '&units=I';
const start = '&start_date=';
const end = '&end_date=';

//inserts photo based on location by calling Pixabay
const getPhoto = async () => {
    const city = document.getElementById('city').value;
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        const country = allData.country;
        const res = await fetch(basePhotoURL + photoAPIKey + searchStart + city + plus + country + tightenResults);
        const photoResults = await res.json();
        if (photoResults.total > 0) {
            const photoURL = photoResults.hits[0].webformatURL;
            document.getElementById('photo').src = photoURL;
        } else {
            getCountryPhoto(country);
        }
    } catch (error){
        console.log(error);
    }
}

/*
sends a request to the Rest Countries API to return full country name based on code, then sends request to pixabay API for country image
*/
const getCountryPhoto = async (searchTerm) => {
    try{
        const restCountryURL = 'https://restcountries.eu/rest/v2/alpha?codes=';
        const listResults = await fetch(restCountryURL + searchTerm);
        const countryInfo = await listResults.json();
        const countryName = countryInfo[0].name;
        const res = await fetch(basePhotoURL + photoAPIKey + searchStart + countryName + tightenResults);
        console.log(basePhotoURL + photoAPIKey + searchStart + searchTerm + tightenResults);
        const photoResults = await res.json();
        const photoURL = photoResults.hits[0].webformatURL;
        document.getElementById('photo').src = photoURL;
    } catch (error){
        console.log(error);
    }
}


const getWeather = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        const lat = allData.latitude;
        const lon = allData.longitude;
        if (Client.countDown() < 7) {
            const res = await fetch(weatherForecastURL + weatherLat + lat + weatherLon + lon + weatherAPIKey + weatherUnits);
            const weatherData = await res.json();
            console.log(weatherData);
            const temp = weatherData.data[1].temp;
            const description = weatherData.data[1].weather.description;
            const lowerCaseDescription = description.toLowerCase();
            document.getElementById('weather').innerHTML = `Forecasted weather for your arrival is ${temp} and ${lowerCaseDescription}.`;
        } else {
            const startDate = lastYear();
            const endDate = addOne();
            console.log((weatherHistoryURL + weatherLat + lat + weatherLon + lon + start + startDate+ end + endDate + weatherUnits + weatherAPIKey));
            const res = await fetch(weatherHistoryURL + weatherLat + lat + weatherLon + lon + start + startDate + end + endDate + weatherUnits + weatherAPIKey);
            const weatherHistory = await res.json();
            console.log(weatherHistory);
            const temp = weatherHistory.data[0].temp;
            document.getElementById('weather').innerHTML = `Typical temperature for your arrival is ${temp} farenheit.`;
        }   
    } catch (error){
        console.log(error);
    }
}


function getDepartureDate () {
    const departureInput = document.getElementById('depart').value;
    return departureInput;
}

//gets date for one year prior
function lastYear() {
    const departureInput = getDepartureDate();
    const depart = new Date(departureInput);
    const subtractYear = depart.setDate(depart.getDate() - 364);
    const startDate = new Date(subtractYear).toLocaleDateString('en-CA');
    return startDate;
}

//creates end date of one year prior
function addOne() {
    const departureInput= getDepartureDate();
    const depart = new Date(departureInput);
    //adds 2 because depart date is calculated as -1
    const addOneDay = depart.setDate(depart.getDate() - 363);
    const endDate = new Date(addOneDay).toLocaleDateString('en-CA');
    return endDate;
  }

export { getPhoto, getWeather }

