import useAxios from "../customHooks/useAxios";
import { AiOutlineInfoCircle } from "react-icons/ai"
import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom";


const BannerHome = () => {

    const {data, loading, error} = useAxios(`https://api.themoviedb.org/3/person/{person_id}/images?api_key=75f15351c6119a96302b866663e596b0`)
    console.log(data)

    return ( 
    <div className="bg-transparent w-[56rem] h-72 rounded-3xl ml-5 mt-10 flex justify-end items-end bg-gradient-to-b from-neutral-700 bg-blend-multiply relative aspect-video">
        {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {data?.results?.map(movie => (
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="absolute w-full h-full rounded-3xl object-cover" />
                ))}
                <button className="bg-neutral-300 bg-opacity-20 w-32 h-14 rounded-2xl backdrop-blur-sm mb-4 mr-[2rem] box-shadow">
                    <span className="flex gap-4 ml-7 text-white">
                    <FaPlay className="mt-1"/> 
                    Play
                    </span>
                    </button>
                    <button className="bg-neutral-300 bg-opacity-20 w-44 h-14 rounded-2xl backdrop-blur-sm mb-4 mr-6 box-shadow">
                        <Link to={"/detailmovies"} className="flex gap-4 text-white ml-8">
                            <AiOutlineInfoCircle className="mt-1"/>
                            More Info
                        </Link>
                    </button>
            </div>
     );
}
 
export default BannerHome;