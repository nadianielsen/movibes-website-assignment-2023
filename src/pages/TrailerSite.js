import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const TrailerSite = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [videos, setVideos] = useState();
    const [videoId, setVideoId] = useState();

    const {id} = useParams();

    useEffect(() => {
      axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)  
      .then((response) => setVideos(response.data.results))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false))
    }, [])
    
    useEffect(() => {
       if (videos) {
        setVideoId(
            videos.find((video) => 
            video.type.toLowerCase().includes("trailer")
                )
            )
        }   
    }, [videos])

    videoId && console.log(videoId)

        return videoId && ( 
            <iframe className="w-full h-full col-span-4" src={`https://www.youtube.com/embed/${videoId.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>        
        )
   
}
 
export default TrailerSite;

