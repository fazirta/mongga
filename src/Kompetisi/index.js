import ButtonHijau from "../Button Hijau";
import Dropdown from "../Dropdown";

export default function Kompetisi() {
  return (
    <>
      <div className="px-3 py-5 xl:py-10 xl:px-0 xl:max-w-7xl mx-auto font-barlow">
        <div className="flex space-x-5 my-10">
          <ButtonHijau href="/contactus" text="Hubungi Kami" />
          <ButtonHijau href="/contactus" text="Pelajari Selengkapnya" />
        </div>
        <div className="w-full">
          <div className="w-full mx-auto bg-white rounded-2xl">
            <Dropdown
              title="Olimpiade"
              description="Deskripsi singkat.... Event apa aja...."
            />
            <Dropdown
              title="Riset"
              description="Deskripsi singkat.... Event apa aja...."
            />
            <Dropdown
              title="Bahasa"
              description="Deskripsi singkat.... Event apa aja...."
            />
          </div>
        </div>
      </div>
    </>
  );
}
