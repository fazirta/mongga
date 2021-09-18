import Jumbotron from '../Jumbotron';
import hero from '../img/dasdasdassda 1.png';
import ButtonHijau from '../Button Hijau';

export default function ContactUs() {
    return (
        <>
            <Jumbotron src={hero} />
            <div className="px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto font-barlow">
                <div className="flex space-x-5 my-10">
                    <ButtonHijau href="/contactus" text="Hubungi Kami" />
                    <ButtonHijau href="/contactus" text="Pelajari Selengkapnya" />
                </div>
            </div>
        </>
    )
}
