import { Link } from "react-router-dom";
import moviecollage from "./moviecollage.svg"
import { BsListUl } from "react-icons/bs";

const MovieBoxDetailSite = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const date = new Date()

    const month = date.getMonth()

    return ( 
                <div className="bg-white w-80 h-48 rounded-xl aspect-video relative left-5 bottom-20 flex">
                <img src={moviecollage} alt="" className=" w-full h-full object-cover absolute rounded-xl"/>
                <div className="absolute bg-neutral-300 bg-opacity-20 w-80 h-12 rounded-xl backdrop-blur-sm top-36">
                    <Link className="text-white relative text-sm top-3.5 left-3 flex gap-1"><BsListUl className="text-xl"/>{`The Best Movies and Shows in ${monthNames[month]}`}</Link>
                </div>
                </div>
     );
}
 
export default MovieBoxDetailSite;