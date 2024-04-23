import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<IPlatform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
