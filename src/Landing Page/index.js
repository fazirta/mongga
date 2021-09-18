import ButtonHijau from '../Button Hijau';
import CardPersegi from '../Card Persegi';
import CardPersegiPanjang from '../Card Persegi Panjang';
import Jumbotron from '../Jumbotron';
import hero from '../img/NEWLAND 6.png';

export default function LandingPage() {
    return (
        <>
            <Jumbotron href="/produk" src={hero} />
            <div className="px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto">
                <div className="flex space-x-5 my-10">
                    <ButtonHijau href="/contactus" text="Hubungi Kami" />
                    <ButtonHijau href="/contactus" text="Pelajari Selengkapnya" />
                </div>
                <div className="flex justify-between my-10">
                    <CardPersegi title="Olimpiade" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" href="/produk" />
                    <CardPersegi title="Riset" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" href="/produk" />
                    <CardPersegi title="Bahasa" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" href="/produk" />
                </div>
                <div className="flex justify-between my-10">
                    <CardPersegiPanjang title="Penyedia layanan Pelatihan dan Konsultasi yang Terpercaya dan Kompeten" link="Aktivitas Kami >" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" href="/aktivitas" />
                    <CardPersegiPanjang title="Mentor Berpengalaman dan Berkualitas di bidangnya" link="Mentor Kami >" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" href="/aktivitas" />
                    <CardPersegiPanjang title="Telah digunakan dan dibuktikan oleh banyak orang" link="Testimoni >" src="https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" href="/aktivitas" />
                </div>
            </div>
        </>
    )
}
