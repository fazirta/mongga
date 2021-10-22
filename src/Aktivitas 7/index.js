import Breadcrumb from '../Breadcrumb';
import Screenshot1174 from "../img/Screenshot (1174).png";
import Screenshot1073 from "../img/Screenshot (1073).png";
import IMG_263694 from "../img/263694.png";
import IMG_263693 from "../img/263694.png";
import Screenshot1071 from "../img/Screenshot (1071).png";
import Screenshot1175 from "../img/Screenshot (1175).png";
import Screenshot1176 from "../img/Screenshot (1176).png";
import Screenshot1070 from "../img/Screenshot (1070).png";
import IMG_263697 from "../img/263697.png";
import IMG_263704 from "../img/263704.png";
import IMG_263705 from "../img/263705.png";
import IMG_263698 from "../img/263698.png";
import Screenshot1170 from "../img/Screenshot (1170).png";
import Screenshot1066 from "../img/Screenshot (1066).png";
import Screenshot1067 from "../img/Screenshot (1067).png";
import Screenshot1068 from "../img/Screenshot (1068).png";
import Galeri from '../Galeri';

export default function Aktivitas7() {
    return (
        <>
            <div className="px-5 py-5 xl:py-10 lg:px-16 mx-auto mt-5 md:mt-10 max-w-7xl">
                <Breadcrumb href="/aktivitas" text="Aktivitas" />
            </div>
            <div className="px-5 mt-2 xl:mt-5 lg:px-16 mx-auto max-w-7xl">
                <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen font-poppins">
                    Grow Series : Bootcamp Programming
                </h1>
                <h2 className="mt-3 lg:mt-6 text-md lg:text-lg text-gray-500 font-poppins">
                    14 Agustus - 14 September 2021
                </h2>
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Android Development for Beginner Using Kotlin" src1={Screenshot1174} src2={Screenshot1073} src3={IMG_263694} src4={IMG_263693} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Game Development for Beginner Using Unity2D" src1={Screenshot1071} src2={Screenshot1175} src3={Screenshot1176} src4={Screenshot1070} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Python for Data Science : Beginner Level" src1={IMG_263697} src2={IMG_263704} src3={IMG_263705} src4={IMG_263698} />
            </div>
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
                <Galeri title="Fullstack Website Development for Beginner Using Laravel" src1={Screenshot1170} src2={Screenshot1066} src3={Screenshot1067} src4={Screenshot1068} />
            </div>
        </>
    )
}
