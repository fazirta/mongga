import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ButtonHijau from "../Button Hijau";
import CardPersegi from "../Card Persegi";
import CardReview from "../Card Review";
import Heading1 from "../Heading1";
import CardPersegiPanjang from "../Card Persegi Panjang";
import Jumbotron from "../Jumbotron";
import hero from "../img/621429.png";
import logo from "../img/MONGGA LOGO WHITEE 1.png";
import online from "../img/online gr 1.png";
import leader from "../img/leader 1.png";
import crowd from "../img/crowd 1.png";
import Component24 from "../img/Component 24.png";
import student5540227_19201 from "../img/student-5540227_1920 1.png";
import sman11jakarta from "../img/sman 11 jakarta.png";
import Group194 from "../img/Group 194.png";
import image_1 from "../img/image-1.png";
import sman29jakartaremovebgpreview1 from "../img/sman_29_jakarta-removebg-preview 1.png";
import image2 from "../img/image2.png";
import image1 from "../img/image1.png";
import image3 from "../img/image-3.png";
import image_2 from "../img/image-2.png";
import image from "../img/image.png";
import Group233 from "../img/Group 233.png";
import Group234 from "../img/Group 234.png";
import Group235 from "../img/Group 235.png";
import Group236 from "../img/Group 236.png";
import Group237 from "../img/Group 237.png";
import Group238 from "../img/Group 238.png";
import Group239 from "../img/Group 239.png";
import Group240 from "../img/Group 240.png";
import Group241 from "../img/Group 241.png";
import Group242 from "../img/Group 242.png";
import Group243 from "../img/Group 243.png";
import asdasd1 from "../img/asdasd 1.png";
import dafbmm1 from "../img/dafbmm 1.png";
import Group199 from "../img/Group 199.png";
import img263684 from "../img/263684.png";
import img263686 from "../img/263686.png";
import img263699 from "../img/263699.png";
import GambarAktivitas from "../Gambar Aktivitas";

