import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./ui/Footer";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <Router>
      <Nav />
      <div id="home">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="form">
        <Form />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
