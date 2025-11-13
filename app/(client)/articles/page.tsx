import { dehydrate } from '@tanstack/query-core';
import { HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { ARTICLE_QUERY_KEY, getArticles } from '@/entities/article';
import { ArticlesSection } from '@/widgets/ArticlesHero';
import { ArticlesListSection } from '@/widgets/ArticlesList';

export default async function ArticlesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ARTICLE_QUERY_KEY,
    queryFn: getArticles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArticlesSection />
      <ArticlesListSection />
    </HydrationBoundary>
  );
}