export default function LandingPage() {
  SwiperCore.use([Navigation, Pagination]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) {
      Aos.init({
        once: true,
      });
    }
  }, [loaded]);

  return (
    <>
      <Jumbotron
        href="/produk"
        src={hero}
        src1={logo}
        title="Partner Kamu untuk Jadi Seorang Pemenang!"
        setLoaded={setLoaded}
      />
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto mt-5 md:mt-10 max-w-7xl">
        <div className="md:px-32 lg:px-72">
          <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen text-center font-poppins">
            Asah kemampuan dan kualitas diri bersama Mongga!
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row space-y-5 md:space-y-10 lg:space-y-0 justify-around mt-10 lg:px-10">
          <CardPersegiPanjang
            dataAOS="zoom-in-up"
            title="Penyedia layanan Pelatihan dan Konsultasi yang Terpercaya dan Kompeten"
            link="Aktivitas Kami >"
            src={online}
            href="/aktivitas"
          />
          <CardPersegiPanjang
            dataAOS="zoom-in-up"
            delay="100"
            title="Mentor Berpengalaman dan Berkualitas di bidangnya"
            link="Mentor Kami >"
            src={leader}
            href="/aktivitas"
          />
          <CardPersegiPanjang
            dataAOS="zoom-in-up"
            delay="200"
            title="Telah digunakan dan dibuktikan oleh banyak orang"
            link="Testimoni >"
            src={crowd}
            href="/aktivitas"
          />
        </div>
      </div>
      <div className="px-3 xl:px-0 mx-auto mt-10 md:mt-20 max-w-7xl">
        <div className="relative max-w-xs md:max-w-md lg:max-w-xl mx-auto flex justify-center h-12 lg:h-24">
          <div className="flex justify-center h-10 lg:h-20 w-full rounded-full bg-darkgreen shadow-xl">
            <h1 className="text-white font-bold font-poppins text-xs lg:text-xl self-center">
              Temukan topik yang kamu inginkan!
            </h1>
          </div>
          <div className="bg-mainyellow w-11/12 rounded-full h-3 lg:h-5 absolute bottom-1 lg:bottom-2 shadow-xl"></div>
        </div>
      </div>
      <div className="relative mt-20 overflow-x-hidden">
        <div className="flex justify-center">
          <div className="py-6 md:py-0 px-3 max-w-7xl absolute w-full h-full flex flex-col md:flex-row align-center">
            <div className="JuaraText flex flex-col justify-center">
              <div className="mx-auto">
                <h1
                  className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-5 font-poppins"
                  style={{ lineHeight: "1.16" }}
                >
                  Kejar dan <br />
                  Raih Juaramu!
                </h1>
                <h2 className="text-white text-sm md:text-xl lg:text-2xl font-light font-poppins">
                  Dorong kemampuan diri dan jadilah juara sekarang!
                </h2>
              </div>
            </div>
            <Swiper
              className="mt-8 md:mt-0 max-w-full md:max-w-sm lg:max-w-lg"
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              autoplay={true}
            >
              <SwiperSlide>
                <CardPersegi title="Olimpiade" src={Group233} />
              </SwiperSlide>
              <SwiperSlide>
                <CardPersegi title="Riset" src={Group234} />
              </SwiperSlide>
              <SwiperSlide>
                <CardPersegi title="Bahasa" src={Group235} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <img
          alt=""
          className="h-96 md:h-auto w-full object-cover"
          src={Component24}
        />
      </div>
      <div className="mt-10 py-10 max-w-7xl mx-auto px-3">
        <div>
          <h1 className="text-darkgreen font-bold text-4xl text-center font-poppins">
            Upgrading Diri
          </h1>
        </div>
        <Swiper
          data-aos="fade-up"
          className="max-w-full"
          spaceBetween={0}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
          autoplay={true}
        >
          <SwiperSlide>
            <CardPersegi title="Robotik" src={Group236} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPersegi title="Data Science" src={Group237} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPersegi title="Programming Website" src={Group238} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPersegi title="Programming Android" src={Group239} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPersegi title="Programming Games" src={Group240} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPersegi title="Desain Grafis" src={Group241} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPersegi title="Videografi" src={Group242} />
          </SwiperSlide>
          <SwiperSlide>
            <CardPersegi title="Seminar Motivasi" src={Group243} />
          </SwiperSlide>
        </Swiper>
        <ButtonHijau
          dataAOS="zoom-in"
          href="/produk"
          text="Pelajari Selengkapnya"
        />
      </div>
      <div className="my-20 px-3 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center space-y-10 md:space-y-0 md:space-x-24">
          <div>
            <img
              alt=""
              className="w-48 h-40 lg:w-96 lg:h-80 object-cover rounded-2xl"
              src={student5540227_19201}
            />
          </div>
          <div className="flex flex-col justify-center align-center">
            <a
              className="font-poppins text-darkgreen font-bold text-xl"
              href="/"
            >
              Ingin melanjutkan studi ke luar negeri?
            </a>
            <p className="font-poppins text-darkgreen max-w-sm mt-8">
              Persiapkan dirimu di Study Abroad bersama Mongga!
            </p>
            <div className="flex my-5">
              <ButtonHijau
                dataAOS="zoom-in"
                className="self-start"
                href="/produk"
                text="Pelajari Selengkapnya"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10" style={{ background: "#D2D8CE" }}>
        <div className="pt-10 pb-1 px-3 max-w-7xl mx-auto">
          <div className="flex justify-center">
            <h1 className="text-darkgreen font-bold text-xl font-poppins border-b-4 border-yellow-400 pb-2">
              Aktivitas Terkini{" "}
            </h1>
          </div>
          <Swiper
            data-aos="fade-up"
            className="max-w-full my-10"
            spaceBetween={0}
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 3,
              },
            }}
            autoplay={true}
          >
            <SwiperSlide>
              <GambarAktivitas src={img263699} position="right" />
            </SwiperSlide>
            <SwiperSlide>
              <GambarAktivitas src={img263686} position="right" />
            </SwiperSlide>
            <SwiperSlide>
              <GambarAktivitas src={img263684} position="right" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="my-10 pt-10 pb-1 px-3 md:px-10 xl:px-20 max-w-7xl mx-auto">
        <div className="flex justify-center">
          <h1 className="text-darkgreen font-bold text-4xl font-poppins">
            Apa kata mereka?
          </h1>
        </div>
        <Swiper
          data-aos="fade-up"
          className="max-w-full my-10"
          spaceBetween={0}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3,
            },
          }}
          autoplay={true}
        >
          <SwiperSlide>
            <CardReview
              src={asdasd1}
              name="Narga Naraya Andono"
              course="Kelas Videografi"
              review="“Hal yang paling berkesan buatku adalah ketika belajar after effect. Kakak mentornya interaktif. Penjelasannya cukup dapat dimengerti oleh apprentice lain dan selalu ngasih kita masukan untuk meng-improve skill kita. Meskipun di youtube ada tutorialnya, namun seringkali membingungkan. Tapi kalau ikut kelas ini kan kita bisa langsung tanya ke mentor ketika ada yang tidak dimengerti”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview
              src={Group199}
              name="Dafina Farah Fatima"
              course="Kelas Programming"
              review="“Mongga taught me how to have fun while obtaining new knowledge and find satisfaction from creating things”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview
              src={dafbmm1}
              name="Balya Elfata"
              course="Kelas Videografi"
              review="“Kemarin aku belajar banyak hal, tapi yang paling berkesan adalah hologram effect karena simple tapi efeknya keren. Mentornya asik, sabar, dan juga video kita ditonton satu per satu jadi bisa dapet saran dari mentor dan peserta lainnya.“"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-10 px-3 py-16 bg-darkgreen">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-xl font-poppins border-b-4 border-yellow-400 pb-2">
            Mitra yang Telah Bekerja Sama
          </h1>
        </div>
        <div className="max-w-7xl mx-auto mt-10">
          <div className="flex max-w-5xl flex-wrap mx-auto justify-center">
            <div className="p-4 md:p-8">
              <img alt="" data-aos="fade-up" src={sman11jakarta} />
            </div>
            <div data-aos="zoom-in-up" data-aos-delay="" className="p-4 md:p-8">
              <img alt="" src={Group194} />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="p-4 md:p-8"
            >
              <img alt="" src={image_1} />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="200"
              className="p-4 md:p-8"
            >
              <img alt="" src={sman29jakartaremovebgpreview1} />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="300"
              className="p-4 md:p-8"
            >
              <img alt="" src={image2} />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="400"
              className="p-4 md:p-8"
            >
              <img alt="" src={image1} />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="500"
              className="p-4 md:p-8"
            >
              <img alt="" src={image3} />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="600"
              className="p-4 md:p-8"
            >
              <img alt="" src={image_2} />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="700"
              className="p-4 md:p-8"
            >
              <img alt="" src={image} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="600"
            className="font-bold text-gray-500 font-poppins text-xl text-center"
          >
            Dan masih banyak lagi!
          </h1>
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
          <ButtonHijau
            dataAOS="zoom-in"
            href="/contactus"
            text="Hubungi Kami"
          />
        </div>
      </div>
    </>
  );
}
