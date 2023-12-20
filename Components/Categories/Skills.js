import React, { Component } from "react";
import { BiTimeFive } from "react-icons/bi";
import "./Skills.css";
import Slider from '@mui/material/Slider';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupedSkills: {},
    };
  }

  componentDidMount() {
    this.fetchSkills();
  }

  fetchSkills() {
    fetch("http://localhost:8080/SkillsData")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const groupedSkills = data.reduce((acc, skill) => {
          const { category } = skill;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(skill);
          return acc;
        }, {});
        this.setState({ groupedSkills });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { groupedSkills } = this.state;
  
    return (
      <div className="jobContainer">
        {Object.keys(groupedSkills).map((category, index) => (
          <div key={index} className="categorySection">
            <h2>{category}</h2>
            <div className="categoryContainer">
              <div className="skillsContainer horizontalScroll">
                {groupedSkills[category].map((skill, skillIndex) => (
                  <div key={skillIndex} className="horizontalCard">
                    <div className="nameLevelContainer">
                    <div className="nameContainer">
                      <h3>{skill.name}</h3>
                    </div>
                    <div className={`levelIndicator ${skill.level.toLowerCase()}`}>
                      {(() => {
                        switch (skill.level.toLowerCase()) {
                          case 'beginner':
                            return 'E';
                          case 'intermediate':
                            return 'M';
                          case 'advanced':
                            return 'A';
                          default:
                            return null;
                        }
                      })()}
                      <span className="levelText">
                        {(() => {
                          switch (skill.level.toLowerCase()) {
                            case 'beginner':
                              return 'Easy';
                            case 'intermediate':
                              return 'Intermediate';
                            case 'advanced':
                              return 'Advanced';
                            default:
                              return null;
                          }
                        })()}
                      </span>
                    </div>
                  </div>
                    <p>{skill.description}</p>
                    <div className="sliderLevelContainer">
                        <div className="sliderContainer">
                          <label style={{ marginRight: '8px' }}>Importance: {skill.importance}</label>
                          <Slider
                            value={
                              skill.importance === 'low' ? 0 : skill.importance === 'medium' ? 50 : 100
                            }
                            sx={{
                              width: 100,
                              color:
                                skill.importance === 'low'
                                  ? 'red'
                                  : skill.importance === 'medium'
                                  ? 'orange'
                                  : 'green',
                            }}
                          />
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
    
    
    
      
  }
  
}

export default Skills;
