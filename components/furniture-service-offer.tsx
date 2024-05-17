'use client';

import FurnitureServiceImage1 from "@/public/images/furniture-service-1.jpeg";
import FurnitureServiceImage2 from "@/public/images/furniture-service-2.jpeg";
import { OfferItem } from "./zigzag";


export default function FurnitureServiceOffer() {

      return (
            <section>
                  <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                        <div className='py-12 md:py-20 border-t border-gray-800'>
                              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                    <h2 className="h2 mb-4">Montaż i Renowacja Mebli</h2>
                                    <p className="text-xl text-gray-400">Odkryj naszą różnorodną gamę mebli na wymiar, dostosowanych do każdej przestrzeni i potrzeby.</p>
                              </div>

                              <div className="grid gap-20">
                                    <OfferItem
                                          image={FurnitureServiceImage1}
                                          title="Profesjonalny Montaż Mebli"
                                          description="Nasi wykwalifikowani pracownicy są przygotowani do obsługi różnorodnych projektów, zapewniając szybki czas realizacji oraz atrakcyjne ceny. Bez względu na rodzaj mebli czy skomplikowanie montażu, dbamy o to, aby każde zadanie zostało wykonane z najwyższą starannością i precyzją."
                                          reverse={false}
                                    />


                                    <OfferItem
                                          image={FurnitureServiceImage2}
                                          title="Renowacja Mebli"
                                          description="Oferujemy usługi renowacji mebli, przywracając im dawny blask i funkcjonalność. Dzięki naszej wiedzy i umiejętnościom, możemy odnowić nawet najstarsze meble, przywracając im nowe życie i estetyczny wygląd."
                                          reverse={true}
                                    />
                              </div>
                        </div>
                  </div>
            </section>
      )

      // return (
      //       <section>
      //             <div className="bg-grey-900 text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      //                   <section className="py-12 text-center">
      //                         <h1 className="text-3xl md:text-4xl font-bold mb-4">Montaż i Renowacja Mebli</h1>
      //                         <p className="text-xl mb-6 mx-auto leading-relaxed max-w-4xl">
      //                               Zapraszamy do skorzystania z naszych usług montażu mebli. Posiadamy szerokie doświadczenie w montażu mebli wielu popularnych marek, co gwarantuje profesjonalizm i wysoką jakość świadczonych przez nas usług
      //                         </p>
      //                   </section>


      //                   <div className="px-4 sm:px-6 lg:px-8">
      //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
      //                               <div data-aos="fade-up">
      //                                     <Image src={FurnitureService1} alt="Custom Kitchen" className="shadow-lg" width={600} height={400} />
      //                               </div>
      //                               <div data-aos="fade-right">
      //                                     <h2 className="text-2xl font-semibold mb-4">Profesjonalny Montaż Mebli</h2>
      //                                     <p className="text-lg">
      //                                           Nasi wykwalifikowani pracownicy są przygotowani do obsługi różnorodnych projektów, zapewniając szybki czas realizacji oraz atrakcyjne ceny. Bez względu na rodzaj mebli czy skomplikowanie montażu, dbamy o to, aby każde zadanie zostało wykonane z najwyższą starannością i precyzją.
      //                                     </p>
      //                               </div>
      //                         </div>

      //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
      //                               <div data-aos="fade-down">
      //                                     <Image src={FurnitureService2} alt="Elegant Kitchen" className="shadow-lg" width={600} height={400} />
      //                               </div>

      //                               <div data-aos="fade-left">
      //                                     <h2 className="text-2xl font-semibold mb-4">Renowacja Mebli</h2>
      //                                     <p className="text-lg">
      //                                           Oferujemy usługi renowacji mebli, przywracając im dawny blask i funkcjonalność. Dzięki naszej wiedzy i umiejętnościom, możemy odnowić nawet najstarsze meble, przywracając im nowe życie i estetyczny wygląd.
      //                                     </p>
      //                               </div>
      //                         </div>
      //                   </div>

      //             </div>
      //       </section>
      // );
}

