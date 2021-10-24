import Breadcrumb from '../Breadcrumb';
import Galeri from '../Galeri';
import Programming1 from '../img/Programming1.png';
import Programming2 from '../img/Programming2.png';
import Programming3 from '../img/Programming3.png';
import Programming4 from '../img/Programming4.png';
import Videography1 from '../img/Videography1.png';
import Videography2 from '../img/Videography2.png';
import Videography3 from '../img/Videography3.png';
import GraphicDesign1 from '../img/GraphicDesign1.png';
import GraphicDesign2 from '../img/GraphicDesign2.png';
import GraphicDesign3 from '../img/GraphicDesign3.png';
import GraphicDesign4 from '../img/GraphicDesign4.png';
import Research1 from '../img/Research1.png';
import Research2 from '../img/Research2.png';
import Research3 from '../img/Research3.png';
import English1 from '../img/English1.png';
import English2 from '../img/English2.png';
import English3 from '../img/English3.png';
import English4 from '../img/English4.png';

export default function Aktivitas1() {
    return (
        <>
            <div className="px-5 py-5 xl:py-10 lg:px-16 mx-auto mt-5 md:mt-10 max-w-7xl">
                <Breadcrumb href="/aktivitas" text="Aktivitas" />
            </div>
            <div className="px-5 mt-2 xl:mt-5 lg:px-16 mx-auto max-w-7xl">
                <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen font-poppins">
                    Apprenticeship
                </h1>
                <h2 className="mt-3 lg:mt-6 text-md lg:text-lg text-gray-500 font-poppins">
                    Oktober 2020 - Januari 2021
                </h2>
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Programming" src1={Programming1} src2={Programming2} src3={Programming3} src4={Programming4} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Videography" src1={Videography1} src2={Videography2} src3={Videography3} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Graphic Design" src1={GraphicDesign1} src2={GraphicDesign2} src3={GraphicDesign3} src4={GraphicDesign4} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Research" src1={Research1} src2={Research2} src3={Research3} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="English" src1={English1} src2={English2} src3={English3} src4={English4} />
            </div>
        </>
    )
}