import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
       {/* Background Image Abstract */}
       <div className="absolute inset-0 opacity-5">
         <img src="/assets/header_abstract.png" className="w-full h-full object-cover" alt="background" />
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-sans text-bee-teal font-bold uppercase tracking-widest text-sm mb-2 block">Hubungi Kami</span>
            <h2 className="font-serif text-5xl font-bold text-bee-dark mb-6">Mari Berkomunikasi</h2>
            <p className="font-sans text-bee-dark/60 mb-10 text-xl leading-relaxed">
              Ada pertanyaan tentang seminar? Hubungi panitia kami atau kunjungi sekretariat kami.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-bee-white p-4 rounded-2xl mr-6 text-bee-teal shadow-sm">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-bee-dark">Lokasi</h4>
                  <p className="font-sans text-bee-dark/60">Gedung G, Jurusan Proteksi Tanaman,Fakultas Pertanian, Universitas Lampung</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-bee-white p-4 rounded-2xl mr-6 text-bee-teal shadow-sm">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-bee-dark">Email</h4>
                  <p className="font-sans text-bee-dark/60">panitia.wbd2026@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-bee-teal/10 p-3 rounded-lg mr-4 text-bee-teal">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-bee-dark">Contact Person</h4>
                  <p className="text-gray-600">+62 853-7985-8585 (Dr. Puji Lestari)</p>
                  <p className="text-gray-600">+62 813-7352-5491 (Dr. Ivayani)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-xl">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.427774186538!2d105.25413031476468!3d-5.414864996073163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da4876b00001%3A0x5d93375815615712!2sHotel%20Horison%20Lampung!5e0!3m2!1sen!2sid!4v1625555555555!5m2!1sen!2sid" 
               width="100%" 
               height="450" 
               style={{border:0, borderRadius: '1rem'}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Map Location"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
