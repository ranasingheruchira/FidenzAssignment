import React from "react";
import { Grid } from "@mui/material";
import windIcon from "../../assets/icons/Send.png";
import { background, icon } from "../../util/util";
import { weatherLables } from "../../constants/Constants";

export default function WeatherItem({ data, index }) {
  let temp = Math.floor(data.current.temp);
  let city = data.city;
  let countryCode = data.country;

  let time = data.fetchTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "short",
    day: "2-digit",
  });

  let skydescription = data.current.weather[0].description;
  let preassure = data.current.pressure;
  let windSpeed = data.current.wind_speed;
  let windDeg = data.current.wind_deg;
  let visibility = Math.floor(data.current.visibility / 1000);
  let humidity = data.current.humidity;
  let iconID = data.current.weather[0].id;

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
                <b>{weatherLables.preassure}</b>
                {preassure}
                {weatherLables.preassureUnit}
              </p>
              <p>
                <b>{weatherLables.humidity} </b>
                {humidity}
                {weatherLables.humidityUnit}
              </p>
              <p>
                <b>{weatherLables.visibility} </b>
                {visibility}
                {weatherLables.visibilityUnit}
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
                {windSpeed}
                {weatherLables.windSpeedUnit} {windDeg}{" "}
                {weatherLables.windDegree}
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="weather-item-bottom-panel-vertical-line-last">
              <p>
                <b>{weatherLables.sunrire} </b>
                6:05 am
              </p>
              <p>
                <b>{weatherLables.sunset} </b>
                6:05 am
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
