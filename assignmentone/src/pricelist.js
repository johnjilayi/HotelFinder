import React, { Component } from 'react';
import './App.css';


class Pricelist extends React.Component {
  render() {
    return (
      <div>
        <h2>Servicess</h2>
        <ul>
          {this.props.rooms.map((room) => (
            <li key={room.id}>
              <p>Services: {room.services.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Pricelist