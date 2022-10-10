import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skill" element={<Skill />} /> */}
      </Routes>
    </div>
  );
}

export default App;
