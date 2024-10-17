import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './styles/nft.css';
import './styles/nft-nav.css';
import './styles/nft-latest.css';
import './styles/nft-collection.css';
import './styles/nft-footer.css';
import Background from './components/Background.js';
import MainContent from './components/MainContent.js';
import Organiser from './components/Organiser.js';
import RootLayout from './components/Layout.js';
import User from './components/User.js';
import EventDetails from './components/EventDetails.js';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={
            <>
            <Navbar />
              <Background />
              <MainContent />
            </>
          } />
          <Route path="/create-event" element={<Organiser />} />
          <Route path="/sign-in" element={<RootLayout />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/event-detail" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;