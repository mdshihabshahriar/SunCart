import React from "react";
import logo from "../../assets/logo2.png";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blue-50 mt-6">
      <footer className="footer sm:footer-horizontal text-base-content p-10">
        <aside>
          <Image src={logo} alt="logo" width={200} height={200}></Image>
          <p>
            Your one-stop shop for all
            <br />
            summer essentials. Stay cool,
            <br />
            stay stylish!
          </p>
        </aside>
        <nav>
          <h6 className="footer-title font-bold">Quick Links</h6>
          <Link href={"/"} className="link link-hover">
            Home
          </Link>
          <Link href={"/products"} className="link link-hover">
            Products
          </Link>
          <Link href={"profile"} className="link link-hover">
            My Profile
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title font-bold">Customer Services</h6>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Shipping Policy</a>
          <a className="link link-hover">Return Policy</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold">Follow Us</h6>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <FaFacebook className="text-xl text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <FaInstagram className="text-xl text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <FaXTwitter className="text-xl text-white" />
            </div>
          </div>
        </nav>
      </footer>
      <hr className="border border-gray-300 mx-10" />
      <div className="text-center mb-2 mt-2 font-semibold text-gray-500">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
