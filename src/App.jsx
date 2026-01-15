import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Connect from "./pages/Connect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/connect" element={<Connect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
