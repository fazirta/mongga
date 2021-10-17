import ButtonHijau from '../Button Hijau';
import Heading1 from '../Heading1';
import Apprenticeship from '../img/Apprenticeship.png';
import Webinar from '../img/Webinar.png';
import OpenClass from '../img/OpenClass.png';
import Olimpiade from '../img/OlimMts.png';
import Workshop from '../img/Workshop.png';
import ShortClass from '../img/ShortClass.png';
import Bootcamp from '../img/Bootcamp.png';

export default function Aktivitas() {
    return (
        <>
            <div className="my-20 px-3 max-w-7x1 mx-auto">
                <div className="font-poppins py-5 text-center sm:text-left">
                    <Heading1
                        value="AKTIVITAS"
                        position="text-center"
                    />
                    <p className="flex items-center justify-center text-base md:text-xl lg:text-2xl py-5" style={{ color:"#093334" }}> 
                        Intip kegiatan yang telah dilakukan oleh Mongga
                    </p>
                </div>
                <div className="relative pt-52 pb-28">
                    <div className="absolute md:top-0 md:bottom-20 md:left-48 md:w-80 md:h-48 md:shadow-lg rounded md:rounded-lg md:max-w-4xl" style={{ backgroundColor: "#093334" }}>
                                
                    </div>
                    <div className="absolute md:top-0 md:left-52">
                        <img src={Apprenticeship} className="md:w-80 md:h-44" />
                    </div>
                    <div className="absolute md:top-0 md:bottom-20 md:right-56 md:w-80 md:h-48 md:shadow-lg rounded md:rounded-lg  md:max-w-4xl" style={{ backgroundColor: "#093334" }}>
                                
                    </div>
                    <div className="absolute md:top-0 md:right-52">
                        <img src={Webinar} className="md:w-80 md:h-44" />
                    </div>
                    <div className="font-poppins font-bold">
                        <p className="absolute md:text-xl lg:text-2x1 pl-48">                                
                            Apprenticeship
                        </p>
                        <p className="absolute right-3 md:text-xl lg:text-2x1">
                            Webinar #1 : Kontras Kuliah Dalam dan Luar Negeri                                
                        </p>
                    </div>
                </div>  
                <div className="relative pt-52 pb-28">
                    <div className="absolute md:top-0 md:bottom-20 md:left-48 md:w-80 md:h-48 md:shadow-lg rounded md:rounded-lg md:max-w-4xl" style={{ backgroundColor: "#093334" }}>
                                
                    </div>
                    <div className="absolute md:top-0 md:left-52">
                        <img src={OpenClass} className="md:w-80 md:h-44" />
                    </div>
                    <div className="absolute md:top-0 md:bottom-20 md:right-56 md:w-80 md:h-48 md:shadow-lg rounded md:rounded-lg  md:max-w-4xl" style={{ backgroundColor: "#093334" }}>
                                
                    </div>
                    <div className="absolute md:top-0 md:right-52">
                        <img src={Olimpiade} className="md:w-80 md:h-44" />
                    </div>
                    <div className="font-poppins font-bold">
                        <p className="absolute md:text-xl lg:text-2x1 px-48">                                
                            Open Class : Basic
                        </p>
                        <p className="absolute right-40 md:text-xl lg:text-2x1">
                            Pelatihan Olimpiade MTsN 3 Jakarta                                
                        </p>
                    </div>
                </div> 
                <div className="relative pt-52 pb-28">
                    <div className="absolute md:top-0 md:bottom-20 md:left-48 md:w-80 md:h-48 md:shadow-lg rounded md:rounded-lg md:max-w-4xl" style={{ backgroundColor: "#093334" }}>
                                
                    </div>
                    <div className="absolute md:top-0 md:left-52">
                        <img src={Workshop} className="md:w-80 md:h-44" />
                    </div>
                    <div className="absolute md:top-0 md:bottom-20 md:right-56 md:w-80 md:h-48 md:shadow-lg rounded md:rounded-lg  md:max-w-4xl" style={{ backgroundColor: "#093334" }}>
                                
                    </div>
                    <div className="absolute md:top-0 md:right-52">
                        <img src={ShortClass} className="md:w-80 md:h-44" />
                    </div>
                    <div className="font-poppins font-bold">
                        <p className="absolute md:text-xl lg:text-2x1 px-48">                                
                            BEST Workshop : Python for Beginners (Biomed SGU)
                        </p>
                        <p className="absolute right-96 md:text-xl lg:text-2x1">
                            Short Class #1                               
                        </p>
                    </div>
                </div>
                <div className="relative pt-52 pb-28">
                    <div className="absolute md:top-0 md:bottom-20 md:left-48 md:w-80 md:h-48 md:shadow-lg rounded md:rounded-lg md:max-w-4xl" style={{ backgroundColor: "#093334" }}>
                                
                    </div>
                    <div className="absolute md:top-0 md:left-52">
                        <img src={Bootcamp} className="md:w-80 md:h-44" />
                    </div>
                    <div className="font-poppins font-bold">
                        <p className="absolute md:text-xl lg:text-2x1 px-48">                                
                            Grow Series : Bootcamp Programming
                        </p>
                    </div>
                </div>             
            </div>
        </>
    )
}
