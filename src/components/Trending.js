// import useAxios from "../customHooks/useAxios";
// import MovieSection from "./MovieSection";
import axios from "axios";
import { useEffect, useState } from "react";

// const {data, loading, error} = useAxios(`https://api.themoviedb.org/3/trending/all/day?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`)

const Trending = () => {

    let imgPath = "https://image.tmdb.org/t/p/original"

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/trending/all/day?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`)
        .then((res) => setData(res.data.results))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);

    console.log("jhrj")

    return ( 
        <>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {data?.results?.map(result => (
                <img src={imgPath + result.poster_path} alt="" />
            ))}
        </>
     );
}
 
export default Trending;