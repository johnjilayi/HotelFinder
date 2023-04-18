import React, { Component } from 'react';
import './App.css';


class RoomList extends React.Component {
  render() {
    return (
      <div>
        <h2>Available Rooms</h2>
        <ul>
          {this.props.rooms.map((room) => (
            <li key={room.id}>
              <h3>{room.name}</h3>
              <p>Fee: {room.fee}</p>
              <p>Services: {room.services.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RoomList