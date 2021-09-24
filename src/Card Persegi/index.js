import {
    a,
} from "react-router-dom";

export default function CardPersegi(props) {
    return (
        <>
            <a href={props.href}>
                <div className="flex flex-col justify-around shadow-lg w-80 h-80 rounded-xl font-poppins">
                    <img className="w-full max-h-52 object-cover rounded-t-xl" src={props.src} alt={props.title} />
                    <div className="flex items-center justify-center p-4 text-gray-800 text-lg font-semibold">
                        {props.title}
                    </div>
                </div>
            </a>
        </>
    )
}
