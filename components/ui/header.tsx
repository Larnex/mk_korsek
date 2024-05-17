'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../../public/images/logo-removebg.png';

function Products() {
  return (
    <div>
      <div className="flex">
        <div>
          <a href="/kuchnie-na-wymiar" className="mb-5 block text-base hover:text-chamolsee-100 text-chamolsee-200">
            Kuchnie na wymiar
          </a>
          <a href="/szafy" className="mb-5 block text-base hover:text-chamolsee-100 text-chamolsee-200">
            Szafy
          </a>
          <a href="/meble-z-litego-drewna" className="mb-5 block text-base hover:text-chamolsee-100 text-chamolsee-200">
            Meble z litego drewna
          </a>
          <a href="/montaz-i-renowacja-mebli" className="block text-base hover:text-chamolsee-100 text-chamolsee-200">
            Montaż i renowacja mebli
          </a>
        </div>
      </div>
    </div>
  );
}

const Content = ({ selected, dir }: { selected: number | null; dir: string | null }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-80 border border-chamolsee-600 bg-gradient-to-br from-chamolsee-700 via-chamolsee-600 to-chamolsee-500 p-4"
    >
      <Bridge />
      <Nub selected={selected} />
      <div className="overflow-hidden">
        {selected === 1 && (
          <motion.div
            initial={{
              opacity: 0,
              x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <Products />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById('overlay-content');

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

function Bridge() {
  return <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />;
}

function Tab() {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<string | null>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l');
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div onMouseLeave={() => handleSetSelected(null)} className="relative flex h-fit gap-2">
      <button
        id={`shift-tab-1`}
        onMouseEnter={() => handleSetSelected(1)}
        onClick={() => handleSetSelected(selected === 1 ? null : 1)}
        className="hover:bg-chamolsee-200 p-1 sm:p-2 px-3 sm:px-5 rounded-md transition duration-500 ease-in-out text-chamolsee-100 hover:text-white text-xl sm:text-2xl font-semibold flex items-center sm:gap-1 gap-2"
      >
        <span>Oferta</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className={`transition-transform ${selected === 1 ? 'rotate-180' : ''} w-5 h-5 `}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <AnimatePresence>{selected && <Content selected={selected} dir={dir} />}</AnimatePresence>
    </div>
  );
}

export default function Header() {
  return (
    <header className="absolute w-full z-30 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4">
          <div className="flex items-center space-x-4">
            <Image src={Logo} className="h-28 w-28 
            sm:h-32 sm:w-32 cursor-pointer"
              placeholder="empty"
              quality={100}
              layout="fixed"
              objectFit="contain"
              objectPosition="center"
              alt="MK Korsęk - Meble na wymiar"
              title="MK Korsęk - Meble na wymiar
            "
              onClick={() => {
                window.location.href = '/';
              }}
            />
            <div className="flex flex-col sm:flex-col items-center sm:items-start text-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-4">
              <a href="mailto:mkkorsek@gmail.com" className="text-base font-medium text-chamolsee-100 hover:text-chamolsee-200 focus:text-chamolsee-200">
                mkkorsek@gmail.com
              </a>
              <a href="tel:+48505528266" className="text-base font-medium text-chamolsee-100 hover:text-chamolsee-200 focus:text-chamolsee-200">
                +48 505 528 266
              </a>
              <a href="tel:+48506898524" className="text-base font-medium text-chamolsee-100 hover:text-chamolsee-200 focus:text-chamolsee-200">
                +48 506 898 524
              </a>
            </div>
          </div>
          <div className="w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-gray-300 mt-2 sm:mt-0 sm:pl-4"></div>
          <nav className="w-full mt-2 sm:mt-0">
            <ul className="flex justify-center sm:justify-end items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-10">
              <button className="hover:bg-chamolsee-200 p-1 sm:p-2 px-3 sm:px-5 rounded-md transition duration-500 ease-in-out text-chamolsee-100 hover:text-white text-xl sm:text-2xl font-semibold">
                <li>
                  <Link href="/#about">O nas</Link>
                </li>
              </button>
              <Tab />
              <li>
                <button className="hover:bg-chamolsee-200 p-1 sm:p-2 px-3 sm:px-5 rounded-md transition duration-500 ease-in-out text-chamolsee-100 hover:text-white text-xl sm:text-2xl font-semibold">
                  <Link href="#contact">Kontakt</Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
