import React, { Component } from 'react';
import './Mentor.css';

class Mentor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentorCategory: null,
      mentorId: null,
      mentorDetails: null,
      saveDisabled: false,
      saveButtonClicked: false,
    };
  }

  handleFieldChange = (category) => {
    this.setState({
      mentorCategory: category,
      mentorId: null,
      mentorDetails: null,
      saveDisabled: false,
      saveButtonClicked: false,
    });
    this.fetchMentor(category);
  };

  updateStudentsMentored = () => {
    const { mentorId } = this.state;
    this.updateStudentMentor(mentorId);
    this.setState({ saveDisabled: true, saveButtonClicked: true });
  };

  fetchMentor = (category) => {
    fetch(`http://localhost:8080/Mentors/findAll?job_title=${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const mentor = data[0];
          this.setState({ mentorId: mentor.id, mentorDetails: mentor });
        } else {
          this.setState({ mentorId: null, mentorDetails: null });
        }
      })
      .catch((error) => console.error('Error fetching mentor:', error));
  };

  updateStudentMentor = (mentorId) => {
    console.log(`Updating student's mentorId to ${mentorId}`);
  };

  render() {
    return (
      <div>
        <div className="mentor-container">
          <h2 className="page-title">My Mentorship</h2>
          <div className="mentor-card">
            <div className="options-container">
              <div className="excellent-sign">&#10004; Be mentored by a professional member</div>
            </div>

            <div className="options-container">
              <label>
                <input
                  type="radio"
                  name="mentorCategory"
                  className="option-checkbox"
                  onChange={() => this.handleFieldChange('Consulting')}
                />
                Consulting
              </label>
              <label>
                <input
                  type="radio"
                  name="mentorCategory"
                  className="option-checkbox"
                  onChange={() => this.handleFieldChange('Law')}
                />
                Law
              </label>
              <label>
                <input
                  type="radio"
                  name="mentorCategory"
                  className="option-checkbox"
                  onChange={() => this.handleFieldChange('Tech')}
                />
                Tech
              </label>
              <label>
                <input
                  type="radio"
                  name="mentorCategory"
                  className="option-checkbox"
                  onChange={() => this.handleFieldChange('Finance')}
                />
                Finance
              </label>
            </div>
            <button
              className="save-button"
              onClick={this.updateStudentsMentored}
              disabled={this.state.saveDisabled}
            >
              Save
            </button>
          </div>
        </div>

        <div className="mentor-containerv2">
          <h2 className="page-title">Current Mentorship</h2>
          <div className="mentor-card">
            {this.state.mentorId ? (
              <div>
                <p>You are currently Mentored by: {this.state.mentorDetails.first_name} {this.state.mentorDetails.last_name}</p>
                <p>Email: {this.state.mentorDetails.email}</p>
                <p>Address: {this.state.mentorDetails.address}</p>
                <p>Job Title: {this.state.mentorDetails.job_title}</p>
                <p>Experience Years: {this.state.mentorDetails.experience}</p>
                <p>Area of Expertise: {this.state.mentorDetails.area_of_expertise}</p>
              </div>
            ) : (
              <p>Currently, you don't have a Mentor. Please keep check above the field that best suits you and click save.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Mentor;
