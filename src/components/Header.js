import Navigation from "./Navigation";
import PlayMovieQuizes from "./PlayMovieQuizes";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi"

const Header = () => {

    return ( 
        <header className="bg-neutral-900 w-64 h-screen rounded-r-3xl sticky top-0 text-center pt-6">
            <Link to={"/"} className="text-cyan-400 text-4xl font-['oswald'] text-shadow">MOVIBES</Link>
            <Navigation />
            <PlayMovieQuizes />
            <Link className="text-neutral-700 flex justify-center gap-2 pt-4 font-semibold font-['Poppins'] hover:text-cyan-500 transition hover:logout-textshadow"><BiLogIn className="mt-0.5 text-xl"/>Log out</Link>
        </header>
     );
}
 
export default Header;