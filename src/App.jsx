import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Join from "./pages/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
