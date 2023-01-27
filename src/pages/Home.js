import SortBy from "../components/SortBy";
import MovieSection from "../components/MovieSection";
import Search from "../components/Search";
import NotificationProfileSection from "../components/NotificationProfileSection";
import Trending from "../components/Trending";
import UpcomingComponent from "../components/UpcomingComponent";
import TVSeriesComponent from "../components/TVSeriesComponent";
import PopularMovies from "../components/PopularMovies";
import BannerHome from "../components/BannerHome";


const Home = () => {
    return ( 
        <>
       <article className="col-span-3">
             <Search />      
             <BannerHome />
                <Trending />
                <UpcomingComponent />
                <TVSeriesComponent />
                <PopularMovies />
       </article>
       <article>
        <NotificationProfileSection />
        <SortBy text="Categories"/>
       </article>

    </>
    );
}
 
export default Home;