import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#dbdbdb', color: 'black', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#9b9b9b'} onMouseOut={(e) => e.target.style.backgroundColor = '#dbdbdb'}>
        Back to Menu
      </Link>

      <h2>About Page</h2>
      <nav>
        <Link to="/exercise-3" style={{ margin: '10px' }}>Home</Link>
        <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
      </nav>
      <p>This is the About page!</p>
    </div>
  );
};

export default About;
