import React from "react";
import { Grid, Container } from "@mui/material";
import WeatherItem from "./WeatherItem";
import { Link } from "react-router-dom";

export default function WeatherList({ data }) {
  return (
    <div className="weather-item-list">
      <Container maxWidth="md" fixed>
        <Grid container spacing={2}>
          {data.map((weather, index) => (
            <Grid item xs={12} md={6} key={weather.timezone}>
              <Link to={`/view/${index}`}>
                <WeatherItem data={weather}></WeatherItem>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
