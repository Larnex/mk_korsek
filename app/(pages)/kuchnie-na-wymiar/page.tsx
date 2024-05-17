import { HeaderImage } from "../../../components/header-image";
import CustomKitchensOffer from "../../../components/kitchen-offer";
import Realizations from "../../../components/realizations";
import MainImage from '../../../public/images/header-image.jpg';


const images = [
      '/mk_korsek_optimized_images/kuchnia/kuchnia-1.jpeg',
      '/mk_korsek_optimized_images/kuchnia/kuchnia-2.jpeg',
      '/mk_korsek_optimized_images/kuchnia/kuchnia-3.jpeg',
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


export default function KitchenPage() {
      return (
            <>
                  <HeaderImage image={MainImage} title="Kuchnie na wymiar" />

                  <CustomKitchensOffer />

                  <Realizations images={images} />
            </>
      )
}