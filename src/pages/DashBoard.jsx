import React from "react";
import WeatherList from "../components/dashboard/WeatherList";
import AddCity from "../components/dashboard/AddCity";
import Error from "../components/Error";
export default function DashBoard({ data }) {
  return (
    <>
      <AddCity />
      {data === "error" ? <Error /> : <WeatherList data={data} />}
    </>
  );
}
