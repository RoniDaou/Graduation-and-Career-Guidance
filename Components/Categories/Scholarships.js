import React, { useState, useEffect } from 'react';
import './Scholarships.css'; // Import your CSS file

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch('http://localhost:8080/Scholarships/findAll');
        const data = await response.json();
        setScholarships(data); // Assuming the response is an array of scholarship objects
      } catch (error) {
        console.error('Error fetching scholarships:', error);
      }
    };

    fetchScholarships();
  }, []); // The empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="scholarships-container">
      <h2>Here are a list of Scholarships to Apply for</h2>
      {scholarships.map((scholarship, index) => (
        <div key={index} className="scholarship-card">
          <h2>{scholarship.name}</h2>
          <div className="scholarship-details">
            <p><strong>Majors:</strong> {scholarship.majors}</p>
            <p><strong>Eligibility Criteria:</strong> {scholarship.eligibility_criteria}</p>
            <p><strong>Amount:</strong> {scholarship.amount}</p>
            <p><strong>Duration:</strong> {scholarship.duration}</p>
            <p><strong>Email:</strong> {scholarship.email}</p>
            <a href={scholarship.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scholarships;
