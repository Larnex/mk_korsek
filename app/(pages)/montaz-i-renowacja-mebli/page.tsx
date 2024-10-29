import FurnitureServiceOffer from "@/components/furniture-service-offer";
import { HeaderImage } from "@/components/header-image";
import MainImage from '@/public/images/header-image-4.jpg';

export const metadata = {
      title: 'MK Korsęk - Montaż i renowacja mebli | Profesjonalny serwis',
      description: 'Profesjonalny montaż mebli oraz kompleksowa renowacja. Przywracamy blask starym meblom i montujemy nowe.',
};

export default function MontazIRenowacjaMebli() {
      return (
            <>
                  <HeaderImage image={MainImage} title="Montaż i renowacja mebli" />

                  <FurnitureServiceOffer />
            </>
      );
}
