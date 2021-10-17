import ButtonHijau from '../Button Hijau';
import Heading1 from '../Heading1';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Apprenticeship1 from '../img/Apprenticeship 1.png';
import Apprenticeship2 from '../img/Apprenticeship 2.png';
import Apprenticeship3 from '../img/Apprenticeship 3.png';
import FreeClass1 from '../img/Free Class 1.png';
import FreeClass2 from '../img/Free Class 2.png';
import FreeClass3 from '../img/Free Class 3.png';
import Bootcamp1 from '../img/Bootcamp 1.png';
import Bootcamp2 from '../img/Bootcamp 2.png';
import Bootcamp3 from '../img/Bootcamp 3.png';
import facebook from '../img/Facebook_white 1.png';

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination, A11y]);

export default function Aktivitas() {
    return (
        <>
            <div className="my-20 px-3 max-w-7x1 mx-auto">
                <div className="font-poppins py-5 text-center sm:text-left">
                    <Heading1
                        value="KEGIATAN KAMI"
                        position="text-center"
                    />
                    <p className="flex items-center justify-center text-base md:text-xl lg:text-2xl py-5" style={{ color: "#093334" }}>
                        Intip kegiatan yang telah dilakukan oleh Mongga
                    </p>
                </div>
                <div className="p-10 text-gray-200 font-barlow text-center sm:text-left md:max-w-2xl" style={{ backgroundColor: "#093334" }}>
                    {/* <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white text-center">
                        Apprenticeship
                    </h2> */}
                    <Swiper className="md:flex"
                        // spaceBetween={40}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        // effect={'fade'}
                        autoplay={{ "delay": 2500, "disableOnInteraction": false }}
                        navigation={true}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="py-5"></div>
                            <div className="flex justify-center align-center h-full py-10">
                                <img  alt="" src={Apprenticeship1} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white text-center">
                                Apprenticeship
                            </h2>
                            <div className="flex justify-center align-center h-full py-11">
                                <img  alt="" src={Apprenticeship2} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5"></div>
                            <div className="flex justify-center align-center h-full py-10">
                                <img  alt="" src={Apprenticeship3} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5"></div>
                            <div className="flex justify-center align-center h-full py-10">
                                <img  alt="" src={FreeClass1} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white text-center">
                                Free Class
                            </h2>
                            <div className="flex justify-center align-center h-full py-11">
                                <img  alt="" src={FreeClass2} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5"></div>
                            <div className="flex justify-center align-center h-full py-10">
                                <img  alt="" src={FreeClass3} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5"></div>
                            <div className="flex justify-center align-center h-full py-10">
                                <img  alt="" src={Bootcamp1} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white text-center">
                                Bootcamp
                            </h2>
                            <div className="flex justify-center align-center h-full py-11">
                                <img  alt="" src={Bootcamp2} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5"></div>
                            <div className="flex justify-center align-center h-full py-10">
                                <img  alt="" src={Bootcamp3} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5"></div>
                            <div className="flex justify-center align-center h-full py-10">
                                <img  alt="" src={facebook} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white text-center">
                                Short Class
                            </h2>
                            <div className="flex justify-center align-center h-full py-11">
                                <img  alt="" src={facebook} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5"></div>
                            <div className="flex justify-center align-center h-full py-10">
                                <img  alt="" src={facebook} className="self-center min-w-min border-white border-8 rounded-md object-contain h-44"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="font-poppins py-10 text-center sm:text-left">
                    <Heading1
                        value="Tertarik dengan Produk Kami?"
                        position="text-center"
                    />
                    <p className="flex items-center justify-center text-base md:text-xl py-5">
                        Jangan ragu untuk bertanya dan silahkan hubungi kami lewat tombol dibawah ini
                    </p>
                    <div className="flex items-center justify-center text-sm">
                        <ButtonHijau href="/contactus" text="Hubungi Kami" />
                    </div>
                </div>
            </div>
            {/* <div className="px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto font-barlow">
                <div className="flex space-x-5 my-10">
                    <ButtonHijau href="/contactus" text="Hubungi Kami" />
                    <ButtonHijau href="/contactus" text="Pelajari Selengkapnya" />
                </div>
            </div> */}
        </>
    )
}
