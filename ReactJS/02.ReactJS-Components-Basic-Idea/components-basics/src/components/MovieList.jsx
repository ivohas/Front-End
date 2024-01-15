import Movie from './Movie';
import Heading from './Heading';

export default function MovieList(props) {
    return (
        <div className="movie-list">
            <Heading>{props.headingText}</Heading>

            <ul>
                <Movie movieData={props.movies[0]} />
                <Movie movieData={props.movies[1]} />
                <Movie movieData={props.movies[2]} />
                <Movie movieData={props.movies[3]} />
            </ul>
        </div>
    );
}
