import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#dbdbdb', color: 'black', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#9b9b9b'} onMouseOut={(e) => e.target.style.backgroundColor = '#dbdbdb'}>
        Back to Menu
      </Link>

      <h2>Home Page</h2>
      <nav>
        <Link to="/about" style={{ margin: '10px' }}>About</Link>
        <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
      </nav>
      <p>Welcome to the Home page!</p>
    </div>
  );
};

export default Home;
