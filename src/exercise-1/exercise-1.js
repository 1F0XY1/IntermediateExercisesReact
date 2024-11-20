import React from 'react';
import { Link } from 'react-router-dom'; 
import Card from './Card.js'; 
import img1 from '../img/witcher_3.jpg';
import img2 from '../img/ac_black_flag.jpg';
import img3 from '../img/skyrim.avif';
import img4 from '../img/darkSouls.avif';

const cards = [
  {
    id: 1,
    title: 'Witcher 3: Wild Hunt',
    description: 'A breathtaking RPG where you play as Geralt of Rivia, battling monsters and making choices in a rich, open world full of danger and intrigue.',
    image: img1,
  },
  {
    id: 2,
    title: 'Assassin\'s creed IV: Black Flag',
    description: 'Set sail as Edward Kenway, a pirate assassin, in this thrilling open-world adventure filled with naval battles, hidden treasures, and a fight for freedom across the Caribbean seas.',
    image: img2,
  },
  {
    id: 3,
    title: 'The Elder Scrolls V: Skyrim',
    description: 'An epic open-world RPG where you, the Dragonborn, must explore a vast land, master powerful shouts, and shape the fate of Skyrim in a battle against dragons and ancient evils.',
    image: img3,
  },
  {
    id: 4,
    title: 'Dark Souls III',
    description: 'A challenging action RPG where you face relentless foes, explore hauntingly beautiful landscapes, and uncover a dark, lore-rich world on your journey to rekindle the fading flame.',
    image: img4,
  },
];

const Exercise1 = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: '10px 15px',
              margin: '10px 1px',
              fontSize: '16px',
              backgroundColor: '#dbdbdb;',
              color: '#000',
              border: 'solid 1px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Back to Menu
          </button>
        </Link>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cards.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

    </div>
  );
};

export default Exercise1;
