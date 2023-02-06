import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import TextStyle from "./TextStyle";

const MovieDescription = () => {

    const {id} = useParams()

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movie && (
            <TextStyle text={movie.overview}/>
        )}
    </div>
    );
}

export default MovieDescription;