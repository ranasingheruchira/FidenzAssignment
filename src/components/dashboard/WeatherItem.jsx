import React from "react";
import { Grid } from "@mui/material";
import windIcon from "../../assets/icons/Send.png";
import { background, icon } from "../../util/util";
import { weatherLables } from "../../constants/Constants";

export default function WeatherItem({ data, index }) {
  const temp = Math.floor(data.main.temp);
  const city = data.name;
  const countryCode = data.sys.country;

  const time = data.fetchTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "short",
    day: "2-digit",
  });

  const skydescription = data.weather[0].description;
  const preassure = data.main.pressure;
  const windSpeed = data.wind.speed;
  const windDeg = data.wind.deg;
  const visibility = Math.floor(data.visibility / 1000);
  const humidity = data.main.humidity;
  const iconID = data.weather[0].id;
  const temp_min = data.main.temp_min;
  const temp_max = data.main.temp_max;

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
        <p>{`Temp Min: ${temp_min}\xB0c`}</p>
        <p>{`Temp Max: ${temp_max}\xB0c`}</p>
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
