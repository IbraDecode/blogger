import React, { useState, useEffect, useRef } from 'react';
import type { Article } from '../types';
import { ArrowRightIcon } from './Icons';

interface ArticleCardProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  index: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSelectArticle, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-clean-white dark:bg-slate-800/70 dark:backdrop-blur-sm rounded-4xl shadow-soft overflow-hidden
                 group transform hover:-translate-y-2 transition-all duration-400 ease-in-out flex flex-col
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden cursor-pointer" onClick={() => onSelectArticle(article)}>
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-400 ease-in-out"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 
          className="font-poppins text-xl font-bold mb-3 text-dark-navy dark:text-clean-white group-hover:text-neon-blue transition-colors cursor-pointer"
          onClick={() => onSelectArticle(article)}
        >
          {article.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
          {article.summary}
        </p>
        <div className="mt-6">
          <button 
            onClick={() => onSelectArticle(article)}
            className="font-poppins font-semibold text-neon-blue flex items-center gap-2"
            aria-label={`Baca selengkapnya tentang ${article.title}`}
          >
            Baca Selengkapnya
            <ArrowRightIcon className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};