import Header from "./components/Header";
import Footer from "./components/Footer";
import DashBoard from "./pages/DashBoard";
import ViewWeather from "./pages/ViewWeather";
import { Routes, Route } from "react-router-dom";
import { WEATHER_ARRAY } from "./constants/Constants";
import { getWeatherData } from "./api/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, updateWeatherData] = useState(WEATHER_ARRAY);

  useEffect(() => {
    getWeatherData(updateWeatherData);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard data={weatherData} />} />
        <Route path="/view/:id" element={<ViewWeather data={weatherData} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
