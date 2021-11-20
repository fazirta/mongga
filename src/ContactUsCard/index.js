import ContactUsLogo from "../img/contactus-logo.png";
import Instagram from "../img/Instagram_white 1.png";
import Linkedin from "../img/LinkedIN_white 1.png";
import Facebook from "../img/Facebook_white 1.png";

export default function ContactUsCard() {
  return (
    <>
      <div className="flex items-center justify-center text-sm py-6">
        <div className="flex justify-center">
          <div className="bg-darkgreen rounded-large px-4 py-3 transition duration-300 ease-in-out font-poppins shadow-2xl">
            <div class="flex flex-col lg:flex-row items-center content-center px-7">
              <img alt="" className="m-5 lg:mr-10" src={ContactUsLogo} />
              <div>
                <p class="text-white text-xl text-center font-semibold mb-4 text-yellow-300">Kunjungi Sosial Media Kami</p>
                <div>
                  <div class="grid grid-cols-7 mb-2">
                    <img alt="" className="place-self-end col-span-2 mr-2" src={Instagram} />
                    <div class="place-self-start col-span-5 py-1.5">
                      <a href="https://www.instagram.com/mongga_indonesia/">
                      <p class="text-white font-semibold pl-2">mongga_indonesia</p>
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-7 mb-2">
                    <img alt="" className="place-self-end col-span-2 mr-2" src={Linkedin} />
                    <div class="place-self-start col-span-5 py-1.5">
                      <a href="https://id.Linkedin.com/company/mongga-indonesia">
                      <p class="text-white font-semibold pl-2">Mongga Indonesia</p>
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-7 mb-2">
                    <img alt="" className="place-self-end col-span-2 mr-2" src={Facebook} />
                    <div class="place-self-start col-span-5 py-1.5">
                      <a href="https://www.facebook.com/monggaindonesia/">
                      <p class="text-white font-semibold pl-2">@monggaindonesia</p>
                      </a>
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
