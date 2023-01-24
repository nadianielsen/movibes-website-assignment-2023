import { Link } from "react-router-dom";
import MovieCards from "../components/MovieCards";
import SortBy from "../components/SortBy";
import notification from "../components/notification.svg"
import { BsFillPersonFill } from "react-icons/bs"


const Home = () => {
    return ( 
       <article className="">
        <div className="flex">
            <input type="search" name="search" id="search" placeholder="Search for movies, TV shows..." className="w-[56rem] h-16 rounded-full ml-5 pl-10 bg-[#262626] mt-6"/>
            <button className="w-16 h-16 bg-[#262626] rounded-full mt-6 ml-32">
                <img src={notification} alt="" className="m-auto pt-1" />
            </button>
            <div className="w-16 h-16 bg-[#262626] mt-6 rounded-full ml-8">
            <BsFillPersonFill className="text-4xl text-neutral-500 m-auto mt-3 "/>
            </div>
        </div>
            <div className="bg-white w-[56rem] h-72 rounded-3xl ml-5 mt-10"></div>
            <div>
                <div className="flex gap-x-[44.7rem]">
                <h2 className="font-semibold font-['Poppins'] text-neutral-200 pl-5 pt-5 text-2xl">Trending</h2>
                <Link className="text-neutral-600 pt-7 font-semibold font-['Poppins']">See all</Link>
                </div>
            </div>
            <MovieCards />
            <SortBy />
       </article>
    );
}
 
export default Home;