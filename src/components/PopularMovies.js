import useAxios from "../customHooks/useAxios";
import { Link } from "react-router-dom";


const PopularMovies = () => {

    const {data, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/popular?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`)

    console.log(data)

    return ( 
        <article className="mt-6">
        <article className="flex justify-between pr-11">
        <h2 className="font-semibold font-['Poppins'] text-neutral-200 pl-5 pt-5 text-2xl">Popular Movies</h2>
        <Link className="text-neutral-600 pt-7 font-semibold font-['Poppins']">See all</Link>
        </article>
        <article className="flex">
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {data?.results?.map((movie, index) => {
               if (index < 4 ) return (<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="w-48 h-72 rounded-3xl m-5 relative" />)
            })}
        </article>
            </article>
     );
}
 
export default PopularMovies;