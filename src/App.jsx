import Header from "./components/Header";
import Footer from "./components/Footer";
import DashBoard from "./pages/DashBoard";
import ViewWeather from "./pages/ViewWeather";
import { Routes, Route } from "react-router-dom";
import { WEATHER_ARRAY } from "./constants/Constants";
import { getWeatherData } from "./api/WeatherService";
import { useEffect, useState } from "react";
import { isCacheExpired, getCachedData, removeCachedData } from "./cache/cache";

function App() {
  const [weatherData, updateWeatherData] = useState(WEATHER_ARRAY);

  const cacheExpired = isCacheExpired();

  useEffect(() => {
    console.log("effect executed");
    if (isCacheExpired()) {
      console.log("effect if executed");
      removeCachedData();
      getWeatherData(updateWeatherData);
      console.log("effect if end executed");
    } else {
      console.log("effect else executed");
      updateWeatherData(getCachedData());
    }
  }, [cacheExpired]);

  console.log("app weather data", weatherData);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            // <DashBoard data={weatherData} />
            <DashBoard
              data={isCacheExpired() ? weatherData : getCachedData()}
            />
          }
        />
        {/* <Route path="/view/:id" element={<ViewWeather data={weatherData} />} /> */}
        <Route
          path="/view/:id"
          element={
            <ViewWeather
              data={isCacheExpired() ? weatherData : getCachedData()}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
