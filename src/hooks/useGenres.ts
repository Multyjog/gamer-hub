import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<IGenre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
