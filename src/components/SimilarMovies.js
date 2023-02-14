import TextStyle from "./TextStyle";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";

const SimilarMovies = () => {

    const {id} = useParams()

    return (
        <article className="flex">
         <MovieList url={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`} headline={"Similar Movies"}/>
        </article>
    );
}

export default SimilarMovies;