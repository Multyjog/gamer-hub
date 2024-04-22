import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { IPlatform } from "./usePlatforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<IGame>>("/games", {
          params: {
            params: {
              genres: gameQuery.genre,
              parent_platforms: gameQuery.platform,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
            },
          },
        })
        .then((res) => res.data),
  });

export default useGames;
