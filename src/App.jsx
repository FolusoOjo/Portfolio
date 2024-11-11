import Home from "./Pages/Home";
import Header from "./Static/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainabout from "./Components/Mainabout";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mainabout" element={<Mainabout />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
