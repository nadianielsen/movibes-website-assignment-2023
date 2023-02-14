import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import TextStyle from "./TextStyle";

const MovieLength = () => {

    const {id} = useParams()

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)
    console.log(movie)

    //Math.floor runder ned og returnèr et større tal som enten er mindre eller lig med til den givende tal.
    let hours = Math.floor(movie?.runtime / 60)

    let minutes = movie?.runtime % 60;

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {movie && (
                <TextStyle text={hours + "h " + minutes + "min"} />
            )}
        </div>
    );
}

export default MovieLength;