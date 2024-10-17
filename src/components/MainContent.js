import React from 'react';
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
  return (
    <div className="main-content">
        
      <Card 
        className="cards"  // Adding className to each card
        title="Concert Event"
        image={kanikaKapoor}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card 
        className="cards"
        title="Concert Event"
        image={badshah}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card 
        className="cards"
        title="Concert Event"
        image={shreyaGhosal}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card 
        className="cards"
        title="Concert Event"
        image={sanam}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card 
        className="cards"
        title="Concert Event"
        image={arijitSingh}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card 
        className="cards"
        title="Concert Event"
        image={darshanRaval}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card 
        className="cards"
        title="Concert Event"
        image={mohitChauhan}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card 
        className="cards"
        title="Concert Event"
        image={jonitaGandhi}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card 
        className="cards"
        title="Concert Event"
        image={monaliThakur}
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
    </div>
  );
}

export default MainContent;
