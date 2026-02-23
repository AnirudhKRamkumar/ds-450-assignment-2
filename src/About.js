import { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        "Python",
        "Flask",
        "pandas",
        "numpy",
        "matplotlib",
        "scikit-learn",
        "JavaScript",
        "React",
      ],
    };
  }

  render() {
    return (
      <div className="about-section">
        <div className="about-me-container">
          <h2 className="about-me-title">About Me</h2>
          <div className="about-me-content">
            <div className="about-me-block">
              <div className="about-me-image">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEc-HQ70DlF0A/profile-displayphoto-crop_800_800/B56ZlpVqWcJ0AI-/0/1758408911149?e=1773273600&v=beta&t=qFDwU66XOJzL0op1KM7414BibaaPQuO7Gm4k2u9ElSo"
                  alt="from linkedin"
                  width="300px"
                ></img>
              </div>
              <div className="about-me-text">
                <div className="about-me-blurb">
                  <p>
                    My name is Anirudh Ramkumar; I’m a Data Science major at
                    NJIT’s Albert Dorman Honors College with a strong foundation
                    in machine learning and software engineering. I’ve worked on
                    agentic AI systems, LLM-powered applications, and full-stack
                    web platforms using Python and React, with a focus on
                    building practical, high-impact solutions. My experience
                    spans research in AI-driven health and gene analysis
                    workflows as well as leading Agile development teams in
                    fast-paced environments.
                  </p>
                  <p>
                    Outside of academics and research, I enjoy spending my free
                    time playing chess, practicing my trumpet, and playing all
                    sorts of video games with my friends. Music has been a
                    constant outlet for me, whether I’m performing jazz pieces
                    with NJIT's Elementals or simply playing for personal
                    enjoyment. I’m also an avid sports fan and closely follow
                    the NFL (my Seahawks are SB XL winners!), the Premier League
                    (unfortunately Chelsea are currently in the pack fighting
                    for Champions League spots), and the Indian national cricket
                    team (the less said about the game against South Africa, the
                    better).
                  </p>
                </div>
                <div className="skills-categories">
                  <h3>My Skills and Technologies</h3>
                  <div className="skill-list">
                    {this.state.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
