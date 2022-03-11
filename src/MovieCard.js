import React from 'react';

const MovieCard = ({movie: {Poster,Title, Type, Year }}) => {
    return (
        <div className='movie'>
            <div>
                <p> Relase date: { Year} </p>
            </div>
            <div>
                <img src={Poster !== 'N/A' ? Poster : 'https://images.cdn2.stockunlimited.net/preview1300/cinema-background-with-movie-objects_1823384.jpg'} alt={Title} />
            </div>
            <div>
                <span>{Type }  </span>
                <h3>{ Title} </h3>
            </div>
        </div>
    );
};

export default MovieCard;