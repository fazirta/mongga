import {
    a,
} from "react-router-dom";

export default function CardPersegiPanjang(props) {
    return (
        <>
            <a href={props.href} className="CardPersegiPanjang">
                <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 p-4 lg:p-0 justify-between shadow-xl hover:shadow-lg transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105 max-w-xl mx-auto lg:w-72 lg:h-full rounded-xl font-poppins" style={{ backgroundColor: '#F8F8F8' }}>
                    <div className="flex flex-col lg:flex-row justify-center align-center px-2 md:px-5 lg:px-0 lg:py-8">
                        <img alt={props.text} className="w-auto h-16 lg:w-auto md:h-28 lg:h-auto" src={props.src} />
                    </div>
                    <div className="flex-1 lg:flex-auto flex flex-col justify-center">
                        <div className="lg:px-12">
                            <h4 className="lg:text-lg lg:text-center font-bold text-darkgreen">
                                {props.title}
                            </h4>
                        </div>
                        <div className="pt-4 lg:py-8 flex lg:items-center lg:justify-center lg:px-4 lg:text-lg text-gray-400 hover:text-maingreen transition duration-300">
                            {props.link}
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
