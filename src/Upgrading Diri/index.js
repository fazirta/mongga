import JumbotronHijau from "../Jumbotron Upgrade";
import Heading1 from "../Heading1";
import Paragraph1 from "../Paragraph1";
import EnglishDebate from "../img/English Debate.png";
import Excel from "../img/Excel.png";
import IELTS from "../img/IELTS.png";
import StudyAbroad from "../img/Study Abroad.png";
import PublicSpeaking from "../img/Public Speaking.png";
import ContentWriting from "../img/Content Writing.png";
import ButtonHijau from "../Button Hijau";

export default function UpgradingDiri() {
  return (
    <>
      <div class="md:block hidden">
        <JumbotronHijau
          name="Upgrading Diri"
          desc="Akses ilmu-ilmu hardskill secara tanpa batas dan tanpa hambatan. Yuk belajar ilmu baru di Mongga Belajar!"
        />
      </div>

      <div className="my-14 px-3 max-w-7xl mx-auto">
        <div>
          <a href="/">
            <Paragraph1 value="< Upgrading Diri" />
          </a>
          <div className="my-10">
            <Heading1
              value="Sekarang kamu bisa tahu apa yang mereka tahu di kelas umum ini!"
              position="text-center md:px-32 xl:px-52"
            />
          </div>
        </div>

        <div>
          <div className="flex mt-32 mb-10 lg:justify-start justify-center">
            <h1 class="font-poppins font-bold text-xl text-darkgreen p-5 bg-yellow-300">
              KELAS 1 Arah
            </h1>
          </div>
        </div>

        <div>
          <h2 class="font-poppins font-bold text-darkgreen text-2xl">
            Mongga Short Class #2 Series: Sharpen Your Skills
          </h2>
        </div>

        <div class="flex md:justify-around flex-wrap">
          <div class="lg:w-1/4 md:w-1/3 md:mx-2 mx-5 my-10">
            <div class="">
              <img alt="" className="" src={EnglishDebate} />
            </div>
            <p class="font-poppins font-bold text-xl text-darkgreen mt-5">
              English Debate: Creating A Powerful Speech
            </p>
            <div class="flex justify-between md:flex-row mt-5">
              <p class="font-poppins text-darkgreen">Short Class</p>
              <p class="font-poppins font-bold text-darkgreen">Rp. 25.000</p>
            </div>
            <p class="font-poppins text-darkgreen mt-5">Christ Panagari</p>
          </div>
          <div class="lg:w-1/4 md:w-1/3 md:mx-2 mx-5 my-10">
            <div class="">
              <img alt="" className="" src={Excel} />
            </div>
            <p class="font-poppins font-bold text-xl text-darkgreen mt-5">
              Excel Your Research Essay Competition
            </p>
            <div class="flex justify-between md:flex-row mt-5">
              <p class="font-poppins text-darkgreen">Short Class</p>
              <p class="font-poppins font-bold text-darkgreen">Rp. 35.000</p>
            </div>
            <p class="font-poppins text-darkgreen mt-5">Maha Yudha Samawi</p>
          </div>
          <div class="lg:w-1/4 md:w-1/3 md:mx-2 mx-5 my-10">
            <div class="">
              <img alt="" className="" src={ContentWriting} />
            </div>
            <p class="font-poppins font-bold text-xl text-darkgreen mt-5">
              Introduction to Content Writing
            </p>
            <div class="flex justify-between md:flex-row mt-5">
              <p class="font-poppins text-darkgreen">Short Class</p>
              <p class="font-poppins font-bold text-darkgreen">Rp. 30.000</p>
            </div>
            <p class="font-poppins text-darkgreen mt-5">
              Faqihah Muharroroh Itsnaini
            </p>
          </div>
          <div class="lg:w-1/4 md:w-1/3 md:mx-2 mx-5 my-10">
            <div class="">
              <img alt="" className="" src={StudyAbroad} />
            </div>
            <p class="font-poppins font-bold text-xl text-darkgreen mt-5">
              Guide to Study Abroad
            </p>
            <div class="flex justify-between md:flex-row mt-5">
              <p class="font-poppins text-darkgreen">Short Class</p>
              <p class="font-poppins font-bold text-darkgreen">Rp. 40.000</p>
            </div>
            <p class="font-poppins text-darkgreen mt-5">
              Hilyatushalihah Kholis Audah, BSc
            </p>
          </div>
          <div class="lg:w-1/4 md:w-1/3 md:mx-2 mx-5 my-10">
            <div class="">
              <img alt="" className="" src={PublicSpeaking} />
            </div>
            <p class="font-poppins font-bold text-xl text-darkgreen mt-5">
              Master Public Speaking
            </p>
            <div class="flex justify-between md:flex-row mt-5">
              <p class="font-poppins text-darkgreen">Short Class</p>
              <p class="font-poppins font-bold text-darkgreen">Rp. 20.000</p>
            </div>
            <p class="font-poppins text-darkgreen mt-5">
              Faqihah Muharroroh Itsnaini
            </p>
          </div>
          <div class="lg:w-1/4 md:w-1/3 md:mx-2 mx-5 my-10">
            <div class="">
              <img alt="" className="" src={IELTS} />
            </div>
            <p class="font-poppins font-bold text-xl text-darkgreen mt-5">
              Ace Your IELTS
            </p>
            <div class="flex justify-between md:flex-row mt-5">
              <p class="font-poppins text-darkgreen">Short Class</p>
              <p class="font-poppins font-bold text-darkgreen">Rp. 45.000</p>
            </div>
            <p class="font-poppins text-darkgreen mt-5">
              Hilyatushalihah Kholis Audah, BSc
            </p>
          </div>
        </div>

        <div class="mt-10">
          <ButtonHijau href="/upgradinglengkap" text="Lihat Selengkapnya" />
        </div>

        <div>
          <div className="flex mt-32 mb-10 lg:justify-start justify-center">
            <h1 class="font-poppins font-bold text-xl text-darkgreen p-5 bg-yellow-300">
              KELAS 2 Arah
            </h1>
          </div>
        </div>
      </div>
      <div class="bg-gray-300 mb-52 py-20">
        <h1 class="font-poppins font-bold text-5xl text-center text-darkgreen italic tracking-widest">
          COMING <br />
          SOON
        </h1>
      </div>
    </>
  );
}
