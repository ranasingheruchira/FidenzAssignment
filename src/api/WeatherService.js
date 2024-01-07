import { cities } from "../data/cities";
import { WEATHER_API_KEY } from "../constants/Constants";

const locationsArray = [];
const weatherArray = [];

async function getGeoLocations(cityList) {
  for (let city of cityList) {
    console.log("fetching locations");
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_API_KEY}`
    );
    const geoLocation = await response.json();
    locationsArray.push(geoLocation);
  }
}

async function getWeather(locationList) {
  for (let location of locationList) {
    console.log("fetching weather");
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${location[0].lat}&lon=${location[0].lon}&exclude=hourly,daily,minutely,alerts&units=metric&appid=${WEATHER_API_KEY}`
    );
    const weather = await response.json();
    weather.fetchTime = new Date();
    weather.city = location[0].name;
    weather.country = location[0].country;
    weatherArray.push(weather);
  }
}

export async function getWeatherData(callback) {
  await getGeoLocations(cities);
  await getWeather(locationsArray);
  callback(weatherArray);
}
