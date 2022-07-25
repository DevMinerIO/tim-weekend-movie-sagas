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
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
            <button onClick={handleClick}>Back to Movie List</button>
        </>
    )
}

export default Detail;