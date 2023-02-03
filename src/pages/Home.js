import Search from "../components/Search";
import NotificationProfileSection from "../components/NotificationProfileSection";
import BannerHome from "../components/BannerHome";
import MovieList from "../components/MovieList";
import Categories from "../components/Categories";
import Services from "../components/Services";
import OptionSelect from "../components/OptionSelect";


const Home = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const date = new Date()

    const month = date.getMonth()

    return (
        <>
            <article className="col-span-3">
                <Search />
                <BannerHome />
                <MovieList headline="Trending" url={`https://api.themoviedb.org/3/trending/all/day?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`} />
                <MovieList headline={"Upcoming"} url={`https://api.themoviedb.org/3/movie/upcoming?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`} />
                <MovieList headline={"TV Series"} url={`https://api.themoviedb.org/3/tv/popular?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`} />
                <MovieList headline={`Popular movies this ${monthNames[month]}`} url={`https://api.themoviedb.org/3/trending/movie/week?api_key=75f15351c6119a96302b866663e596b0`} />
            </article>
            <article>
                <NotificationProfileSection />
                <Categories text="Categories" />
                <Services text="Services" />
                <OptionSelect text="Filters"/>
                <OptionSelect text="Mood"/>
                <OptionSelect text="Year"/>
                <OptionSelect text="Language"/>
                <OptionSelect text="Age Rating"/>
            </article>

        </>
    );
}

export default Home;