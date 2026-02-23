import { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image:
            "https://media.discordapp.net/attachments/1448908252577398985/1474540571866562560/9ktikt.png?ex=699cdb6b&is=699b89eb&hm=642ffba35c55306e344b000f101474a9030567713090a4b6b46677c2de960224&=&format=webp&quality=lossless&width=994&height=591",
          title: "GraphRAG Tutor",
          description:
            "An AI-powered chatbot that leverages class notes and GraphRAG-based retrieval to deliver highly context-specific, accurate responses to student questions.",
          technologies: ["Python", "Ollama"],
          demolink: "",
          codelink: "https://github.com/AllanB1234/CS370-Project",
        },
        {
          project_image:
            "https://media.discordapp.net/attachments/741390725630918726/948027201046057030/pixelart-persona.gif?ex=699cfd22&is=699baba2&hm=3c15316bdc914c320d7d005d82a47109683b2d0f976188d642959dca3adceb20&=&width=672&height=672",
          title: "Football Stats Module",
          description:
            "A library designed to gather up-to-date football statistics for use in model training.",
          technologies: ["Python", "BeautifulSoup4", "Pandas"],
          demolink: "",
          codelink: "https://github.com/AnirudhKRamkumar/Soccer-Stats-API",
        },
      ],
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h2 className="portfolio-title">My Projects</h2>
        <div className="project-container">
          {this.state.projects.map((proj, index) => (
            <div key={index} className="project-block">
              <div className="project-image">
                <img src={proj.project_image} alt="hi"></img>
              </div>
              <div className="project-description">
                <h3>
                  <u>{proj.title}</u>
                </h3>
                <p>{proj.description}</p>
              </div>
              <div className="skill-list">
                {proj.technologies.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="buttons">
                <a className="demo-button" href={proj.demolink}>
                  Live Demo
                </a>
                <a className="code-button" href={proj.codelink}>
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
