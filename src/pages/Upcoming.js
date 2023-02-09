import MovieList from "../components/MovieList";
import NotificationProfileSection from "../components/NotificationProfileSection";
import Categories from "../components/Categories";
import Services from "../components/Services";
import OptionSelect from "../components/OptionSelect";
import SearchForm from "../components/SearchForm";

const Upcoming = () => {
    return (
        <>
            <article className="col-span-3">
                <SearchForm />
                <MovieList headline={"Upcoming"} url={`https://api.themoviedb.org/3/movie/upcoming?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`} />
            </article>
            <div>
                <NotificationProfileSection />
                <Categories text="Categories" />
                <Services text="Services" />
                <OptionSelect text="Filters" />
                <OptionSelect text="Mood" />
                <OptionSelect text="Year" />
                <OptionSelect text="Language" />
                <OptionSelect text="Age Rating" />
            </div>
        </>
    );
}

export default Upcoming;