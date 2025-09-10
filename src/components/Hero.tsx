import React from 'react';


function Hero() {
  return (
    <div>
      <section className='flex flex-col justify-center items-center '>
        <img src="./perfil_gris.webp" alt="Perfil" className='h-80 rounded-full object-cover opacity-80 border-2 border-gray-300 shadow-lg p-4 mt-20 ransition-transform duration-300 ease-in-out hover:scale-105'/>
       <div className='text-stone-100 font-poppins flex flex-col justify-center items-center '>
        <h1 className='text-4xl font-bold shadow-sm mt-4 p-4'>Gabriel Caldubehere</h1>
        <p className='text-2xl font-light mt-2 p-2'>
          Desarrollador Junior Front-End
          </p>
          </div>
            <div className='flex space-x-4 mt-4 mb-10 gap-4'>
              {/* Instagram Button with official gradient and logo */}
              <a
              href="https://instagram.com/gabriel.caldu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #fdc468 0%, #fa7e1e 40%, #d62976 70%, #962fbf 100%)'
              }}
              >
              <svg
                width="32"
                height="32"
                viewBox="0 0 448 448"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                <linearGradient id="insta-gradient" x1="0" y1="0" x2="448" y2="448" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fdc468"/>
                  <stop offset="0.4" stopColor="#fa7e1e"/>
                  <stop offset="0.7" stopColor="#d62976"/>
                  <stop offset="1" stopColor="#962fbf"/>
                </linearGradient>
                </defs>
                <rect width="448" height="448" rx="224" fill="url(#insta-gradient)" />
                <path
                d="M224 144c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 132c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52zm85.6-136c0 10.6-8.6 19.2-19.2 19.2s-19.2-8.6-19.2-19.2 8.6-19.2 19.2-19.2 19.2 8.6 19.2 19.2zm49.6 19.2c-1.1-23.9-6.5-45.1-23.7-62.3S295.9 49.5 272 48.4c-24-1.1-94-1.1-118 0-23.9 1.1-45.1 6.5-62.3 23.7S49.5 152.1 48.4 176c-1.1 24-1.1 94 0 118 1.1 23.9 6.5 45.1 23.7 62.3s38.4 22.6 62.3 23.7c24 1.1 94 1.1 118 0 23.9-1.1 45.1-6.5 62.3-23.7s22.6-38.4 23.7-62.3c1.1-24 1.1-94 0-118zm-36.2 143.6c-7.8 19.6-22.9 34.7-42.5 42.5-29.5 11.7-99.5 9-132.8 0-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.5-9-99.5 0-132.8 7.8-19.6 22.9-34.7 42.5-42.5 29.5-11.7 99.5-9 132.8 0 19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.5 9 99.5 0 132.8z"
                fill="#fff"
                />
              </svg>
              </a>
              {/* Linkedin Button */}
              <a
              href="https://linkedin.com/in/gabrielcaldubehere"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)'
              }}
              >
              <svg width="32" height="32" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="448" height="448" rx="224" fill="#0077b5"/>
                <path d="M120 160h48v160h-48V160zm24-56c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zm56 56h46v22h.7c6.4-12.1 22-24.8 45.3-24.8 48.5 0 57.5 31.9 57.5 73.3V320h-48v-66.7c0-15.9-.3-36.3-22.1-36.3-22.1 0-25.5 17.2-25.5 35v68h-48V160z" fill="#fff"/>
              </svg>
              </a>
              {/* Github Button */}
              <a
              href="https://github.com/gabrielcaldubehere"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #333 0%, #6e5494 100%)'
              }}
              >
              <svg width="32" height="32" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="448" height="448" rx="224" fill="#333"/>
                <path d="M224 80c-79.5 0-144 64.5-144 144 0 63.6 41.2 117.6 98.3 136.7 7.2 1.3 9.8-3.1 9.8-6.9 0-3.4-.1-12.3-.2-24.1-40 8.7-48.4-19.3-48.4-19.3-6.6-16.7-16.1-21.2-16.1-21.2-13.2-9 1-8.8 1-8.8 14.6 1 22.3 15 22.3 15 13 22.3 34.1 15.9 42.4 12.2 1.3-9.4 5.1-15.9 9.3-19.6-32-3.6-65.6-16-65.6-71.3 0-15.8 5.6-28.7 14.8-38.8-1.5-3.6-6.4-18.2 1.4-37.9 0 0 12-3.8 39.3 14.8 11.4-3.2 23.6-4.8 35.8-4.8s24.4 1.6 35.8 4.8c27.3-18.6 39.3-14.8 39.3-14.8 7.8 19.7 2.9 34.3 1.4 37.9 9.2 10.1 14.8 23 14.8 38.8 0 55.5-33.7 67.6-65.8 71.2 5.2 4.5 9.8 13.4 9.8 27.1 0 19.6-.2 35.4-.2 40.2 0 3.8 2.6 8.2 9.9 6.8C326.8 341.6 368 287.6 368 224c0-79.5-64.5-144-144-144z" fill="#fff"/>
              </svg>
              </a>
              {/* Descargar CV Button */}
              <a
              href="/cv.pdf"
              download
              className="px-6 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105 font-semibold text-stone-100"
              style={{
                background: 'linear-gradient(135deg, #334155 0%, #64748b 100%)',
                border: 'none'
              }}
              >
              Descargar CV
              </a>
            </div>
       
       </section>
      
    </div>
  )
}

export default Hero
