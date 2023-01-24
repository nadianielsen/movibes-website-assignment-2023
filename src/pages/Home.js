import { Link } from "react-router-dom";
import MovieCards from "../components/MovieCards";


const Home = () => {
    return ( 
       <div className="">
            <input type="search" name="search" id="search" placeholder="Search for movies, TV shows..." className="w-[56rem] h-16 rounded-full ml-5 pl-10 bg-[#262626] mt-6"/>
            <div className="bg-white w-[56rem] h-72 rounded-3xl ml-5 mt-10"></div>
            <div>
            <h2 className="font-semibold font-['Poppins'] text-neutral-200 p-5 text-2xl">Trending</h2>
            <Link className="text-neutral-600">See all</Link>
            </div>
            <MovieCards />
       </div>
    );
}
 
export default Home;