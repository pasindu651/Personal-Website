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
            {/* eslint-disable-next-line react/no-unescaped-entities */}I’m
            passionate about software engineering, with experience spanning
            cloud infrastructure and embedded systems. I’ve worked at <strong>Nokia</strong> and{" "}
            <strong>Statistics Canada</strong>, building scalable systems and real-world
            applications. Outside of work, I enjoy developing personal projects.
            Recently, I built <strong>Pixl</strong>, a real-time display system, and <strong>Crate</strong>, an
            ML-powered grocery tracking app. Feel free to explore my work—I’d
            love to bring my skills and enthusiasm to your team!{" "}
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
