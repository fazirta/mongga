import {
    Link,
} from "react-router-dom";

export default function ButtonHijau(props) {
    return (
        <>
            <Link to={props.href}>
                <div className="inline-block bg-darkgreen rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-green-900 font-poppins">
                    {props.text}
                </div>
            </Link>
        </>
    )
}
