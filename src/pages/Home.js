import SortBy from "../components/SortBy";
import MovieSection from "../components/MovieSection";
import Search from "../components/Search";
import NotificationProfileSection from "../components/NotificationProfileSection";
import Trending from "../components/Trending";
import UpcomingComponent from "../components/UpcomingComponent";
import TVSeriesComponent from "../components/TVSeriesComponent";
import PopularMovies from "../components/PopularMovies";
import BannerHome from "../components/BannerHome";
import MovieList from "../components/MovieList";


const Home = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const date = new Date()

    const month = date.getMonth()

    return ( 
        <>
       <article className="col-span-3">
             <Search />      
             <BannerHome />
             <MovieList headline="Trending" url={`https://api.themoviedb.org/3/trending/all/day?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`}/>
             <MovieList headline={"Upcoming"} url={`https://api.themoviedb.org/3/movie/upcoming?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`}/>
             <MovieList headline={"TV Series"} url={`https://api.themoviedb.org/3/tv/popular?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`}/>
             <MovieList headline={`Popular movies this ${monthNames[month]}`} url={`https://api.themoviedb.org/3/trending/movie/week?api_key=75f15351c6119a96302b866663e596b0`}/>
       </article>
       <article>
        <NotificationProfileSection />
        <SortBy text="Categories"/>
       </article>

    </>
    );
}
 
export default Home;