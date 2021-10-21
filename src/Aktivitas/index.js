import ButtonHijau from '../Button Hijau';
import Heading1 from '../Heading1';
import CardAktivitas from '../Card Aktivitas';
import Apprenticeship from '../img/Apprenticeship.png';
import Webinar from '../img/Webinar.png';
import OpenClass from '../img/OpenClass.png';
import Olimpiade from '../img/PelatihanOlim.png';
import Workshop from '../img/Workshop.png';
import ShortClass from '../img/ShortClass.png';
import Bootcamp from '../img/Bootcamp.png';

export default function Aktivitas() {
    return (
        <>
            <div className="my-20 px-3 max-w-7x1 mx-auto">
                <div className="font-poppins py-5 text-center sm:text-left">
                    <Heading1
                        value="KEGIATAN KAMI"
                        position="text-center"
                    />
                    <p className="flex items-center justify-center text-base md:text-xl lg:text-2xl py-5" style={{ color:"#093334" }}> 
                        Intip kegiatan yang telah dilakukan oleh Mongga
                    </p>
                </div>
            </div>
            <div className="max-w-4x1 mx-auto">
                <div className="flex justify-between my-10 mx-52">
                    <CardAktivitas
                        href="/Aktivitas"
                        src={Apprenticeship}
                        value="Apprenticeship"
                    />
                    <CardAktivitas
                        href="/Aktivitas"
                        src={Webinar}
                        value="Webinar #1 : Kontras Kuliah Dalam dan Luar Negeri"
                    />
                </div>
                <div className="flex justify-between my-10 mx-52">
                    <CardAktivitas
                        href="/Aktivitas"
                        src={OpenClass}
                        value="Open Class : Basic"
                    />
                    <CardAktivitas
                        href="/Aktivitas"
                        src={Olimpiade}
                        value="Pelatihan Olimpiade MTsN 3 Jakarta"
                    />
                </div>
                <div className="flex justify-between my-10 mx-52">
                    <CardAktivitas
                        href="/Aktivitas"
                        src={Workshop}
                        value="Best Workshop : Python for Beginners (Biomed SGU)"
                    />
                    <CardAktivitas
                        href="/Aktivitas"
                        src={ShortClass}
                        value="Short Class #1"
                    />
                </div>
                <div className="flex justify-between my-10 mx-52">
                    <CardAktivitas
                        href="/Aktivitas"
                        src={Bootcamp}
                        value="Grow Series : Bootcamp Programming"
                    />
                </div>
            </div>
        </>
    )
}
