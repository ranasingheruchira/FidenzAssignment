import red from "../assets/backgrounds/red.png";
import blue from "../assets/backgrounds/blue.png";
import orange from "../assets/backgrounds/orange.png";
import green from "../assets/backgrounds/green.png";
import purple from "../assets/backgrounds/purple.png";
import cloudy from "../assets/icons/Cloudy.png";
import misty from "../assets/icons/Mist.png";
import rainy from "../assets/icons/Rainy.png";
import sunny from "../assets/icons/Sunny.png";
import broken from "../assets/icons/BrokenClouds.png";

export const BACKGROUNDS = {
  red,
  green,
  orange,
  purple,
  blue,
};

export const BACKGROUND_ARRAY = [blue, purple, green, orange, red];

export const ICONS = {
  cloudy,
  misty,
  rainy,
  sunny,
  broken,
};

export const error = "error";
export const init = "init";
export const loading_message = "Loading... Please Wait..";
export const error_message = "Oooops.. An error occured..";
export const init_route = "/";
export const view_route = "/view/:id";
export const footer_messsage = "2023 Fidenz Technologies";
export const add_btn_text = "Add City";

export const weatherLables = {
  preassure: "Preassure:",
  humidity: "Humidity:",
  visibility: "Visibility:",
  windSpeedUnit: "m/s",
  windDegree: "Degrees",
  visibilityUnit: "Km",
  sunrire: "Sunrise",
  sunset: "Sunset",
  preassureUnit: "hPa",
  humidityUnit: "%",
  temp_min: "Temp Min",
  temp_max: "Temp Max",
};

export const cacheKeys = {
  timeStamp: "timestamp",
  weatherData: "weatherData",
};

export const cacheExpireTime = 5;

export const weatherService = {
  fetchWeather: "fetching weather",
  err: "An error occured",
};

export const weatherURL = (city, API_KEY) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
};
