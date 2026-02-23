import React from "react";
import "./Resume.css";

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science, Computing Option",
      minor: "Applied Mathematics",
      school: "New Jersey Institute of Technology",
      year: "2023-2027",
      gpa: "3.69/4.0",
    },
  ];

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Quantum Pulse Consulting",
      period: "Summer 2025",
      responsibilities: [
        "Collaborated with a cross-functional Agile team to build a client-facing web application using React.js, Django, and PostgreSQL",
        "Researched and helped develop multiple Python and LLM-based applications to improve internal efficiency and cut down on blocker handling time by over 50%",
        "Took on a project manager role by coordinating a 6-person development team across 3 sprint cycles and facilitating communication between developers and management to ensure timely feature delivery",
      ],
    },
    {
      title: "Research Assistant",
      company: "NJIT Single Cell Agentic AI Lab",
      period: "Nov 2025 - Present",
      responsibilities: [
        "Built a chatbot designed to deliver accurate health information to seniors by scraping and summarizing information from over 50 reputed sources while debunking common misconceptions",
        "Developed an agentic AI model to automate the methodologies of previous gene mutation testing papers",
      ],
    },
  ];

  const skills = {
    "Programming Languages": [
      "JavaScript",
      "Python",
      "R",
      "Java",
      "C",
      "C++",
      "Bash",
      "HTML5",
      "CSS3",
    ],
    "Frameworks & Libraries": [
      "React",
      "Node.js",
      "Flask",
      "pandas",
      "D3",
      "numpy",
      "matplotlib",
      "scikit-learn",
      "beautifulsoup",
    ],
    "Tools & Technologies": [
      "Git",
      "VS Code",
      "MongoDB",
      "PostgreSQL",
      "Linux",
      "Docker",
      "Tableau",
    ],
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>

        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.minor ?? " "}</p>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">
                      {exp.company}{" "}
                      <span style={{ float: "right" }}>
                        <i>{exp.period}</i>
                      </span>
                    </p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
