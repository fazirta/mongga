import {
    a,
} from "react-router-dom";

export default function CardPersegi(props) {
    return (
        <>
            <a href={props.href}>
                <div className="inline flex h-full">
                    <div className="self-center mx-auto w-48 h-48 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 flex flex-col justify-center rounded-2xl xl:rounded-3xl shadow-xl m-16" style={{ background: "#F8F8F8" }}>
                        <img
                            src={props.src} alt={props.title}
                            className="self-center mx-auto w-20 xl:w-36"
                        />
                        <h1 className="text-center text-md xl:text-2xl mt-5 xl:mt-10 text-darkgreen">{props.title}</h1>
                    </div>
                </div>
            </a>
        </>
    )
}
