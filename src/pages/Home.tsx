import AnimeScrollSection from "../components/anime/AnimeScrollSection";
import { featuredSeries } from "../data/featuredSeries";
import { newlyAddedSeries } from "../data/newlyAddedSeries";
import { popularEpisodes } from "../data/popularEpisodes";


export default function Home() {
   
  return (
    <div>
      <AnimeScrollSection title="Öne Çıkan Animeler" seriesList={featuredSeries} />
      <AnimeScrollSection title="Yeni Eklenen Animeler" seriesList={newlyAddedSeries} />
      <AnimeScrollSection title="Popüler Yeni Bölümler" seriesList={popularEpisodes} />
    </div>
  );
}
