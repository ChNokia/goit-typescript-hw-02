export interface ResponseData {
  total: number;
  total_pages: number;
  results: ImageData[];
}

export interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string | null;
  description?: string | null;
  likes: number;
}

export interface SelectedImageData {
  description?: string | null;
  alt_description?: string | null;
  regular: string;
}
