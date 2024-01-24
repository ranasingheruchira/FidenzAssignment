import React from "react";
import { Container, Grid } from "@mui/material";
import windIcon from "../assets/icons/Send.png";
import { useParams } from "react-router-dom";
import { icon } from "../util/util";
import { weatherLables } from "../constants/Constants";

export default function ViewWeather({ data }) {
  let { id } = useParams();

  let weatherData = data[id];

  let time = weatherData.fetchTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "short",
    day: "2-digit",
  });

  let temp = Math.floor(weatherData.current.temp);
  let skyDescription = weatherData.current.weather[0].description;
  let preassure = weatherData.current.pressure;
  let humidity = weatherData.current.humidity;
  let visibility = Math.floor(weatherData.current.visibility / 1000);
  let windSpeed = weatherData.current.wind_speed;
  let windDeg = weatherData.current.wind_deg;
  let iconID = weatherData.current.weather[0].id;

  return (
    <Container maxWidth={"md"} fixed>
      <div className="view-weather-container">
        <div className="view-weather">
          <div className="view-weather-top view-weather-few-clouds">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <div className="view-weather-location">
                {weatherData.city},{weatherData.country}
              </div>
              <div className="view-weather-time">{time}</div>
            </Grid>
            <div className="view-weather-sky-temp-container">
              <Grid container justifyContent="center" alignItems="center">
                <div className="view-weather-sky">
                  <Container>
                    <img
                      src={icon(iconID)}
                      className="view-weather-sky-image"
                    />
                    <div className="view-weather-sky-description">
                      {skyDescription}
                    </div>
                  </Container>
                </div>
                <div className="view-weather-gap">
                  <div className="view-weather-gap-line"></div>
                </div>
                <div className="view-weather-temp">
                  <Container>
                    <div className="view-weather-temp-display">{`${temp}\xb0c`}</div>
                    <div className="view-weather-temp-minmax">{`Temp Min: 25\xb0c`}</div>
                    <div className="view-weather-temp-minmax">{`Temp Min: 25\xb0c`}</div>
                  </Container>
                </div>
              </Grid>
            </div>
          </div>
          <div className="view-weather-bottom">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              component="div"
            >
              <div className="view-weather-bottom-phv">
                <div>
                  <b>{weatherLables.preassure}</b>{" "}
                  {preassure + weatherLables.preassureUnit}
                </div>
                <div>
                  <b>{weatherLables.humidity}</b>{" "}
                  {humidity + weatherLables.humidityUnit}
                </div>
                <div>
                  <b>Visibility:</b> {visibility + weatherLables.visibilityUnit}
                </div>
              </div>
              <div className="view-weather-bottom-divider">
                <div className="view-weather-bottom-divider-line"></div>
              </div>
              <div className="view-weather-bottom-wind">
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  direction="column"
                >
                  <img src={windIcon} className="view-weather-bottom-image" />
                  <div>
                    {windSpeed + weatherLables.windSpeedUnit}{" "}
                    {windDeg + " " + weatherLables.windDegree}
                  </div>
                </Grid>
              </div>
              <div className="view-weather-bottom-divider">
                <div className="view-weather-bottom-divider-line"></div>
              </div>
              <div className="view-weather-bottom-sunrise">
                <div>
                  <b>{weatherLables.sunrire}</b> 6:05 am
                </div>
                <div>
                  <b>{weatherLables.sunset}</b> 6:05 pm
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
}
