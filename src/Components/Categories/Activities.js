// Activities.js

import React, { useState, useEffect } from 'react';
import './Activities.css'; // Import the CSS file

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <h3>{activity.title}</h3>
      <p><strong>Description:</strong> {activity.description}</p>
      <p><strong>Goals:</strong> {activity.goals}</p>
    </div>
  );
};

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/Activities/findAll');
        const data = await response.json();

        // Update the state with the fetched data
        setActivities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    
    <div className="activities-container">
    <h2>Here is a list of the Most Popular Activites</h2>
      <div className="activity-cards-container">
        {activities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
