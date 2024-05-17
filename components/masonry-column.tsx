'use client';


interface MasonryLayoutProps {
      images: string[];
      setCurrentIndex: (index: number) => void;
}

const MasonryColumn = ({ images, setCurrentIndex }: MasonryLayoutProps) => {

      const getFolderName = (path: string) => {
            const parts = path.split('/');
            return parts.length > 2 ? parts[parts.length - 2] : '';
      };

      const getTitle = (folderName: string) => {
            switch (folderName) {
                  case 'kuchnia':
                        return 'Kuchnie na wymiar';
                  case 'szafa':
                        return 'Szafy';
                  case 'meble':
                        return 'Meble z litego drewna';
                  case 'montaz':
                        return 'Montaż i renowacja mebli';
                  default:
                        return '';
            }
      };

      return (
            <div className="p-5 sm:p-8">
                  <div className="columns-2 gap-5 sm:gap-8 [&>div:not(:first-child)]:mt-8">
                        {images.map((image, index) => (
                              <div onClick={() => setCurrentIndex(index)} key={image} className="relative cursor-pointer group">
                                    <img
                                          key={image}
                                          src={image}
                                          alt=""
                                          className="w-full"
                                    />
                                    <div className="absolute inset-0 bg-chamolsee-200 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                          <span className="text-white text-xl font-bold">{getTitle(getFolderName(image))}</span>
                                    </div>

                              </div>
                        ))}
                  </div>
            </div>
      );
}

export default MasonryColumn;
