import React from 'react';
import { SearchIcon } from './Icons';

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <SearchIcon className="w-6 h-6 text-slate-400 dark:text-slate-500" />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Cari artikel berdasarkan judul atau ringkasan..."
          className="w-full py-4 pl-14 pr-6 text-lg bg-clean-white dark:bg-slate-800 text-dark-navy dark:text-clean-white
                     border-2 border-slate-200 dark:border-slate-700 rounded-2xl
                     focus:ring-2 focus:ring-neon-blue focus:border-neon-blue outline-none 
                     transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-500"
          aria-label="Cari artikel"
        />
      </div>
    </div>
  );
};