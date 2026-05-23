"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";
import NavLink from "./NavLink";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  console.log(user);

  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully!");
          router.push("/login");
        },
      },
    });
  };

  const pathName = usePathname();

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {user && (
                <li className="mb-2">
                  <div className="flex items-center gap-3 px-2 py-2 bg-orange-50 rounded-xl">
                    <Image
                      src={user.image || "/default-avatar.png"}
                      alt={user.name}
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-orange-400 shrink-0"
                    />
                    <span className="font-semibold text-slate-700 text-sm truncate">
                      {user.name}
                    </span>
                  </div>
                </li>
              )}
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/products">Products</NavLink>
              </li>
              <li>
                <NavLink href="/profile">My Profile</NavLink>
              </li>
              {user ? (
                <li className="mt-2">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline border-orange-400 w-full font-bold text-[16px] hover:bg-orange-400 hover:text-white text-orange-400"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className={
                        pathName === "/login"
                          ? "btn bg-orange-400 text-white text-[16px]"
                          : "btn btn-outline border-orange-400 text-[16px] hover:bg-orange-400 hover:text-white"
                      }
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className={
                        pathName === "/register"
                          ? "btn bg-orange-400 text-white text-[16px]"
                          : "btn btn-outline border-orange-400 text-[16px] hover:bg-orange-400 hover:text-white"
                      }
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Image src={logo} alt="logo-image" width={150} height={150}></Image>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/products">Products</NavLink>
            </li>
            <li>
              <NavLink href="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          {user ? (
            // ✅ Logged in হলে
            <div className="flex items-center gap-3">
              <Image
                src={user.image || "/default-avatar.png"}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full object-cover border-2 border-orange-400"
              />
              <span className="font-semibold text-slate-700">{user.name}</span>
              <button
                onClick={handleLogout}
                className="btn btn-outline border-orange-400 text-[16px] hover:bg-orange-400 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            // ✅ Logged out হলে
            <>
              <Link
                href="/login"
                className={
                  pathName === "/login"
                    ? "btn bg-orange-400 text-white text-[16px]"
                    : "btn btn-outline border-orange-400 text-[16px] hover:bg-orange-400 hover:text-white"
                }
              >
                Login
              </Link>
              <Link
                href="/register"
                className={
                  pathName === "/register"
                    ? "btn bg-orange-400 text-white text-[16px]"
                    : "btn btn-outline border-orange-400 text-[16px] hover:bg-orange-400 hover:text-white"
                }
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
