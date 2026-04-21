
import React from 'react';
import type { Article } from '../types';
import { ArrowLeftIcon } from './Icons';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  return (
    <div className="pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 font-semibold text-neon-blue hover:underline"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Kembali ke Daftar Artikel
        </button>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-h1:font-poppins prose-h1:text-4xl prose-h1:font-bold prose-h2:font-poppins prose-h2:font-bold prose-h3:font-poppins prose-h3:font-bold prose-img:rounded-3xl prose-img:shadow-soft">
          <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-8 not-prose">{article.summary}</p>
          <img src={article.imageUrl.replace('/800/600', '/1200/600')} alt={article.title} className="w-full rounded-4xl shadow-soft mb-12" />
          
          {article.content}

        </article>
      </div>
    </div>
  );
};