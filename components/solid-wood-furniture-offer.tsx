'use client';

import SolidWoodImage1 from '../public/images/solid-wood-1.jpeg'; // Example image path
import SolidWoodImage2 from '../public/images/solid-wood-2.jpeg'; // Example image path
import { OfferItem } from './zigzag';

export default function SolidWoodFurnitureOffer() {
      return (
            <section>
                  <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="py-12 md:py-20 border-t border-gray-800">
                              {/* Section header */}
                              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                    <h2 className="h2 mb-4">Meble z litego drewna</h2>
                                    <p className="text-xl text-gray-400">Odkryj naszą różnorodną gamę mebli z litego drewna, dostosowanych do każdej przestrzeni i potrzeby.</p>
                              </div>
                              <div className='grid gap-20'>
                                    {/* Offer Items */}
                                    <OfferItem
                                          image={SolidWoodImage1}
                                          title="Komody i stoły"
                                          description="Nasze komody i stoły to nie tylko funkcjonalne elementy wyposażenia, ale także eleganckie akcenty, które dodają charakteru każdemu wnętrzu."
                                          reverse={false}
                                    />
                                    <OfferItem
                                          image={SolidWoodImage2}
                                          title="Unikalne cechy drewna"
                                          description="Dzięki unikalnym cechom drewna, każdy nasz mebel jest niepowtarzalny i posiada indywidualny urok. Dbamy o detale, starannie wykańczając każdy element."
                                          reverse={true}
                                    />
                              </div>
                        </div>

                  </div>
            </section>
      )
}

