const { countDown } = require("./countdown");

const key = '&key=0d9eee58f122436792eb9b0cbb611e43';
const weatherForecastURL = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const weatherLat= '&lat=';
const weatherLon= '&lon=';
const weatherUnits = '&units=I';

const getWeather = async () => {
    const request = await fetch('/all');
    try {
        if (Client.countDown() < 7) {
            const allData = await request.json();
            const lat = allData.latitude;
            const lon = allData.longitude;
            console.log(weatherForecastURL + weatherLat + lat + weatherLon + lon + key + weatherUnits);
            const res = await fetch(weatherForecastURL + weatherLat + lat + weatherLon + lon + key + weatherUnits);
            const weatherData = await res.json();
            console.log(weatherData);
            return(weatherData);
        } else {
            console.log('nope');
        }
    } catch (error){
        console.log(error);
    }
}

export { getWeather }