import SeriesGrid from "../components/anime/SeriesGrid";
import { popularEpisodes } from "../data/popularEpisodes";

export default function PopularSeriesPage() {
    return (
        <div className="max-w-7xl mx-auto p-4">
    <h1 className="text-2xl font-bold text-white mb-6">Popüler Animeler</h1>
    <SeriesGrid seriesList={popularEpisodes} />
    </div>
)
}