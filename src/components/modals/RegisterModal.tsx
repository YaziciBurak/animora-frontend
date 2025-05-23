import type { ModalProps } from "../../types/LoginModalProps";
import { X } from "lucide-react";
import PasswordInput from "../inputs/PasswordInput";
import type { RegisterFormData } from "../../types/Auth";
import { useForm, Controller } from "react-hook-form";

export default function RegisterModal({ isOpen, onClose }: ModalProps) {
 const {control, register, handleSubmit, formState: { errors }} = useForm<RegisterFormData>();

  if (!isOpen) return null;

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register form verisi:", data);
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Kullanıcı adı"
            {...register("username", {required: "Kullanıcı adı gerekli"})}
            className="w-full px-4 py-2 pr-10 bg-white text-black rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
          <input
            type="email"
            placeholder="E-posta"
            {...register("email", { required: "E-posta gerekli", pattern: { value: /^\S+@\S+$/i,
                message: "Geçerli bir e-posta girin", },})}
            className="w-full px-4 py-2 pr-10 bg-white text-black rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <Controller 
          name="password"
          control={control}
          rules={{ required: "Şifre gerekli", minLength: { value:6, message: "Şifre en az 6 karakter olmalı" } }}
          render={({ field }) => (
           <PasswordInput {...field} />
          )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
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
