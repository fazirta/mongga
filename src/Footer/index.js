import React from 'react';
import logo from '../MONGGA LOGO WHITE 1.png';
import instagram from '../Instagram_white 1.png';
import linkedin from '../LinkedIN_white 1.png';
import facebook from '../Facebook_white 1.png';

const Footer = () => {
    return (
        <footer>
            <div className="p-10 text-gray-200 font-barlow" style={{ backgroundColor: "#093334" }}>
                <div className="max-w-7xl mx-auto">
                    <img src={logo} />
                    <div className="mt-8 flex flex-col xl:flex-row xl:justify-between">
                        <div className="mb-5">
                            <h4 className="mb-3 font-bold text-lg">Produk</h4>
                            <div className="flex flex-col lg:flex-row lg:space-x-20">
                                <ul className="flex-none">
                                    <li className="mb-1">
                                        <a href="#">Olimpiade</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Riset</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Bahasa</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Robotik</a>
                                    </li>
                                </ul>
                                <ul className="flex-none">
                                    <li className="mb-1">
                                        <a href="#">Data Science</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Programming Website </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Programming Android</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Programming Games</a>
                                    </li>
                                </ul>
                                <ul className="flex-none">
                                    <li className="mb-1">
                                        <a href="#">Desain Grafis</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Videografi</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Seminar Motivasi</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Study Abroad</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h4 className="mb-3 font-bold text-lg">Perusahaan</h4>
                            <div className="flex flex-col lg:flex-row lg:space-x-20">
                                <ul className="flex-none">
                                    <li className="mb-1">
                                        <a href="#">Tentang Kami</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Mentor Kami</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Aktivitas</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Testimoni</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h4 className="mb-3 font-bold text-lg">Kontak</h4>
                            <h4 className="mb-3">Hubungi Kami</h4>
                            <div className="flex flex-col lg:flex-row lg:space-x-20">
                                <ul className="flex-none">
                                    <li className="flex space-x-4 mb-3">
                                        <img src={instagram} className="w-7 h-7"/>
                                        <a href="#">mongga_indonesia</a>
                                    </li>
                                    <li className="flex space-x-4 mb-3">
                                        <img src={linkedin} className="w-7 h-7"/>
                                        <a href="#">Mongga Indonesia</a>
                                    </li>
                                    <li className="flex space-x-4 mb-3">
                                        <img src={facebook} className="w-7 h-7"/>
                                        <a href="#">@monggaindonesia</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-center">2021 Mongga. All Rights Reserved.</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer