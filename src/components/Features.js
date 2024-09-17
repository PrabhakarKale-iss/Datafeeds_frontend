// src/components/Features.js
import React from 'react';
import './css/Features.css';

function Features() {
  const folders = Array.from({ length: 30 }, (_, index) => ({
    name: `Folder ${index + 1}`,
    links: [
      { name: `File ${index + 1}A`, url: "#" },
      { name: `File ${index + 1}B`, url: "#" },
      { name: `File ${index + 1}C`, url: "#" }
    ]
  }));

  return (
    <div className="container">
      {folders.map((folder, index) => (
        <div className="box" key={index}>
          <h3>{folder.name}</h3>
          <ul>
            {folder.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Features;
