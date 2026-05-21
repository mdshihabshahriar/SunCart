import React from "react";
import logo from "../../assets/logo2.png";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

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
          <div className="flex gap-2">
            <Image src={facebook} alt="facebook" className="w-10"></Image>
            <Image src={instagram} alt="instagram" className="w-10"></Image>
            <Image src={twitter} alt="twitter" className="w-20"></Image>
          </div>
        </nav>
      </footer>
      <hr className="border border-gray-300 mx-10" />
        <div className="text-center mb-2 font-semibold">© {new Date().getFullYear()} SunCart. All rights reserved.</div>
    </div>
  );
};

export default Footer;
