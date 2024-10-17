import React, { useState } from 'react';
import axios from 'axios';
import './Organiser.css';

const ConcertRegistrationForm = () => {
  const [concertName, setConcertName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [description, setDescription] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [regularCount, setRegularCount] = useState('');
  const [royalPrice, setRoyalPrice] = useState('');
  const [royalCount, setRoyalCount] = useState('');
  const [poster, setPoster] = useState(null);
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('concertName', concertName);
    formData.append('artistName', artistName);
    formData.append('dateTime',date);
    formData.append('venue', venue);
    formData.append('description', description);
    formData.append('regularPrice', regularPrice);
    formData.append('regularCount', regularCount);
    formData.append('royalPrice', royalPrice);
    formData.append('royalCount', royalCount);
    formData.append('poster', poster);  // Image file
    formData.append('email', email);
    formData.append('info', info);

    try {
      await axios.post('http://localhost:3011/addEvent', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Event submitted successfully!');
    } catch (error) {
      console.error('Error uploading the form:', error);
      alert('Error uploading the form');
    }
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="artistName">Artist/Band Name:</label>
          <input
            type="text"
            id="artistName"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="venue">Venue:</label>
          <input
            type="text"
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="regularPrice">Regular Ticket Price:</label>
          <input
            type="number"
            id="regularPrice"
            value={regularPrice}
            onChange={(e) => setRegularPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="regularCount">Regular Tickets Available:</label>
          <input
            type="number"
            id="regularCount"
            value={regularCount}
            onChange={(e) => setRegularCount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="royalPrice">Royal Ticket Price:</label>
          <input
            type="number"
            id="royalPrice"
            value={royalPrice}
            onChange={(e) => setRoyalPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="royalCount">Royal Tickets Available:</label>
          <input
            type="number"
            id="royalCount"
            value={royalCount}
            onChange={(e) => setRoyalCount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="poster">Upload Poster:</label>
          <input
            type="file"
            id="poster"
            onChange={(e) => setPoster(e.target.files[0])}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Contact Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="info">Additional Info:</label>
          <textarea
            id="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ConcertRegistrationForm;