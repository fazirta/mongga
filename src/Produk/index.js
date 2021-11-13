import ButtonHijau from "../Button Hijau";
import Heading1 from "../Heading1";
import Grid from "../Grid";
import ImgVector1 from "../img/product-vector-1.png";
import ImgVector2 from "../img/product-vector-2.png";
import ImgVector3 from "../img/product-vector-3.png";
import Research from "../img/research.png";
import Linguistics from "../img/linguistics.png";
import Vektor1 from "../img/Vector1.png";
import Medal from "../img/medal.png";

export default function Produk() {
  return (
    <>
      <div className="md:px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto font-barlow">
        <Heading1
          value="Temukan topik yang sesuai denganmu!"
          position="text-center py-20"
        />

        <Grid
          bgColor="bg-darkgreen"
          orderA="order-1"
          icon={Medal}
          orderB="order-2"
          headingValue="Kompetisi Olimpiade"
          paragraphValue="Mongga menawarkan berbagai fitur persiapan kompetisi berbasis 
        blended learning. Disini, kamu bisa mempersiapkan diri untuk kompetisi 
        secara autodidak menggunakan berbagai fitur asinkron Mongga maupun dengan 
        dibimbing langsung oleh mentor-mentor terbaik kami."
          href="/contactus"
          buttonText="Chat melalui WA"
          vector={ImgVector1}
        />

        <Grid
          bgColor="bg-monggagrey"
          orderA="md:order-2"
          icon={Research}
          orderB="md:order-1"
          headingValue="Kompetisi Riset"
          paragraphValue="Mongga menawarkan berbagai kelas skill-skill upgrading diri yang mampu
        menunjang karir kamu di masa depan nanti. Kurikulum kelas ini dirancang
        khusus oleh mentor-mentor terbaik kami demi memastikan penyampaian
        materi yang professional dan mudah dimengerti."
          href="/contactus"
          buttonText="Pelajari Lebih Lanjut"
          vector={ImgVector2}
        />

        <Grid
          bgColor="bg-darkgreen"
          orderA="order-1"
          icon={Linguistics}
          orderB="order-2"
          headingValue="Kompetisi Bahasa"
          paragraphValue="Buat kamu yang ingin melanjutkan studi ke luar negeri, 
        yuk persiapkan matang-matang bersama Mongga. Disini kamu bisa berkonsultasi 
        dengan fasilitator kami yang sudah berpengalaman melanjutkan studi keluar negeri. 
        Selain itu, kamu juga bisa mempersiapkan kebutuhan bahasa kamu bersama Mongga untuk 
        memenuhi syarat-syarat studi ke luar negeri."
          href="/contactus"
          buttonText="Chat melalui WA"
          vector={ImgVector3}
        />

        <Grid
          bgColor="bg-monggagrey"
          orderA="md:order-2"
          icon={Vektor1}
          orderB="md:order-1"
          headingValue="Kompetisi Business Plan"
          paragraphValue="Buat kamu yang ingin melanjutkan studi ke luar negeri, 
        yuk persiapkan matang-matang bersama Mongga. Disini kamu bisa berkonsultasi 
        dengan fasilitator kami yang sudah berpengalaman melanjutkan studi keluar negeri. 
        Selain itu, kamu juga bisa mempersiapkan kebutuhan bahasa kamu bersama Mongga untuk 
        memenuhi syarat-syarat studi ke luar negeri."
          href="/contactus"
          buttonText="Chat melalui WA"
          vector={ImgVector2}
        />

        <div className="flex space-x-5 my-10"></div>
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
