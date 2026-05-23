"use client";

import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";
import loginBg from "../../../assets/login-bg.png";
import Navbar from "@/components/shared/Navbar";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const [isShowPassword, setIsShowPassword] = useState(false);

  const router = useRouter();

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      //   callbackURL: "/",
    });
    console.log(res, error);

    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Login Successful!");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <Image
          src={loginBg}
          alt="login background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-2xl animate__animated animate__fadeIn">
          <div className="flex flex-col items-center mb-8">
            <div className="text-5xl bg-blue-50 rounded-full p-3 animate__animated animate__bounceIn">☀️</div>
            {/* <h1 className="text-4xl font-extrabold mt-2">
              <span className="text-orange-500">Sun</span>
              <span className="text-slate-900">Cart</span>
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Summer Essentials Store
            </p> */}
          </div>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900 animate__animated animate__fadeIn animate__delay-1s">Welcome Back!</h2>
            <p className="text-slate-500 mt-2 animate__animated animate__fadeIn animate__delay-1s">Login to continue shopping</p>
          </div>

          <form className="space-y-2" onSubmit={handleSubmit(handleLoginFunc)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-slate-700 font-medium">
                Email
              </legend>
              <label className="input input-bordered flex items-center gap-3 rounded-xl bg-white w-full">
                <FiMail className="text-slate-400 text-lg shrink-0" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="grow"
                  {...register("email", {
                    required: "Email field is required",
                  })}
                />
              </label>
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-slate-700 font-medium">
                Password
              </legend>
              <label className="input input-bordered flex items-center gap-3 rounded-xl bg-white w-full">
                <FiLock className="text-slate-400 text-lg shrink-0" />
                <input
                  type={isShowPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="grow"
                  {...register("password", {
                    required: "Password field is required",
                  })}
                />
                <span
                  className="cursor-pointer"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </label>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </fieldset>

            {/* <div className="flex items-center justify-between text-sm pt-1">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>
              <button
                type="button"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Forgot Password?
              </button>
            </div> */}

            <button className="btn w-full bg-orange-400 hover:bg-orange-500 border-none text-white rounded-xl text-lg mt-2">
              Login
            </button>
          </form>

          <div className="divider text-slate-400 my-6">or continue with</div>

          <button
            className="btn w-full bg-white border border-slate-200 hover:bg-slate-100 rounded-xl"
            onClick={handleGoogleSignin}
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          <p className="text-center text-slate-600 mt-6">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-orange-400 font-semibold hover:text-orange-500"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
