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
import SearchForm from "../components/SearchForm";
import SimilarMovies from "../components/SimilarMovies";
import buttontickets from "../components/buttontickets.svg"
import MovieBoxDetailSite from "../components/MovieBoxDetailSite";
import InfoBoxDetail from "../components/InfoBoxDetail";
import jokerimage from "../components/jokerimage.svg"
import topgunimage from "../components/topgunimage.svg"
import moviecollage from "../components/moviecollage.svg"
import toptvdramas from "../components/toptvdramas.svg"
import actionimage from "../components/actionimage.svg"
import upcomingsequelscollage from "../components/upcomingsequelscollage.svg"
import thenorthman from "../components/thenorthman.svg"
import { Link } from "react-router-dom";
import CastDetail from "../components/CastDetail";



const DetailTvSeries = () => {


    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const date = new Date()

    const month = date.getMonth()

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
                    <div className="flex col-start-3 col-end-3 gap-x-7 m-auto mr-2">
                        <FiHeart className="text-neutral-300 text-2xl" />
                        <FiShare2 className="text-neutral-300 text-2xl" />
                        <BsBookmark className="text-neutral-300 text-2xl" />
                        <Rating />
                    </div>
                </article>
                <article className="grid-columns gap-x-4 mt-6 ml-6">
                    <div>
                        <MovieDescription />
                    </div>
                    <div>
                        <button className="bg-cyan-400 w-80 h-14 text-neutral-200 rounded-xl flex justify-center items-center"><img src={buttontickets} alt="" />See Showtimes</button>
                    </div>
                    <div>
                        <CrewDetails />
                    </div>
                    <div>
                        <button className="bg-black w-80 h-14 rounded-2xl text-white flex justify-center items-center gap-x-1 mt-8"><BsListUl className="text-xl" />More watch options</button>
                    </div>
                    <div>
                        <CastDetail />
                    </div>
                    <div>
                        <MovieBoxDetailSite img={moviecollage} />
                        <div className="relative bottom-12">
                            <Link className="text-white text-sm top-3.5 left-3 flex gap-1 absolute"><BsListUl className="text-xl" />{`The Best Movies and Shows in ${monthNames[month]}`}</Link>
                        </div>
                        <InfoBoxDetail img={jokerimage} headline={"The Billion-Dollar Film Club: 50 Movies to Reach $1 Billion Worldwide"} textone={"updated 1 week ago"} texttwo={"50 images"} />
                        <InfoBoxDetail img={topgunimage} headline={"2022 Summer Movie Guide"} textone={"updated 1 month ago"} texttwo={"52 images"} />
                    </div>
                    <div className="">
                        <SimilarMovies />
                    </div>
                    <div>
                        <InfoBoxDetail img={actionimage} headline={"Upcoming Action and Adventure Movies and TV"} textone={"updated 3 months ago"} texttwo={"26 images"} />
                        <div className="mt-9">
                            <MovieBoxDetailSite img={toptvdramas} headline={"Top 50 TV Dramas"} />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="col-start-2">
                        <MovieBoxDetailSite img={upcomingsequelscollage} headline={"New & Upcoming Sequels, Prequels"} />
                    </div>
                    <div className="col-start-2">
                        <InfoBoxDetail img={thenorthman} headline={"Favourite"} textone={"updated 2 months ago"} texttwo={"48 images"} />
                    </div>
                    <div>
                    </div>
                </article>
            </article>
        </>
    );
}

export default DetailTvSeries;

