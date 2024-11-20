import React, { useState, useEffect } from 'react';
import './RandomUser.css';

const RandomUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="user-card">
      <h2>Random User</h2>
      <img src={userData.picture.large} alt={`${userData.name.first} ${userData.name.last}`} />
      <h3>{userData.name.first} {userData.name.last}</h3>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Location:</strong> {userData.location.city}, {userData.location.country}</p>
    </div>
  );
};

export default RandomUser;
