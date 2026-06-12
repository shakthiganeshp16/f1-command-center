import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import DriversPage from "./pages/DriversPage";
import TeamsPage from "./pages/TeamsPage";
import RaceCenterPage from "./pages/RaceCenterPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CircuitsPage from "./pages/CircuitsPage";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/drivers" element={<DriversPage />} />

        <Route path="/teams" element={<TeamsPage />} />

        <Route path="/races" element={<RaceCenterPage />} />

        <Route path="/analytics" element={<AnalyticsPage />} />

        <Route path="/circuits" element={<CircuitsPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;