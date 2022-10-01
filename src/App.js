import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/index";
import Blog from "./pages/Blog/index";
import Contact from "./pages/Contact/index";
import Home from "./pages/Home/index";
import Project from "./pages/Project/index";
import Resume from "./pages/Resume/index";
import Skill from "./pages/Skill/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </div>
  );
}

export default App;
