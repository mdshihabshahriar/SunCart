"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FiMail, FiUser, FiShield, FiCalendar } from "react-icons/fi";
import profileBg from "../../../assets/login-bg.png";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import avatar from "../../../assets/avatar.png"

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  return (
    <>
      <div className="relative min-h-screen py-12 px-4 flex items-center justify-center">
        <Image
          src={profileBg}
          alt="profile background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 max-w-2xl w-full mx-auto space-y-6">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden animate__animated animate__fadeInDown">
            <div className="h-32 bg-linear-to-r from-orange-400 to-orange-500 relative">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <Image
                  src={user?.image || avatar}
                  alt={user?.name || "User"}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-white shadow-lg object-cover w-24 h-24"
                />
              </div>
            </div>

            <div className="pt-16 pb-8 text-center px-6">
              <h1 className="text-2xl font-extrabold text-slate-900">
                {user?.name || "Unknown User"}
              </h1>
              <p className="text-slate-500 mt-1">{user?.email}</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span
                  className={`badge font-semibold px-3 py-3 flex items-center gap-1 ${user?.emailVerified ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"}`}
                >
                  {user?.emailVerified ? <FaCheck /> : <RxCross2 />}
                  {user?.emailVerified ? "Verified" : "Not Verified"}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 space-y-4 animate__animated animate__fadeInUp animate__delay-1s">
            <h2 className="text-lg font-bold text-slate-800 mb-4">
              Account Information
            </h2>

            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
              <div className="bg-orange-400 text-white p-3 rounded-xl">
                <FiUser className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Full Name
                </p>
                <p className="text-slate-800 font-semibold">
                  {user?.name || "—"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
              <div className="bg-orange-400 text-white p-3 rounded-xl">
                <FiMail className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Email Address
                </p>
                <p className="text-slate-800 font-semibold">
                  {user?.email || "—"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
              <div className="bg-orange-400 text-white p-3 rounded-xl">
                <FiShield className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Role
                </p>
                <p className="text-slate-800 font-semibold capitalize">
                  {user?.role || "User"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
              <div className="bg-orange-400 text-white p-3 rounded-xl">
                <FiCalendar className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Joined
                </p>
                <p className="text-slate-800 font-semibold">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "—"}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push('/update-profile')}
            className="btn w-full bg-orange-400 hover:bg-orange-500 border-none text-white rounded-2xl text-lg shadow-lg animate__animated animate__fadeInUp animate__delay-1s"
          >
            Update Information
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
