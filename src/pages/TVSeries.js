import MovieList from "../components/MovieList";
import NotificationProfileSection from "../components/NotificationProfileSection";
import Search from "../components/Search";
import SortBy from "../components/SortBy";


const TVSeries = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const date = new Date()

    const month = date.getMonth()

    return ( 
        <>
        <article className="col-span-3">
            <Search />
            <MovieList headline="Trending" url={`https://api.themoviedb.org/3/tv/popular?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`}/>
            <MovieList headline={"Top Rated TV Shows"} url={`https://api.themoviedb.org/3/tv/top_rated?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`} />
            <MovieList headline={"TV Series Airing Right Now"} url={`https://api.themoviedb.org/3/tv/on_the_air?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`}/>
        </article>
        <div>
        <NotificationProfileSection />
        <SortBy />
        </div>
        </>

     );
}
 
export default TVSeries;