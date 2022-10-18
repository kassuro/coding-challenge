export interface DogApiResponse<T> {
  message: T;
  status: string;
}

export type RandomDogImages = DogApiResponse<string[]>;
