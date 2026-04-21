import React from 'react';
import { ArticleCard } from './ArticleCard';
import type { Article } from '../types';

interface ArticleGridProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, onSelectArticle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {articles.map((article, index) => (
        <ArticleCard key={article.id} article={article} onSelectArticle={onSelectArticle} index={index} />
      ))}
    </div>
  );
};