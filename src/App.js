import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">Monstruos</h1>
      {/* <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monster"
      />
      {/* {filteredMonsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })} */}
      {/* <CardList monsters={filteredMonsters} /> */} */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     //console.log(event.target.value); // [{name: "Leanne"}, {name: "Clementine"}]
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//   }
// }

export default App;
