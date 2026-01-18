import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import './App.css'
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Join from "./pages/Join";
import Connect from "./pages/Connect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<Join />} />
          <Route path="/connect" element={<Connect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
