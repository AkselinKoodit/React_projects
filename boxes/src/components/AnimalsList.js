import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import "./animal.css";

class AnimalsList extends Component {
  state = {
    animals: [
      { id: 3, name: "Fox", img: "https://source.unsplash.com/AjZjBEjQ5Cw/" },

      {
        id: 6,
        name: "Rabbit",
        img: "https://source.unsplash.com/hS41iEO300E/",
      },

      { id: 9, name: "Wolf", img: "https://source.unsplash.com/WFPWB7Vum1E/" },
    ],
  };
  clickHandler = (name) => {
    alert("Hi there! I'm " + name);
  };
  render() {
    const animals = this.state.animals.map((animal) => {
      return (
        <AnimalCard
          name={animal.name}
          img={animal.img}
          key={animal.id}
          clickMe={this.clickHandler.bind(this, animal.name)} //this both are correct. This uses anon func to send data.
          clickMe={() => this.clickHandler(animal.name)} //<---this one binds the data.
        />
      );
    });
    return <div className="animallist">{animals}</div>;
  }
}

export default AnimalsList;
