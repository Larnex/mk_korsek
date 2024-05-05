'use client';

import { useEffect } from 'react';
import ContactForm from "../../components/newsletter";
import Footer from "../../components/ui/footer";


import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PagesLayout({ children }: { children: React.ReactNode }) {

      useEffect(() => {
            AOS.init({
                  duration: 600,
                  once: false,
                  easing: 'ease-out-sine',
            });
      });

      return (
            <>
                  <main className="grow">
                        {children}
                  </main>
                  <ContactForm />
                  <Footer />
            </>

      );
}