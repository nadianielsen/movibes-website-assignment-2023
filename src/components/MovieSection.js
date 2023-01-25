import { Link } from "react-router-dom";
import MovieCards from "./MovieCards";

const MovieSection = (props) => {
    return ( 
        <section>
        <section className="flex justify-between pr-11">
                <h2 className="font-semibold font-['Poppins'] text-neutral-200 pl-5 pt-5 text-2xl">{props.text}</h2>
                <Link className="text-neutral-600 pt-7 font-semibold font-['Poppins']">See all</Link>
        </section>
                <MovieCards />
        </section>
     );
}
 
export default MovieSection;