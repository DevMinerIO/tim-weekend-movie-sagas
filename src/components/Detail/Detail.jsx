import { useHistory } from "react-router-dom";

function Detail() {
    const history = useHistory();

    const handleClick = () => {
        // m TODO add codeblock
    }


    return (
        // TODO get more detailed info on the Movie item clicked
        <>
            <button onClick={handleClick}>Back to Movie List</button>
        </>
    )
}

export default Detail;