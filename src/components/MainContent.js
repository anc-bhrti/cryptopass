import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import kanikaKapoor from '../images/KanikaKapoor.jpg';
import shreyaGhosal from '../images/shreyaGhosal.jpg';
import badshah from '../images/badshah.jpg';
import sanam from '../images/Sanam.webp';
import arijitSingh from '../images/arijitSingh.jpeg';
import darshanRaval from '../images/darshanRaval.jpeg';
import jonitaGandhi from '../images/jonitaGandhi.jpeg';
import mohitChauhan from '../images/mohitChauhan.jpeg';
import monaliThakur from '../images/monaliThakur.jpg';
import './MainContent.css';

const MainContent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/event-detail');
  };

  const cardData = [
    { image: kanikaKapoor, artist: "Kanika Kapoor" },
    { image: badshah, artist: "Badshah" },
    { image: shreyaGhosal, artist: "Shreya Ghoshal" },
    { image: sanam, artist: "Sanam" },
    { image: arijitSingh, artist: "Arijit Singh" },
    { image: darshanRaval, artist: "Darshan Raval" },
    { image: mohitChauhan, artist: "Mohit Chauhan" },
    { image: jonitaGandhi, artist: "Jonita Gandhi" },
    { image: monaliThakur, artist: "Monali Thakur" }
  ];

  return (
    <div className="main-content">
      {cardData.map((card, index) => (
        <Card 
          key={index}
          className="cards"
          title={`${card.artist} Concert`}
          image={card.image}
          description="Join us for an unforgettable night of live music!"
          buttonText="Buy Ticket"
          onButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
}

export default MainContent;