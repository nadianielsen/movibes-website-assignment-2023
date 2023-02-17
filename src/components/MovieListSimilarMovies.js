import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io"


const MovieListSimilarMovies = ({ headline, similarmovies}) => {


    console.log(similarmovies)

    return (
        <article className="mt-6">
            <article className="flex justify-between pr-11">
                <h2 className="font-semibold font-['Poppins'] text-neutral-200 pl-5 pt-5 text-2xl">{headline}</h2>
                <Link to={"/seeall"} className="text-neutral-600 pt-7 font-semibold font-['Poppins']">See all</Link>
            </article>
            <article className="flex">
                {/* index tæller op til 19 og if statementen stopper den for at gå mere 4 ting, og derfor at vi bruger return er, fordi vi går ind i javascript/jsx med curlybrackets. */}
                {similarmovies?.results?.map((movie, index) => {
                    if (index < 4) return (
                        <Link to={`/detailmoviessimilarmovies/${movie.id}`} className="text-none">
                            <div className="hover:scale-110 transition-all">
                                <div className="relative">
                                    <div className="bg-neutral-300 bg-opacity-20 w-20 h-7 rounded-tr-3xl rounded-bl-3xl ml-[6.99rem] flex justify-evenly backdrop-blur-sm absolute left-5">
                                        <IoIosStar className="text-yellow-400 text-2xl" />
                                        <h3 className="text-xs pt-1.5 text-white black-text-shadow">{movie.vote_average}</h3>
                                    </div>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="w-48 h-72 m-5 rounded-3xl hover:black-box-shadow " />
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </article>
        </article>

    );
}
// 

export default MovieListSimilarMovies;