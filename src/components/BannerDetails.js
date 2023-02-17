import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom";

const BannerDetails = ({id, backdrop_path}) => {


    return (
        <div className="w-[76rem] h-80 bg-[#212121] rounded-3xl flex justify-center items-center m-6 relative ">
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" className="absolute w-full h-full rounded-3xl object-cover" />
            <Link to={`/trailer/${id}`}>
            <h2 className="text-white black-text-shadow text-2xl absolute bottom-20 left-[32.5rem]">Watch Trailer</h2>
            <div className="bg-neutral-300 bg-opacity-20 w-20 h-20 rounded-full backdrop-blur-sm box-shadow relative">
                <FaPlay className="text-white text-4xl absolute top-6 left-6"/> 
            </div>
            </Link>                   
        </div>
    );
}

export default BannerDetails;

