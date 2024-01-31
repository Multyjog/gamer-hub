// import useData from "./useData";
import genres from "../data/genres";
export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });
// return useData<IGenre>('/genres')

export default useGenres;
