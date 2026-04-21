import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArticleGrid } from './components/ArticleGrid';
import { ArticleDetail } from './components/ArticleDetail';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { ArticleCardSkeleton } from './components/ArticleCardSkeleton';
import { ARTICLES } from './constants';
import type { Article } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = typeof window !== 'undefined' ? localStorage.getItem('darkMode') : null;
    if (savedMode) {
      return savedMode === 'true';
    }
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Increment and get visit count
    const count = parseInt(localStorage.getItem('duniaProgrammerVisits') || '0', 10) + 1;
    localStorage.setItem('duniaProgrammerVisits', count.toString());
    setVisitCount(count);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []); // Runs only once on component mount

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  const handleLearnMore = () => {
    const articleSection = document.getElementById('artikel');
    if (articleSection) {
      articleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredArticles = ARTICLES.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`bg-clean-white dark:bg-dark-navy text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main ref={mainContentRef}>
        {!selectedArticle ? (
          <>
            <Hero onLearnMore={handleLearnMore} />
            <section id="artikel" className="py-20 md:py-28 bg-slate-50 dark:bg-dark-navy/80">
              <div className="container mx-auto px-6">
                <SearchBar query={searchQuery} onSearch={handleSearchChange} />
                
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <ArticleCardSkeleton key={index} />
                    ))}
                  </div>
                ) : (
                  <>
                    {searchQuery && (
                      <div className="mb-10 text-center text-slate-600 dark:text-slate-400">
                        Menampilkan {filteredArticles.length} hasil untuk pencarian <span className="font-bold text-dark-navy dark:text-clean-white">"{searchQuery}"</span>
                      </div>
                    )}

                    {filteredArticles.length > 0 ? (
                      <ArticleGrid articles={filteredArticles} onSelectArticle={handleSelectArticle} />
                    ) : (
                      <div className="text-center py-16">
                        <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white">Tidak Ada Hasil</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Maaf, kami tidak dapat menemukan artikel yang cocok dengan pencarian Anda.</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </section>
          </>
        ) : (
          <ArticleDetail article={selectedArticle} onBack={handleBack} />
        )}
      </main>
      <Footer visitCount={visitCount} />
    </div>
  );
}

export default App;