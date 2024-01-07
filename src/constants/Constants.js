import red from "../assets/backgrounds/red.png";
import blue from "../assets/backgrounds/blue.png";
import orange from "../assets/backgrounds/orange.png";
import green from "../assets/backgrounds/green.png";
import purple from "../assets/backgrounds/purple.png";
import cloudy from "../assets/icons/Cloudy.png";
import mist from "../assets/icons/Mist.png";
import rainy from "../assets/icons/Rainy.png";
import sunny from "../assets/icons/Sunny.png";
import broken from "../assets/icons/BrokenClouds.png";

export const WEATHER_API_KEY = "997de65c0fa571fc3f486bfdc838480b";

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
  mist,
  rainy,
  sunny,
  broken,
};

export const WEATHER_ARRAY = [
  {
    fetchTime: new Date(),
    lat: 6.9387,
    lon: 79.8541,
    timezone: "Asia/Colombo",
    timezone_offset: 19800,
    current: {
      dt: 1704622162,
      sunrise: 1704588851,
      sunset: 1704631101,
      temp: 304.14,
      feels_like: 311.14,
      pressure: 1008,
      humidity: 75,
      dew_point: 299.18,
      uvi: 3.48,
      clouds: 63,
      visibility: 10000,
      wind_speed: 2.64,
      wind_deg: 277,
      wind_gust: 2.61,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
    },
  },
  {
    fetchTime: new Date(),
    lat: 6.9387,
    lon: 79.8541,
    timezone: "Asia/Colombo1",
    timezone_offset: 19800,
    current: {
      dt: 1704622162,
      sunrise: 1704588851,
      sunset: 1704631101,
      temp: 304.14,
      feels_like: 311.14,
      pressure: 1008,
      humidity: 75,
      dew_point: 299.18,
      uvi: 3.48,
      clouds: 63,
      visibility: 10000,
      wind_speed: 2.64,
      wind_deg: 277,
      wind_gust: 2.61,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
    },
  },
];
