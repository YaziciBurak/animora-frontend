import { X } from "lucide-react";
import type { ModalProps } from "../../types/LoginModalProps";
import { Link } from "react-router-dom";
import PasswordInput from "../inputs/PasswordInput";
import { Controller, useForm } from "react-hook-form";
import type { LoginFormData } from "../../types/Auth";

export default function LoginModal({ isOpen, onClose }: ModalProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  if (!isOpen) return null;

  const onSubmit = (data: LoginFormData) => {
    console.log("Login form verisi:", data);
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
          Giriş Yap
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <input
            type="text"
            placeholder="Kullanıcı adı veya e-posta adresi"
            {...register("usernameOrEmail", { required: "Bu alan zorunlu" })}
            className="w-full px-4 py-2 pr-10 bg-white text-black rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          {errors.usernameOrEmail && (
              <p className="text-red-500 text-sm">{errors.usernameOrEmail.message}</p>
            )}
          
          <Controller
            name="password"
            control={control}
            rules={{ required: "Şifre gerekli" }}
            render={({ field }) => (
              <PasswordInput {...field} />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <div className="text-right">
            <Link
              to={"/forgot-password"}
              className="text-sm text-purple-600 hover:underline"
            >
              Şifreni mi unuttun?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
