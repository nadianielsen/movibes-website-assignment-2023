import { useParams } from "react-router-dom";
import useAxios from "../customHooks/useAxios";


const TrailerSite = () => {

    const params = useParams("id")
   
    const {data} = useAxios(`https://api.themoviedb.org/3/movie/videos?https://api.themoviedb.org/3/movie/${params.id}}/videos?api_key=75f15351c6119a96302b866663e596b0&language=en-USapi_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    const trailer = data?.results.pop()
    console.log(trailer)
   
    return (  
                      
         <iframe className="col-span-4 w-full h-full " src="https://www.youtube.com/embed/${trailer.key}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    );
}
 
export default TrailerSite;