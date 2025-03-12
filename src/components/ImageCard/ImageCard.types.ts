import { ImageData, SelectedImageData } from '../App/App.types';

export interface ImageCardProps {
  imageCard: ImageData;
  onSelect: (item: SelectedImageData) => void;
}
