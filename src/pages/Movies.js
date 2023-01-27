import NotificationProfileSection from "../components/NotificationProfileSection";
import PopularMovies from "../components/PopularMovies";
import Search from "../components/Search";
import SortBy from "../components/SortBy";
import Trending from "../components/Trending";
import UpcomingMovies from "../components/UpcomingMovies";



const Movies = () => {
    return ( 
        <>
        <article className="col-span-3">
            <Search />
                <Trending />
                <UpcomingMovies />
                {/* <MovieSection text="TV Series"/> */}
                <PopularMovies text="Popular Movies This Month"/>
        </article>
        <div>
        <NotificationProfileSection />
        <SortBy />
        </div>
        </>
    );
}
 
export default Movies;