import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import SearchForm from "../components/SearchForm";
import NotificationProfileSection from "../components/NotificationProfileSection";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io"

const Search = () => {

    const [params] = useSearchParams();
    const query = params.get("query")

    const [movies, setMovies] = useState();
    const [people, setPeople] = useState();
    const [tvSeries, setTvSeries] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/multi?api_key=75f15351c6119a96302b866663e596b0&query=${query}`)
        .then((response) => {
            console.log(response.data.results)
            setMovies(response.data.results.filter(result => result.media_type === "movie")
            )
            setPeople(response.data.results.filter(result => result.media_type === "person")
            )

            setTvSeries(response.data.results.filter(result => result.media_type === "tv")
            )
        })
        .catch(() => setError("Something went wrong!"))
        .finally(() => setLoading(false))
    }, [query])

    tvSeries && console.log(tvSeries)

    return loading ? ( <p>Loading...</p> ) : (
        <article className="col-span-4">
            <article className="flex gap-[12rem]">
            <SearchForm />
            <NotificationProfileSection />
            </article>
            {movies.length ? (
                <div className="m-6">
                <h1 className="text-neutral-200 font-bold text-2xl">Movie</h1>
                <article className="mt-6 grid grid-cols-5 gap-8">
                    {movies.map(movie => (
                        <div className="relative">
                        <Link to={`/detailmovies/${movie.id}`}>
                            <div className="bg-neutral-300 bg-opacity-20 w-20 h-7 rounded-tr-3xl rounded-bl-3xl ml-[6.99rem] flex justify-evenly backdrop-blur-sm absolute left-4">
                            <IoIosStar className="text-yellow-400 text-2xl"/>
                            <h3 className="text-xs pt-1.5 text-white">{movie.vote_average}</h3>
                        </div>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="rounded-3xl w-52 h-[20rem] aspect-video"/>
                        </Link>
                        </div>
                    ))}
                </article>
                </div>
            ) : null}
            {people.length ? (
                <article className="m-6">
                    <h1 className="text-neutral-200 font-bold">People</h1>
                    <article className="grid grid-cols-5 gap-y-5">
                    {people.map(person => (
                        <div className="w-36 h-36 rounded-full my-6">
                            <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt="" className="rounded-full w-full h-full object-cover"/>
                            <h2 className="text-center text-neutral-200">{person.name}</h2>
                        </div>
                 ))}
                    </article>
                </article>
            ) : null}
            {tvSeries.length ? (
                <div className="m-6">
                <h1 className="text-neutral-200 font-bold">TV Series</h1>
                <article className="mt-6 grid grid-cols-5 gap-8">
                {tvSeries.map(tvshow => (
                        <div className="relative">
                            <div className="bg-neutral-300 bg-opacity-20 w-20 h-7 rounded-tr-3xl rounded-bl-3xl ml-[6.99rem] flex justify-evenly backdrop-blur-sm absolute left-4">
                            <IoIosStar className="text-yellow-400 text-2xl"/>
                            <h3 className="text-xs pt-1.5 text-white">{tvshow.vote_average}</h3>
                        </div>
                        <img src={`https://image.tmdb.org/t/p/original${tvshow.poster_path}`} alt="" className="rounded-3xl w-52 h-[20rem] aspect-video"/>
                        </div>
                    ))}
                </article>
                </div>
            ): null}
        </article>
    )
}

export default Search;