import { FaSearch } from "react-icons/fa"; 
// import { createSearchParams, useNavigate } from "react-router-dom";


const SearchForm = () => {
    
    return (
     <form className="flex" action="/search">
        <button type="submit">
        <FaSearch className="relative top-3 left-8 text-gray-400"/>
        </button>
        <input type="search" name="query" id="search" placeholder="Search for movies, TV shows..." className="w-[56rem] h-16 rounded-full  pl-10 bg-[#262626] mt-6 text-gray-400"/>
     </form>   
    ) 
}
 
export default SearchForm;