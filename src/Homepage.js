import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';  

const Homepage = () => {
  const exercises = [
    { id: 1, name: 'Exercise-1: Game Cards', path: '/exercise-1' },
    { id: 2, name: 'Exercise-2: Props Practice', path: '/exercise-2' },
    { id: 3, name: 'Exercise-3: React Router Basics', path: '/exercise-3' },
    { id: 4, name: 'Exercise-4: Shopping Cart', path: '/exercise-4' },
    { id: 5, name: 'Exercise-5: Fetch Random User', path: '/exercise-5' },
    { id: 6, name: 'Exercise-6: Form Validation', path: '/exercise-6' },
  ];

  return (
    <div className="homepage-container">
      <h1>Intermediate React Exercises</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <Link to={exercise.path} className="exercise-link">
              <div className="exercise-card">
                {exercise.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
