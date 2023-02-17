import TextStyle from "./TextStyle";

const MovieLength = ({runtime}) => {

    //Math.floor runder ned og returnèr et større tal som enten er mindre eller lig med til den givende tal.
    // let hours = Math.floor(movie?.runtime / 60)

    // let minutes = movie?.runtime % 60;

    return (
        <div>
            <TextStyle text={runtime} />
        </div>
    );
}

export default MovieLength;