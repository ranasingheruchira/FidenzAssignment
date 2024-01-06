import React from "react";
import { Grid, Container } from "@mui/material";
import WeatherItem from "./WeatherItem";
import { Link } from "react-router-dom";

export default function WeatherList() {
  return (
    <div className="weather-item-list">
      <Container maxWidth="md" fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Link to="/view/10">
              <WeatherItem></WeatherItem>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/view/20">
              <WeatherItem></WeatherItem>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
