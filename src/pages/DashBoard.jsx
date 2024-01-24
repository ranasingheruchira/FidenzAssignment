import React from "react";
import WeatherList from "../components/dashboard/WeatherList";
import AddCity from "../components/dashboard/AddCity";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { error, init } from "../constants/Constants";

export default function DashBoard({ data }) {
  let Dash = WeatherList;

  if (data === init) {
    Dash = Loading;
  } else if (data === error) {
    Dash = Error;
  }

  return (
    <>
      <AddCity />
      <Dash data={data} />
    </>
  );
}
