
const SortBy = (props) => {
    return ( 
        <article className="">
        <section className="flex justify-around gap-x-10 m-6">
        <h2 className="font-semibold font-['Poppins'] text-neutral-200">{props.text}</h2>
            <h3 className="text-neutral-600 font-semibold font-['Poppins']">Uncheck All</h3>
        </section>
            <article className="bg-[#262626] w-64 h-80 rounded-3xl m-auto mt-2 grid grid-row-7">
            </article>
        </article>
        // <div className="flex">
        // <option value="">
        //     <select name="" id=""></select>
        // </option>
        // </div>
     );
}
 
export default SortBy;