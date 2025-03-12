import React, { FormEvent, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { Toaster, toast } from 'react-hot-toast';

import styles from './SearchBar.module.css';

import { SearchBarProps } from './SearchBar.types';

const notify = (message: string = 'Empty query!'): void => {
  toast.error(message);
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const newQuery: string = (
      form.elements.namedItem('search') as HTMLInputElement
    ).value.trim();

    if (!newQuery) {
      notify();
      return;
    }
    onSubmit(newQuery);
  };
  return (
    <header className={styles.searchHeader}>
      <Toaster />
      <form className={styles.searchField} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button className={styles.searchBtn} type="submit">
          <GoSearch size="24" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
