import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import TextStyle from "./TextStyle";
import ButtonTickets from "../components/ButtonTickets.svg"


const MovieDescription = () => {

    const {id} = useParams()

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    return (
    <article className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movie && (
            <div className="flex w-[75rem] gap-x-2">
            <div className="w-[72%]">
            <TextStyle text={movie.overview}/>
            </div>
            <button className="bg-cyan-400 w-80 h-14 rounded-2xl text-white flex justify-center items-center pr-3 mt-7"><img src={ButtonTickets} alt="" className="w-8"/>See Showtimes</button>
            </div>
            )}
      
        </article>
    );
}

export default MovieDescription;