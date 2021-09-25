import {
    a,
} from "react-router-dom";

export default function Jumbotron(props) {
    return (
        <>
            <a href={props.href}>
                <img src={props.src} alt="" />
            </a>
        </>
    )
}
