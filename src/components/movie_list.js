import React, { Component } from 'react';

class MovieList extends Component {
        render() {
        return(
            <React.Fragment>
                <h2>Movies List: </h2>
                { this.props.movies.map( movie => {
                    return <h3 key={movie.id}>{ movie.title }</h3>
                } ) }
            </React.Fragment>
        );
    }
}

export default MovieList;