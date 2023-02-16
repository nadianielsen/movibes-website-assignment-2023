import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import TextStyle from "./TextStyle";
import {IoIosStar} from "react-icons/io"


const Rating = () => {

    const {id} = useParams()

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {movie && (
            <div className="flex gap-x-2">
                <IoIosStar className="text-yellow-400 text-2xl" />
                <TextStyle text={movie.vote_average.toFixed(1)}/>
                <p className="text-[#666666] ">| 350K</p>
            </div>
            )}
        </>
    );
}

export default Rating;