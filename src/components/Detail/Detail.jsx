import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


function Detail() {
    const movie = useSelector(store => store.movieDetailsReducer);
    const history = useHistory();

    const handleClick = () => {
        // m TODO add codeblock
        history.push('/');
    }

    return (
        // TODO get more detailed info on the Movie item clicked
        <>
            {/* {
                movie.map((currentMovie) => {
                    return (
                        <div>
                            <h3>{currentMovie.title}</h3>
                            <img src={currentMovie.poster} alt={currentMovie.title} />
                        </div>
                    )
                })
            } */}
            {/* entire movie objects saved in an array of objects. Have to refer to an index # */}
            {/* ? says if something exists, then render it. If not, then skip it. 
            ? Also if something exists LATER, then render when it does exist.  */}
            <h3>{movie[0]?.title}</h3>
            <img src={movie[0]?.poster} alt={movie[0]?.title} />
            <p>{movie[0]?.description}</p>
            <h3>Genres:</h3>
            <ul> {movie.map((genre, i) => {
                return (
                    <li key={i}> {genre.name} </li>
                ) 
            })}</ul>
            <button onClick={handleClick}>Back to Movie List</button>
        </>
    )
}

export default Detail;