export const metadata = {
  title: 'MK Korsęk - Meble na wymiar',
  description: 'Page description',
};

import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';
import AboutUs from '../../components/about';
import Realizations from '../../components/realizations';

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <AboutUs />
      <Zigzag />
      <Realizations />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  );
}
