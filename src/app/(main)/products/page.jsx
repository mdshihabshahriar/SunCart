import { getProductDetailsById, getProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const Products = async () => {

  const products = await getProducts();

  return (
    <div className="md:container w-11/12 mx-auto">
      <div className="text-center mt-6 space-y-2">
        <h2 className="animate__animated animate__fadeInDown font-bold text-3xl md:text-5xl text-slate-900">
          Summer Essentials Collection
        </h2>
        <p className="animate__animated animate__fadeInUp animate__delay-1s text-lg font-semibold text-slate-500">
          Explore trendy summer products, beach accessories, skincare, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4 space-y-3">
        {products.map((p) => {
          return (
            <div key={p.id} className="card bg-base-100 w-96 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate__animated animate__fadeInUp">
              <figure>
                <Image
                  src={p.image}
                  alt="card image"
                  width={384}
                  height={250}
                  className="w-full h-72 object-cover"
                ></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{p.name}</h2>
                <p className="flex items-center gap-1">
                  <FaStar className="text-orange-400" />
                  {p.rating} ({p.stock})
                </p>
                <p className="font-bold text-xl text-orange-500">${p.price}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/products/${p.id}`}
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
  );
};

export default Products;
