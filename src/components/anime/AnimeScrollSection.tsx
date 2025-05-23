import SeriesCard from "../SeriesCard";
import { useScrollWithLoop } from "../../hooks/useScrollWithLoop";
import type { AnimeScrollSectionProps } from "../../types/AnimeScrollSectionProps";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AnimeScrollSection({ title,showMorePath, seriesList  }: AnimeScrollSectionProps) {
    const { scrollRef, scrollLeft, scrollRight } = useScrollWithLoop();
  
    return (
      <section className="">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <div className="flex justify-end">
        {showMorePath && (
          <Link to={showMorePath} className="flex items-center gap-1 text-sm text-pretty text-white-400 hover:text-blue-400 transition-colors">
           <ArrowRight className="w-4 h-4" /> 
           <span>Tümünü Gör</span>
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