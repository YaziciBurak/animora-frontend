import SeriesGrid from "../components/anime/SeriesGrid";
import { newlyAddedSeries } from "../data/newlyAddedSeries";

export default function NewEpisodesPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Yeni Bölümler</h1>
      <SeriesGrid seriesList={newlyAddedSeries} />
    </div>
  );
}
