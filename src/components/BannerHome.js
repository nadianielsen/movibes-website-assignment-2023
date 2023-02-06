import { AiOutlineInfoCircle } from "react-icons/ai"
import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const BannerHome = () => {
    const [featured, setFeatured] = useState();
    const [backdrop, setBackdrop] = useState();
    const [reloadImage, setReloadImage] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                    // går ind og tager et tilfældigt billede 
        let randomMovie = Math.floor(Math.random() * 20)
        // hvis reloadImage, så vi får det her axios kald
        if(reloadImage) {
            axios(`https://api.themoviedb.org/3/movie/popular?api_key=75f15351c6119a96302b866663e596b0&language=en&page=1`)
            .then((response) => setFeatured(response.data.results[randomMovie]))
            .finally(() => setReloadImage(false))
        }
    }, [reloadImage]);

    useEffect(() => {
        if (featured) {
            axios(`https://api.themoviedb.org/3/movie/${featured.id}/images?api_key=75f15351c6119a96302b866663e596b0&language=en`)
            .then((response) => {
                // derfor den ikke skal return undefined, så vil der komme en blank box
                console.log(response.data)
                if (response.data.backdrops[0] !== undefined) {
                    setBackdrop(response.data.backdrops[0])
                } else {
                    setReloadImage(false)
                }
            })
            .finally(() => setLoading(false))
        }
    }, [featured]);

    // const {id} = useParams();

    // const {data: movie, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)



    return loading ? <p>Loading...</p> : ( 
    <div className="bg-transparent w-[56rem] rounded-3xl ml-5 mt-10 flex justify-end items-end bg-gradient-to-b from-neutral-700 bg-blend-multiply relative aspect-video">
                <img src={`https://image.tmdb.org/t/p/original${backdrop?.file_path}`} alt="" className="absolute w-full h-full rounded-3xl object-cover" />
                    <Link to={`/trailer/${featured.id}`} className=" text-white">
                        <div className="bg-neutral-300 bg-opacity-20 w-32 h-14 rounded-2xl backdrop-blur-sm mb-4 box-shadow flex gap-4 justify-center items-center">
                            <FaPlay/> 
                            Play
                        </div>
                    </Link>
                        <Link to={`/detailmovies/${featured.id}`} className=" text-white">
                            <div className="bg-neutral-300 bg-opacity-20 w-44 h-14 rounded-2xl backdrop-blur-sm mb-4 mr-6 box-shadow flex gap-4 ml-8 justify-center items-center">
                            <AiOutlineInfoCircle/>
                            More Info
                            </div>
                        </Link>
            </div>
     );
}
 
export default BannerHome;