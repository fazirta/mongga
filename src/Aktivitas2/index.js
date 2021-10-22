import Breadcrumb from '../Breadcrumb';
import Galeri from '../Galeri';
import Webinar1 from '../img/Webinar1.png';
import Webinar2 from '../img/Webinar2.png';

export default function Aktivitas2() {
    return (
        <>
            <div className="px-5 py-5 xl:py-10 lg:px-16 mx-auto mt-5 md:mt-10 max-w-7xl">
                <Breadcrumb href="/aktivitas" text="Aktivitas" />
            </div>
            <div className="px-5 mt-2 xl:mt-5 lg:px-16 mx-auto max-w-7xl">
                <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen font-poppins">
                    Webinar #1 : Kontras Kuliah Dalam dan Luar Negeri
                </h1>
                <h2 className="mt-3 lg:mt-6 text-md lg:text-lg text-gray-500 font-poppins">
                    24 Oktober 2020
                </h2>
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <div className="p-3 lg:p-6">
                    <img className="w-96 xl:w-auto" src={Webinar1} />
                </div>
                <div className="p-3 lg:p-6">
                    <img className="w-96 xl:w-auto" src={Webinar2} />
                </div>
            </div>
        </>
    )
}