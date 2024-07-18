

import Navbar from "./components/Header/Navbar";
import About from "./components/Abouts/About";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Skill from "./components/Skill/Skill";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Skill/>
    </div>
  );
}

export default App;
