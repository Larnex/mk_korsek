import Image, { StaticImageData } from 'next/image';

import FeatImage01 from '@/public/images/feature/header-image-1.jpg';
import FeatImage02 from '@/public/images/feature/header-image-2.jpg';
import FeatImage03 from '@/public/images/feature/header-image-3.jpg';
import FeatImage04 from '@/public/images/feature/header-image-4.jpg';

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Nasze Oferty</h2>
            <p className="text-xl text-gray-400">Odkryj naszą różnorodną gamę mebli na wymiar, dostosowanych do każdej przestrzeni i potrzeby.</p>
          </div>
          <div className='grid gap-20'>
            {/* Offer Items */}
            <OfferItem
              image={FeatImage01}
              title="Kuchnie na wymiar"
              description="Specjalizujemy się w projektowaniu i produkcji kuchni, które są zarówno funkcjonalne, jak i estetyczne."
              reverse={false}
              link='/kuchnie-na-wymiar'
            />
            <OfferItem
              image={FeatImage02}
              title="Szafy wnękowe"
              description="Oferujemy praktyczne zabudowy wnękowe, które maksymalizują dostępną przestrzeń, będąc jednocześnie eleganckim elementem wystroju wnętrza."
              reverse={true}
              link='/szafy'
            />
            <OfferItem
              image={FeatImage03}
              title="Meble z litego drewna"
              description="Tworzymy wyjątkowe meble z litego drewna, które dodają charakteru każdemu wnętrzu, łącząc funkcjonalność z elegancją."
              reverse={false}
              link='/meble-z-litego-drewna'
            />
            <OfferItem
              image={FeatImage04}
              title="Montaż i renowacja mebli"
              description="Świadczymy profesjonalne usługi montażu i renowacji mebli, zapewniając ich długotrwałość i estetyczny wygląd."
              reverse={true}
              link='/montaz-i-renowacja-mebli'
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export const OfferItem = ({ image, title, description, reverse, link }: {
  image: StaticImageData,
  title: string,
  description: string,
  reverse: boolean,
  link?: string
}) => (

  <div className={`md:grid md:grid-cols-12 md:gap-6 items-center mb-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 rtl ${reverse ? '' : 'md:order-1'}`} data-aos="fade-up">
      <Image className="max-w-full mx-auto md:max-w-none h-auto" src={image} width={540} height={405} alt={title} />
    </div>
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos={reverse ? 'fade-left' : 'fade-right'}>
      <div className={reverse ? "md:pl-4 lg:pl-12 xl:pl-16" : "md:pr-4 lg:pr-12 xl:pr-16"}>
        <h3 className="h3 mt-3">{title}</h3>
        <p className="text-lg text-gray-400 mt-4 mb-4">{description}</p>
        {link && (
          <a href={link} className="text-lg text-green-500 hover:text-green-700 font-semibold cursor-pointer">Dowiedz się więcej →</a>
        )}

        {/* <Link href={link}><a className="text-lg text-green-500 hover:text-green-700 font-semibold">Dowiedz się więcej →</a></Link> */}
      </div>
    </div>
  </div>
);
