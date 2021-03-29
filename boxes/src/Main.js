// import "./App.css";

class Main extends Component {
  state = {
    persons: [
      {
        name: "Tupu",
        age: 50,
        department: "sales",
      },
      {
        name: "Hupu",
        age: 55,
        department: "developing",
      },
      {
        name: "Lupu",
        age: 45,
        department: "marketing",
      },
      { name: "Jim", age: 50, department: "sales" },
      {
        name: "Oscar",
        age: 55,
        department: "finance",
      },
      {
        name: "Pam",
        age: 45,
        department: "front desk",
      },
    ],
  };

  clicetyClick = () => {
    console.log("here we go again!");
    this.setState({
      persons: [
        {
          name: "Tupu",
          age: 50,
          department: "aviation",
        },
        {
          name: "Hupu",
          age: 55,
          department: "coding",
        },
        {
          name: "Lupu",
          age: 45,
          department: "sanitary",
        },
        { name: "Jim", age: 50, department: "assistant to regional manager" },
        {
          name: "Oscar",
          age: 55,
          department: "accounting",
        },
        {
          name: "Pam",
          age: 45,
          department: "reception",
        },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.clicetyClick}>click here...if you DARE!</button>
        <div>
          <Box
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            department={this.state.persons[0].department}
          />
          <Box
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            department={this.state.persons[1].department}
          />
          <Box
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            department={this.state.persons[2].department}
          />
          <Box
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}
            department={this.state.persons[3].department}
          />
          <Box
            name={this.state.persons[4].name}
            age={this.state.persons[4].age}
            department={this.state.persons[4].department}
          />
          <Box
            name={this.state.persons[5].name}
            age={this.state.persons[5].age}
            department={this.state.persons[5].department}
          />
        </div>
      </main>
    );
  }
}
let clicks = 0;
const countClick = () => {
  clicks++;
  console.log("click " + clicks);
};

export default Main;
