import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="w-full flex flex-col md:flex-row justify-between mb-8 md:mb-12">
            <div className="text-lg flex flex-col items-center group flex-grow min-w-[250px] mb-6 md:mb-0">
              <MdLocationOn className="mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
              <h6 className="font-medium mb-1">Adres</h6>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lecha+Bądkowskiego+17%2F2%2C+Gdańsk%2C+80-137"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-center"
              >
                Lecha Bądkowskiego 17/2,
                <br />
                Gdańsk, 80-137
              </a>
            </div>

            <div className="text-lg flex flex-col items-center group flex-grow min-w-[250px] mb-6 md:mb-0">
              <MdPhone className="mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
              <h6 className="font-medium mb-1">Telefon</h6>
              <div className="flex flex-col items-center">
                <a
                  href="tel:+48505528266"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +48 505 528 266
                </a>
                <a
                  href="tel:+48506898524"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +48 506 898 524
                </a>
              </div>
            </div>

            <div className="text-lg flex flex-col items-center group flex-grow min-w-[250px]">
              <MdEmail className="mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
              <h6 className="font-medium mb-1">E-mail</h6>
              <a
                href="mailto:mkkorsek@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                mkkorsek@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
