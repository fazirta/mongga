import ButtonHijau from "../Button Hijau";
import JumbotronHijau from "../Jumbotron Hijau";
import Heading1 from "../Heading1";

export default function ContactUs() {
  return (
    <>
      <JumbotronHijau
        name="Hubungi Kami"
        desc="Untuk kamu yang butuh bantuan atau mau bekerjasama dengan kami"
      />
      <div className="my-20 px-3 max-w-7xl mx-auto">
        <div className="font-poppins py-10">
          <Heading1
            value="Punya pertanyaan mengenai produk kami?"
            position="text-center"
          />
          <div className="flex items-center justify-center text-sm py-6">
            <ButtonHijau href="https://api.whatsapp.com/send?phone=6289609728606&text=Halo+admin%2C+Saya+ingin+konsultasi+tentang+produk+mongga&app_absent=0" text="Chat melalui WA" />
          </div>
          <p className="flex items-center justify-center text-base md:text-xl lg:text-2xl font-semibold">
            atau hubungi kami melalui{" "}
            <a href="mailto:support@mongga.id">&nbsp; support@mongga.id</a>
          </p>
          <div className="flex items-center justify-center py-10">
            <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
            <div className="px-2"></div>
            <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
            <div className="px-2"></div>
            <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
          </div>
          <Heading1
            value="Gabung dengan komunitas kami melalui channel kami di telegram"
            position="text-center"
          />

          <div className="flex items-center justify-center text-sm py-6">
            <ButtonHijau href="https://t.me/joinchat/-FYL91EUszBmZGQ1" text="Gabung di telegram" />
          </div>
        </div>
      </div>
    </>
  );
}
