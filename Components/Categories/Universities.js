import React, { Component } from "react";
import "./Universities.css";

// Link component for better design
const Link = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

class Universities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universitiesData: [],
    };
  }

  componentDidMount() {
    this.fetchUniversities();
  }

  fetchUniversities() {
    fetch("http://localhost:8080/Universities/findAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ universitiesData: data });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { universitiesData } = this.state;

    return (
      <div className="university-container">
        {universitiesData.map((university) => (
          <div key={university.name} className="university-card">
            <div className="card-header">{university.name}</div>
            <div className="card-content">
              <p>Type: {university.type}</p>
              <p>Number of Branches: {university.nbOfBranches}</p>
              <p>Location: {university.address}</p>
              <p>Phone: {university.phone}</p>
              <p>Email: {university.email}</p>
            </div>
            <div className="card-links">
              <Link href={university.officialLink} text="Official Link/ " />
              <Link href={university.major_link} text="Major Link/ " />
              <Link href={university.tuition_link} text="Tuition Link/ " />
              {university.financialAid_link && (
                <Link href={university.financialAid_link} text="Financial Aid Link/ " />
              )}
              <Link href={university.contact_link} text="Contact Link " />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Universities;
