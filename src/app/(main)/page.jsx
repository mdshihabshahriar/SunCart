import React from "react";
import Hero from "./hero/Hero";
import { FaFire, FaStar } from "react-icons/fa";
import { getProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import water from "../../assets/water.png";
import cream from "../../assets/cream.png";
import sunglass from "../../assets/sunglass.png";
import hat from "../../assets/hat.png";
import { IoMdSunny } from "react-icons/io";

const Home = async () => {
  const products = await getProducts();
  return (
    <>
      <Hero></Hero>
      <div className="container mx-auto">
        <h2 className="flex items-center gap-2 font-bold text-2xl mt-4">
          <FaFire className="text-orange-400" /> Popular Products
        </h2>
        <div className="w-11/12 mx-auto md:w-12/12 md:mx-0">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3">
            {products.slice(0, 3).map((p) => {
              return (
                <div key={p.id} className="card bg-base-100 w-96 shadow-sm">
                  <figure>
                    <Image
                      src={p.image}
                      alt="card image"
                      width={384}
                      height={250}
                    ></Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold">{p.name}</h2>
                    <p className="flex items-center gap-1">
                      <FaStar className="text-orange-400" />
                      {p.rating} ({p.stock})
                    </p>
                    <p className="font-bold text-xl text-orange-500">
                      ${p.price}
                    </p>
                    <div className="card-actions justify-end">
                      <Link
                        href={"/"}
                        className="btn btn-outline border-orange-400 w-full text-orange-400 hover:bg-orange-400 hover:text-white font-bold"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-blue-50 mt-4">
        <div className="container mx-auto mt-6">
          <h2 className="font-bold text-2xl flex items-center gap-2"><IoMdSunny className="text-orange-400" />Summer Care Tips</h2>
          <div className="grid mt-4 mb-6 md:flex">
            <div className="space-y-2 flex gap-2">
              <div className="rounded-full bg-blue-300 p-8">
                <Image
                  src={water}
                  alt="water-image"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <div>
                <h4 className="font-bold text-lg">Stay Hydrated</h4>
                <p className="w-2/3">
                  Drink plenty of water throughout the day to stay fresh and
                  energetic
                </p>
              </div>
            </div>
            <div className="space-y-2 flex gap-2">
              <div className="rounded-full bg-orange-200 p-8">
                <Image
                  src={cream}
                  alt="cream-image"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <div>
                <h4 className="font-bold text-lg">Use Sunscreen</h4>
                <p className="w-2/3">
                  Apply SPF 30 or higher every day to protect your skin from UV
                  rays
                </p>
              </div>
            </div>
            <div className="space-y-2 flex gap-2">
              <div className="rounded-full bg-cyan-300 p-8">
                <Image
                  src={sunglass}
                  alt="sunglass-image"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <div>
                <h4 className="font-bold text-lg">Wear Sunglasses</h4>
                <p className="w-2/3">
                  Protect your eyes with UV-blocking sunglasses when outdoors
                </p>
              </div>
            </div>
            <div className="space-y-2 flex gap-2">
              <div className="rounded-full bg-pink-300 p-8">
                <Image
                  src={hat}
                  alt="hat-image"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <div>
                <h4 className="font-bold text-lg">Wear a Hat</h4>
                <p className="w-2/3">
                  A hat adds style and shields your face from harsh sunlight
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
