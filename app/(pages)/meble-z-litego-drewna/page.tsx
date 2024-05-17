import { HeaderImage } from "../../../components/header-image";
import Realizations from "../../../components/realizations";
import SolidWoodFurnitureOffer from "../../../components/solid-wood-furniture-offer";
import MainImage from '../../../public/images/header-image-3.jpg';

export const metadata = {
      title: 'MK Korsęk - Meble z litego drewna',
};

const images = [
      '/mk_korsek_optimized_images/meble/meble-1.jpeg',
      '/mk_korsek_optimized_images/meble/meble-2.jpeg',
];

export default function Meble() {
      return (
            <>
                  <HeaderImage image={MainImage} title="Meble z litego drewna" />

                  <SolidWoodFurnitureOffer />

                  <Realizations images={images} />
            </>
      );
}
