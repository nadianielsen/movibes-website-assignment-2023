import MovieList from "../components/MovieList";
import useAxios from "../customHooks/useAxios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const AllMoviesPage = () => {
    const baseUrl = "https://api.themoviedb.org/3/search/multi?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1&include_adult=false"

    const [fetchUrl, setFetchUrl] = useState(baseUrl);

    const {data, loading, error} = useAxios(fetchUrl)

    const [params] = useSearchParams()

    console.log(params.getAll("search"))

    console.log(params)

    useEffect(() => {
    
        console.log("url params changed")
        if (params.get("search") !== null ) {
            setFetchUrl(baseUrl + `?q=${params.get("search")}`)
        } else {
            setFetchUrl(baseUrl)
        }
      }, [params]);

    return ( 
        <article>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data?.results?.map((movie) => 
            <MovieList url={movie.poster_path} />
            )}
        </article>
     );
}
 
export default AllMoviesPage;