import { FaSearch } from "react-icons/fa"; 

const Search = () => {
    return (
     <div className="flex">
        <FaSearch className="relative top-12 left-8 text-gray-400"/>
        <input type="search" name="search" id="search" placeholder="Search for movies, TV shows..." className="w-[56rem] h-16 rounded-full  pl-10 bg-[#262626] mt-6"/>
     </div>   
    ) 
}
 
export default Search;