"use client";

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'

interface MasonryLayoutProps {
      images: string[];
}

const MasonryColumn = ({ images }: MasonryLayoutProps) => {
      const [currentIndex, setCurrentIndex] = useState(-1);

      const slides = images.map(item => ({
            src: item,
            width: 0,
            height: 0,
            srcSet: []
      }));

      // Split items into chunks for columns
      const columnWrapper = (items: string[], columns: number) => {
            return new Array(columns).fill("").map((_, i) => items.filter((_, index) => index % columns === i));
      };

      const columns = columnWrapper(images, 2);

      return (
            <>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                        {columns.map((colItems, idx) => (
                              <div key={idx} className="cursor-pointer grid gap-4">
                                    {colItems.map((item, index) => (
                                          <div key={index} onClick={() => {
                                                setCurrentIndex(images.indexOf(item));
                                          }}>
                                                <img src={item} alt={`Masonry item ${index}`} className="h-auto max-w-full" />
                                          </div>
                                    ))}
                              </div>
                        ))}
                  </div>

                  <Lightbox
                        index={currentIndex}
                        open={currentIndex >= 0}
                        close={() => setCurrentIndex(-1)}
                        slides={slides}
                  />

            </>
      );
};

export default MasonryColumn;
