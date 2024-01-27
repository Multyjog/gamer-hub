import { GameQuery } from "../App";
import useData from "./useData";
import {IPlatform} from './usePlatforms'

export interface IGame {
  id: number;
  name: string;
	background_image: string
	parent_platforms: { platform: IPlatform }[] 
  metacritic: number
}

const useGames = (gameQuery: GameQuery) => {
 return useData<IGame>('/games', {
  params: {
    genres: gameQuery.genre, platforms: gameQuery.platform
  }}, 
  [gameQuery])
}

export default useGames