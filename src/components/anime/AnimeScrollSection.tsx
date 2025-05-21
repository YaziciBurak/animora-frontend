import SeriesCard from "../SeriesCard";
import { useScrollWithLoop } from "../../hooks/useScrollWithLoop";
import type { AnimeScrollSectionProps } from "../../types/AnimeScrollSectionProps";
import { Link } from "react-router-dom";

export default function AnimeScrollSection({ title,showMorePath, seriesList  }: AnimeScrollSectionProps) {
    const { scrollRef, scrollLeft, scrollRight } = useScrollWithLoop();
  
    return (
      <section className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
        <div className="flex justify-end mb-2">
        {showMorePath && (
          <Link to={showMorePath} className="text-sm text-pretty text-white-400 hover:underline ">
           → Tümünü Gör 
          </Link>
        )}
        </div>
        <div className="relative">
          <div ref={scrollRef} className="flex gap-4 overflow-hidden">
            {seriesList.map((series) => (
              <SeriesCard key={series.id} {...series} />
            ))}
          </div>
  
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black z-10"
          >
            &lt;
          </button>
  
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black z-10"
          >
            &gt;
          </button>
        </div>
      </section>
    );
  }