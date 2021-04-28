import React from 'react';
import NavBar from './components/NavBar';
import Scores from './pages/Scores';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <Scores />
      </div>
      <Footer />
    </div>
  );
}

export default App;
