import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";

const GenreBox = () => {

    const {id} = useParams();

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    return ( 
        <>
        {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {movie?.genres.map((genre, index) => { if(index < 2 ) return (
            <div className="border border-neutral-300 border-opacity-30 rounded-2xl text-center px-[0.3rem]">
                <p className="text-neutral-200 text-sm">{genre.name} </p>  
            </div>
            )}
            )}
        </> 
    );
}
 
export default GenreBox ;