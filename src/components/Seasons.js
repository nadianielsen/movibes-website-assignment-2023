import TextStyle from "./TextStyle";

const Seasons = ({ number_of_seasons }) => {

    let text = `${number_of_seasons} ${number_of_seasons === 1 ? `season` : `seasons`}`

    return (
            <TextStyle text={text} />
    );
}

export default Seasons;