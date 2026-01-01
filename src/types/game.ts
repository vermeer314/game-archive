export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  ratings_count: number;
  metacritic: number;
  playtime: number;
  platform: Platform;
  //버전이 다른 플랫폼들을 동일한 플랫폼으로 묶어주기
  //ex) PlayStation 3, 4, 5 >> PlayStation
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  shotr_screenshots: ShortScreenshot[];
  tags: Tag[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface GameQueryParams {
  page_size: number;
  ordering: string;
  genres?: string;
  search?: string;
}
