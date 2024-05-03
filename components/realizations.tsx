import MasonryColumn from "./masonry-column";

const images = [
      'https://source.unsplash.com/random/900x600',
      'https://source.unsplash.com/random/900x700',
      'https://source.unsplash.com/random/900x500',
      'https://source.unsplash.com/random/900x600',
      'https://source.unsplash.com/random/900x800',
      'https://source.unsplash.com/random/900x500',
];

const Realizations = () => {

      return (
            <section>
                  <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="py-12 md:py-20 border-t border-gray-800">
                              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                    <h2 className="h2 mb-4">Nasze Realizacje</h2>

                              </div>
                              <MasonryColumn images={images} />
                        </div>
                  </div>
            </section>
      )
}

export default Realizations;