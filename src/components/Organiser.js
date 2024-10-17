import React, { useState } from 'react';

const ConcertRegistrationForm = () => {
  const [concertName, setConcertName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [venue, setVenue] = useState('');
  const [description, setDescription] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [royal_ticketsAvailable, setRoyalTicketsAvailable] = useState('');
  const [regular_ticketsAvailable, setRegularTicketsAvailable] = useState('');

  const [poster, setPoster] = useState(null);
  const [contactEmail, setContactEmail] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      concertName,
      artistName,
      dateTime,
      venue,
      description,
      ticketPrice,
      royal_ticketsAvailable,
      regular_ticketsAvailable,
      poster,
      contactEmail,
      additionalInfo,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Concert Registration</h2>
        
        <div className="form-group">
          <label htmlFor="concertName">Concert Name:</label>
          <input
            type="text"
            id="concertName"
            value={concertName}
            onChange={(e) => setConcertName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="artistName">Artist/Band Name:</label>
          <input
            type="text"
            id="artistName"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateTime">Date & Time:</label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="venue">Venue:</label>
          <input
            type="text"
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="ticketPrice">Ticket Price:</label>
          <input
            type="number"
            id="ticketPrice"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <h1 style={{ fontSize: '20px', marginBottom: '20px' }}>Tickets Avaialbility</h1>
          <label htmlFor="royal">Royal </label>
          <input
          style={{fontWeight:'lighter'}}
            type="number"
            id="ticketsAvailable"
            value={royal_ticketsAvailable}
            onChange={(e) => setRoyalTicketsAvailable(e.target.value)}
          />
          <label htmlFor="regular">Regular </label>
          <input
            type="number"
            id="ticketsAvailable"
            value={regular_ticketsAvailable}
            onChange={(e) => setRegularTicketsAvailable(e.target.value)}
          />

        </div>

        <div className="form-group">
          <label htmlFor="poster">Upload Poster:</label>
          <input
            type="file"
            id="poster"
            onChange={(e) => setPoster(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactEmail">Contact Email:</label>
          <input
            type="email"
            id="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};


export default () => (
  <>
    
    <ConcertRegistrationForm />
  </>
);