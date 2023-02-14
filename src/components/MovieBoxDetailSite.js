import { Link } from "react-router-dom";
import { BsListUl } from "react-icons/bs";

const MovieBoxDetailSite = ({img, headline}) => {


    return ( 
                <div className="bg-white w-80 h-48 rounded-xl aspect-video relative">
                <img src={img} alt="" className=" w-full h-full object-cover absolute rounded-xl"/>
                {/* <div className="bg-black bg-opacity-40 w-80 h-12 rounded-xl backdrop-blur-sm relative top-36">
                    <Link className="text-white text-sm top-3.5 left-3 flex gap-1 absolute"><BsListUl className="text-xl"/>{`The Best Movies and Shows in ${monthNames[month]}`}</Link>
                </div> */}
                <div className="bg-black bg-opacity-40 w-80 h-12 rounded-xl backdrop-blur-sm relative top-36">
                    <Link className="text-white text-sm top-3.5 left-3 flex gap-1 absolute"><BsListUl className="text-xl"/>{headline}</Link>
                </div>
                </div>
     );
}
 
export default MovieBoxDetailSite;