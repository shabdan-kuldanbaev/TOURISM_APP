// app/articles/page.tsx
import { getArticles } from '@/entities/article';
import { urlFor } from '@/shared/lib/sanity/image';
import { HoverEffect } from '@/shared/ui';

export default async function ArticlesPage() {
  const articles = await getArticles();
  console.log(articles);
  const formattedArticles = articles.map((article) => ({
    title: article.title,
    description: article.description,
    link: `/articles/${article.slug.current}`,
    previewImage: urlFor(article.previewImage).width(700).height(500).url(),
    date: article._createdAt,
  }));

  return (
    <section className="container mx-auto px-4 pt-20 pb-10">
      <h1 className="text-4xl font-bold mb-4 text-left">Articles</h1>
      <HoverEffect items={formattedArticles} />
    </section>
  );
}
