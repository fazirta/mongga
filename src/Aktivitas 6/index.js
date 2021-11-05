import Breadcrumb from "../Breadcrumb";
import Screenshot1129 from "../img/Screenshot (1129).png";
import Screenshot1130 from "../img/Screenshot (1130).png";
import Screenshot1134 from "../img/Screenshot (1134).png";
import Screenshot1133 from "../img/Screenshot (1133).png";
import Screenshot1126 from "../img/Screenshot (1126).png";
import Screenshot1123 from "../img/Screenshot (1123).png";
import Screenshot1122 from "../img/Screenshot (1122).png";
import Screenshot1104 from "../img/Screenshot (1074).png";
import Screenshot1138 from "../img/Screenshot (1138).png";
import Screenshot1137 from "../img/Screenshot (1137).png";
import Screenshot1140 from "../img/Screenshot (1140).png";
import Screenshot11391 from "../img/Screenshot (1139) 1.png";
import Screenshot1142 from "../img/Screenshot (1142).png";
import Screenshot1143 from "../img/Screenshot (1143).png";
import Screenshot1079 from "../img/Screenshot (1079).png";
import Screenshot1144 from "../img/Screenshot (1144).png";
import Screenshot1077 from "../img/Screenshot (1077).png";
import Screenshot11691 from "../img/Screenshot (1169) 1.png";
import Screenshot1076 from "../img/Screenshot (1076).png";
import Screenshot1135 from "../img/Screenshot (1135).png";
import Screenshot1147 from "../img/Screenshot (1147).png";
import Screenshot1148 from "../img/Screenshot (1148).png";
import Screenshot1145 from "../img/Screenshot (1145).png";
import Screenshot1149 from "../img/Screenshot (1149).png";
import Galeri from "../Galeri";

export default function Aktivitas6() {
  return (
    <>
      <div className="px-5 py-5 xl:py-10 lg:px-16 mx-auto mt-5 md:mt-10 max-w-7xl">
        <Breadcrumb href="/aktivitas" text="Aktivitas" />
      </div>
      <div className="px-5 mt-2 xl:mt-5 lg:px-16 mx-auto max-w-7xl">
        <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen font-poppins">
          Short Class #1
        </h1>
        <h2 className="mt-3 lg:mt-6 text-md lg:text-lg text-gray-500 font-poppins">
          26 Juni - 11 Juli 2021
        </h2>
      </div>
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
        <Galeri
          title="Generating Ideas for Journal & Competition"
          src1={Screenshot1129}
          src2={Screenshot1130}
          src3={Screenshot1134}
          src4={Screenshot1133}
        />
      </div>
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
        <Galeri
          title="Research for Academic Essays & Competitions"
          src1={Screenshot1126}
          src2={Screenshot1123}
          src3={Screenshot1122}
          src4={Screenshot1104}
        />
      </div>
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
        <Galeri
          title="Research and Statistics for Bachelor Thesis"
          src1={Screenshot1138}
          src2={Screenshot1137}
          src3={Screenshot1140}
          src4={Screenshot11391}
        />
      </div>
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
        <Galeri
          title="Presentation for Competitions and Formal Purposes"
          src1={Screenshot1142}
          src2={Screenshot1143}
          src3={Screenshot1079}
          src4={Screenshot1144}
        />
      </div>
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
        <Galeri
          title="Public Speaking Skills 101"
          src1={Screenshot1077}
          src2={Screenshot11691}
          src3={Screenshot1076}
          src4={Screenshot1135}
        />
      </div>
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto max-w-7xl">
        <Galeri
          title="IELTS Preparation 101"
          src1={Screenshot1147}
          src2={Screenshot1148}
          src3={Screenshot1145}
          src4={Screenshot1149}
        />
      </div>
    </>
  );
}
