import ButtonHijau from "../Button Hijau";
import Heading1 from "../Heading1";
import Paragraph1 from "../Paragraph1";
import JumbotronHijau from "../Jumbotron Hijau";
import pic_awla from "../img/profile-awla.png";

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
            position="text-center max-w-xl"
          />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-col">
          <div className="flex-row">
            <img src={pic_awla}></img>
          </div>
          <div className="flex-row"></div>
        </div>
        <div className="flex-col"></div>
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
