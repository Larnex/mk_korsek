'use client';

import ClosetImage1 from '@/public/images/closet-1.jpeg'; // Example image path
import ClosetImage2 from '@/public/images/closet-2.jpeg'; // Example image path
import { OfferItem } from './zigzag';

function CustomClosetsOffer() {
      return (
            <section>
                  <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                        <div className='py-12 md:py-20 border-t border-gray-800'>
                              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                    <h2 className='h2 mb-4'>
                                          Szafy
                                    </h2>
                                    <p className='text-xl text-gray-400'>
                                          Szafy wnękowe to doskonałe rozwiązanie dla tych, którzy pragną maksymalnie wykorzystać dostępną przestrzeń. Jako dostawca wysokiej jakości mebli na zamówienie, posiadamy bogate doświadczenie w projektowaniu i wytwarzaniu praktycznych zabudów wnękowych.
                                    </p>
                              </div>

                              <div className='grid gap-20'>
                                    <OfferItem
                                          image={ClosetImage1}
                                          title='Praktyczność i styl'
                                          description='Nasze szafy wnękowe są nie tylko praktyczne, ale także stanowią stylowy element wystroju wnętrza. Możemy dostosować je do różnych zastosowań, tworząc garderoby, szafy odzieżowe oraz miejsca do przechowywania różnego rodzaju akcesoriów.'
                                          reverse={false}
                                    />

                                    <OfferItem
                                          image={ClosetImage2}
                                          title='Dopasowane do Twoich potrzeb'
                                          description='Każdy projekt jest przez nas starannie dopracowany, z myślą o funkcjonalności, trwałości i estetyce. Dzięki naszemu doświadczeniu i pasji do tworzenia mebli na wymiar, możemy zagwarantować satysfakcję i zachwyt naszych klientów.'
                                          reverse={true}
                                    />
                              </div>
                        </div>
                  </div>
            </section>
      )
      //       <main className="bg-grey-900 text-white max-w-6xl mx-auto px-4 sm:px-6">
      //             <section className="py-12 px-4 text-center">
      //                   <h1 className="text-4xl font-bold mb-4">Oferta: Szafy</h1>
      //                   <p className="text-xl mb-6 mx-auto leading-relaxed max-w-4xl">
      //                         Szafy wnękowe to doskonałe rozwiązanie dla tych, którzy pragną maksymalnie wykorzystać dostępną przestrzeń. Jako dostawca wysokiej jakości mebli na zamówienie, posiadamy bogate doświadczenie w projektowaniu i wytwarzaniu praktycznych zabudów wnękowych.
      //                   </p>
      //             </section>

      //             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
      //                         <div data-aos="fade-up">
      //                               <Image src={ClosetImage1} alt="Custom Closet" className="  shadow-lg" />
      //                         </div>
      //                         <div data-aos="fade-right">
      //                               <h2 className="text-2xl font-semibold mb-4">Praktyczność i styl</h2>
      //                               <p className="text-lg">
      //                                     Nasze szafy wnękowe są nie tylko praktyczne, ale także stanowią stylowy element wystroju wnętrza. Możemy dostosować je do różnych zastosowań, tworząc garderoby, szafy odzieżowe oraz miejsca do przechowywania różnego rodzaju akcesoriów.
      //                               </p>
      //                         </div>
      //                   </div>

      //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:flex-row-reverse">

      //                         <div data-aos="fade-left">
      //                               <h2 className="text-2xl font-semibold mb-4">Dopasowane do Twoich potrzeb</h2>
      //                               <p className="text-lg">
      //                                     Każdy projekt jest przez nas starannie dopracowany, z myślą o funkcjonalności, trwałości i estetyce. Dzięki naszemu doświadczeniu i pasji do tworzenia mebli na wymiar, możemy zagwarantować satysfakcję i zachwyt naszych klientów.
      //                               </p>
      //                         </div>
      //                         <div data-aos="fade-down">
      //                               <Image src={ClosetImage2} alt="Elegant Closet" className="  shadow-lg" />
      //                         </div>

      //                   </div>
      //             </section>
      //       </main>
      // );
}

export default CustomClosetsOffer;
