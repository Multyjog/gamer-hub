import useData from "./useData";

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    return useData<IPlatform>('/platforms/lists/parents')
  }

export default usePlatforms