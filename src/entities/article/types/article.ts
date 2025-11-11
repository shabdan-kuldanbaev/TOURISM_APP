// src/entities/article/types/article.ts
import type { PortableTextBlock } from '@portabletext/types';

export interface Article {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'article';
  title: string;
  description: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  content: PortableTextBlock[];
}
