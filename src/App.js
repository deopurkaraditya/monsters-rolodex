import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box-component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=> response.json()) 
    .then(users=> this.setState({monsters:users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  render(){
      const { monsters, searchField } = this.state;
      // const monsters = this.state.monsters;
      // const searchField = this.state.searchField;

      const filteredMonsters = monsters.filter(eachmonster => 
        eachmonster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
      return (
        <div className="App">
          {/* <input 
            type='search' 
            placeholder='search monsters' 
            onChange={e => this.setState({searchField: e.target.value})} 
          /> */}

          <h1>MONSTERS ROLODEX</h1>

          <SearchBox
            placeholder="search monsters"
            handleChange = {this.handleChange} 
          />

          <CardList monsters={filteredMonsters} />
        </div>
      );    
  }
}
export default App;
