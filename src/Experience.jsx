import { Link } from "@nextui-org/react";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-header">Experience</h2>

      <div className="experience">
        <div className="experience-date-wrapper">
          <p className="experience-date">Jan 2026 - Apr 2026</p>
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://www.statcan.gc.ca/"
            isExternal
            color="foreground"
          >
            Software Engineering Intern · Statistics Canada
          </Link>
          <ul className="experience-details">
            <li>• Development of Electronic Questionnaire Tools</li>
          </ul>
          <ul className="experience-skills">
            <li>Python</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Linux</li>
            <li>Gitlab CI</li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <div className="experience-date-wrapper">
          <p className="experience-date">Apr 2025 - Aug 2025</p>
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://www.nokia.com/"
            isExternal
            color="foreground"
          >
            Test Automation Developer Intern · Nokia
          </Link>
          <ul className="experience-details">
            <li>• Backend test automation for router resync feature</li>
          </ul>
          <ul className="experience-skills">
            <li>Javascript</li>
            <li>Mocha.js</li>
            <li>Linux</li>
            <li>SQL</li>
            <li>Bash</li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <div className="experience-date-wrapper">
          <p className="experience-date">Jul 2023 - Aug 2023</p>
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://www.nokia.com/"
            isExternal
            color="foreground"
          >
            Future Tech Intern · Nokia
          </Link>
          <ul className="experience-details">
            <li>• Automated testing of SD-WAN services</li>
          </ul>
          <ul className="experience-skills">
            <li>Radish</li>
            <li>Groovy</li>
            <li>Jenkins</li>
            <li>Python</li>
            <li>Selenium</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
