import logo from './logo.svg';
import './App.css';
import React from "react";
import RoomList from './roomlist';
import Pricelist from './pricelist';
import Titles from './titles';
import Hours from './hours';
import BookAppointment from './bookAppointment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { id: 1, name: "Deluxe Room", fee: "$200", services: ["Wifi", "TV", "Mini Bar"] },
        { id: 2, name: "Executive Suite", fee: "$400", services: ["Wifi", "TV", "Mini Bar", "Gym Access"] },
        { id: 3, name: "Presidential Suite", fee: "$1000", services: ["Wifi", "TV", "Mini Bar", "Gym Access", "Private Jacuzzi"] }
      ]

    };


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Titles />
        </header>
        <RoomList rooms={this.state.rooms} />
        <Hours /> 
        <BookAppointment />
      </div>
    ); 
  }
}

export default App;
