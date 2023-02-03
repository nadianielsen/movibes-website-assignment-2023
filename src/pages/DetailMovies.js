import NotificationProfileSection from "../components/NotificationProfileSection";
import Search from "../components/Search";
import { FaPlay } from "react-icons/fa"
import TextStyle from "../components/TextStyle";
import GenreBox from "../components/GenreBox"; 
import { FiHeart, FiShare2 } from "react-icons/fi"
import { BsBookmark, BsListUl } from "react-icons/bs"
import {IoIosStar} from "react-icons/io"
import useAxios from "../customHooks/useAxios";
import ButtonTickets from "../pages/ButtonTickets.svg"
import { Link, useParams } from "react-router-dom";


const DetailMovies = () => {

    const {id} = useParams();

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)
    console.log(movie)

    return ( 
        <>
        <article className="col-span-3">
            <Search />
                <div className="w-[75rem] h-80 bg-[#212121] rounded-3xl flex justify-center items-center m-6 relative ">
                {error && <p>{error}</p>}
                {loading && <p>Loading...</p>}
                {movie && (
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="absolute w-full h-full rounded-3xl object-cover" />
                )}
                    <h2 className="text-white black-text-shadow text-2xl absolute bottom-20">Watch Trailer</h2>
                    <button className="bg-neutral-300 bg-opacity-20 w-20 h-20 rounded-full backdrop-blur-sm box-shadow"> 
                    <Link to={"/trailer"}>
                        <FaPlay className="text-white m-6 text-4xl"/> 
                    </Link>                   
                    </button>
                </div>
                <article className="grid grid-cols-3 grid-rows-3 w-[75rem] m-6">
                    <div className="col-span-2 self-center">
                    <div className="flex gap-x-7">
                        <TextStyle text="Movie Title:" />
                        <TextStyle text="Year" />
                        <TextStyle text="PG-13" />
                        <TextStyle text="Length" />
                        <GenreBox />
                        </div>
                    </div>
                        <div className="row-start-2 col-span-2">
                            <TextStyle text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident illo nisi porro illum quis debitis in laborum blanditiis molestias itaque ea nemo, possimus ab harum ipsam nobis, officia minima."/>
                        </div>
                        <div className="flex col-start-3 col-end-3 gap-x-7 m-auto mr-10">
                            <FiHeart className="text-neutral-300 text-2xl" />
                            <FiShare2 className="text-neutral-300 text-2xl" />
                            <BsBookmark className="text-neutral-300 text-2xl" />
                            <div className="flex gap-x-2">
                            <IoIosStar className="text-yellow-400 text-2xl" />
                            <TextStyle text="8.5"/>
                            <p className="text-[#666666] ">| 350K</p>
                            </div>
                        </div>
                        <div className="col-start-3 row-start-2 m-auto">
                            <button className="bg-cyan-400 w-80 h-14 rounded-2xl text-white flex justify-center items-center pr-3"><img src={ButtonTickets} alt="" className="w-8"/>See Showtimes</button>
                        </div>
                        <div className="col-start-3 row-start-3 m-auto">
                            <button className="bg-black w-80 h-14 rounded-2xl text-white flex justify-center items-center gap-x-1"><BsListUl className="text-xl"/>More watch options</button>        
                        </div>
                    </article>
        </article>
            <NotificationProfileSection />
               
        </>
     );
}
 
export default DetailMovies;