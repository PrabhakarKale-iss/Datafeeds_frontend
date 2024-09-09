import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/data')
  //     .then(response => setData(response.data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
