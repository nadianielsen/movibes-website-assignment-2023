import { FaSearch } from "react-icons/fa"; 
// import { createSearchParams, useNavigate } from "react-router-dom";


const Search = () => {
    
        // const navigate = useNavigate()
        // console.log(navigate)
    
        // const handleSubmit = (e) => {
        //     e.preventDefault(); // når du laver denne her skal du huske reset som er på linje 13. Brug det til formular f.eks. searchbar, kontaktformular!!!!!!!!
        //     let params  = { search: e.target.search.value }
        //     navigate({
        //              pathname:"/allmoviespage",
        //              search: `?${createSearchParams(params)}`
        //             })
        //     console.log(e.target.search.value)
        //     e.target.reset() // reset function
        // }

        // <form className="flex" onSubmit={handleSubmit}>
    return (
     <form className="flex">
        <button type="submit">
        <FaSearch className="relative top-3 left-8 text-gray-400"/>
        </button>
        <input type="search" name="search" id="search" placeholder="Search for movies, TV shows..." className="w-[56rem] h-16 rounded-full  pl-10 bg-[#262626] mt-6 text-gray-400"/>
     </form>   
    ) 
}
 
export default Search;