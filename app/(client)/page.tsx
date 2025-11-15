import { PageTransition } from '@/shared/ui';
import { Article } from '@/widgets/Article';
import { Contact } from '@/widgets/Contact';
import { Hero } from '@/widgets/Hero';
import { Testimonial } from '@/widgets/Testimonial';

export default async function Home() {
  return (
    <PageTransition>
      <Hero />
      <Article />
      <Testimonial />
      <Contact />
    </PageTransition>
  );
}
