import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-slate-100 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">

        {/* Icon */}
        <div className="text-8xl">🏖️</div>

        {/* 404 */}
        <h1 className="text-9xl font-extrabold text-orange-400 leading-none">
          404
        </h1>

        {/* Message */}
        <div className="space-y-2 animate__animated animate__bounceIn">
          <h2 className="text-2xl font-bold text-slate-800">
            Oops! Page Not Found
          </h2>
          <p className="text-slate-500">
            Looks like this page got lost at sea. Let`s get you back to shore!
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 text-orange-300 text-2xl">
          🌊 🐚 ⭐ 🐚 🌊
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl px-8"
          >
            🏠 Back to Home
          </Link>
          <Link
            href="/products"
            className="btn btn-outline border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-xl px-8"
          >
            🛍️ Shop Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;