import SortBy from "../components/SortBy";
import { FaPlay } from "react-icons/fa"
import MovieSection from "../components/MovieSection";
import { AiOutlineInfoCircle } from "react-icons/ai"
import Search from "../components/Search";
import NotificationProfileSection from "../components/NotificationProfileSection";
import Trending from "../components/Trending";


const Home = () => {
    return ( 
        <>
       <article className="col-span-3">
             <Search />      
            <div className="bg-white w-[56rem] h-72 rounded-3xl ml-5 mt-10 flex justify-end items-end">
                <button className="bg-neutral-300 bg-opacity-20 w-32 h-14 rounded-2xl backdrop-blur-sm mb-4 mr-[2rem] box-shadow">
                    <span className="flex gap-4 ml-7 text-white">
                    <FaPlay className="mt-1"/> 
                    Play
                    </span>
                    </button>
                    <button className="bg-neutral-300 bg-opacity-20 w-44 h-14 rounded-2xl backdrop-blur-sm mb-4 mr-6 box-shadow">
                        <span className="flex gap-4 text-white ml-8">
                            <AiOutlineInfoCircle className="mt-1"/>
                            More Info
                        </span>
                    </button>
            </div>
            <div>
            </div>
                <Trending />
                <MovieSection text="Upcoming"/>
                <MovieSection text="TV Series"/>
                <MovieSection text="Popular Movies This Month"/>
       </article>
       <article>
        <NotificationProfileSection />
        <SortBy text="Categories"/>
       </article>

    </>
    );
}
 
export default Home;