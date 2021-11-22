// import ButtonHijau from "../Button Hijau";
import DropdownBaru from "../Dropdown Baru";
import Heading1 from "../Heading1";
import JumbotronHijau from "../Jumbotron Hijau";
import Medal from "../img/medal.png";
import CardKompetisi from "../Card Kompetisi";
import Research from "../img/research.png";
import Linguistics from "../img/linguistics.png";
import Vektor1 from "../img/Vector1.png";
import ksn from "../img/ksn.png";

export default function Kompetisi() {
  return (
    <>
      <JumbotronHijau
        name="Raih Juara Bersama Mongga!"
        desc="Ayo pilih topik yang sesuai dengan kebutuhanmu, wahai calon juara"
      />
      <div className="px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto font-barlow">
        <div className="w-full hover:bg-white mb-10">
          <Heading1
            value="Untuk Halaman Mentor, Klik Disini >"
            position="text-center"
          />
        </div>
        <div className="w-full bg-darkgreen text-white">
          <CardKompetisi
            src={Medal}
            title="Kompetisi Olimpiade"
            desc="Mongga menawarkan berbagai fitur persiapan Olimpiade berbasis blended learning. Disini, kamu bisa mempersiapkan diri untuk berkompetisi secara autodidak menggunakan berbagai fitur asinkron Mongga maupun dengan dibimbing langsung oleh mentor-mentor terbaik kami."
          />
          <DropdownBaru
            title="Klik untuk mempelajari"
            desc={
              <div className="flex justify-around">
                <div className="flex flex-col justify-center">
                  <h1 className="font-poppins font-bold text-2xl">
                    Pelatihan Favorit yang Diminati:{" "}
                  </h1>
                </div>
                <div className="flex space-x-10">
                  <img alt="" src={ksn} />
                  <div className="flex flex-col justify-center space-y-5">
                    <h1 className="font-poppins font-bold text-xl">
                      Olimpiade KSN TIngkat SMP
                    </h1>
                    <h1 className="font-poppins font-bold text-xl">
                      Olimpiade KSN TIngkat SMA
                    </h1>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="w-full bg-gray-300 text-darkgreen">
          <CardKompetisi
            src={Research}
            title="Kompetisi Riset"
            desc="Mongga menawarkan berbagai fitur persiapan Olimpiade berbasis blended learning. Disini, kamu bisa mempersiapkan diri untuk berkompetisi secara autodidak menggunakan berbagai fitur asinkron Mongga maupun dengan dibimbing langsung oleh mentor-mentor terbaik kami."
          />
          <DropdownBaru title="Klik untuk mempelajari" desc="asdasd" />
        </div>
        <div className="w-full bg-darkgreen text-white">
          <CardKompetisi
            src={Linguistics}
            title="Kompetisi Bahasa"
            desc="Mongga menawarkan berbagai fitur persiapan Olimpiade berbasis blended learning. Disini, kamu bisa mempersiapkan diri untuk berkompetisi secara autodidak menggunakan berbagai fitur asinkron Mongga maupun dengan dibimbing langsung oleh mentor-mentor terbaik kami."
          />
          <DropdownBaru title="Klik untuk mempelajari" desc="asdasdfd" />
        </div>
        <div className="w-full bg-gray-300 text-darkgreen">
          <CardKompetisi
            src={Vektor1}
            title="Kompetisi Business Plan"
            desc="Mongga menawarkan berbagai fitur persiapan Olimpiade berbasis blended learning. Disini, kamu bisa mempersiapkan diri untuk berkompetisi secara autodidak menggunakan berbagai fitur asinkron Mongga maupun dengan dibimbing langsung oleh mentor-mentor terbaik kami."
          />
          <DropdownBaru title="Klik untuk mempelajari" desc="asdasdfd" />
        </div>
      </div>
    </>
  );
}
