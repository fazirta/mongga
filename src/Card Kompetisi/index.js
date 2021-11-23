export default function CardKompetisi(props) {
    return (
        <>
            <div 
                className="font-poppins text-xl md:text-2xl font-bold">
                <div className="flex space-x-5 md:space-x-32 w-full px-48 py-10">
                    <img
                        alt=""
                        className="w-20 h-20 md:w-48 md:h-48 object-cover"
                        src={props.src}
                    />
                    <div className="font-poppins text-left">
                        <h1
                            className="text-2xl md:text-4xl font-semibold"
                        >
                            {props.title}
                        </h1>
                        <p className="py-5 font-light text-lg">
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}