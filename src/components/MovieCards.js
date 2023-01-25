import {IoIosStar} from "react-icons/io"
import { Link } from "react-router-dom";

const MovieCards = () => {
    return (
        <Link to={"/detailmovies"} className="">
            <div className="bg-white w-48 h-72 rounded-3xl m-5">
            <div className="bg-neutral-300 bg-opacity-20 w-20 h-7 rounded-tr-3xl rounded-bl-3xl ml-[6.99rem] flex justify-evenly backdrop-blur-sm">
                <IoIosStar className="text-yellow-400 text-2xl"/>
                <h3 className="text-xl text-white">1.2</h3>
            </div>               
            </div>
        </Link>
     );
     
}
 
export default MovieCards;