import React from "react";
import { Container, Grid } from "@mui/material";
import skyIcon from "../assets/icons/Cloudy.png";
import windIcon from "../assets/icons/Send.png";
export default function ViewWeather() {
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
              <div className="view-weather-location">Colombo,LK</div>
              <div className="view-weather-time">9:19am, Feb 8</div>
            </Grid>
            <div className="view-weather-sky-temp-container">
              <Grid container justifyContent="center" alignItems="center">
                <div className="view-weather-sky">
                  <Container>
                    <img src={skyIcon} className="view-weather-sky-image" />
                    <div className="view-weather-sky-description">
                      Few Clouds
                    </div>
                  </Container>
                </div>
                <div className="view-weather-gap">
                  <div className="view-weather-gap-line"></div>
                </div>
                <div className="view-weather-temp">
                  <Container>
                    <div className="view-weather-temp-display">{`27\xb0c`}</div>
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
                  <b>Preassure:</b> 1018hPa
                </div>
                <div>
                  <b>Humidity:</b> 78%
                </div>
                <div>
                  <b>Visibility:</b> 8.0km
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
                  <div>4.0m/s 120 Degree</div>
                </Grid>
              </div>
              <div className="view-weather-bottom-divider">
                <div className="view-weather-bottom-divider-line"></div>
              </div>
              <div className="view-weather-bottom-sunrise">
                <div>
                  <b>Sunrise:</b> 6:05 am
                </div>
                <div>
                  <b>Sunset:</b> 6:05 pm
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
}
