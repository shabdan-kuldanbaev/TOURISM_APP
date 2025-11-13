// src/entities/article/types/article.ts
import type { PortableTextBlock } from '@portabletext/types';

export interface SanityAsset {
  _ref: string;
  _type: 'reference';
}
export interface Article {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'article';
  title: string;
  description: string;
  previewImage: {
    _type: 'image';
    asset: SanityAsset;
  };
  slug: {
    _type: 'slug';
    current: string;
  };
  content: PortableTextBlock[];
}
