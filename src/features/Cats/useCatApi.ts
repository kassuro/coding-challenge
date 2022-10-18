import { CatImage } from '@/features/Cats/types';
import { UseFetchReturn } from '@/types';

interface UseCatApi {
  loadImages: (limit?: number) => UseFetchReturn<CatImage[]>;
}

export const useCatApi = (): UseCatApi => {
  const config = useRuntimeConfig();

  const headers: Record<string, string> = {
    'x-api-key': config.catApiKey,
  };

  const loadImages = (limit?: number) =>
    useFetch<CatImage[]>(`${config.catApiBaseUrl}images/search`, {
      headers,
      query: {
        limit: limit ?? 50,
      },
    });

  return {
    loadImages,
  };
};
