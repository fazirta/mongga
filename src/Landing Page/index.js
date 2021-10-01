import ButtonHijau from '../Button Hijau';
import CardPersegi from '../Card Persegi';
import CardPersegiPanjang from '../Card Persegi Panjang';
import Jumbotron from '../Jumbotron';
import hero from '../img/NEWLAND 6.png';
import online from '../img/online gr 1.png';
import leader from '../img/leader 1.png';
import crowd from '../img/crowd 1.png';
import group193 from '../img/Group 193.png';

export default function LandingPage() {
    return (
        <>
            <Jumbotron href="/produk" src={hero} />
            <div className="px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto">
                <div className="mt-5 md:mt-10">
                    <div className="md:px-32 lg:px-72">
                        <h1 className="font-bold text-3xl lg:text-4xl text-darkgreen text-center font-poppins">Asah kemampuan dan kualitas diri bersama Mongga!</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-5 md:space-y-10 lg:space-y-0 justify-around mt-10 lg:px-10">
                        <CardPersegiPanjang title="Penyedia layanan Pelatihan dan Konsultasi yang Terpercaya dan Kompeten" link="Aktivitas Kami >" src={online} href="/aktivitas" />
                        <CardPersegiPanjang title="Mentor Berpengalaman dan Berkualitas di bidangnya" link="Mentor Kami >" src={leader} href="/aktivitas" />
                        <CardPersegiPanjang title="Telah digunakan dan dibuktikan oleh banyak orang" link="Testimoni >" src={crowd} href="/aktivitas" />
                    </div>
                </div>
                <div className="mt-10 md:mt-20">
                    <img src={group193} className="max-h-20 md:max-h-24 mx-auto" />
                </div>
            </div>
        </>
    )
}
