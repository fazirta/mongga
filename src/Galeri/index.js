export default function Galeri(props) {
    return (
        <>
            <div className="mx-3 lg:mx-6">
                <div className="w-full bg-darkgreen p-2 lg:p-4 mt-5 rounded-t-3xl">
                    <h1 className="text-center text-white font-poppins font-semibold text-lg lg:text-2xl">{props.title}</h1>
                </div>
            </div>
            <div className="flex flex-wrap justify-around xl:justify-between">
                <div className="p-3 lg:p-6">
                    <img className="w-96 xl:w-auto" src={props.src1} />
                </div>
                <div className="p-3 lg:p-6">
                    <img className="w-96 xl:w-auto" src={props.src2} />
                </div>
                <div className="p-3 lg:p-6">
                    <img className="w-96 xl:w-auto" src={props.src3} />
                </div>
                <div className="p-3 lg:p-6">
                    <img className="w-96 xl:w-auto" src={props.src4} />
                </div>
            </div>
        </>
    )
}
