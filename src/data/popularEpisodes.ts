import type { Series } from "../types/SeriesCardProps";

export const popularEpisodes: Series[] = [
  {
    id: 30,
    title: "Steins Gate",
    description:
      "Zaman yolculuğuna dair deneyler yapan bir grup arkadaşın, kaderi değiştirme çabalarıyla örülü bilimkurgu ve dram hikayesi.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_.jpg",
    rating: 9.2,
    year: 2011,
    episodes: [
      {
        id: 1,
        season: 1,
        episode: 1,
        title: "1. bölüm",
        videoUrl: "https://www.youtube.com/embed/1FPdtR_5KFo",
      },
      {
        id: 2,
        season: 1,
        episode: 2,
        title: "2. bölüm",
        videoUrl: "https://www.youtube.com/embed/BYvhhMjW32k",
      },
      {
        id: 3,
        season: 1,
        episode: 3,
        title: "3. bölüm",
        videoUrl: "https://www.youtube.com/embed/ZGM90Bo3zH0",
      },
    ],
  },
  {
    id: 31,
    title: "The Gorilla God's Go-To Girl",
    description:
      "Gizemli bir tanrının hizmetine giren genç bir kızın, doğaüstü olaylarla örülü sıra dışı yolculuğu.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BOWFjMjM5OGUtOTIyNC00OTVkLWExM2MtMGQ5ZDE2ODdmNjMyXkEyXkFqcGc@._V1_.jpg",
    rating: 7.1,
    year: 2025,
    episodes: [
      {
        id: 1,
        season: 1,
        episode: 1,
        title: "1. bölüm",
        videoUrl: "https://www.youtube.com/embed/bcWpnLAJWyY",
      },
    ],
  },
];
