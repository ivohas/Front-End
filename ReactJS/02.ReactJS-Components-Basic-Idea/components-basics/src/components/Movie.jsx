export default function Movie(props) {
    return (
        <li>
            <h3>{props.movieData.title}</h3>    
            <p>Year: {props.movieData.year}</p>
            <p>Cast: {props.movieData.actors}</p>
        </li>
    );
}
