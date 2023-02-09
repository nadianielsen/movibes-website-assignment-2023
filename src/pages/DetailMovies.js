import NotificationProfileSection from "../components/NotificationProfileSection";
import TextStyle from "../components/TextStyle";
import GenreBox from "../components/GenreBox";
import { FiHeart, FiShare2 } from "react-icons/fi"
import { BsBookmark, BsListUl } from "react-icons/bs"
import MovieTitleDetail from "../components/MovieTitleDetail";
import ReleaseDate from "../components/ReleaseDate";
import MovieLength from "../components/MovieLength";
import Rating from "../components/Rating";
import BannerDetails from "../components/BannerDetails";
import MovieDescription from "../components/MovieDescription";
import CrewDetails from "../components/CrewDetails";
import CastDetail from "../components/CastDetail";
import SearchForm from "../components/SearchForm";


const DetailMovies = () => {


    return (
        <>
            <article className="col-span-4">
                <div className="flex gap-[12rem]">
                    <SearchForm />
                    <NotificationProfileSection />
                </div>
                <BannerDetails />
                <article className="grid grid-cols-3 grid-rows-1 w-[75rem] m-6">
                    <div className="col-span-2 self-center">
                        <div className="flex gap-x-3">
                            <MovieTitleDetail />
                            <ReleaseDate />
                            <TextStyle text="PG-13" />
                            <MovieLength />
                            <GenreBox />
                        </div>
                    </div>
                    <div className="flex col-start-3 col-end-3 gap-x-7 m-auto mr-10">
                        <FiHeart className="text-neutral-300 text-2xl" />
                        <FiShare2 className="text-neutral-300 text-2xl" />
                        <BsBookmark className="text-neutral-300 text-2xl" />
                        <Rating />
                    </div>
                    <MovieDescription />
                </article>
                <CrewDetails />
                <CastDetail />
            </article>
        </>
    );
}

export default DetailMovies;

