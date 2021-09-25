import Jumbotron from '../Jumbotron';
import hero from '../img/dasdasdassda 1.png';
import ButtonHijau from '../Button Hijau';

export default function ContactUs() {
    return (
        <>
            <div className="relative">
                <div className="flex justify-center">
                    <div className="px-3 max-2-7x1 absolute w-full h-full flex justify-start align-center">
                        <div className=" flex flex-auto justify-start px-40 py-20">
                            <div className="mx-auto">
                                <h1 className="font-poppins text-white text-xl md:text-3xl xl:text-6xl font-bold mb-5">
                                    Kontak Kami
                                </h1>
                                <h2 className="font-poppins text-white text-sm md:text-xl xl:text-2xl font-light">
                                    Untuk kamu yang butuh bantuan
                                </h2>
                                <h2 className="font-poppins text-white text-sm md:text-xl xl:text-2xl font-light">
                                    atau mau bekerjasama dengan kami
                                </h2>
                            </div>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </div>
                <img className="h-60 md:h-auto w-full object cover" src={hero} alt="banner mongga" />
            </div>
            <div className="flex items-center justify-center">
                <div className="font-poppins py-10">
                    <p className="flex items-center justify-center text-lg font-bold">
                        Punya pertanyaan mengenai produk kami?
                    </p>
                    <div className="flex items-center justify-center text-sm py-6">
                        <ButtonHijau href="/contactus" text="Chat melalui WA" />
                    </div>
                    <p className="flex items-center justify-center text-sm">
                        atau hubungi kami melalui support@mongga.id
                    </p>
                    <div className="flex items-center justify-center py-10">
                        <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
                        <div className="px-2"></div>
                        <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
                        <div className="px-2"></div>
                        <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
                    </div>
                    <p className="flex items-center justify-center text-lg font-bold">
                        Gabung dengan komunitas kami melalui
                    </p>
                    <p className="flex items-center justify-center text-lg font-bold">
                        channel kami di telegram
                    </p>
                    <div className="flex items-center justify-center text-sm py-6">
                        <ButtonHijau href="/contactus" text="Gabung di telegram" />
                    </div>
                </div>
            </div>
            {/* <div className="px-3 py-5 xl:py-10 xl:px-0 xl:max-w-3xl mx-auto font-barlow">
                <div className="flex space-x-5 my-10">
                    <ButtonHijau href="/contactus" text="Hubungi Kami" />
                    <ButtonHijau href="/contactus" text="Pelajari Selengkapnya" />
                </div>
            </div> */}
        </>
    )
}
