import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import type { PasswordInputProps } from "../../types/PasswordInputProps";

export default function PasswordInput({ value, onChange, placeholder = "Şifre", name }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full px-4 py-2 pr-10 bg-white text-black rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-purple-600"
        tabIndex={-1}
      >
        {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
      </button>
    </div>
  );
}
