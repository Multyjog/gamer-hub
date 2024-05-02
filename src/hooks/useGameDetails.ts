import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { IGame } from "./useGames";

const apiClient = new APIClient<IGame>("/games");
const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGameDetails;
