export default function Jumbotron(props) {

    return (
        <>
            <a href={props.href}>
                <img alt="" src={props.src} onLoad={() => props.setLoaded(true)} />
            </a>
        </>
    )
}
