import React from "react";
import { Grid, Container } from "@mui/material";
import windIcon from "../../assets/icons/Send.png";
import { background, icon } from "../../util/util";

export default function WeatherItem({ data, index }) {
  const temp = Math.floor(data.current.temp);
  const city = data.city;
  const countryCode = data.country;

  const time = data.fetchTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "short",
    day: "2-digit",
  });

  const skydescription = data.current.weather[0].description;
  const preassure = data.current.pressure;
  const windSpeed = data.current.wind_speed;
  const windDeg = data.current.wind_deg;
  const visibility = Math.floor(data.current.visibility / 1000);
  const humidity = data.current.humidity;
  const iconID = data.current.weather[0].id;

  return (
    <div className="weather-item">
      <img src={background(index)} className="weather-item-image" />
      <div className="weather-item-city-time-container">
        <div className="weather-item-city">
          {city},{countryCode}
        </div>
        <div className="weather-item-date">{time}</div>
      </div>
      <div className="weather-item-temp">{`${temp}\xB0c`}</div>
      <div className="weather-item-min-max">
        <p>{`Temp Min: 25\xB0c`}</p>
        <p>{`Temp Max: 28\xB0c`}</p>
      </div>
      <div className="weather-item-sky">
        <img src={icon(iconID)} alt="" className="weather-item-sky-image" />
        <p className="weather-item-sky-description">{skydescription}</p>
      </div>
      <div className="weather-item-bottom-panel">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={4}>
            <div className="weather-item-bottom-panel-vertical-line">
              <p>
                <b>Preassure: </b>
                {preassure}hPa
              </p>
              <p>
                <b>Humidity: </b>
                {humidity}%
              </p>
              <p>
                <b>Visibility: </b>
                {visibility}km
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="weather-item-bottom-panel-vertical-line">
              <img
                src={windIcon}
                className="weather-item-bottom-panel-wind-img"
              />
              <p>
                {windSpeed}m/s {windDeg} Degrees
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="weather-item-bottom-panel-vertical-line-last">
              <p>
                <b>Sunrise: </b>
                6:05 am
              </p>
              <p>
                <b>Sunset: </b>
                6:05 am
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
