import useAxios from "../customHooks/useAxios";

const SignUp = () => {

    const {data, loading, error} = useAxios(`https://api.themoviedb.org/3/trending/all/day?api_key=75f15351c6119a96302b866663e596b0&language=en-US&page=1`)

    return ( 
        <div className="grid grid-cols-2 w-full h-screen">
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {data?.results?.map((movie, index) => {
               if (index < 1 ) return ( 
                <img src={movie.poster_path} alt="" />
                )
            })}


        </div>
     );
}
 
export default SignUp;