import { Article } from '@/widgets/Article';
import { Contact } from '@/widgets/Contact';
import { CTA } from '@/widgets/CTA';
import { Hero } from '@/widgets/Hero';
import { Newsletter } from '@/widgets/Newsletter';
import { Team } from '@/widgets/Team';
import { Testimonial } from '@/widgets/Testimonial';

export default async function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Article />
      <Newsletter />
      <Testimonial />
      <Team />
      <CTA />
      <Contact />
    </main>
  );
}
