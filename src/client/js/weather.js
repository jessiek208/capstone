const { countDown } = require("./countdown");

const key = '&key=0d9eee58f122436792eb9b0cbb611e43';
const weatherForecastURL = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const weatherHistoryURL = 'http://api.weatherbit.io/v2.0/history/daily?';
const weatherLat= '&lat=';
const weatherLon= '&lon=';
const weatherUnits = '&units=I';
const start = '&start_date=';
const end = '&end_date=';

const getWeather = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        const lat = allData.latitude;
        const lon = allData.longitude;
        if (Client.countDown() < 7) {
            const res = await fetch(weatherForecastURL + weatherLat + lat + weatherLon + lon + key + weatherUnits);
            const weatherData = await res.json();
            console.log(weatherData);
            const temp = weatherData.data[1].temp;
            const description = weatherData.data[1].weather.description;
            const lowerCaseDescription = description.toLowerCase();
            document.getElementById('weather').innerHTML = `Average weather is ${temp} and ${lowerCaseDescription}.`;
        } else if (Client.countDown() >7) {
            const startDate = lastYear();
            const endDate = addOne();
            console.log((weatherHistoryURL + weatherLat + lat + weatherLon + lon + start + startDate+ end + endDate + weatherUnits + key));
            const res = await fetch(weatherHistoryURL + weatherLat + lat + weatherLon + lon + start + startDate + end + endDate + weatherUnits + key);
            const weatherHistory = await res.json();
            console.log(weatherHistory);
            const temp = weatherHistory.data[0].temp;
            document.getElementById('weather').innerHTML = `Typical temperature for your arrival is ${temp} farenheit.`;
        } else {
            alert('Return date must be after start date and both fields must be used.');
        }   
    } catch (error){
        console.log(error);
    }
}
function lastYear() {
    const departureInput = document.getElementById('depart').value;
    const depart = new Date(departureInput);
    const subtractYear = depart.setDate(depart.getDate() - 364);
    const startDate = new Date(subtractYear).toLocaleDateString('en-CA');
    console.log('computed start date: ' + startDate);
    return startDate;
}

function addOne() {
    const departureInput= document.getElementById('depart').value;
    const depart = new Date(departureInput);
    //adds 2 because depart date is calculated as -1
    const addOneDay = depart.setDate(depart.getDate() - 363);
    const endDate = new Date(addOneDay).toLocaleDateString('en-CA');
    console.log('computed end date: ' + endDate);
    return endDate;
  }


/*
const startDate = document.getElementById('depart').value;
            console.log('start date: ' + startDate);
            const endDate = addOne();
            console.log('end date: ' + endDate);
            console.log((weatherHistoryURL + weatherLat + lat + weatherLon + lon + start + startDate+ end + endDate + weatherUnits + key));
            const res = await fetch(weatherHistoryURL + weatherLat + lat + weatherLon + lon + start + startDate+ end + endDate + weatherUnits + key);
            const weatherHistory = await res.json;
            console.log(weatherHistory);
*/
export { getWeather }