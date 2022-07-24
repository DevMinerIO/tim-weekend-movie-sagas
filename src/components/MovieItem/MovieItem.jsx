import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieItem({ movie }) {
    // moved each item into its own component so I can access the properties
    const history = useHistory();
    const dispatch = useDispatch()
    // stores to keep track of both the movie and all the genres
    const detailsForMovie = useSelector((store) => store.movieDetailsReducer);
    const genreDetails = useSelector((store) => store.genres);

    const fetchDetails = () => {
        console.log('movie item in function fetchDetails is:', movie);
        dispatch({
            type: 'GET_DETAILS',
            payload: movie
        })
        history.push(`/${movie.id}`)
    }
    return (
        <>
            <h3>{movie.title}</h3>
            <img onClick={fetchDetails} src={movie.poster} alt={movie.title} />
        </>
    )
}

export default MovieItem;