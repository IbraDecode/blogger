import React from 'react';

export interface Article {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  content: React.ReactNode;
}
