import { HeaderImage } from "../../../components/header-image";
import SolidWoodFurnitureOffer from "../../../components/solid-wood-furniture-offer";
import MainImage from '../../../public/images/header-image-3.jpg';

export const metadata = {
      title: 'MK Korsęk - Meble z litego drewna',
      description: 'Page description',
};

export default function Szafy() {
      return (
            <>
                  <HeaderImage image={MainImage} title="Meble z litego drewna" />

                  <SolidWoodFurnitureOffer />
            </>
      );
}
