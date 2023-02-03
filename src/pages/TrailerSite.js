// import { useParams } from "react-router-dom";
import useAxios from "../customHooks/useAxios";

// https://api.themoviedb.org/3/movie/315162/videos?api_key=75f15351c6119a96302b866663e596b0&language=en-US

const TrailerSite = () => {

    // const trailer = data?.results.pop()
    // const params = useParams("id")
    // console.log(data.results[0])
    
    const {data, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/315162/videos?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)
    
    
    // const iframeSource = `https://www.youtube.com/embed/${data.results[0]}`

    if (error) {
        return (
            <p>{error}</p>
        )
    }
    if (loading) {
        return (
            <p>Loading...</p>
        )
    }
    if (data) {
        return (
            <iframe className="col-span-4 w-full h-full" src="https://www.youtube.com/embed/${data.results[0].key}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )
    }
   
}
 
export default TrailerSite;