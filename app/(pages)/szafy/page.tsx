import CustomClosetsOffer from "../../../components/closet-offer";
import { HeaderImage } from "../../../components/header-image";
import MainImage from '../../../public/images/header-image-2.jpg';

export const metadata = {
      title: 'MK Korsęk - Szafy',
      description: 'Page description',
};

export default function Szafy() {
      return (
            <>
                  <HeaderImage image={MainImage} title="Szafy" />

                  <CustomClosetsOffer />
            </>
      );
}
