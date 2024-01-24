import { cities } from "../data/cities";
import { setCacheData } from "../cache/cache";
import { error, weatherService, weatherURL } from "../constants/Constants";

const weatherArray = [];
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

async function getWeather() {
  for (let city of cities) {
    console.log(weatherService.fetchWeather);
    const response = await fetch(weatherURL(city, WEATHER_API_KEY));
    const data = await response.json();
    data.fetchTime = new Date();
    weatherArray.push(data);
  }
}

export async function getWeatherData(callback) {
  try {
    await getWeather();
    setCacheData(weatherArray, new Date().getTime());
    callback(weatherArray);
  } catch (err) {
    callback(error);
    console.log(weatherService.err, err);
  }
}
