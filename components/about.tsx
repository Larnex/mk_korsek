import { FaHandshake, FaHome, FaTools, FaTree } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-6 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section 1: Introduction */}
          <Intro
            title="O nas"
            description="Jesteśmy rodzinną firmą z bogatym doświadczeniem w branży, specjalizującą się w dostarczaniu wysokiej jakości mebli na wymiar."
          />

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* Section 2: Our Offer */}
            <Feature
              icon={<FaHome size={40} className="text-chamolsee-300 mb-4" />}
              title="Nasza oferta"
              description="Nasza oferta obejmuje kuchnie na wymiar, szafy wnękowe, garderoby oraz meble z litego drewna, takie jak stoły, krzesła i komody."
              delay={100}
            />

            {/* Section 3: Handcrafted with love */}
            <Feature
              icon={<FaTree size={40} className="text-chamolsee-300 mb-4" />}
              title="Ręcznie wykonane z pasją"
              description="Co nas wyróżnia to fakt, że każdy nasz mebel jest tworzony od podstaw, ręcznie, co gwarantuje jego wyjątkowość i niepowtarzalny charakter."
              delay={200}
            />

            {/* Section 4: Our approach */}
            <Feature
              icon={<FaHandshake size={40} className="text-chamolsee-300 mb-4" />}
              title="Indywidualne podejście"
              description="Jako firma priorytetowo traktujemy indywidualne potrzeby naszych klientów, dlatego nasza oferta jest elastyczna i dostosowywana do ich oczekiwań."
              delay={300}
            />

            {/* Section 5: Services */}
            <Feature
              icon={<FaTools size={40} className="text-chamolsee-300 mb-4" />}
              title="Usługi"
              description="Dodatkowo, świadczymy usługi montażu oraz renowacji mebli na terenie Trójmiasta, co pozwala nam kompleksowo obsłużyć naszych klientów."
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Intro = ({ title, description }: { title: string, description: string }) => (
  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" >
    <h2 className="h2 mb-4">{title}</h2>
    <p className="text-xl text-gray-400">{description}</p>
  </div>
);

const Feature = ({ icon, title, description, delay }: {
  icon: React.ReactNode,
  title: string,
  description: string,
  delay: number
}) => (
  <div className="flex flex-col items-center mb-12" data-aos="fade-up" data-aos-delay={delay}>
    {icon}
    <h4 className="h4 mb-2">{title}</h4>
    <p className="text-lg text-gray-400 text-center">{description}</p>
  </div>
);

export default AboutUs;