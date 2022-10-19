import { UseFetchReturn } from '@/types';
import { RandomDogImages } from '@/features/Dogs/types';

interface UseDogApi {
  loadImages: () => UseFetchReturn<RandomDogImages>;
}

export const useDogApi = (): UseDogApi => {
  const config = useRuntimeConfig();

  const loadImages = () =>
    useFetch<RandomDogImages>(
      `${config.public.dogApiBaseUrl}breeds/image/random/50`,
    );

  return {
    loadImages,
  };
};
