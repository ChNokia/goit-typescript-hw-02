import { ImageData, SelectedImageData } from '../App/App.types';

export interface ImageGalleryProps {
  images: ImageData[];
  onSelectedItem: (item: SelectedImageData) => void;
}
