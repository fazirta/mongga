import {
    Link,
} from "react-router-dom";

export default function Jumbotron(props) {
    return (
        <>
            <Link to={props.href}>
                <img src={props.src} alt="" />
            </Link>
        </>
    )
}
