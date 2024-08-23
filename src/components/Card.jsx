import React from "react";
import './Card.css';

export default function Card(props) {
  return (
    <section>
    <div className="card">
      <div className="card-image">
        <img
          src={props.imageUrl}
          alt={props.tittle}
          width="150px"
          height="192px"          
        />
      </div>
      <div className="card-details">
        {/* Header */}
        <div className="card-header">
          <div className="header-location">
            <span className="material-symbols-outlined">location_on</span>
            <h2>{props.location}</h2> 
          </div>
          <h3 className="header-maps">View on Google Maps</h3>
        </div>
        {/* Title */}
        <div className="card-title">
          <h1>{props.title}</h1>
        </div>
        <div className="card-daterange">
          <h5>{props.dateRange}</h5>
        </div>
        <div className="card-description">
          <p>
            {props.description}
          </p>
        </div>
      </div>      
    </div>
    </section>
  );
}
