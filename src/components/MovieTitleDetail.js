import TextStyle from "./TextStyle";
import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";

const MovieTitleDetail = () => {

    const {id} = useParams()

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {movie &&  (
                <TextStyle text={movie.title} />
            )}

        </div>
    );
}

export default MovieTitleDetail;