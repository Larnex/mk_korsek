'use client';

import KitchenImage1 from '../public/images/kitchen1.jpeg';
import KitchenImage2 from '../public/images/kitchen2.jpeg';
import { OfferItem } from "./zigzag";


function CustomKitchensOffer() {
      return (
            <section>
                  <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                        <div className="py-12 md:py-20 border-t border-gray-800">
                              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                    <h2 className="h2 mb-4">Kuchnie na wymiar</h2>
                                    <p className="text-xl text-gray-400">Jako firma MK Korsęk, specjalizujemy się w projektowaniu i produkcji kuchni, które są zarówno funkcjonalne, jak i estetyczne. Nasze kuchnie tworzone są z myślą o najwyższych standardach jakości i indywidualnych potrzebach naszych klientów.</p>
                              </div>

                              <div className="grid gap-20">
                                    <OfferItem
                                          image={KitchenImage1}
                                          title="Tworzone z pasji i precyzji"
                                          description="Każda kuchnia, którą tworzymy, jest wynikiem połączenia najwyższej jakości materiałów oraz precyzji wykonania. Dzięki temu możemy zapewnić naszym klientom meble, które nie tylko zachwycają swoim wyglądem, ale również są trwałe i praktyczne w codziennym użytkowaniu."
                                          reverse={false}
                                    />

                                    <OfferItem
                                          image={KitchenImage2}
                                          title="Dostosowane do Twoich potrzeb"
                                          description="W naszej ofercie znajdą Państwo różnorodne rozwiązania kuchenne, dopasowane do Państwa indywidualnych potrzeb i preferencji. Bez względu na styl, rozmiar czy układ przestrzenny, zadbamy o to, aby każdy detal był dopracowany, a kuchnia spełniała wszystkie oczekiwania."
                                          reverse={true}
                                    />
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default CustomKitchensOffer;
