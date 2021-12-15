// import ButtonHijau from "../Button Hijau";
import DropdownBaru from "../Dropdown Baru";
import Heading1 from "../Heading1";
import JumbotronHijau from "../Jumbotron Hijau";
import FiturPelatihan from "../Fitur Pelatihan";
import ButtonKuning from "../Button Kuning";
import Medal from "../img/medal.png";
import CardKompetisi from "../Card Kompetisi";
import Research from "../img/research.png";
import Linguistics from "../img/linguistics.png";
import Vektor1 from "../img/Vector1.png";
import ksn from "../img/ksn.png";
import book from "../img/book.png";
import rating from "../img/rating2 1.png";
import clock24hour from "../img/24-hour-clock 1.png";
import agile from "../img/agile 1.png";
import route from "../img/route 1.png";
import file from "../img/file 1.png";
import artificialintelligence from "../img/artificial-intelligence 1.png";

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
              <div>
                <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-around">
                  <div className="flex flex-col justify-center">
                    <h1 className="font-poppins font-semibold text-2xl text-center">
                      Pelatihan Favorit yang Diminati:{" "}
                    </h1>
                  </div>
                  <div className="flex justify-center flex-row space-x-10">
                    <div>
                      <img alt="" src={ksn} />
                    </div>
                    <div className="flex flex-col justify-center space-y-5">
                      <h1 className="font-poppins font-semibold text-xl">
                        Olimpiade KSN TIngkat SMP
                      </h1>
                      <h1 className="font-poppins font-semibold text-xl">
                        Olimpiade KSN TIngkat SMA
                      </h1>
                    </div>
                  </div>
                </div>
                <FiturPelatihan
                  contents={[
                    [
                      book,
                      "Metode Blended Learning Inovatif yang Menyesuaikan Kemampuan Siswa ",
                    ],
                    [rating, "Mentor Berpengalaman serta Ahli di Bidangnya"],
                    [
                      clock24hour,
                      "Latihan Soal dan Modul yang Dapat Diakses 24 Jam",
                    ],
                    [
                      agile,
                      "Waktu dan Durasi Fleksibel Menyesuaikan Jadwal dan Kebutuhan",
                    ],
                  ]}
                />
                <h1 className="text-center font-poppins font-semibold text-xl">
                  Daftarkan Diri atau Lembagamu Sekarang!
                </h1>
                <div className="py-6">
                  <ButtonKuning
                    href="/contactus"
                    text="Hubungi Kami Via WhatsApp"
                  />
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
          <DropdownBaru
            title="Klik untuk mempelajari"
            desc={
              <div>
                <FiturPelatihan
                  contents={[
                    [
                      rating,
                      "Pembimbingan dan Konsultasi oleh Mentor Ahli Berpengalaman",
                    ],
                    [route, "Dituntun dari Awal hingga Akhir Proses Riset"],
                    [
                      agile,
                      "Waktu dan Durasi Fleksibel Menyesuaikan Jadwal dan Kebutuhan",
                    ],
                    [
                      file,
                      "Database Hasil Riset yang dapat diakses secara bebas 24 Jam",
                    ],
                  ]}
                />
                <h1 className="text-center font-poppins font-semibold text-xl">
                  Daftarkan Diri atau Lembagamu Sekarang!
                </h1>
                <div className="py-6">
                  <ButtonKuning
                    href="/contactus"
                    text="Hubungi Kami Via WhatsApp"
                  />
                </div>
              </div>
            }
          />
        </div>
        <div className="w-full bg-darkgreen text-white">
          <CardKompetisi
            src={Linguistics}
            title="Kompetisi Bahasa"
            desc="Mongga menawarkan berbagai fitur persiapan Olimpiade berbasis blended learning. Disini, kamu bisa mempersiapkan diri untuk berkompetisi secara autodidak menggunakan berbagai fitur asinkron Mongga maupun dengan dibimbing langsung oleh mentor-mentor terbaik kami."
          />
          <DropdownBaru
            title="Klik untuk mempelajari"
            desc={
              <div>
                <FiturPelatihan
                  contents={[
                    [
                      rating,
                      "Pembimbingan dan Konsultasi bersama Mentor Ahli Berpengalaman",
                    ],
                    [
                      agile,
                      "Waktu dan Durasi Fleksibel Menyesuaikan Jadwal dan Kebutuhan",
                    ],
                    [
                      artificialintelligence,
                      "Metode Pelatihan dilakukan secara teori dan praktik",
                    ],
                  ]}
                />
                <h1 className="text-center font-poppins font-semibold text-xl">
                  Daftarkan Diri atau Lembagamu Sekarang!
                </h1>
                <div className="py-6">
                  <ButtonKuning
                    href="/contactus"
                    text="Hubungi Kami Via WhatsApp"
                  />
                </div>
              </div>
            }
          />
        </div>
        <div className="w-full bg-gray-300 text-darkgreen">
          <CardKompetisi
            src={Vektor1}
            title="Kompetisi Business Plan"
            desc="Mongga menawarkan berbagai fitur persiapan Olimpiade berbasis blended learning. Disini, kamu bisa mempersiapkan diri untuk berkompetisi secara autodidak menggunakan berbagai fitur asinkron Mongga maupun dengan dibimbing langsung oleh mentor-mentor terbaik kami."
          />
          <DropdownBaru
            title="Klik untuk mempelajari"
            desc={
              <div>
                <FiturPelatihan
                  contents={[
                    [
                      rating,
                      "Pembimbingan dan Konsultasi oleh Mentor Ahli Berpengalaman",
                    ],
                    [route, "Dituntun dari Awal hingga Akhir Proses Riset"],
                    [
                      agile,
                      "Waktu dan Durasi Fleksibel Menyesuaikan Jadwal dan Kebutuhan",
                    ],
                    [
                      file,
                      "Database Hasil Riset yang dapat diakses secara bebas 24 Jam",
                    ],
                  ]}
                />
                <h1 className="text-center font-poppins font-semibold text-xl">
                  Daftarkan Diri atau Lembagamu Sekarang!
                </h1>
                <div className="py-6">
                  <ButtonKuning
                    href="/contactus"
                    text="Hubungi Kami Via WhatsApp"
                  />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}
