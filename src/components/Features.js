// src/components/Features.js
import React from 'react';
import './css/Features.css';

function Features() {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="features-container">
        <div className="feature">
          <h3>Feature 1</h3>
          <p>Description of feature 1</p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>Description of feature 2</p>
        </div>
        <div className="feature">
          <h3>Feature 3</h3>
          <p>Description of feature 3</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
