import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ButtonHijau from "../Button Hijau";
import CardPersegi from "../Card Persegi";
import Heading1 from "../Heading1";
import CardPersegiPanjang from '../Card Persegi Panjang';
import Jumbotron from '../Jumbotron';
import hero from '../img/NEWLAND 6.png';
import online from '../img/online gr 1.png';
import leader from '../img/leader 1.png';
import crowd from '../img/crowd 1.png';
import Component24 from '../img/Component 24.png';
import student5540227_19201 from "../img/student-5540227_1920 1.png";
import Group173 from "../img/Group 173.png";
import Group174 from "../img/Group 174.png";
import Group175 from "../img/Group 175.png";
import Group230 from "../img/Group 230.png";
import Group231 from "../img/Group 231.png";
import Group232 from "../img/Group 232.png";
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

SwiperCore.use([Navigation, Pagination]);

export default function LandingPage() {
  return (
    <>
      <Jumbotron href="/produk" src={hero} />
      <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto mt-5 md:mt-10 max-w-7xl">
        <div className="md:px-32 lg:px-72">
          <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen text-center font-poppins">
            Asah kemampuan dan kualitas diri bersama Mongga!
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row space-y-5 md:space-y-10 lg:space-y-0 justify-around mt-10 lg:px-10">
          <CardPersegiPanjang
            title="Penyedia layanan Pelatihan dan Konsultasi yang Terpercaya dan Kompeten"
            link="Aktivitas Kami >"
            src={online}
            href="/aktivitas"
          />
          <CardPersegiPanjang
            title="Mentor Berpengalaman dan Berkualitas di bidangnya"
            link="Mentor Kami >"
            src={leader}
            href="/aktivitas"
          />
          <CardPersegiPanjang
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
            <h1 className="text-white font-bold font-poppins text-xs lg:text-xl self-center">Temukan topik yang kamu inginkan!</h1>
          </div>
          <div className="bg-mainyellow w-11/12 rounded-full h-3 lg:h-5 absolute bottom-1 lg:bottom-2 shadow-xl"></div>
        </div>
      </div>
      <div className="relative mt-20">
        <div className="flex justify-center">
          <div className="py-6 md:py-0 px-3 max-w-7xl absolute w-full h-full flex flex-col md:flex-row flex-row align-center">
            <div className="flex flex-col justify-center">
              <div className="mx-auto">
                <h1
                  className="font-poppins text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-5 font-poppins"
                  style={{ lineHeight: "1.16" }}
                >
                  Kejar dan <br />
                  Raih Juaramu!
                </h1>
                <h2 className="font-poppins text-white text-sm md:text-xl lg:text-2xl font-light font-poppins">
                  Dorong kemampuan diri dan jadilah juara sekarang!
                </h2>
              </div>
            </div>
            <Swiper
              className="mt-8 md:mt-0 max-w-full md:max-w-sm lg:max-w-lg"
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
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
          className="h-96 md:h-auto w-full object-cover"
          src={Component24}
          alt=""
        />
      </div>
      <div className="mt-10 py-10 max-w-7xl mx-auto px-3">
        <div>
          <h1 className="text-darkgreen font-bold text-4xl text-center font-poppins">
            Upgrading Diri
          </h1>
        </div>
        <Swiper
          className="max-w-full"
          spaceBetween={0}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
        <ButtonHijau href="/produk" text="Pelajari Selengkapnya" />
      </div>
      <div className="my-20 px-3 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center space-y-10 md:space-y-0 md:space-x-24">
          <div>
            <img
              className="w-48 h-40 lg:w-96 lg:h-80 object-cover rounded-2xl"
              src={student5540227_19201}
            />
          </div>
          <div className="flex flex-col justify-center align-center">
            <a
              className="font-poppins text-darkgreen font-bold text-xl"
              href="#"
            >
              Ingin melanjutkan studi ke luar negeri?
            </a>
            <p className="font-poppins text-darkgreen max-w-sm mt-8">
              Persiapkan dirimu di Study Abroad bersama Mongga!
            </p>
            <div className="flex my-5">
              <ButtonHijau
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
            className="max-w-full my-10"
            spaceBetween={0}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
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
              <div className="flex justify-center align-center h-full">
                <img
                  src={Group173}
                  className="self-center max-h-full max-w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center align-center h-full">
                <img
                  src={Group174}
                  className="self-center max-h-full max-w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center align-center h-full">
                <img
                  src={Group175}
                  className="self-center max-h-full max-w-full"
                />
              </div>
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
          className="max-w-full my-10"
          spaceBetween={0}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
            <div className="flex justify-center align-center h-full">
              <img src={Group230} className="self-center w-72 md:w-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center align-center h-full">
              <img src={Group231} className="self-center w-72 md:w-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center align-center h-full">
              <img src={Group232} className="self-center w-72 md:w-auto" />
            </div>
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
              <img src={sman11jakarta} />
            </div>
            <div className="p-4 md:p-8">
              <img src={Group194} />
            </div>
            <div className="p-4 md:p-8">
              <img src={image_1} />
            </div>
            <div className="p-4 md:p-8">
              <img src={sman29jakartaremovebgpreview1} />
            </div>
            <div className="p-4 md:p-8">
              <img src={image2} />
            </div>
            <div className="p-4 md:p-8">
              <img src={image1} />
            </div>
            <div className="p-4 md:p-8">
              <img src={image3} />
            </div>
            <div className="p-4 md:p-8">
              <img src={image_2} />
            </div>
            <div className="p-4 md:p-8">
              <img src={image} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-gray-500 font-poppins text-xl text-center">
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
          <ButtonHijau href="/contactus" text="Hubungi Kami" />
        </div>
      </div>
    </>
  );
}
