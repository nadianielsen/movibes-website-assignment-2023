
const InfoBoxDetail = ({headline, textone, texttwo, img}) => {

    return (
        <article className="w-80 h-24 border rounded-xl border-neutral-700 mt-[2.5rem] flex justify-around">
            {/* <p>{text}</p>
            <img src={img} alt="" /> */}
            <div className="pl-3">
            <p className="text-neutral-200 text-sm pt-1 h-16">{headline}</p>
            <div className="flex pt-2 text-xs gap-x-1 text-neutral-700">
                <p>{textone}</p>
                <p>•</p>
                <p>{texttwo}</p>
            </div>
            </div>
            <img src={img} alt="" className="pt-0.5"/>
        </article>
    );
}

export default InfoBoxDetail;