import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ButtonHijau from '../Button Hijau';
import CardPersegi from '../Card Persegi';
import CardPersegiPanjang from '../Card Persegi Panjang';
import Jumbotron from '../Jumbotron';
import hero from '../img/NEWLAND 6.png';
import online from '../img/online gr 1.png';
import leader from '../img/leader 1.png';
import crowd from '../img/crowd 1.png';
import group193 from '../img/Group 193.png';
import Component24 from '../img/Component 24.png';
import Component21 from '../img/Component 21.png';
import Component22 from '../img/Component 22.png';
import Component23 from '../img/Component 23.png';

SwiperCore.use([Navigation, Pagination]);

export default function LandingPage() {
    return (
        <>
            <Jumbotron href="/produk" src={hero} />
            <div className="px-3 py-5 xl:py-10 xl:px-0 mx-auto mt-5 md:mt-10 max-w-7xl">
                <div className="md:px-32 lg:px-72">
                    <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen text-center font-poppins">Asah kemampuan dan kualitas diri bersama Mongga!</h1>
                </div>
                <div className="flex flex-col lg:flex-row space-y-5 md:space-y-10 lg:space-y-0 justify-around mt-10 lg:px-10">
                    <CardPersegiPanjang title="Penyedia layanan Pelatihan dan Konsultasi yang Terpercaya dan Kompeten" link="Aktivitas Kami >" src={online} href="/aktivitas" />
                    <CardPersegiPanjang title="Mentor Berpengalaman dan Berkualitas di bidangnya" link="Mentor Kami >" src={leader} href="/aktivitas" />
                    <CardPersegiPanjang title="Telah digunakan dan dibuktikan oleh banyak orang" link="Testimoni >" src={crowd} href="/aktivitas" />
                </div>
            </div>
            <div className="px-3 xl:px-0 mx-auto mt-10 md:mt-20 max-w-7xl">
                <img src={group193} className="max-h-20 md:max-h-24 mx-auto" />
            </div>
            <div className="relative mt-20">
                <div className="flex justify-center">
                    <div className="px-3 max-w-7xl absolute w-full h-full flex flex-col lg:flex-row flex-row align-center">
                        <div className="flex flex-col justify-center">
                            <div className="mx-auto">
                                <h1 className="font-poppins text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ lineHeight: '1.16' }}>
                                    Kejar dan <br />Raih Juaramu!
                                </h1>
                                <h2 className="font-poppins text-white text-md md:text-xl lg:text-2xl font-light">
                                    Dorong kemampuan diri dan jadilah juara sekarang!
                                </h2>
                            </div>
                        </div>
                        <Swiper
                            className="max-w-full lg:max-w-lg"
                            loop={true}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={true}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <div className="flex justify-center align-center h-full">
                                    <img src={Component21} className="self-center max-h-full max-w-full" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center align-center h-full">
                                    <img src={Component22} className="self-center max-h-full max-w-full" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center align-center h-full">
                                    <img src={Component23} className="self-center max-h-full max-w-full" />
                                </div>
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
            <div className="mt-10 max-w-7xl mx-auto">
                <div>
                    <h1 className="text-darkgreen font-bold text-4xl text-center">Upgrading Diri</h1>
                </div>
                <Swiper
                    className="max-w-full my-10"
                    loop={true}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
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
                >
                    <SwiperSlide>
                        <div className="flex justify-center align-center h-full">
                            <img src={Component21} className="self-center max-h-full max-w-full" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center align-center h-full">
                            <img src={Component22} className="self-center max-h-full max-w-full" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center align-center h-full">
                            <img src={Component23} className="self-center max-h-full max-w-full" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
