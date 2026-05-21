import React from "react";
import Hero from "./hero/Hero";
import { FaFire, FaStar } from "react-icons/fa";
import { getProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

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
          {products.slice(0,3).map((p) => {
            return (
              <div key={p.id} className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image src={p.image} alt="card image" width={384} height={250}></Image>
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{p.name}</h2>
                    <p className="flex items-center gap-1"><FaStar className="text-orange-400"/>{p.rating} ({p.stock})</p>
                  <div className="card-actions justify-end">
                    <Link href={'/'} className="btn btn-outline border-orange-400 w-full text-orange-400 hover:bg-orange-400 hover:text-white font-bold">View Details</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
