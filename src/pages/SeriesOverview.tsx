import { useState } from "react";
import { allSeries } from "../data/seriesData";
import { useNavigate, useParams } from "react-router-dom";

export default function SeriesOverview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const series = allSeries.find((s) => s.id.toString() === id);
  if (!series) return <div>Bulunamadı!</div>;

  const seasons = Array.from(new Set(series.episodes.map((ep) => ep.season)));
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const filteredEpisodes = series.episodes.filter(
    (ep) => ep.season === selectedSeason
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 bg-gray-900 rounded-lg shadow-md p-4">
        <div className="relative w-full md:w-64">
          <img
            src={series.imageUrl}
            alt={series.title}
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 p-2 rounded-t-lg">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">
              {series.title}
            </h1>
          </div>
        </div>

        <div className="flex-1 text-left">
          <p className="text-gray-300 text-sm">{series.description}</p>
        </div>
      </div>

      <div className="flex gap-2 mt-6 flex-wrap place-self-center">
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`px-4 py-2 rounded text-sm font-medium ${
              selectedSeason === season
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {season}. Sezon
          </button>
        ))}
      </div>

      <div className="mt-4 bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Bölümler</h2>
        <ul className="space-y-3">
          {filteredEpisodes.map((ep) => (
            <li
              key={ep.id}
              className="flex justify-between items-center bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-3 rounded"
            >
              <button
                onClick={() =>
                  navigate(
                    `/series/${series.id}?season=${ep.season}&episode=${ep.episode}`
                  )
                }
                className="text-gray-200 text-left text-sm hover:text-white"
              >
                {ep.season}. Sezon {ep.episode}. Bölüm - {ep.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
