import Image from 'next/image';
import { InfiniteMovingCards } from '@/shared/ui';

export const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl h-[40rem] text-center lg:py-16 lg:px-6">
        <InfiniteMovingCards
          items={[
            { quote: 'Test', title: 'Test', name: 'Test' },
            { quote: 'Test', title: 'Test', name: 'Test3' },
            { quote: 'Test', title: 'Test', name: 'Test2' },
            { quote: 'Test', title: 'Test', name: 'Test1' },
          ]}
          direction="right"
          speed="slow"
        />
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and elements built with the
            utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Avatar"
              width={144}
              height={144}
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="/">Bonnie Green</a>
            </h3>
            <p>CEO/Co-founder</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
              alt="Helene Avatar"
              width={144}
              height={144}
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="/">Helene Engels</a>
            </h3>
            <p>CTO/Co-founder</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Avatar"
              width={144}
              height={144}
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="/">Jese Leos</a>
            </h3>
            <p>Marketing</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="Joseph Avatar"
              width={144}
              height={144}
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="/">Joseph McFall</a>
            </h3>
            <p>Sales</p>
          </div>
        </div>
      </div>
    </section>
  );
};
