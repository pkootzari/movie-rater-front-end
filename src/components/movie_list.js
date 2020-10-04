import React, { Component } from 'react';

class MovieList extends Component {    
    movieClicked = movie => evt => {
        this.props.movieClicked(movie)
    }
    
    render() {
        return(
            <div>
                <h2>Movies List: </h2>
                { this.props.movies ? 
                    this.props.movies.map( movie => {
                    return( <h3 key={movie.id} onClick={this.movieClicked(movie)}>
                                { movie.title }
                            </h3> )
                    } ) : <h3>No movies yet!</h3> 
                }
            </div>
        );
    }
}

export default MovieList;