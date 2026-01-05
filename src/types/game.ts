export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  released: string;
  rating: number;
  ratings_count: number;
  metacritic: number;
  platform: Platform;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
}

export interface GameDetail extends Game {
  description_raw: string;
  playtime: number;
  tags: Tag[];
  developers: Developer[];
  stores: Store[];
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

export interface Developer {
  id: number;
  name: string;
  slug: string;
}

export interface Store {
  id: number;
  url: string;
  store: StoreInfo;
}

export interface StoreInfo {
  domain: string;
  id: number;
  name: string;
  slug: string;
}
