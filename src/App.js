import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movie_list'

class App extends Component {
  state = {
    movies: []
  }
  movies = ['mamad', 'shamim']

  componentDidMount() {
    const url = 'http://127.0.0.1:8000/api/movies/';
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Token e52734688983072bba99975b51237d3e2023da84' 
        }
    })
    .then(resp => resp.json())
    .then(res => this.setState({movies: res}))
    .catch(errors => console.log(errors));
  }

  render() {  
    return (
      <div className="App">
        <h1>This is the first step</h1>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
