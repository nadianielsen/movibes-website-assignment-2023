

const OptionSelect = (props) => {
    return ( 
        <section className="flex w-52 justify-between m-auto pt-10">
            <label htmlFor="options" className="text-neutral-200 font-semibold font-['Poppins']">{props.text}</label>
            <select name="options" id="options" className="bg-transparent text-neutral-200 mt-0.5">
                <option value=""></option>
            </select>
        </section>     
     );
}
 
export default OptionSelect;