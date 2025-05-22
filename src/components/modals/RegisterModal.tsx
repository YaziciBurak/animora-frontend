import { useState } from "react";
import type { ModalProps } from "../../types/LoginModalProps";
import { X } from "lucide-react";
import PasswordInput from "../inputs/PasswordInput";

export default function RegisterModal({ isOpen, onClose }: ModalProps) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-800">
          Kayıt Ol
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Kullanıcı adı"
            value={username}
        onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 pr-10 bg-white text-black rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 pr-10 bg-white text-black rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}
