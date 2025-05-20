import AnimeScrollSection from "../components/anime/AnimeScrollSection";
import { featuredSeries } from "../data/featuredSeries";
import { newlyAddedSeries } from "../data/newlyAddedSeries";
import { popularEpisodes } from "../data/popularEpisodes";

export default function Home() {
  const sliders = [
    { title: "Öne Çıkanlar", series: featuredSeries },
    { title: "Yeni Eklenenler", series: newlyAddedSeries },
    { title: "Popüler Bölümler", series: popularEpisodes },
  ];
  return (
    <div>
      {sliders.map((slider, index) => (
        <AnimeScrollSection
          key={index}
          title={slider.title}
          seriesList={slider.series}
        />
      ))}
    </div>
  );
}
