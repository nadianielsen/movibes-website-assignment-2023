import useAxios from "../customHooks/useAxios";
import { Link } from "react-router-dom";
import {IoIosStar} from "react-icons/io"


const MovieList = ({headline, url}) => {

    const {data, loading, error} = useAxios(url)

    return ( 
        <article className="mt-6">
        <article className="flex justify-between pr-11">
            <h2 className="font-semibold font-['Poppins'] text-neutral-200 pl-5 pt-5 text-2xl">{headline}</h2>
            <Link to={"/seeall"} className="text-neutral-600 pt-7 font-semibold font-['Poppins']">See all</Link>
        </article>
        <article className="flex">
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {/* index tæller op til 19 og if statementen stopper den for at gå mere 4 ting, og derfor at vi bruger return er, fordi vi går ind i javascript/jsx med curlybrackets. */}
            {data?.results?.map((movie, index) => {
               if (index < 4 ) return (
                <Link to={`/detailmovies/${movie.id}`} className="text-none">
                    <div className="relative">
                        <div className="bg-neutral-300 bg-opacity-20 w-20 h-7 rounded-tr-3xl rounded-bl-3xl ml-[6.99rem] flex justify-evenly backdrop-blur-sm absolute left-5">
                            <IoIosStar className="text-yellow-400 text-2xl"/>
                            <h3 className="text-xs pt-1.5 text-white black-text-shadow">{movie.vote_average}</h3>
                        </div>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="w-48 h-72 rounded-3xl m-5" />
                    </div>
                </Link>
               )
            })}
        </article>
        </article>

     );
    }
    // 
 
export default MovieList;