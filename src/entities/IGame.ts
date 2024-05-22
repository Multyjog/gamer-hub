import { IGenre } from "./IGenre";
import { IPlatform } from "./IPlatform";
import { Publisher } from "./IPublisher";

export interface IGame {
  id: number;
  name: string;
  slug: string;
  genres: IGenre[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
  publishers: Publisher[];
}
