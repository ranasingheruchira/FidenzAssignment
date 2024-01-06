import React from "react";
import { Grid } from "@mui/material";
import weatherBackground from "../../assets/backgrounds/WeatherBackground.png";
import skyIcon from "../../assets/icons/Cloudy.png";
import windIcon from "../../assets/icons/Send.png";

export default function WeatherItem() {
  return (
    <div className="weather-item">
      <img src={weatherBackground} className="weather-item-image" />
      <div className="weather-item-city">Colombo,LK</div>
      <div className="weather-item-date">9.19am, Feb 8</div>
      <div className="weather-item-temp">{`27\xB0c`}</div>
      <div className="weather-item-min-max">
        <p>{`Temp Min: 25\xB0c`}</p>
        <p>{`Temp Max: 28\xB0c`}</p>
      </div>
      <div className="weather-item-sky">
        <img src={skyIcon} alt="" className="weather-item-sky-image" />
        <p className="weather-item-sky-description">Fewer Clouds</p>
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
                1018hPa
              </p>
              <p>
                <b>Humidity: </b>
                78%
              </p>
              <p>
                <b>Visibility: </b>
                8.0km
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="weather-item-bottom-panel-vertical-line">
              <img
                src={windIcon}
                className="weather-item-bottom-panel-wind-img"
              />
              <p>4.0m/s 120 Degrees</p>
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
