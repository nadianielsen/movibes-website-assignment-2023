import MovieSection from "../components/MovieSection";
import NotificationProfileSection from "../components/NotificationProfileSection";
import Search from "../components/Search";
import SortBy from "../components/SortBy";



const Movies = () => {
    return ( 
        <>
        <article className="col-span-3">
            <Search />
                <MovieSection  text="Trending"/>
                <MovieSection text="Upcoming"/>
                <MovieSection text="TV Series"/>
                <MovieSection text="Popular Movies This Month"/>
        <SortBy />
        </article>
        <NotificationProfileSection />
        </>
    );
}
 
export default Movies;