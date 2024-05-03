import React from 'react';
import HeaderImage from '../public/images/header-image.jpg';
import HeaderImage2 from '../public/images/header-image-2.jpg';
import HeaderImage3 from '../public/images/header-image-3.jpg';
import HeaderImage4 from '../public/images/header-image-4.jpg';
import Image from 'next/image';
import { Button, Carousel, Typography } from '@material-tailwind/react';

export default function PageIllustration() {
  return (
    <Carousel
      className="rounded-xl h-screen"
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {[HeaderImage, HeaderImage2, HeaderImage3, HeaderImage4].map((src, index) => (
        <div key={index} className="relative h-full w-full">
          <Image src={src} alt={`image ${index + 1}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="h1" color="white" className="mb-4 text-2xl md:text-4xl lg:text-6xl">
                {index === 0 && 'Kuchnie na wymiar'}
                {index === 1 && 'Szafy'}
                {index === 2 && 'Meble z litego drewna'}
                {index === 3 && 'Montaż i renowacja mebli'}
              </Typography>
              <div className="flex flex-col sm:flex-row justify-center gap-2 px-4 sm:px-0">
                <Button size="lg" color="white" className="w-5/6 sm:w-auto mx-auto">
                  Dowiedz się więcej
                </Button>
                <Button size="lg" color="white" variant="text" className="w-5/6 sm:w-auto mx-auto">
                  Galeria
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
