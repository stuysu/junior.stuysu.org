import Events from "./Events";
import People from "./People";
import Resources from "./Resources";
import JProm from "./Jprom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Socials from "./Socials";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/jprom" element={<JProm />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
