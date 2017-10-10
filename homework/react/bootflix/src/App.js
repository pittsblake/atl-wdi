import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      id: '',
      year: '',
      director: '',
      genre: '',
      plot: ''
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (event) => {
    event.preventDefault();
    const title = event.target.title.value

    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`)
     
    .then((res) => {
      
        this.setState({
          title: res.data.Title,
          year: res.data.Year,
          director: res.data.Director,
          genre: res.data.Genre,
          plot: res.data.Plot 
        })
      }).catch((error) => {
          console.log(error)
      })
  }

  searchById = (event) => {
    event.preventDefault()
    const id = event.target.id.value
    console.log("Search by ID");

    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${id}`)
     
    .then((res) => {
      
        this.setState({
          id: res.data.imdbID,
          title: res.data.Title,
          year: res.data.Year,
          director: res.data.Director,
          genre: res.data.Genre,
          plot: res.data.Plot 
        })

      })
      .catch((error) => {
          console.log(error)
      })

  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this.searchByTitle} searchById={this.searchById}/>
        <Movie 
          title={this.state.title}
          id = {this.state.id}
          year= {this.state.year}     
          director={this.state.director} 
          genre={this.state.genre}
          plot={this.state.plot}
        />
      </div>
    );
  }
}

export default App;
