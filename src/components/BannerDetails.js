import { FaPlay } from "react-icons/fa"
import useAxios from "../customHooks/useAxios";
import { Link, useParams } from "react-router-dom";

const BannerDetails = () => {

    const {id} = useParams();

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    return (
        <div className="w-[75rem] h-80 bg-[#212121] rounded-3xl flex justify-center items-center m-6 relative ">
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {movie && (
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="absolute w-full h-full rounded-3xl object-cover" />
        )}
            <Link to={`/trailer/${movie?.id}`}>
            <h2 className="text-white black-text-shadow text-2xl absolute bottom-20 left-[32.5rem]">Watch Trailer</h2>
            <div className="bg-neutral-300 bg-opacity-20 w-20 h-20 rounded-full backdrop-blur-sm box-shadow relative">
                <FaPlay className="text-white text-4xl absolute top-6 left-6"/> 
            </div>
            </Link>                   
        </div>
    );
}

export default BannerDetails;