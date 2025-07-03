import React from 'react';
import './GlassCube.css'; // Make sure this CSS file is in the same folder

export default function GlassCube() {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="side front"></div>
        <div className="side back"></div>
        <div className="side right"></div>
        <div className="side left"></div>
        <div className="side top"></div>
        <div className="side bottom"></div>
      </div>
    </div>
  );
}
