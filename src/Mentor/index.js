import ButtonHijau from "../Button Hijau";
import Heading1 from "../Heading1";
import Heading2 from "../Heading2";
import Paragraph1 from "../Paragraph1";
import JumbotronHijau from "../Jumbotron Hijau";
import pic_awla from "../img/profile-awla.png";
import decor_star from "../img/decoration-star.png";

export default function Mentor() {
  return (
    <>
      <JumbotronHijau name="Mentor Kami" desc="Membantu menggapai impianmu" />

      {/* header */}
      <div className="my-24">
        <Heading1 value="MENTOR MONGGA" position="text-center" />
        <div className="flex justify-center">
          <Paragraph1
            value="Dengan mentor terbaik kami yang memiliki pengalaman terbaik di bidangnya, kami dapat memberikan kelas yang bermutu."
            position="text-center max-w-xl pt-6"
          />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-col border-2 rounded-full border-green-700 relative">
          <img className="absolute right-0" src={decor_star} />
          <img className="rounded-full p-2" src={pic_awla} />
        </div>
        <div className="flex-col self-center pl-2">
          <div className="flex-row">
            <Heading2 value="Awla Fajri Assalam" />
          </div>
          <div className="flex-row">
            <Paragraph1 value="Founder Organisasi Riset Solve-IT ITB" />
            <Paragraph1 value="Wisudawan Terbaik FMIPA ITB 2021" />
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
