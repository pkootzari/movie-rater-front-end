import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class MovieDetails extends Component {
    state = {  }
    
    render() { 
        const movie = this.props.selectedMovie;
        return ( 
            <div>
                { this.props.selectedMovie ? (
                    <div>
                        <h3>{ this.props.selectedMovie.title } : </h3>
                        <FontAwesomeIcon icon={faStar} className={movie.avg_ratings > 0 ? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.avg_ratings > 1 ? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.avg_ratings > 2 ? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.avg_ratings > 3 ? 'orange' : ''} />
                        <FontAwesomeIcon icon={faStar} className={movie.avg_ratings > 4 ? 'orange' : ''} />
                        ({movie.num_of_ratings})
                        <p>{ this.props.selectedMovie.description }</p>
                    </div>
                ) : null }
            </div>
        );
    }
}
 
export default MovieDetails;