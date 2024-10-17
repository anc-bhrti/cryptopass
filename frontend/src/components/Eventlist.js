import React, { useEffect, useState } from 'react';
import './Eventlist.css'; // Import the CSS file

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3011/events');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="events-container">
            {events.map((event) => (
                <div key={event._id} className="event-card">
                    <img src={`..../backend/uploads${event.concertName + event.artistName}`} alt={event.concertName} />
                    <h3>{event.concertName}</h3>
                    <p>{event.artistName}</p>
                    <p>{new Date(event.dateTime).toLocaleString()}</p>
                    <p>{event.venue}</p>
                    <p>{event.description}</p>
                    <p className="event-price">Regular Price: ${event.regularPrice} ({event.regularCount} available)</p>
                    <p className="event-price">Royal Price: ${event.royalPrice} ({event.royalCount} available)</p>
                    <p>{event.info}</p>
                    <button className="book-button">Book Tickets</button>
                </div>
            ))}
        </div>
    );
};

export default EventsList;