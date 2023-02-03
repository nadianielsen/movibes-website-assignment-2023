import SortByComponent from "./SortByComponent";

const Services = (props) => {
    return ( 
        <article className="">
        <section className="flex justify-around gap-x-10 m-6">
        <h2 className="font-semibold font-['Poppins'] text-neutral-200">{props.text}</h2>
            <h3 className="text-neutral-600 font-semibold font-['Poppins']">Uncheck All</h3>
        </section>
            <article className="bg-[#262626] w-64 h-96 rounded-3xl m-auto grid grid-row-7">
                <div>
                    <SortByComponent text="Netflix"/>
                </div>
                <div>
                    <SortByComponent text="Prime Video"/>
                </div>
                <div>
                    <SortByComponent text="Disney +"/>
                </div>
                <div>
                    <SortByComponent text="HBO max"/>

                </div>
                <div>
                    <SortByComponent text="Hulu"/>
                </div>
                <div>
                    <SortByComponent text="Starz"/>
                </div>
                <p className="text-neutral-500 m-auto">See more</p>
        </article>
        </article>
     );
}
 
export default Services;