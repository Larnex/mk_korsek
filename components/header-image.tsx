import Image, { StaticImageData } from 'next/image';

interface Props {
      image: StaticImageData;
      title: string
}

export const HeaderImage = ({ image, title }: Props) => {
      return (
            <div className="relative h-96">
                  <Image
                        src={image}
                        alt="header image"
                        layout="fill"
                        objectFit="cover"
                  />
                  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50" />
            </div>

      )

}