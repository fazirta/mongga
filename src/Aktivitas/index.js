import Heading1 from "../Heading1";
import Apprenticeship from "../img/Apprenticeship.png";
import Webinar from "../img/Webinar.png";
import OpenClass from "../img/OpenClass.png";
import Olimpiade from "../img/PelatihanOlim.png";
import Workshop from "../img/Workshop.png";
import ShortClass from "../img/ShortClass.png";
import Bootcamp from "../img/Bootcamp.png";
import GambarAktivitas from "../Gambar Aktivitas";

export default function Aktivitas() {
  return (
    <>
      <div className="my-20 px-3 max-w-7x1 mx-auto">
        <div className="font-poppins py-5 text-center sm:text-left">
          <Heading1 value="Aktivitas" position="text-center" />
          <p
            className="flex items-center justify-center text-base md:text-xl lg:text-2xl py-5"
            style={{ color: "#093334" }}
          >
            Intip kegiatan yang telah dilakukan oleh Mongga
          </p>
        </div>
        <div className="pt-10 pb-1 px-3 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center lg:justify-between">
            <div className="p-5 lg:p-10">
              <a href="/aktivitas/apprenticeship">
                <GambarAktivitas
                  src={Apprenticeship}
                  title="Apprenticeship"
                  date="Oktober 2020 - Januari 2021"
                  position="left"
                />
              </a>
            </div>
            <div className="p-5 lg:p-10">
              <a href="/aktivitas/webinar">
                <GambarAktivitas
                  src={Webinar}
                  title="Webinar #1 : Kontras Kuliah Dalam dan Luar Negeri"
                  date="24 Oktober 2020"
                  position="left"
                />
              </a>
            </div>
            <div className="p-5 lg:p-10">
              <a href="/aktivitas/open-class">
                <GambarAktivitas
                  src={OpenClass}
                  title="Open Class : Basic"
                  date="26-28 Februari 2021"
                  position="left"
                />
              </a>
            </div>
            <div className="p-5 lg:p-10">
              <a href="/aktivitas/pelatihan-olimpiade">
                <GambarAktivitas
                  src={Olimpiade}
                  title="Pelatihan Olimpiade MTsN 3 Jakarta"
                  date="3-4 September 2021"
                  position="left"
                />
              </a>
            </div>
            <div className="p-5 lg:p-10">
              <a href="/aktivitas/workshop">
                <GambarAktivitas
                  src={Workshop}
                  title="BEST Workshop : Python for Beginners (Biomed SGU)"
                  date="4-5 Juni 2021"
                  position="left"
                />
              </a>
            </div>
            <div className="p-5 lg:p-10">
              <a href="/aktivitas/short-class">
                <GambarAktivitas
                  src={ShortClass}
                  title="Short Class #1"
                  date="26 Juni - 11 Juli 2021"
                  position="left"
                />
              </a>
            </div>
            <div className="p-5 lg:p-10">
              <a href="/aktivitas/bootcamp">
                <GambarAktivitas
                  src={Bootcamp}
                  title="Grow Series : Bootcamp Programming"
                  date="14 Agustus - 14 September 2021"
                  position="left"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
