import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import TextStyle from "./TextStyle";


const MovieDescription = ({overview}) => {

    return (
    <article className="">
            <div className=" w-[75rem] gap-x-2 pb-2">
            <div className="w-[72%]">
            <TextStyle text={overview}/>
            </div>
            </div>
      
        </article>
    );
}

export default MovieDescription;