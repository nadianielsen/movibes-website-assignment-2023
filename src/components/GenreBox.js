import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";

const GenreBox = ({genres}) => {


    return ( 
        <>
            {genres?.map((genre, index) => { if(index < 2 ) return (
            <div className="border border-neutral-300 border-opacity-30 rounded-2xl text-center px-[0.3rem]">
                <p className="text-neutral-200 text-sm">{genre.name} </p>  
            </div>
            )}
            )}
        </> 
    );
}
 
export default GenreBox ;