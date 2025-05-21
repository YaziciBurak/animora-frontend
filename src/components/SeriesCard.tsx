import type { Series } from "../types/SeriesCardProps";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function SeriesCard({
  id,
  title,
  imageUrl,
  rating,
  year,
}: Series) {
  return (
    <Link to={`/series/${id}`}>
      <div className="relative w-[160px] h-[240px] shrink-0 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-2 pt-6 pb-2">
          <h2 className="text-white text-xs font-medium truncate">{title}</h2>

          <div className="flex justify-between items-center text-[10px] text-gray-300 mt-1">
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span>{rating ?? "?"}</span>
            </div>

            <span>{year ?? "?"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
