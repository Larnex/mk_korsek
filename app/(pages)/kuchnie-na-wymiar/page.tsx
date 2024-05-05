import { HeaderImage } from "../../../components/header-image";
import CustomKitchensOffer from "../../../components/kitchen-offer";
import MainImage from '../../../public/images/header-image.jpg';

export default function KitchenPage() {
      return (
            <>
                  <HeaderImage image={MainImage} title="Kuchnie na wymiar" />

                  <CustomKitchensOffer />
            </>
      )
}