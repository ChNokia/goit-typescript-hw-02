import React, { useEffect, useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';

import { fetchImages } from '../../services/api';

import './App.css';

import { ImageData, ResponseData, SelectedImageData } from './App.types';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [imagesList, setImagesList] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImageData>({
    description: '',
    alt_description: '',
    regular: '',
  });

  useEffect(() => {
    const handleSearchQuery = async () => {
      if (!query) {
        return;
      }

      try {
        setIsLoading(true);
        setIsError(false);

        const data = await fetchImages<ResponseData>(query, page);

        setImagesList(prev => [...prev, ...data.results]);
        setIsLoadMore(page < data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearchQuery();
  }, [query, page]);

  const handleNewQuery = (newQuery: string): void => {
    setImagesList([]);
    setPage(0);
    setQuery('');
    setQuery(newQuery);
  };

  const handleLoadMore = (): void => {
    setPage(prev => prev + 1);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const selectImage = (item: SelectedImageData): void => {
    setSelectedImage(item);
    openModal();
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleNewQuery} />
      {imagesList.length > 0 && (
        <ImageGallery images={imagesList} onSelectedItem={selectImage} />
      )}
      {isLoading && <Loader />}
      {isLoadMore && <LoadMoreBtn clickAction={handleLoadMore} />}
      {isError && <ErrorMessage message="try late....." />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          url={selectedImage.regular}
          onClose={closeModal}
          description={
            selectedImage.description || selectedImage.alt_description
          }
        />
      )}
    </div>
  );
};

export default App;
