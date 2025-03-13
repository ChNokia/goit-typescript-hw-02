import axios from 'axios';

export const fetchImages = async <T>(
  query: string,
  page: number = 0
): Promise<T> => {
  const response = await axios.get<T>(
    `https://api.unsplash.com/search/photos?query=${query}&&page=${page}&client_id=${
      import.meta.env.VITE_API_ID
    }`
  );

  const data: T = response.data;

  return data;
};
