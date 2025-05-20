import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Üzgünüz, aradığınız sayfa bulunamadı.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
