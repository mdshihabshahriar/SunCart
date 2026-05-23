import { getProductDetailsById } from "@/lib/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getProductDetailsById(id);

  return (
    <div className="md:container w-11/12 mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          ) : (
            <div className="w-full h-96 bg-orange-100 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-6xl">🏖️</span>
            </div>
          )}
        </div>

        <div className="md:w-1/2 space-y-4 md:mt-20">
          <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
          <h4 className="font-bold">
            Brand: <span className="text-orange-500">{product.brand}</span>
          </h4>
          <h4 className="font-bold">
            Category:{" "}
            <span className="text-orange-500">{product.category}</span>
          </h4>
          <p className="flex items-center gap-2 text-lg">
            <FaStar className="text-orange-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400">({product.stock} in stock)</span>
          </p>

          <p className="text-4xl font-bold text-orange-500">${product.price}</p>

          <p className="text-slate-600">{product.description}</p>

          <button className="btn bg-orange-400 hover:bg-orange-500 text-white font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;