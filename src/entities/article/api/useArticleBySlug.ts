// src/entities/article/api/useArticleBySlug.ts
import { useQuery } from '@tanstack/react-query';
import { getArticleBySlug } from './getArticleBySlug';

export const ARTICLE_BY_SLUG_QUERY_KEY = (slug: string) => ['article', slug];

export function useArticleBySlug(slug: string) {
  return useQuery({
    queryKey: ARTICLE_BY_SLUG_QUERY_KEY(slug),
    queryFn: () => getArticleBySlug(slug),
    enabled: !!slug, // Only run the query if slug is available
  });
}
