import NotificationProfileSection from "../components/NotificationProfileSection";
import Search from "../components/Search";
import { FaPlay } from "react-icons/fa"
import TextStyle from "../components/TextStyle";
import GenreBox from "../components/GenreBox";
import { FiHeart, FiShare2 } from "react-icons/fi"
import { BsBookmark } from "react-icons/bs"
import { IoIosStar } from "react-icons/io"
// import useAxios from "../customHooks/useAxios";


const DetailMovies = () => {

    // const {data, laoding, error} = useAxios(``)

    return (
        <>
            <article className="col-span-3">
                <Search />
                <div className="w-[75rem] h-80 bg-white rounded-3xl flex justify-center items-center m-6">
                    <div>
                        <div className="inline-block text-center">
                            <button className="bg-neutral-300 bg-opacity-20 w-20 h-20 rounded-full backdrop-blur-sm box-shadow">
                                <FaPlay className="text-white m-6 text-4xl" />
                            </button>
                            <h2 className="text-white black-text-shadow text-2xl">Watch Trailer</h2>
                        </div>
                    </div>
                </div>
                <article className="grid grid-cols-3 grid-row-5 w-[75rem] ml-10 m-5 gap-y-5">
                    <article className="flex gap-x-16 col-span-3">
                        <TextStyle text="Movie Title:" />
                        <TextStyle text="Year" />
                        <TextStyle text="PG-13" />
                        <TextStyle text="Length" />
                        <GenreBox />
                        <div className="flex ml-[18rem]  gap-x-10">
                            <FiHeart className="text-neutral-300 text-2xl" />
                            <FiShare2 className="text-neutral-300 text-2xl" />
                            <BsBookmark className="text-neutral-300 text-2xl" />
                            <IoIosStar className="text-yellow-400 text-2xl" />
                        </div>
                    </article>
                    <div className="col-span-2 row-start-2 mt-5">
                        <TextStyle text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum dolorum officiis ipsam. Inventore sit nostrum eligendi labore pariatur. Deleniti impedit illum ipsam, non omnis molestias soluta veniam molestiae quae." />
                    </div>
                    <div className=" col-start-1 row-start-3">
                        <TextStyle text="Directer:" />
                        <TextStyle text="Writers:" />
                        <TextStyle text="Star:" />
                    </div>
                    <button className="w-64 h-14 bg-cyan-400 bg-opacity-75 text-neutral-300 rounded-2xl col-span-1 row-start-4">Top Rated Movie</button>
                    <article className="col-start-3 row-start-2">
                    </article>
                </article>
            </article>
            <NotificationProfileSection />

        </>
    );
}

export default DetailMovies;