import React, { Component } from 'react';
import './App.css';


class MontrealHotels extends React.Component {
  render() {
    return (
      <div>
        <h2>Available Rooms</h2>
        <ul>
          {this.props.beths.map((beths) => (
            <li key={beths.id}>
              <h3>{beths.name}</h3>
              <p>Fee: {beths.fee}</p>
              <p>Services: {beths.services.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MontrealHotels