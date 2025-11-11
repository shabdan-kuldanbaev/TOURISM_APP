// src/entities/article/api/getArticleBySlug.ts
import { groq } from 'next-sanity';
import type { Article } from '@/entities/article/types/article';
import { client } from '@/shared/api/sanity';

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = groq`*[_type == "article" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    _rev,
    _type,
    title,
    slug,
    content
  }`;
  const article = await client.fetch<Article | null>(query, { slug: slug });
  return article;
}
