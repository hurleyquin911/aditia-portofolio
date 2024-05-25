import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import About from "./pages/About";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
