import React, { Component } from "react";
import BoxCard from "./BoxCard";

class BoxesList extends Component {
  state = {
    boxes: [
      {
        name: "Merlin",
        age: 3000,
        title: "Grandwizard",
      },
      {
        name: "Gandalf",
        age: 1000,
        title: "White",
      },
      {
        name: "Simo",
        age: 70,
        title: "Magician",
      },
    ],
  };
  clickHandler = (name) => {
    alert("Hi there! I'm " + name);
  };
  render() {
    const wizards = this.state.boxes.map((wizard) => {
      return (
        <BoxCard
          name={wizard.name}
          age={wizard.age}
          title={wizard.title}
          key={wizard.age}
          clickMe={this.clickHandler.bind(this, wizard.name)} //this both are correct. This uses anon func to send data.
          clickMe={() => this.clickHandler(wizard.name)} //<---this one binds the data.
        />
      );
    });
    return <div className="animallist">{wizards}</div>;
  }
}

export default BoxesList;

// render() {
//   const animals = this.state.animals.map((animal) => {
//     return (
//       <AnimalCard
//         name={animal.name}
//         img={animal.img}
//         key={animal.id}
//         clickMe={this.clickHandler.bind(this, animal.name)} //this both are correct. This uses anon func to send data.
//         clickMe={() => this.clickHandler(animal.name)} //<---this one binds the data.
//       />
//     );
//   });
//   return <div className="animallist">{animals}</div>;
// }
// }
