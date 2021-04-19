import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import "./animal.css";
import SearchBox from "./SearchBox/SearchBox";

import { animals } from "./animals";

class AnimalsList extends Component {
  state = {
    animals: animals,
    searchInput: "",
  };

  clickHandler = (name) => {
    alert("Hi there! I'm " + name);
  };

  searchValueHandler = (event) => {
    console.log("input was used");
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };
  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const animalsList = animalFilter.map((animal) => {
      return (
        <AnimalCard
          name={animal.name}
          clickMe={() => this.clickHandler(animal.name)}
          key={animal.name}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.searchValueHandler} />
        <div className="animallist">{animalsList}</div>;
      </div>
    );
  }
}

export default AnimalsList;
