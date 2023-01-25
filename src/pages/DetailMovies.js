import NotificationProfileSection from "../components/NotificationProfileSection";
import Search from "../components/Search";
import { FaPlay } from "react-icons/fa"

const DetailMovies = () => {
    return ( 
        <>
        <div className="col-span-3">
            <Search />
        </div>
            <NotificationProfileSection />
            <article className="col-span-4">
                <div className="w-[75rem] h-80 bg-white m-6 relative bottom-32 rounded-3xl flex justify-center items-center ">
                    <div className="inline-block text-center">
                    <button className="bg-neutral-300 bg-opacity-20 w-20 h-20 rounded-full backdrop-blur-sm box-shadow">                    
                        <FaPlay className="text-white m-6 text-4xl"/> 
                    </button>
                        <h2 className="text-white black-text-shadow text-2xl">Watch Trailer</h2>
                    </div>
                </div>
                
            </article>
        </>
     );
}
 
export default DetailMovies;