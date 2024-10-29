export const metadata = {
  title: 'MK Korsęk - Meble na wymiar | Strona główna',
  description: 'Profesjonalna firma stolarska specjalizująca się w produkcji mebli na wymiar. Oferujemy kuchnie, szafy i meble z litego drewna.',
};

import Newsletter from '@/components/contact-form';
import Zigzag from '@/components/zigzag';
import AboutUs from '../../components/about';
import Realizations from '../../components/realizations';

const images = [
  '/mk_korsek_optimized_images/kuchnia/kuchnia-1.jpeg',
  '/mk_korsek_optimized_images/meble/meble-1.jpeg',
  '/mk_korsek_optimized_images/szafa/szafa-1.png',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-2.jpeg',
  '/mk_korsek_optimized_images/meble/meble-2.jpeg',
  '/mk_korsek_optimized_images/szafa/szafa-2.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-3.jpeg',
  '/mk_korsek_optimized_images/szafa/szafa-3.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-4.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-5.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-6.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-7.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-8.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-9.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-10.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-11.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-12.jpeg',
  '/mk_korsek_optimized_images/kuchnia/kuchnia-13.jpeg',
];

export default function Home() {
  return (
    <>
      <AboutUs />
      <Zigzag />
      <Realizations images={images} />
      <Newsletter />
    </>
  );
}
