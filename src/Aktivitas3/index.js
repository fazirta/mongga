import Breadcrumb from '../Breadcrumb';
import Galeri from '../Galeri';
import BasicProgramming1 from '../img/BasicProgramming1.png';
import BasicProgramming2 from '../img/BasicProgramming2.png';
import BasicProgramming3 from '../img/BasicProgramming3.png';
import BasicProgramming4 from '../img/BasicProgramming4.png';
import BasicPublic1 from '../img/BasicPublic1.png';
import BasicPublic2 from '../img/BasicPublic2.png';
import BasicPublic3 from '../img/BasicPublic3.png';
import BasicPublic4 from '../img/BasicPublic4.png';
import BasicVideo1 from '../img/BasicVideo1.png';
import BasicVideo2 from '../img/BasicVideo2.png';
import BasicVideo3 from '../img/BasicVideo3.png';
import BasicVideo4 from '../img/BasicVideo4.png';


export default function Aktivitas2() {
    return (
        <>
            <div className="px-5 py-5 xl:py-10 lg:px-16 mx-auto mt-5 md:mt-10 max-w-7xl">
                <Breadcrumb href="/aktivitas" text="Aktivitas" />
            </div>
            <div className="px-5 mt-2 xl:mt-5 lg:px-16 mx-auto max-w-7xl">
                <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen font-poppins">
                    Open Class : Basic
                </h1>
                <h2 className="mt-3 lg:mt-6 text-md lg:text-lg text-gray-500 font-poppins">
                    26 - 28 Februari 2021
                </h2>
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Basic Programming" src1={BasicProgramming1} src2={BasicProgramming2} src3={BasicProgramming3} src4={BasicProgramming4} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Basic Public Speaking" src1={BasicPublic1} src2={BasicPublic2} src3={BasicPublic3} src4={BasicPublic4} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Basic Videography" src1={BasicVideo1} src2={BasicVideo2} src3={BasicVideo3} src4={BasicVideo4} />
            </div>
        </>
    )
}