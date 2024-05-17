import CustomClosetsOffer from "../../../components/closet-offer";
import { HeaderImage } from "../../../components/header-image";
import Realizations from "../../../components/realizations";
import MainImage from '../../../public/images/header-image-2.jpg';

export const metadata = {
      title: 'MK Korsęk - Szafy',
};

const images = [
      '/mk_korsek_optimized_images/szafa/szafa-1.png',
      '/mk_korsek_optimized_images/szafa/szafa-2.jpeg',
      '/mk_korsek_optimized_images/szafa/szafa-3.jpeg',
];


export default function Szafy() {
      return (
            <>
                  <HeaderImage image={MainImage} title="Szafy" />

                  <CustomClosetsOffer />

                  <Realizations images={images} />
            </>
      );
}
