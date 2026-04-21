import React from 'react';

export const ArticleCardSkeleton: React.FC = () => {
  return (
    <div className="bg-clean-white dark:bg-slate-800/70 rounded-4xl shadow-soft overflow-hidden">
      <div className="w-full h-56 animate-shimmer"></div>
      <div className="p-8">
        <div className="h-6 w-3/4 rounded-md animate-shimmer mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 w-full rounded-md animate-shimmer"></div>
          <div className="h-4 w-full rounded-md animate-shimmer"></div>
          <div className="h-4 w-5/6 rounded-md animate-shimmer"></div>
        </div>
        <div className="mt-6 h-6 w-1/3 rounded-md animate-shimmer"></div>
      </div>
    </div>
  );
};