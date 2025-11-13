'use client';

import { useMemo } from 'react';
import { type Article, useArticles } from '@/entities/article';
import { urlFor } from '@/shared/lib/sanity/image';
import { HoverEffect } from '@/shared/ui';

export const ArticlesListSection = () => {
  const { data } = useArticles();

  const articles = useMemo(
    () =>
      (data || []).map((article: Article) => ({
        title: article.title,
        description: article.description,
        link: `/articles/${article.slug.current}`,
        previewImage: urlFor(article.previewImage).width(700).height(500).url(),
        date: article._createdAt,
      })),
    [data]
  );

  return (
    <section className="relative app-background bg-white dark:bg-black py-8 z-10">
      <div className="container mx-auto px-4">
        <HoverEffect items={articles} />
      </div>
    </section>
  );
};
