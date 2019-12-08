import React, { Component } from "react";
import axios from "axios";
import Cardlist from "./components/card-list/Cardlist";
import Searchbox from "./components/search-box/Searchbox";
import "../src/App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        this.setState({
          monsters: response.data
        })
      )
      .catch(error => console.log(error));
  }
  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        {/* <input
          type="search"
          placeholder="Search here"
          onChange={this.handleChange}
        /> */}
        <h1>MONSTERS ROLODEX</h1>
        <Searchbox placeholder="Search Here" handleChange={this.handleChange} />
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
