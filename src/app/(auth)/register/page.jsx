"use client";

import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import registrationBg from "../../../assets/registration-bg.png";
import Navbar from "@/components/shared/Navbar";
import { FaRegUser } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-10">

        <Image
          src={registrationBg}
          alt="registration background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-2xl">

          <div className="flex flex-col items-center mb-8">
            <div className="text-3xl bg-amber-200 rounded-full p-4"><FaRegUser className="text-orange-500" /></div>
            {/* <h1 className="text-4xl font-extrabold mt-2">
              <span className="text-orange-500">Sun</span>
              <span className="text-slate-900">Cart</span>
            </h1> */}
            {/* <p className="text-slate-500 text-sm mt-1">Summer Essentials Store</p> */}
          </div>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Create Your Account</h2>
            <p className="text-slate-500 mt-2">Join SunCart and start shopping!</p>
          </div>

          <form className="space-y-2">

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-slate-700 font-medium">Full Name</legend>
              <label className="input input-bordered flex items-center gap-3 rounded-xl bg-white w-full">
                <FiUser className="text-slate-400 text-lg shrink-0" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="grow"
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-slate-700 font-medium">Email</legend>
              <label className="input input-bordered flex items-center gap-3 rounded-xl bg-white w-full">
                <FiMail className="text-slate-400 text-lg shrink-0" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="grow"
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-slate-700 font-medium">Photo URL</legend>
              <label className="input input-bordered flex items-center gap-3 rounded-xl bg-white w-full">
                <FiImage className="text-slate-400 text-lg shrink-0" />
                <input
                  type="url"
                  placeholder="Enter your photo URL"
                  className="grow"
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-slate-700 font-medium">Password</legend>
              <label className="input input-bordered flex items-center gap-3 rounded-xl bg-white w-full">
                <FiLock className="text-slate-400 text-lg shrink-0" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="grow"
                />
              </label>
            </fieldset>

            <button className="btn w-full bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl text-lg mt-2">
              Register
            </button>

          </form>

          <div className="divider text-slate-400 my-6">or continue with</div>

          <button className="btn w-full bg-white border border-slate-200 hover:bg-slate-100 rounded-xl">
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          <p className="text-center text-slate-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-orange-500 font-semibold hover:text-orange-600"
            >
              Login now
            </Link>
          </p>

        </div>
      </div>
    </>
  );
};

export default RegisterPage;