// src/entities/article/index.ts
export { getArticleBySlug } from './api/getArticleBySlug';
export { getArticles } from './api/getArticles';
export { ARTICLE_BY_SLUG_QUERY_KEY, useArticleBySlug } from './api/useArticleBySlug';
export { ARTICLE_QUERY_KEY, useArticles } from './api/useArticles';
export { articleSchema } from './model/article.schema';
export type { Article } from './types/article';
// Add other exports for article entity (ui) here as they are created
