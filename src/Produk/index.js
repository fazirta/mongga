import ButtonHijau from '../Button Hijau';
import Grid from '../Grid';

export default function Produk() {
    return (
        <>
            <div className="px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto font-barlow">
                <div className="flex space-x-5 my-10">
                    <ButtonHijau href="/contactus" text="Hubungi Kami" />
                    <ButtonHijau href="/contactus" text="Pelajari Selengkapnya" />
                </div>
                <Grid href1="/produk/kompetisi" />
            </div>
        </>
    )
}
