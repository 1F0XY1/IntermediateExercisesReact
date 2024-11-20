import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Exercise5.css'; 

const Exercise5 = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching random user:', error);
    }
  };

  useEffect(() => {fetchRandomUser();}, []);

  return (
    <div className="container">
        <Link to="/" className="back-to-menu-button">Back to Menu</Link>
        <h2>Random User</h2>
        {user ? (
        <div>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`}className="user-image"/>

            <h3>{`${user.name.first} ${user.name.last}`}</h3>

            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>

            <button onClick={fetchRandomUser} className="button">Switch User</button>
        </div>
        ) : (<p>Loading...</p>)}
    </div>
  );
};

export default Exercise5;
