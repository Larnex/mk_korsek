'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import MasonryColumn from './masonry-column';



interface Props {
      images: string[];
}

const Realizations = ({ images }: Props) => {
      const [visibleImages, setVisibleImages] = useState(images.slice(0, 6));
      const [currentIndex, setCurrentIndex] = useState(-1);

      const loadMoreImages = () => {
            const newImages = images.slice(visibleImages.length, visibleImages.length + 6);
            setVisibleImages(prevImages => prevImages.concat(newImages));
      };

      const slides = images.map(item => ({
            src: item,
            width: 0,
            height: 0,
            srcSet: []
      }));

      return (
            <section>
                  <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="py-12 md:py-20 border-t border-gray-800">
                              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                    <h2 className="h2 mb-4">Nasze Realizacje</h2>
                              </div>
                              <MasonryColumn images={visibleImages} setCurrentIndex={setCurrentIndex} />
                              {visibleImages.length < images.length && (
                                    <div className="flex justify-center mt-8">
                                          <button
                                                className="bg-chamolsee-100 text-black px-6 py-2 rounded-md hover:bg-chamolsee-200 hover:text-white focus:outline-none"
                                                onClick={loadMoreImages}
                                          >
                                                Zobacz więcej
                                          </button>
                                    </div>
                              )}
                        </div>
                  </div>
                  <Lightbox
                        index={currentIndex}
                        open={currentIndex >= 0}
                        close={() => setCurrentIndex(-1)}
                        slides={slides}
                  />
            </section>
      );
};

export default Realizations;
