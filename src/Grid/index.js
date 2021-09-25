import {
    a,
} from "react-router-dom";

export default function Grid(props) {
    return (
        <>
            <div className="max-w-6xl mx-auto flex flex-wrap overflow-hidden">
                <a href={props.href1} className="w-132 h-132 overflow-hidden sm:w-132 md:w-132 lg:w-132 xl:w-132">
                    <img className="w-full h-full object-cover" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" />
                </a>
                <a href={props.href1} className="flex items-center justify-center w-132 h-132 overflow-hidden sm:w-132 md:w-132 lg:w-132 xl:w-132">
                    <div className="px-24">
                        <h1 className="text-3xl font-semibold font-poppins text-darkgreen mb-4">
                            Kompetisi   >
                        </h1>
                        <h4 className="font-poppins text-gray-500">
                            Terdapat cabang olimpiade, riset, dan bahasa.
                            ........
                        </h4>
                    </div>
                </a>
                <a href={props.href2} className="flex items-center justify-center w-132 h-132 overflow-hidden sm:w-132 md:w-132 lg:w-132 xl:w-132">
                    <div className="px-24">
                        <h1 className="text-3xl font-semibold font-poppins text-darkgreen mb-4">
                            Topik Menarik Lainnya   >
                        </h1>
                        <h4 className="font-poppins text-gray-500">
                            Terdapat ....
                            ......
                        </h4>
                    </div>
                </a>
                <a href={props.href2} className="w-132 h-132 overflow-hidden sm:w-132 md:w-132 lg:w-132 xl:w-132">
                    <img className="w-full h-full object-cover" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" />
                </a>
                <a href={props.href3} className="w-132 h-132 overflow-hidden sm:w-132 md:w-132 lg:w-132 xl:w-132">
                    <img className="w-full h-full object-cover" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" />
                </a>
                <a href={props.href3} className="flex items-center justify-center w-132 h-132 overflow-hidden sm:w-132 md:w-132 lg:w-132 xl:w-132">
                    <div className="px-24">
                        <h1 className="text-3xl font-semibold font-poppins text-darkgreen mb-4">
                            Study Abroad   >
                        </h1>
                        <h4 className="font-poppins text-gray-500">
                            ....
                            aaaaa
                        </h4>
                    </div>
                </a>
            </div>
        </>
    )
}
