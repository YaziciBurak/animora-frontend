import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { allSeries } from "../data/seriesData";

export default function SeriesDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const series = allSeries.find((s) => s.id.toString() === id);
  const episodeParam = parseInt(searchParams.get("episode") || "1");
  const seasonParam = parseInt(searchParams.get("season") || "1");

  if (!series) return <div>Yükleniyor...</div>;

  const currentSeasonEpisodes = series.episodes.filter(
    (ep) => ep.season === seasonParam
  );

  const currentIndex = currentSeasonEpisodes.findIndex(
    (ep) => ep.episode === episodeParam
  );

  const currentEpisode =
    currentIndex !== -1
      ? currentSeasonEpisodes[currentIndex]
      : currentSeasonEpisodes[0];

  const flatEpisodes = series.episodes;

  const globalIndex = flatEpisodes.findIndex(
    (ep) => ep.season === seasonParam && ep.episode === episodeParam
  );

  const goToEpisode = (index: number) => {
    if (index >= 0 && index < flatEpisodes.length) {
      const episode = flatEpisodes[index];
      navigate(
        `/series/${series.id}?season=${episode.season}&episode=${episode.episode}`
      );
    }
  };

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{series.title}</h1>

        <iframe
          src={currentEpisode.videoUrl}
          width="100%"
          height="500"
          allowFullScreen
          className="rounded-lg"
        ></iframe>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => goToEpisode(globalIndex - 1)}
            disabled={globalIndex === 0}
            className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Önceki Bölüm
          </button>
          <button
            onClick={() => goToEpisode(globalIndex + 1)}
            disabled={globalIndex === flatEpisodes.length - 1}
            className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Sonraki Bölüm
          </button>
        </div>
      </div>

      <div className="w-full md:w-64">
        <h2 className="text-lg font-semibold mb-2">
          {seasonParam}. Sezon Bölümleri
        </h2>
        <ul className="space-y-2">
          {currentSeasonEpisodes.map((ep) => {
            const isActive = ep.episode === episodeParam;
            return (
              <li key={ep.id}>
                <button
                  onClick={() =>
                    navigate(
                      `/series/${series.id}?season=${ep.season}&episode=${ep.episode}`
                    )
                  }
                  className={`w-full text-left px-4 py-2 rounded ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {ep.season}. Sezon {ep.episode}. Bölüm
                </button>
              </li>
            );
          })}
        </ul>

        <div onClick={() => navigate(`/series/${series.id}/overview`)} className="mt-6 p-4 bg-gray-900 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition">
          <img
            src={series.imageUrl || "/placeholder.jpg"}
            alt={series.title}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg">{series.title}</h3>
            <button
              onClick={() => navigate(`/series/${series.id}/overview`)}
              className="text-sm text-blue-400 hover:underline mt-1"
            >
              Anime Sayfası →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
