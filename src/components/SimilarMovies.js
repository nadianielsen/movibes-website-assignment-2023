import { useParams } from "react-router-dom";
import MovieListSimilarMovies from "./MovieListSimilarMovies";

const SimilarMovies = ({similarmovies}) => {

    const {id} = useParams()

    return (
        <article className="flex">
         <MovieListSimilarMovies similarmovies={similarmovies} url={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`} headline={"Similar Movies"}/>
        </article>
    );
}

export default SimilarMovies;