import './App.css';
import Contact from './components/contact';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Project from './components/project';
import Skill from './components/skill';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="main">
        <ParticleBackground />
        <Navbar/>
        <Intro />
        <Skill />
        <Project />
        <Contact />
    </div>
    
  );
}

export default App;
