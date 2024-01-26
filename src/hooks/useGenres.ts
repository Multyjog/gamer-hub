import useData from "./useData";

export interface IGenre {
    id: number;
    name: string;
}

const useGenres = () => {
    return useData<IGenre>('/genres')
  }

export default useGenres