import Breadcrumb from '../Breadcrumb';
import Screenshot1080 from "../img/Screenshot (1080).png";
import Screenshot1081 from "../img/Screenshot (1081).png";
import Screenshot1082 from "../img/Screenshot (1082).png";
import Screenshot1083 from "../img/Screenshot (1083).png";

export default function Aktivitas5() {
    return (
        <>
            <div className="px-5 py-5 xl:py-10 lg:px-16 mx-auto mt-5 md:mt-10 max-w-7xl">
                <Breadcrumb href="/aktivitas" text="Aktivitas" />
            </div>
            <div className="px-5 mt-2 xl:mt-5 lg:px-16 mx-auto max-w-7xl">
                <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen font-poppins">
                    BESt Workshop : Python for Beginners (Biomed SGU)
                </h1>
                <h2 className="mt-3 lg:mt-6 text-md lg:text-lg text-gray-500 font-poppins">
                    4-5 Juni 2021
                </h2>
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <div className="flex flex-wrap justify-around xl:justify-between">
                    <div className="p-3 lg:p-6">
                        <img className="w-96 xl:w-auto" src={Screenshot1080} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img className="w-96 xl:w-auto" src={Screenshot1081} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img className="w-96 xl:w-auto" src={Screenshot1082} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img className="w-96 xl:w-auto" src={Screenshot1083} />
                    </div>
                </div>
            </div>
        </>
    )
}
