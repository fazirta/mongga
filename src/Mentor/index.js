import ButtonHijau from "../Button Hijau";
import Heading1 from "../Heading1";
import Heading2 from "../Heading2";
import Paragraph1 from "../Paragraph1";
import JumbotronHijau from "../Jumbotron Hijau";
import MentorItem from "../MentorItem";
import MentorItem2 from "../MentorItem2";
import pic_awla from "../img/profile-awla.png";
import pic_faqihah from "../img/profile-faqihah.png";
import pic_hilya from "../img/profile-hilya.png";
import pic_yudha from "../img/profile-yudha.png";
import pic_christ from "../img/profile-christ.png";
import pic_anju from "../img/profile-anju.png";
// import decor_star from "../img/decoration-star.png";

export default function Mentor() {
  return (
    <>
      <JumbotronHijau name="Mentor Kami" desc="Membantu menggapai impianmu" />

      {/* header */}
      <div className="my-24">
        <Heading1 value="MENTOR MONGGA" position="text-center" />
        <div className="flex justify-center">
          <Paragraph1
            value="Dengan mentor terbaik kami yang memiliki pengalaman terbaik di bidangnya, kami dapat memberikan kelas yang bermutu."
            position="text-center max-w-xl pt-6"
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center">
          <MentorItem
            pic={pic_awla}
            name="Awla Fajri Assalam"
            bio1="Founder Organisasi Riset Solve-IT ITB"
            bio2="Wisudawan Terbaik FMIPA ITB 2021"
          />
          <MentorItem
            pic={pic_faqihah}
            name="Faqihah Muharroroh Itsnaini"
            bio1="Moderator of University through National Scale Events"
            bio2="Digital Journalist Intern at Detik.com"
          />
        </div>
        <div className="flex flex-col md:flex-row md:pt-24 justify-between">
          <MentorItem
            pic={pic_hilya}
            name="Hilyatushalihah Kholis Audah, BSc"
            bio1="Founder of Gwel Academy"
            bio2="First Class Honours Bachelor In Psychology with Neuropsychology of Bangor University"
          />
          <MentorItem
            pic={pic_yudha}
            name="Maha Yudha Samawi"
            bio1="Gold Medalist PKM-KC 2020"
            bio2=""
          />
        </div>

        <div className="flex flex-col md:flex-row md:pt-24 justify-between">
          <MentorItem
            pic={pic_christ}
            name="Christ Panogari"
            bio1="President of English Speaking Union"
            bio2=""
          />
          <MentorItem
            pic={pic_anju}
            name="Anju Ikhsan"
            bio1="Gold Medal Olimpiade Sains Indonesia bidang biologi mahasiswa"
            bio2="Bronze Medal Kompetisi Sains Pengajar IPA Mts & Biologi MA2021 Posi"
          />
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <Heading2
          value="Beberapa mentor lainnya:"
          position="text-center mb-10"
        />
        <MentorItem2
          name="Ilham Subandoro"
          description="Medali perunggu Thailand Innovation Olympiad 2020"
        />
        <MentorItem2
          name="Muhammad Farhan"
          description="Medali perak KSN tingkat nasional 2018"
        />
        <MentorItem2
          name="Dharma Prasetya Permana"
          description="Medali perunggu ONMIPA tingkat nasional mahasiswa"
        />
        <MentorItem2
          name="Almira Jannisa"
          description="Medali perak OSN geografi tingkat nasional 2016"
        />
      </div>

      <div className="my-24 px-3 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8">
          <Heading1
            value="Tertarik dengan Produk Kami?"
            position="text-center"
          />
          <h2 className="font-poppins text-darkgreen text-center max-w-sm self-center">
            Jangan ragu untuk bertanya dan silahkan hubungi kami lewat tombol
            dibawah ini
          </h2>
          <ButtonHijau href="/contactus" text="Hubungi Kami" />
        </div>
      </div>
    </>
  );
}
