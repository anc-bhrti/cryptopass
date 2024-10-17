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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Background />
              <MainContent />
            </>
          } />
          <Route path="/organiser" element={<Organiser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;