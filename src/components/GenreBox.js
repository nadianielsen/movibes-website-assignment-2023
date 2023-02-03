import TextStyle from "./TextStyle";
import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";

const GenreBox = () => {

    const {id} = useParams();

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)
    console.log(movie)

    return (  
        <div className="border border-neutral-300 border-opacity-30 rounded-full w-20 text-center">
            {/* {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {movie.genres(genre => 
            <TextStyle text={genre.name}/>
            )} */}
        </div>
    );
}
 
export default GenreBox ;