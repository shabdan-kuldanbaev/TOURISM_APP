// src/entities/article/api/useArticles.ts
import { useQuery } from '@tanstack/react-query';
import { getArticles } from './getArticles';

export const ARTICLE_QUERY_KEY = ['articles'];

export function useArticles() {
  return useQuery({
    queryKey: ARTICLE_QUERY_KEY,
    queryFn: getArticles,
  });
}
