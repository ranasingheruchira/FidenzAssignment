import Header from "./components/Header";
import Footer from "./components/Footer";
import DashBoard from "./pages/DashBoard";
import ViewWeather from "./pages/ViewWeather";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/view/:id" element={<ViewWeather />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
