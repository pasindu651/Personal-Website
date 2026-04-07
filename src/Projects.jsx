import { Link } from "@nextui-org/react";

const Projects = () => {
  const Project1 = "/project-1.jpg";
  const Project2 = "/project-2.jpg";
  const Project3 = "/project-3.jpg";
  const Project4 = "/project-4.jpg";
  const Project5 = "/project-5.jpg";
  const Project6 = "/project-6.jpg";

  return (
    <div className="projects-container">
      <h2 className="section-header">Projects</h2>
      <div className="experience">
        <div className="project-img-wrapper">
          <img src={Project1} alt="Project 1" />
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://github.com/pasindu651/Crate-App"
            isExternal
            color="foreground"
          >
            Pixl
          </Link>
          <ul className="experience-details">
            <li>
              • A real-time system that streams live weather, scores, and music
              from your phone to an ESP32 LED matrix.
            </li>
          </ul>
          <ul className="experience-skills">
            <li>FastAPI</li>
            <li>ESP32 (C++)</li>
            <li>React Native</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <div className="project-img-wrapper">
          <img src={Project2} alt="Project 2" />
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://github.com/pasindu651/Crate-App"
            isExternal
            color="foreground"
          >
            Crate
          </Link>
          <ul className="experience-details">
            <li>
              • An ML-powered grocery tracking app that scans receipts with a
              fine-tuned Donut model to manage kitchen inventory and suggest
              recipes.
            </li>
          </ul>
          <ul className="experience-skills">
            <li>Pytorch</li>
            <li>Donut</li>
            <li>React Native</li>
            <li>Spoonacular API</li>
            <li>Flask</li>
            <li>NodeJS</li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <div className="project-img-wrapper">
          <img src={Project3} alt="Project 3" />
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://github.com/pasindu651/mindfulAI"
            isExternal
            color="foreground"
          >
            mindfulAI
          </Link>
          <ul className="experience-details">
            <li>
              • Uses GPT-4o to intelligently schedule tasks around a user's
              existing calendar with a full login and task management UI.
            </li>
          </ul>
          <ul className="experience-skills">
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>MongoDB</li>
            <li>ChatGPT API</li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <div className="project-img-wrapper">
          <img src={Project4} alt="Project 4" />
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://github.com/pasindu651/Real-Estate-Data-Analyzer"
            isExternal
            color="foreground"
          >
            Real Estate Web Scraper
          </Link>
          <ul className="experience-details">
            <li>
              • Scrapes Canadian real estate listings by city and generates
              downloadable CSV reports with linear regression visualizations.
            </li>
          </ul>
          <ul className="experience-skills">
            <li>Selenium</li>
            <li>Beautiful Soup</li>
            <li>Pandas</li>
            <li>Sklearn</li>
            <li>Plotly</li>
            <li>Streamlit</li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <div className="project-img-wrapper">
          <img src={Project5} alt="Project 5" />
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://github.com/pasindu651/smart-go-kart"
            isExternal
            color="foreground"
          >
            ECU (Electronic Control Unit) for a Go-Kart
          </Link>
          <ul className="experience-details">
            <li>
              • A Raspberry Pi ECU with 180° collision detection, adaptive
              buzzer warnings, music playback, and a dashboard showing speed,
              location, and temperature.
            </li>
          </ul>
          <ul className="experience-skills">
            <li>PyQt</li>
            <li>Threads</li>
            <li>Raspberry Pi</li>
          </ul>
        </div>
      </div>
      <div className="experience">
        <div className="project-img-wrapper">
          <img src={Project6} alt="Project 6" />
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://github.com/pasindu651/Votenote"
            isExternal
            color="foreground"
          >
            Votenote
          </Link>
          <ul className="experience-details">
            <li>
              • A real-time poll-making app with interactive result
              visualizations and a clean UI for creating and voting on topics.
            </li>
          </ul>
          <ul className="experience-skills">
            <li>Django</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects;
