import { cities } from "../data/cities";
import { setCacheData } from "../cache/cache";
import {
  error,
  watherService,
  locationsURL,
  weatherURL,
} from "../constants/Constants";

const locationsArray = [];
const weatherArray = [];
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

async function getGeoLocations(cityList) {
  for (let city of cityList) {
    console.log(watherService.fetchLocations);
    const response = await fetch(locationsURL(city, WEATHER_API_KEY));
    const geoLocation = await response.json();
    locationsArray.push(geoLocation);
  }
}

async function getWeather(locationList) {
  for (let location of locationList) {
    console.log(watherService.fetchWeather);
    const response = await fetch(
      weatherURL(location[0].lat, location[0].lon, WEATHER_API_KEY)
    );
    const weather = await response.json();
    weather.fetchTime = new Date();
    weather.city = location[0].name;
    weather.country = location[0].country;
    weatherArray.push(weather);
  }
}

export async function getWeatherData(callback) {
  try {
    await getGeoLocations(cities);
    await getWeather(locationsArray);
    setCacheData(weatherArray, new Date().getTime());
    callback(weatherArray);
  } catch (err) {
    callback(error);
    console.log(watherService.err, err);
  }
}
