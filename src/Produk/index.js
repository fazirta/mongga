import ButtonHijau from "../Button Hijau";
import Heading1 from "../Heading1";
import Paragraph1 from "../Paragraph1";
import Grid from "../Grid";
import ImgKompetisi from "../img/produk-kompetisi.png";
import ImgVector1 from "../img/product-vector-1.png";

export default function Produk() {
  return (
    <>
      <div className="md:px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto font-barlow">
        <Heading1
          value="Temukan topik yang sesuai denganmu!"
          position="text-center"
        />

        <div className="flex flex-row flex-wrap py-10">
          <div className="flex flex-col w-full md:w-1/2 px-12 bg-darkgreen order-2">
            <div className="flex justify-center h-full items-center">
              <img className="w-auto max-h-60" src={ImgKompetisi}></img>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 px-12 order-1">
            <Heading1 value="Kompetisi" position="py-3" />
            <Paragraph1
              value="Mongga menawarkan berbagai fitur persiapan kompetisi berbasis blended learning. Disini, kamu bisa mempersiapkan diri untuk kompetisi secara autodidak menggunakan berbagai fitur asinkron Mongga maupun dengan dibimbing langsung oleh mentor-mentor terbaik kami."
              position="pt-3 pb-16 text-justify"
            />
            <ButtonHijau href="" text="Chat melalui WA" />
          </div>
          <div className="w-full -z-10 relative bottom-10 md:bottom-16 order-last">
            <img className="w-full max-h-20" src={ImgVector1}></img>
          </div>
        </div>

        <div className="flex space-x-5 my-10"></div>
        <Grid href1="/produk/kompetisi" />
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
