import {
    a,
} from "react-router-dom";
import Paragraph1 from '../Paragraph1';

export default function CardAktivitas(props) {
    return (
        <>
            <a href={props.href}>
                <div className="md:relative md:pt-52 md:pb-24">
                    <div className="md:absolute md:top-0 md:bottom-0 md:w-80 md:h-48 md:shadow-lg rounded md:rounded-lg md:max-w-4xl" style={{ backgroundColor: "#093334" }}> 

                    </div>
                    <div className="md:absolute md:top-0 md:w-80 md:h-48 md:left-4">
                        <img src={props.src} alt="" />
                    </div>
                    <h1
                        className={[
                        "font-poppins text-xl md:text-2xl font-bold text-darkgreen md:max-w-sm",
                        props.position,
                        ].join(" ")}
                    >
                        {props.value}
                    </h1>
                </div>
            </a>
        </>
    )
}