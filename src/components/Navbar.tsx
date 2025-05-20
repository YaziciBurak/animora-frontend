import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          
          <Link to="/" className="text-2xl font-bold text-purple-200">
            Animora
          </Link>
  
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-purple-200 hover:text-white transition">Anasayfa</Link>
            <Link to="/new-episodes" className="text-purple-200 hover:text-white transition">Yeni Bölümler</Link>
            <Link to="/popular-series" className="text-purple-200 hover:text-white transition">Popüler Animeler</Link>
            <Link to="/contact" className="text-purple-200 hover:text-white transition">İletişim</Link>
          </div>
  
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Anime ara..."
              className="px-3 py-1 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-purple-200 text-gray-900 px-3 py-1 rounded-lg hover:bg-purple-300 transition">
              Ara
            </button>
          </div>
        </div>
      </nav>
    )
}