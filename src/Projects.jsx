import Project1 from "./assets/project-1.jpg";
import Project2 from "./assets/project-2.jpg";
import Project3 from "./assets/project-3.jpg";
import Project4 from "./assets/project-4.jpg";

import { Link } from "@nextui-org/react";

const Projects = () => {
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
            href="https://github.com/pasindu651/mindfulAI"
            isExternal
            color="foreground"
          >
            mindfulAI
          </Link>
          <ul className="experience-details">
            <li>
              -Enables users to create tasks with details like duration and due
              date.
            </li>
            <li>
              -Optimizes task placement by integrating GPT-4o with the user's
              schedule.
            </li>
            <li>
              -Integrates a friendly UI with login/signup system for user to
              save tasks, navigate tasks using a calendar, and edit/delete
              tasks.
            </li>
          </ul>
          <ul className="experience-skills">
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>MongoDB</li>
            <li>OpenAI API</li>
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
            href="https://github.com/pasindu651/Real-Estate-Data-Analyzer"
            isExternal
            color="foreground"
          >
            Real Estate Web Scraper
          </Link>
          <ul className="experience-details">
            <li>
              -Enables users to search for any Canadian city and receive a
              detailed real estate report based on data scraped from real estate
              websites.
            </li>
            <li>
              -Compiles the data into a datatable which the user can download as
              a CSV file.
            </li>
            <li>
              -Visualizes the data using linear regression and allows the user
              to generate a scatterplot of a desired x-variable such as Area.
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
          <img src={Project3} alt="Project 3" />
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
              -Features a user-friendly 180-degree collision detection system
              and parking assistance with adaptive buzzer warnings and automatic
              music volume adjustment upon obstacle detection.
            </li>
            <li>
              -Music player with playlist upon startup with automatic shuffling.
            </li>
            <li>
              -Includes a home tab with go-kart speed, location, temeprature,
              and navigation between tabs.
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
          <img src={Project4} alt="Project 4" />
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
            <li>-Allows real-time poll making and voting.</li>
            <li>-Interactive data visualization with poll results.</li>
            <li>-Friendly UI for creating/voting on topics.</li>
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
