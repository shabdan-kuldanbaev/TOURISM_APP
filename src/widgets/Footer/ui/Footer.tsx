import Link from 'next/link';
import { FOOTER_LINKS } from '@/widgets/Footer/model/constants';

export const Footer = () => {
  return (
    <footer className="bg-lime pt-[45vh] md:pt-[50vh] lg:pt-[60vh]">
      <div className="z-0 fixed bottom-0 h-[45vh] md:h-[50vh] lg:h-[60vh] w-full pt-10 px-5 pb-5">
        <div className="container mx-auto h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-white font-semibold text-lg">Gulzada Olzhobaeva</p>
              <p className="text-white text-base opacity-90">
                J'inspire les gens à voyager dans mon pays
              </p>
            </div>

            <div>
              <ul className="space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.link}>
                    <Link
                      href={link.link}
                      className="text-white text-base opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[250px] text-center text-white font-bold font-custom">
            La Kirghize
          </p>
        </div>
      </div>
    </footer>
  );
};
