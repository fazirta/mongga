import {
    a,
} from "react-router-dom";

export default function CardPersegiPanjang(props) {
    return (
        <>
        <a href={props.href}>
            <div className="flex flex-col justify-between shadow-lg w-80 min-h-96 rounded-xl font-poppins">
                <div>
                    <img className="w-full max-h-52 object-cover rounded-t-xl" src={props.src} alt={props.text} />
                </div>
                <div className="py-5 px-20">
                    <h4 className="text-lg text-center" style={{ color: "#093334" }}>
                        {props.title}
                    </h4>
                </div>
                <div className="py-10 flex items-center justify-center p-4 text-lg">
                    {props.a}
                </div>
            </div>
            </a>
        </>
    )
}
