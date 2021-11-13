import JumbotronHijau from "../Jumbotron Hijau";
import Heading1 from "../Heading1";
import Paragraph1 from "../Paragraph1";
import LogoMongga from "../img/MONGGA LOGO WARNA 2.png";
import Divider from "../img/Vector.png";
import Teacher1 from "../img/teacher 1.png";
import Competence1 from "../img/competence 1.png";
import Conversation1 from "../img/conversation 1.png";
import Overpopulation1 from "../img/overpopulation 1.png";
import Mentor from "../img/pexels-vanessa-garcia-6325973 1.png";
import Group162 from "../img/Group 162.png";
import Group158 from "../img/Group 158.png";
import Blob3 from "../img/blob 3.png";
import Group161 from "../img/Group 161.png";
import Group159 from "../img/Group 159.png";
import Group160 from "../img/Group 160.png";
import Group157 from "../img/Group 157.png";
import ButtonHijau from "../Button Hijau";

export default function AboutUs() {
  return (
    <>
      <JumbotronHijau
        name="Tentang Kami"
        desc="Yang ingin membentuk diri dan memajukan negeri"
      />
      <div className="my-24 px-3 max-w-7xl mx-auto">
        <div>
          <h1 className="font-poppins text-center text-4xl font-bold text-darkgreen">
            Apa itu{" "}
            <h1 className="font-poppins inline text-maingreen">Mongga</h1>?
          </h1>
        </div>
        <div className="flex justify-center align-center my-10">
          <img alt="" className="w-60 lg:w-auto" src={LogoMongga} />
        </div>
        <div className="flex justify-center align-center my-10">
          <Paragraph1
            value="Mongga merupakan sebuah badan usaha yang bergerak pada bidang
            pendidikan siswa dan mahasiswa. Mongga memberikan pelayanan berupa
            pelatihan dan konsultasi berkualitas dari berbagai disiplin ilmu,
            pengembangan platform belajar, serta pembangunan komunitas belajar
            guna meningkatkan lingkungan belajar dengan minat yang tinggi dan
            daya saing yang kompetitif."
            position="text-center md:px-32 xl:px-52"
          />
        </div>
      </div>
      <div className="bg-darkgreen">
        <div className="my-20 px-3 py-14 max-w-7xl mx-auto">
          <div>
            <h1 className="font-poppins text-white text-center font-bold text-4xl">
              Visi Mongga
            </h1>
            <h1 className="font-poppins text-white text-center font-light text-xl mt-10">
              Membangun Ekosistem Inovasi dan Menghilangkan Eksklusivitas
              Pendidikan
            </h1>
          </div>
          <div className="mt-20">
            <h1 className="font-poppins text-white text-center font-bold text-4xl">
              Misi Mongga
            </h1>
            <div className="flex flex-wrap justify-center align-center">
              <div className="flex mt-10 space-x-5 md:space-x-10 max-w-xl px-5 py-2">
                <img
                  alt=""
                  className="w-20 h-20 md:w-32 md:h-32 object-cover"
                  src={Teacher1}
                />
                <h1 className="font-poppins text-white font-light self-center">
                  Menciptakan platform peningkatan skill multi-disiplin yang
                  berkualitas
                </h1>
              </div>
              <div className="flex mt-10 space-x-5 md:space-x-10 max-w-xl px-5 py-2">
                <img
                  alt=""
                  className="w-20 h-20 md:w-32 md:h-32 object-cover"
                  src={Competence1}
                />
                <h1 className="font-poppins text-white font-light self-center">
                  Memberikan layanan pelatihan dan konsultasi berbagai disiplin
                  ilmu kepada akademisi
                </h1>
              </div>
              <div className="flex mt-10 space-x-5 md:space-x-10 max-w-xl px-5 py-2">
                <img
                  alt=""
                  className="w-20 h-20 md:w-32 md:h-32 object-cover"
                  src={Conversation1}
                />
                <h1 className="font-poppins text-white font-light self-center">
                  Menciptakan wadah komunikasi multi-disiplin tingkat nasional
                </h1>
              </div>
              <div className="flex mt-10 space-x-5 md:space-x-10 max-w-xl px-5 py-2">
                <img
                  alt=""
                  className="w-20 h-20 md:w-32 md:h-32 object-cover"
                  src={Overpopulation1}
                />
                <h1 className="font-poppins text-white font-light self-center">
                  Menghilangkan kesenjangan wawasan akan teknologi pada
                  akademisi serta praktisi{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 px-3 max-w-7xl mx-auto">
        <div className="flex lg:px-20 flex-wrap space-y-10 md:space-y-0 justify-center">
          <div className="flex flex-grow flex-col">
            <Heading1 value="Lebih Dekat Dengan Mongga" />
            <h2 className="font-poppins text-darkgreen max-w-lg mt-10">
              Mongga didirikan pada 20 Agustus 2020 oleh Awla Fajri Assalam,
              seorang pendiri dan mantan ketua organisasi Solve-IT Institut
              Teknologi Bandung. Mongga merupakan projek jangka panjang yang
              dirancang dan direalisasi oleh sebuah tim kecil yang terdiri atas
              7 orang yang dalam prosesnya berhasil mengembangkan projeknya yang
              kini telah menjadi sebuah badan usaha dengan 27 orang karyawan dan
              memiliki relasi dengan banyak mitra pendidikan di Indonesia.
            </h2>
          </div>
          <div className="flex align-center justify-center flex-col">
            <img
              alt=""
              className="self-center w-24 h-24 md:w-36 md:h-36 object-cover"
              src={Group162}
            />
            <h1 className="font-poppins text-darkgreen font-semibold self-center text-center mt-5">
              Awla Fajri Assalam
              <br />
              Chief Executive Officer
            </h1>
          </div>
        </div>
      </div>
      <div className="my-20 px-3 max-w-7xl mx-auto">
        <Heading1 value="Tim Kami" position="text-center" />
        <div className="flex justify-center flex-wrap mt-10">
          <div className="flex align-center flex-col md: w-52 lg:w-96 h-56 md:h-72">
            <img
              alt=""
              className="self-center w-24 h-24 md:w-36 md:h-36 object-cover"
              src={Group158}
            />
            <h1 className="font-poppins text-darkgreen self-center text-center mt-5 max-w-xs">
              Bondi Pratama
              <br />
              Chief Growth Officer{" "}
            </h1>
          </div>
          <div className="flex align-center flex-col md: w-52 lg:w-96 h-56 md:h-72">
            <img
              alt=""
              className="self-center w-24 h-24 md:w-36 md:h-36 object-cover"
              src={Blob3}
            />
            <h1 className="font-poppins text-darkgreen self-center text-center mt-5 max-w-xs">
              Hilyatushalihah K. Audah
              <br />
              Head of Research and Development{" "}
            </h1>
          </div>
          <div className="flex align-center flex-col md: w-52 lg:w-96 h-56 md:h-72">
            <img
              alt=""
              className="self-center w-24 h-24 md:w-36 md:h-36 object-cover"
              src={Group161}
            />
            <h1 className="font-poppins text-darkgreen self-center text-center mt-5 max-w-xs">
              Hiromi Elevenia D.
              <br />
              Head of Operation and Program Management
            </h1>
          </div>
          {/* <div className="flex align-center flex-col md: w-52 lg:w-96 h-56 md:h-72">
            <img
              alt=""
              className="self-center w-24 h-24 md:w-36 md:h-36 object-cover"
              src={Group159}
            />
            <h1 className="font-poppins text-darkgreen self-center text-center mt-5 max-w-xs">
              Ahmad Aji Naufal Ali
              <br />
              Head of Programming
            </h1>
          </div> */}
          <div className="flex align-center flex-col md: w-52 lg:w-96 h-56 md:h-72">
            <img
              alt=""
              className="self-center w-24 h-24 md:w-36 md:h-36 object-cover"
              src={Group160}
            />
            <h1 className="font-poppins text-darkgreen self-center text-center mt-5 max-w-xs">
              Rosalina Fajriani
              <br />
              Head Director of Design
            </h1>
          </div>
          {/* <div className="flex align-center flex-col md: w-52 lg:w-96 h-56 md:h-72">
            <img
              alt=""
              className="self-center w-24 h-24 md:w-36 md:h-36 object-cover"
              src={Group157}
            />
            <h1 className="font-poppins text-darkgreen self-center text-center mt-5 max-w-xs">
              Nurul Afra
              <br />
              Head of Finance
            </h1>
          </div> */}
        </div>
      </div>
      <div>
        <img alt="" src={Divider} className="w-full" />
      </div>
      <div className="my-20 px-3 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center space-y-10 md:space-y-0 md:space-x-24">
          <div>
            <img
              alt=""
              className="w-40 h-40 lg:w-80 lg:h-80 object-cover rounded-2xl"
              src={Mentor}
            />
          </div>
          <div className="flex flex-col justify-center align-center">
            <a
              className="font-poppins text-darkgreen font-bold text-xl"
              href="/aktivitas"
            >
              Kenali Mentor Kami
            </a>
            <p className="font-poppins text-darkgreen max-w-sm mt-8">
              Dengan mentor terbaik kami yang memiliki pengalaman terbaik di
              bidangnya, kami dapat memberikan kelas yang bermutu.
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 px-3 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8">
          <Heading1
            value="Tertarik dengan Produk Kami?"
            position="text-center"
          />
          <h2 className="font-poppins text-darkgreen text-center max-w-sm self-center">
            Jangan ragu untuk bertanya dan silahkan hubungi kami lewat tombol
            dibawah ini
          </h2>
          <ButtonHijau href="/contactus" text="Hubungi Kami" />
        </div>
      </div>
    </>
  );
}
