import ButtonHijau from "../Button Hijau";
import JumbotronHijau from "../Jumbotron Hijau";

export default function ContactUs() {
  return (
    <>
      <JumbotronHijau
        name="Hubungi Kami"
        desc="Untuk kamu yang butuh bantuan atau mau bekerjasama dengan kami"
      />

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
  );
}
