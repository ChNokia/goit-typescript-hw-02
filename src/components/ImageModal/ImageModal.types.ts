export interface ImageModalProps {
  isOpen: boolean;
  url: string;
  onClose: () => void;
  description: string | null | undefined;
}
