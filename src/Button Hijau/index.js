import {
    a,
} from "react-router-dom";

export default function ButhrefnHijau(props) {
    return (
        <>
            <div className="flex justify-center">
                <a href={props.href}>
                    <div className="inline-block bg-darkgreen rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-green-900 font-poppins shadow-2xl">
                        {props.text}
                    </div>
                </a>
            </div>
        </>
    )
}
