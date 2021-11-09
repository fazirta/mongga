import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "./Navbar";
import LandingPage from "./Landing Page";
import Aktivitas from "./Aktivitas";
import Produk from "./Produk";
import ContactUs from "./Contact Us";
import Komunitas from "./Komunitas";
import Kompetisi from "./Kompetisi";
import AboutUs from "./About Us";
// import UpgradingDiri from "./Upgrading Diri";
// import UpgradingDiriLengkap from "./Upgrading Diri Lengkap";
import Mentor from "./Mentor";
import Testimoni from "./Testimoni";
import Aktivitas1 from "./Aktivitas 1";
import Aktivitas2 from "./Aktivitas 2";
import Aktivitas3 from "./Aktivitas 3";
import Aktivitas4 from "./Aktivitas 4";
import Aktivitas5 from "./Aktivitas 5";
import Aktivitas6 from "./Aktivitas 6";
import Aktivitas7 from "./Aktivitas 7";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/aktivitas/apprenticeship" element={<Aktivitas1 />} />
          <Route path="/aktivitas/webinar" element={<Aktivitas2 />} />
          <Route path="/aktivitas/open-class" element={<Aktivitas3 />} />
          <Route path="/aktivitas/pelatihan-olimpiade" element={<Aktivitas4 />} />
          <Route path="/aktivitas/workshop" element={<Aktivitas5 />} />
          <Route path="/aktivitas/short-class" element={<Aktivitas6 />} />
          <Route path="/aktivitas/bootcamp" element={<Aktivitas7 />} />
          <Route path="/aktivitas" element={<Aktivitas />} />
          <Route path="/produk/kompetisi" element={<Kompetisi />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
