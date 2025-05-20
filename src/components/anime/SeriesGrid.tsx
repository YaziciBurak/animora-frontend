import { useNavigate } from "react-router-dom";
import type { SeriesGridProps } from "../../types/SeriesGridProps";

export default function SeriesGrid({ seriesList }: SeriesGridProps) {
    const navigate = useNavigate();
  
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {seriesList.map((series) =>
          series.episodes.map((ep) => (
            <div
              key={`${series.id}-${ep.id}`}
              onClick={() =>
                navigate(`/series/${series.id}?episode=${ep.episode}`)
              }
              className="relative cursor-pointer bg-gray-800 rounded overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={series.imageUrl}
                alt={series.title}
                className="w-full h-40 object-cover"
              />
  
              <span className="absolute top-1 left-1 bg-red-600 text-xs text-white px-1 py-0.5 rounded">
                TR
              </span>
  
              <div className="p-2 text-sm">
                <p className="text-white font-semibold truncate">
                  {series.title}
                </p>
                <p className="text-gray-400">
                  {ep.season}. Sezon {ep.episode}. Bölüm
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  