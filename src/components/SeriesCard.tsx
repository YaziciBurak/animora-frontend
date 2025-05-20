import type { Series } from "../types/SeriesCardProps";
import { Link } from "react-router-dom";

export default function SeriesCard({ id, title, imageUrl,  }: Series) {
  return (
    <Link to={`/series/${id}`}>
    <div className="relative w-[160px] h-[240px] shrink-0 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-2 py-1">
        <h2 className="text-white text-xs font-medium truncate">{title}</h2>
      </div>
    </div>
    </Link>
  );
}
