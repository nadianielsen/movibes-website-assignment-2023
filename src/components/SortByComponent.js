

const SortByComponent = (props) => {
    return ( 
        <section className="flex justify-between mt-4 w-52 h-9 border-b ml-6 border-bottom">
            <p className="text-neutral-200">{props.text}</p>
            <div>
            <input type="checkbox" name="checkbox" id="checkbox" className="accent-cyan-500"/>
            </div>
        </section>
     );
}
 
export default SortByComponent;