import ButtonHijau from "../Button Hijau";
import JumbotronHijau from "../Jumbotron Hijau";
import Heading1 from "../Heading1";
import ContactUsLogo from "../img/contactus-logo.png";
import Instagram from "../img/Instagram_white 1.png";
import Linkedin from "../img/LinkedIN_white 1.png";
import Facebook from "../img/Facebook_white 1.png";

export default function ContactUs() {
  return (
    <>
      <JumbotronHijau
        name="Hubungi Kami"
        desc="Untuk kamu yang butuh bantuan atau mau bekerjasama dengan kami"
      />
      <Heading1
            value="Test Vercel"
            position="text-center"
          />
      <div className="my-20 px-3 max-w-7xl mx-auto">
        <div className="font-poppins py-10 text-center sm:text-left">
          <Heading1
            value="Punya pertanyaan mengenai produk kami?"
            position="text-center"
          />
          <div className="flex items-center justify-center text-sm py-6">
            <ButtonHijau
              href="https://api.whatsapp.com/send?phone=6289609728606&text=Halo+admin%2C+Saya+ingin+konsultasi+tentang+produk+mongga&app_absent=0"
              text="Chat melalui WA"
            />
          </div>
          <p className="flex items-center justify-center text-base md:text-xl lg:text-2xl font-semibold">
            atau hubungi kami melalui{" "}
            <a href="mailto:support@mongga.id">&nbsp; support@mongga.id</a>
          </p>
          <div className="flex items-center justify-center py-10 my-10">
            <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
            <div className="px-2"></div>
            <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
            <div className="px-2"></div>
            <div className="border-4 rounded-full w-4 h-4 bg-gray-400 border-gray-400"></div>
          </div>
          <Heading1
            value="Gabung dengan komunitas kami"
            position="text-center"
          />

          <div className="flex items-center justify-center text-sm py-6">
            <ButtonHijau
              href="https://t.me/joinchat/-FYL91EUszBmZGQ1"
              text="Gabung di telegram"
            />
          </div>
          <div className="flex items-center justify-center text-sm py-6">
            <div className="flex justify-center">
              <div className="bg-darkgreen rounded-large px-4 py-3 transition duration-300 ease-in-out font-poppins shadow-2xl">
                <div class="flex flex-col lg:flex-row items-center content-center px-7">
                  <img className="m-5 lg:mr-10" src={ContactUsLogo} />
                  <div>
                    <p class="text-white text-xl text-center font-semibold mb-4 text-yellow-300">Kunjungi Sosial Media Kami</p>
                    <div>
                      <div class="grid grid-cols-7 mb-2">
                        <img className="place-self-end col-span-2 mr-2" src={Instagram} />
                        <div class="place-self-start col-span-5 py-1.5">
                          <p class="text-white font-semibold pl-2">mongga_indonesia</p>
                        </div>
                      </div>
                      <div class="grid grid-cols-7 mb-2">
                        <img className="place-self-end col-span-2 mr-2" src={Linkedin} />
                        <div class="place-self-start col-span-5 py-1.5">
                          <p class="text-white font-semibold pl-2">Mongga Indonesia</p>
                        </div>
                      </div>
                      <div class="grid grid-cols-7 mb-2">
                        <img className="place-self-end col-span-2 mr-2" src={Facebook} />
                        <div class="place-self-start col-span-5 py-1.5">
                          <p class="text-white font-semibold pl-2">@monggaindonesia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
