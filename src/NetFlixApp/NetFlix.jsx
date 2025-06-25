import React, { useState } from 'react'
function MovieList({ movies }) {
    return (    
        <div className="movie-list">
            {movies.map((movie, index) => (
                <div key={index} className="movie-item">
                    <img src={movie.poster} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>Year: {movie.year}</p>
                </div>
            ))}
        </div>
    );

}
const NetFlix = () => {
    const [Movies,setMovies] = useState([
        {title: 'Inception', year: 2010,poster: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/inception-characters-film-crew.jpg'},
        {title: 'The Dark Knight', year: 2008, poster: 'https://example.com/darkknight.jpg'},
        {title: 'Interstellar', year: 2014, poster: 'https://example.com/interstellar.jpg'},
        {title: 'The Matrix', year: 1999, poster: 'https://example.com/matrix.jpg'},
        {title: 'Pulp Fiction', year: 1994, poster: 'https://example.com/pulpfiction.jpg'},
        {title: 'The Shawshank Redemption', year: 1994, poster: 'https://example.com/shawshank.jpg'},
        {title: 'Forrest Gump', year: 1994, poster: 'https://example.com/forrestgump.jpg'}
    ]);

  return (
    <div>
   
    <h2 style={{textAlign: 'center', color: 'blue'}}>Welcome to NetFlix</h2>
    <h3 style={{textAlign: 'center', color: 'green'}}>Enjoy your favorite movies</h3>
    <h4 style={{textAlign: 'center', color: 'red'}}>Happy Watching  </h4>
    
    <MovieList movies={Movies} />


    <h5 style={{textAlign: 'center', color: 'purple'}}>Powered by React</h5>
    <h6 style={{textAlign: 'center', color: 'orange'}}>© 2025 NetFlix</h6>
    <p style={{textAlign: 'center', color: 'gray'}}>All rights reserved</p>
    <p style={{textAlign: 'center', color: 'black'}}>Follow us on social media for updates</p>

          
    </div>
  )
}

export default NetFlix