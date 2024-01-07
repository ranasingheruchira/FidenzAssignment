import React from "react";
import WeatherList from "../components/dashboard/WeatherList";
import AddCity from "../components/dashboard/AddCity";
export default function DashBoard({ data }) {
  return (
    <>
      <AddCity />
      <WeatherList data={data} />
    </>
  );
}
