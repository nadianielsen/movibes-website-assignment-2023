import NotificationProfileSection from "../components/NotificationProfileSection";
import Search from "../components/Search";
import { FaPlay } from "react-icons/fa"
import TextStyle from "../components/TextStyle";
import GenreBox from "../components/GenreBox";

const DetailMovies = () => {
    return ( 
        <>
        <div className="col-span-3">
            <Search />
                <div className="w-[75rem] h-80 bg-white rounded-3xl flex justify-center items-center m-6">
                    <div>
                    <div className="inline-block text-center">
                    <button className="bg-neutral-300 bg-opacity-20 w-20 h-20 rounded-full backdrop-blur-sm box-shadow">                    
                        <FaPlay className="text-white m-6 text-4xl"/> 
                    </button>
                        <h2 className="text-white black-text-shadow text-2xl">Watch Trailer</h2>
                    </div>
                    </div>
                </div>
                <div className="flex gap-x-16 pl-10">
                <TextStyle text="Movie Title:"/>
                <TextStyle text="Year"/>
                <TextStyle text="PG-13"/>
                <TextStyle text="Length"/>
                <GenreBox />
                </div>
                <div className="w-7/12 ml-10 mt-5">
                <TextStyle text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum dolorum officiis ipsam. Inventore sit nostrum eligendi labore pariatur. Deleniti impedit illum ipsam, non omnis molestias soluta veniam molestiae quae."/>

                </div>
        </div>
            <NotificationProfileSection />
               
        </>
     );
}
 
export default DetailMovies;