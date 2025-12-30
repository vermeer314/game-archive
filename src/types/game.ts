export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  metacritic: number;
  playtime: number;
  platform: Platform;
  //버전이 다른 플랫폼들을 동일한 플랫폼으로 묶어주기
  //ex) PlayStation 3, 4, 5 >> PlayStation
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
