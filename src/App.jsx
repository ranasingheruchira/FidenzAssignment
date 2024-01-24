import Header from "./components/Header";
import Footer from "./components/Footer";
import DashBoard from "./pages/DashBoard";
import ViewWeather from "./pages/ViewWeather";
import { Routes, Route } from "react-router-dom";
import { getWeatherData } from "./api/WeatherService";
import { useEffect, useState } from "react";
import { isCacheExpired, getCachedData, removeCachedData } from "./cache/cache";
import { init, init_route, view_route } from "./constants/Constants";

function App() {
  const [weatherData, updateWeatherData] = useState(init);

  const cacheExpired = isCacheExpired();

  useEffect(() => {
    if (isCacheExpired()) {
      removeCachedData();
      getWeatherData(updateWeatherData);
    } else {
      updateWeatherData(getCachedData());
    }
  }, [cacheExpired]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path={init_route}
          element={
            <DashBoard
              data={isCacheExpired() ? weatherData : getCachedData()}
            />
          }
        />
        <Route
          path={view_route}
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
