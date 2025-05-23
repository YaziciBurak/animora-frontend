import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <nav className="grid grid-cols-[20%_60%_20%] items-center px-6 py-3">
          <Link to={"/"} className="justify-self-start font-bold text-xl">Animora</Link>
        <div className="justify-self-center relative w-full max-w-md">
          <input
            type="text"
            placeholder="Anime ara..."
            className="w-full px-4 py-2 pr-10 rounded-md text-black outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-500">
            <Search size={18} />
          </button>
        </div>
        <div className="flex justify-end gap-[5%] h-full" >
          <button onClick={() => {
            setIsLoginOpen(true);
            setIsRegisterOpen(false);
          }}
             className="text-sm md:text-base text-white leading-none md:leading-tight rounded bg-indigo-600 hover:bg-indigo-700 transition w-2/5"
            >
              Giriş Yap
          </button>
          <button onClick={() =>{
            setIsRegisterOpen(true);
            setIsLoginOpen(false);
          }}
           className="text-sm md:text-base text-white leading-none md:leading-tight rounded bg-indigo-600 hover:bg-indigo-700 transition w-2/5"
          >
            Kayıt Ol
          </button>
        </div>
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      <div className="flex justify-center">
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-purple-300"
          >
            {menuOpen ? <ChevronUp size={24}/> : <ChevronDown size={24}/>}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
          initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-indigo-950"
          >
            <div className="flex justify-center gap-6 py-4 text-sm font-medium">
            <Link to={"/"} className="hover:text-purple-300">Anasayfa</Link>
            <Link to={"/new-episodes"} className="hover:text-purple-300">Yeni Bölümler</Link>
            <Link to={"/popular-series"} className="hover:text-purple-300">Popüler Animeler</Link>
            <Link to={"/contact"} className="hover:text-purple-300">İletişim</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
