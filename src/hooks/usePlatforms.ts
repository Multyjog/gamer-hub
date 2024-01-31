import platforms from "../data/platforms";
export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, error: null, isLoading: null });

export default usePlatforms;
