import Breadcrumb from '../Breadcrumb';
import Olim1 from '../img/Olim1.png';
import Olim2 from '../img/Olim2.png';
import Olim3 from '../img/Olim3.png';
import Olim4 from '../img/Olim4.png';
import Olim5 from '../img/Olim5.png';
import Olim6 from '../img/Olim6.png';
import Olim7 from '../img/Olim7.png';
import Olim8 from '../img/Olim8.png';
import Olim9 from '../img/Olim9.png';
import Olim10 from '../img/Olim10.png';

export default function Aktivitas4() {
    return (
        <>
            <div className="px-5 py-5 xl:py-10 lg:px-16 mx-auto mt-5 md:mt-10 max-w-7xl">
                <Breadcrumb href="/aktivitas" text="Aktivitas" />
            </div>
            <div className="px-5 mt-2 xl:mt-5 lg:px-16 mx-auto max-w-7xl">
                <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen font-poppins">
                    Pelatihan Olimpiade MTsN 3 Jakarta
                </h1>
                <h2 className="mt-3 lg:mt-6 text-md lg:text-lg text-gray-500 font-poppins">
                    ???
                </h2>
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <div className="flex flex-wrap justify-around xl:justify-between">
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim1} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim2} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim3} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim4} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim5} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim6} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim7} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim8} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim9} />
                    </div>
                    <div className="p-3 lg:p-6">
                        <img alt="" className="w-96 xl:w-auto" src={Olim10} />
                    </div>
                </div>
            </div>
        </>
    )
}