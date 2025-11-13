// src/entities/article/api/getArticles.ts
import { groq } from 'next-sanity';
import type { Article } from '@/entities/article/types/article';
import { client } from '@/shared/api/sanity';

export async function getArticles(): Promise<Article[]> {
  const query = groq`*[_type == "article"] | order(_createdAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    _rev,
    _type,
    title,
    slug,
    description,
    previewImage,
    content
  }`;
  return await client.fetch<Article[]>(query);
}
