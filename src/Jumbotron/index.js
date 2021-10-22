export default function Jumbotron(props) {

    return (
        <>
            <a href={props.href}>
                <img alt="" className="w-full" src={props.src} onLoad={() => props.setLoaded(true)} />
            </a>
        </>
    )
}
