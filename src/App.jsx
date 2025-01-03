import "./index.css";
import ParticlesBackground from "./ParticlesBackground.jsx";
import SplashArea from "./SplashArea.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <>
      <div className="main-container">
        <SplashArea />
        <div className="info-container">
          <h2 className="section-header">About me</h2>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}I am a
            highly-driven, creative, and collaborative individual passionate
            about leveraging diverse tools to create projects with real-world
            impacts. I am currently interested in embedded systems and machine
            learning. In my free time, I love playing soccer, basketball, and
            working out. Consider taking a look at my experiences below!
          </p>
          <Experience />
          <Projects />
          <div className="footer">
            <p>Copyright &copy; 2024 Pasindu Danthanarayana</p>
          </div>
        </div>
      </div>
      <ParticlesBackground />
    </>
  );
}

export default App;
