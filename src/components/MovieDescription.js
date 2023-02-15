import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import TextStyle from "./TextStyle";


const MovieDescription = () => {

    const {id} = useParams()

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    return (
    <article className="">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movie && (
            <div className=" w-[75rem] gap-x-2 pb-2">
            <div className="w-[72%]">
            <TextStyle text={movie.overview}/>
            </div>
            </div>
            )}
      
        </article>
    );
}

export default MovieDescription;