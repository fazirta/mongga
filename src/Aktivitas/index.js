import ButtonHijau from '../Button Hijau';
import Heading1 from '../Heading1';
import Apprenticeship from '../img/Apprenticeship.png';
import Webinar from '../img/Webinar.png';
import OpenClass from '../img/OpenClass.png';
import Olimpiade from '../img/OlimMts.png';
import Workshop from '../img/Workshop.png';
import ShortClass from '../img/ShortClass.png';
import Bootcamp from '../img/Bootcamp.png';
import GambarAktivitas from '../Gambar Aktivitas';

export default function Aktivitas() {
    return (
        <>
            <div className="my-20 px-3 max-w-7x1 mx-auto">
                <div className="font-poppins py-5 text-center sm:text-left">
                    <Heading1
                        value="AKTIVITAS"
                        position="text-center"
                    />
                    <p className="flex items-center justify-center text-base md:text-xl lg:text-2xl py-5" style={{ color: "#093334" }}>
                        Intip kegiatan yang telah dilakukan oleh Mongga
                    </p>
                </div>
                <div className="pt-10 pb-1 px-3 max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center lg:justify-between">
                        <div className="p-5 lg:p-10">
                            <GambarAktivitas src={Apprenticeship} position="left" />
                            <div>
                                <p className="font-bold text-darkgreen md:text-xl lg:text-2x1 font-poppins max-w-xs lg:max-w-sm">
                                    Apprenticeship
                                </p>
                            </div>
                        </div>
                        <div className="p-5 lg:p-10">
                            <GambarAktivitas src={Webinar} position="left" />
                            <div>
                                <p className="font-bold text-darkgreen md:text-xl lg:text-2x1 font-poppins max-w-xs lg:max-w-sm">
                                    Webinar #1 : Kontras Kuliah Dalam dan Luar Negeri
                                </p>
                            </div>
                        </div>
                        <div className="p-5 lg:p-10">
                            <GambarAktivitas src={OpenClass} position="left" />
                            <div>
                                <p className="font-bold text-darkgreen md:text-xl lg:text-2x1 font-poppins max-w-xs lg:max-w-sm">
                                    Open Class : Basic
                                </p>
                            </div>
                        </div>
                        <div className="p-5 lg:p-10">
                            <GambarAktivitas src={Olimpiade} position="left" />
                            <div>
                                <p className="font-bold text-darkgreen md:text-xl lg:text-2x1 font-poppins max-w-xs lg:max-w-sm">
                                    Pelatihan Olimpiade MTsN 3 Jakarta
                                </p>
                            </div>
                        </div>
                        <div className="p-5 lg:p-10">
                            <a href="/aktivitas/5">
                                <GambarAktivitas src={Workshop} position="left" />
                                <div>
                                    <p className="font-bold text-darkgreen md:text-xl lg:text-2x1 font-poppins max-w-xs lg:max-w-sm">
                                        BEST Workshop : Python for Beginners (Biomed SGU)
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="p-5 lg:p-10">
                            <a href="/aktivitas/6">
                                <GambarAktivitas src={ShortClass} position="left" />
                                <div>
                                    <p className="font-bold text-darkgreen md:text-xl lg:text-2x1 font-poppins max-w-xs lg:max-w-sm">
                                        Short Class #1
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="p-5 lg:p-10">
                            <a href="/aktivitas/7">
                                <GambarAktivitas src={Bootcamp} position="left" />
                                <div>
                                    <p className="font-bold text-darkgreen md:text-xl lg:text-2x1 font-poppins max-w-xs lg:max-w-sm">
                                        Grow Series : Bootcamp Programming
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
