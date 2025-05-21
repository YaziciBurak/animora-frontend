export interface Episode {
  id: number;
  season: number;
  episode: number;
  title: string;
  videoUrl: string;
}

export interface Series {
  id: number;
  title: string;
  description: string;
  rating: number;
  year: number;
  imageUrl: string;
  episodes: Episode[];
}
