import { featuredSeries } from "./featuredSeries";
import { newlyAddedSeries } from "./newlyAddedSeries";
import { popularEpisodes } from "./popularEpisodes";

export { featuredSeries, newlyAddedSeries, popularEpisodes };

export const allSeries = [...featuredSeries, ...newlyAddedSeries, ...popularEpisodes];