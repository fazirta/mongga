import React from "react";
import logo from "../img/MONGGA LOGO WHITE 1.png";
import instagram from "../img/Instagram_white 1.png";
import Linkedin from "../img/LinkedIN_white 1.png";
import facebook from "../img/Facebook_white 1.png";

const Footer = () => {
  return (
    <footer
      className="p-10 text-gray-200 font-barlow bg-darkgreen"
    >
      <div className="max-w-7xl mx-auto">
        <a href="/">
          <img alt="" src={logo} />
        </a>
        <div className="mt-8 flex flex-col xl:flex-row xl:justify-between">
          <div className="mb-5">
            <h4 className="mb-3 font-bold text-lg">Produk</h4>
            <div className="flex flex-col lg:flex-row lg:space-x-20">
              <ul className="flex-none">
                <li className="mb-1">Olimpiade</li>
                <li className="mb-1">Riset</li>
                <li className="mb-1">Bahasa</li>
                <li className="mb-1">Robotik</li>
              </ul>
              <ul className="flex-none">
                <li className="mb-1">Data Science</li>
                <li className="mb-1">Programming Website</li>
                <li className="mb-1">Programming Android</li>
                <li className="mb-1">Programming Games</li>
              </ul>
              <ul className="flex-none">
                <li className="mb-1">Desain Grafis</li>
                <li className="mb-1">Videografi</li>
                <li className="mb-1">Seminar Motivasi</li>
                <li className="mb-1">Study Abroad</li>
              </ul>
            </div>
          </div>
          <div className="mb-5">
            <h4 className="mb-3 font-bold text-lg">Perusahaan</h4>
            <div className="flex flex-col lg:flex-row lg:space-x-20">
              <ul className="flex-none">
                <li className="mb-1">
                  <a href="/about-us">Tentang Kami</a>
                </li>
                <li className="mb-1">
                  <a href="/mentor">Mentor Kami</a>
                </li>
                <li className="mb-1">
                  <a href="/aktivitas">Aktivitas</a>
                </li>
                <li className="mb-1">
                  <a href="/testimoni">Testimoni</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5">
            <h4 className="mb-3 font-bold text-lg">Kontak</h4>
            <a href="/contactus">
              <h4 className="mb-3">Hubungi Kami</h4>
            </a>
            <div className="flex flex-col lg:flex-row lg:space-x-20">
              <ul className="flex-none">
                <li className="flex space-x-4 mb-3">
                  <img alt="" src={instagram} className="w-7 h-7" />
                  <a href="https://www.instagram.com/mongga_indonesia/">
                    mongga_indonesia
                  </a>
                </li>
                <li className="flex space-x-4 mb-3">
                  <img alt="" src={Linkedin} className="w-7 h-7" />
                  <a href="https://id.Linkedin.com/company/mongga-indonesia">
                    Mongga Indonesia
                  </a>
                </li>
                <li className="flex space-x-4 mb-3">
                  <img alt="" src={facebook} className="w-7 h-7" />
                  <a href="https://www.facebook.com/monggaindonesia/">
                    @monggaindonesia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center">
            2021 Mongga. All Rights Reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
