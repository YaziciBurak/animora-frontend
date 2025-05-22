import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <Link to={"/"} className="mb-4 md:mb-0 text-2xl font-bold">
          Animora
        </Link>

        <div className="flex space-x-6 mb-4 md:mb-0 text-sm">
          <Link to={"/"} className="hover:text-yellow-400 cursor-pointer">
            Anasayfa
          </Link>
          <Link
            to={"new-episodes"}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Yeni Bölümler
          </Link>
          <Link
            to={"popular-series"}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Popüler Animeler
          </Link>
          <Link to={"contact"} className="hover:text-yellow-400 cursor-pointer">
            İletişim
          </Link>
        </div>

        <div className="flex space-x-4 text-lg">
          <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-gray-300">
        © {new Date().getFullYear()} Animora. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
