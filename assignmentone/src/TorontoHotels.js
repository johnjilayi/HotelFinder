import React from "react";


class TorontoHotels extends React.Component {


    constructor(movies) {
    super(movies)

    const table = ["iron Man", "iron Man 2", "iron Man 3"];

    this.state = {

        hotelList: table
    }

    }


    hotelList() {

      return ( 
<div>
    <p>{this.state.hotelList[0]}</p>
    <p>{this.state.hotelList[1]}</p>
    <p>{this.state.hotelList[2]}</p>
</div>

        )
    }

    render() {
        return (this.movieList())
    }

}

export default TorontoHotels