import { Link } from "@nextui-org/react";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-header">Experience</h2>

      <div className="experience">
        <div className="experience-date-wrapper">
          <p className="experience-date">Oct 2023 - Aug 2024</p>
        </div>
        <div className="experience-info-wrapper">
          <Link
            className="experience-name"
            showAnchorIcon
            href="https://projecttechcareers.com/"
            isExternal
            color="foreground"
          >
            Sponsorship Officer · PTC
          </Link>
          <ul className="experience-details">
            <li>
              -Cold emailed 33+ companies ranging from local startups to
              established tech firms.
            </li>
            <li>
              -Secured sponsorship offers from top companies such as Google
              Cloud and The Knowledge Society (TKS).
            </li>
            <li>
              -Worked with regional leads to organize an annual conference and
              hackathon.
            </li>
          </ul>
          <ul className="experience-skills">
            <li>Sponsorship Management</li>
            <li>Communication</li>
            <li>Community Outreach</li>
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
            href="https://www.nuagenetworks.net/solutions/nuage-managed-sd-wan-service/"
            isExternal
            color="foreground"
          >
            Future Tech Intern · Nokia
          </Link>
          <ul className="experience-details">
            <li>
              -Created Radish-bdd and Selenium scripts to automate the testing
              of a Cloud Managed SD-WAN service.
            </li>
            <li>
              -Leveraged cucumber reports to conduct in-depth analysis of
              feature files, facilitating the optimization of test steps.
            </li>
            <li>
              -Used configuration tools such as JSON to streamline automation
              workflow for large-scale testing.
            </li>
            <li>
              -Reviewed Jenkins pipelines to troubleshoot builds and ensure
              successful deployment.x
            </li>
          </ul>
          <ul className="experience-skills">
            <li>Radish</li>
            <li>Groovy</li>
            <li>Jenkins</li>
            <li>Python</li>
            <li>Selenium</li>
            <li>JSON</li>
            <li>YAML</li>
            <li>Postman</li>
            <li>Gitlab</li>
            <li>Jira</li>
            <li>Confluence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
