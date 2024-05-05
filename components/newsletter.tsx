"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  // State for input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Submitted values:', { name, email, phone, message });
    // Here you might want to add the logic to send data to a server
  };

  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-chamolsee-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            {/* Background illustration SVG here */}
          </div>
          <div className="relative flex flex-col lg:flex-col justify-between items-center">
            <div className="mb-6 lg:mb-6 text-center lg:text-left lg:w-1/2 w-full">
              <h3 className="h3 text-white mb-2 ">Kontakt</h3>
              <p className="text-chamolsee-200 text-lg">Serdecznie zapraszamy do kontaktu z nami telefonicznie lub mailowo, aby omówić szczegóły naszej oferty. Z przyjemnością odpowiemy na wszystkie pytania.</p>
            </div>
            <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
              <div className="max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <div className='mb-6'>
                  <input
                    type="text"
                    className="w-full appearance-none bg-chamolsee-700 border border-chamolsee-500 focus:border-chamolsee-300 rounded-sm px-4 py-3 sm:mb-0 sm:mr-2 text-white placeholder-chamolsee-400"
                    placeholder="Imię i nazwisko"
                    aria-label="Imię i nazwisko"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-6'>

                  <input
                    type="email"
                    className="w-full appearance-none bg-chamolsee-700 border border-chamolsee-500 focus:border-chamolsee-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-chamolsee-400"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-6'>

                  <input
                    type="tel"
                    className="w-full appearance-none bg-chamolsee-700 border border-chamolsee-500 focus:border-chamolsee-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-chamolsee-400"
                    placeholder="Telefon"
                    aria-label="Telefon"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className='mb-6'>

                  <textarea
                    className="w-full appearance-none bg-chamolsee-700 border border-chamolsee-500 focus:border-chamolsee-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-chamolsee-400"
                    placeholder="Wiadomość"
                    aria-label="Wiadomość"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  ></textarea>
                </div>
                <div className='mt-6'>
                  <button
                    type="submit"
                    className="btn text-chamolsee-600 bg-chamolsee-100 hover:bg-white shadow mt-6 sm:mt-0 sm:ml-2"
                  >
                    Wyślij
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
