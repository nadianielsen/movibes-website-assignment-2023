import TextStyle from "./TextStyle";

const Runtime = ({runtime}) => {

    //Math.floor runder ned og returnèr et større tal som enten er mindre eller lig med til den givende tal.
    let hours = Math.floor(runtime / 60)

    let minutes = runtime % 60;

    return (
            <TextStyle text={`${hours}h ${minutes}m`} />
    );
}

export default Runtime;