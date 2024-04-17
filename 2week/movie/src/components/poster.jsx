import { movies } from "../apis/api";

function Poster() {
    const posters = movies.results.map(movie => movie.poster_path);
    const name = movies.results.map(movie => movie.title);
    const stars = movies.results.map(movie => movie.vote_average);
    const overviews = movies.results.map(movie => movie.overview);

    return (
        <div className="center">
            {posters.map((poster, index) => (
                <div key={index} className="movie-wrapper">
                    <img
                        className="poster"
                        src={`https://image.tmdb.org/t/p/w200${poster}`}
                        alt={`Movie Poster ${index}`}
                    />
                    <div>
                        <h3 className="title">{name[index]}</h3>
                        <h3 className="star">{stars[index]}</h3>
                        <div className="overview">
                            <p>{overviews[index]}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Poster;
