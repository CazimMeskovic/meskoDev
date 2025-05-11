import React from 'react';

const HomePage = () => {
  return (
    <main className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Hero sekcija */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-xl"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Dobrodošli na <span className="text-blue-400">Meško Development</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Kreiramo budućnost web iskustava koristeći najnoviju tehnologiju.
          </p>
           <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg">
            Započni sada
          </button> 
   {/*        <div className="text-center py-10">
  <button className="relative px-6 py-3 text-white font-semibold rounded-lg bg-gray-800 overflow-hidden group">
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-sm opacity-50 group-hover:opacity-100 transition duration-300"></span>
    <span className="relative"> Započni sada</span>
  </button>
</div> */}
        </div>
      </section>

      {/* O meni sekcija */}
      <section className="py-20 px-8 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-6">O meni</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg text-center">
          Zovem se Meško i bavim se razvojem modernih web aplikacija koristeći najnovije tehnologije kao što su React, Next.js, Node.js, Tailwind CSS i druge.
          Moj cilj je stvarati funkcionalne, brze i vizuelno impresivne sajtove koji zadovoljavaju stvarne potrebe korisnika.
        </p>
      </section>

      {/* Moji ciljevi sekcija */}
      <section className="py-20 px-8 bg-gradient-to-r from-gray-800 to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Moji ciljevi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400">Kontinuirano učenje</h3>
            <p className="text-gray-400 mt-2">Uvijek težim učenju novih tehnologija i poboljšanju postojećih vještina.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-lime-400">Zadovoljni klijenti</h3>
            <p className="text-gray-400 mt-2">Cilj mi je isporučiti rješenja koja korisnicima olakšavaju svakodnevni rad.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-pink-400">Kvalitetan kod</h3>
            <p className="text-gray-400 mt-2">Pišem čitljiv, skalabilan i održiv kod koji olakšava budući razvoj i nadogradnju.</p>
          </div>
        </div>
      </section>

      {/* Usluge sekcija */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Naše usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-blue-400">Web razvoj</h3>
            <p className="mt-2 text-gray-400">Izrada responzivnih i modernih web stranica prilagođenih vašim potrebama.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-purple-400">Razvoj aplikacija</h3>
            <p className="mt-2 text-gray-400">Kreiranje jednostavnih i korisnički prilagođenih mobilnih i web aplikacija.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-green-400">Održavanje</h3>
            <p className="mt-2 text-gray-400">Brinemo da vaša digitalna rješenja uvijek budu ažurirana i sigurna.</p>
          </div>
        </div>
      </section>

      {/* Portfolio sekcija */}
      <section className="py-20 px-8 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Naš portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="/portfolio1.jpg" alt="Projekat 1" className="w-full h-40 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Projekat 1</h3>
            <p className="mt-2 text-gray-400">Inovativni projekat koji je redefinisao korisničko iskustvo.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="/portfolio2.jpg" alt="Projekat 2" className="w-full h-40 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Projekat 2</h3>
            <p className="mt-2 text-gray-400">Napredno rješenje za savremene biznise.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="/portfolio3.jpg" alt="Projekat 3" className="w-full h-40 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Projekat 3</h3>
            <p className="mt-2 text-gray-400">Kreativan pristup digitalnoj transformaciji.</p>
          </div>
        </div>
      </section>

      {/* Klijentske recenzije */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Šta kažu naši klijenti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="text-gray-400">"Meško Development je našu viziju pretvorio u stvarnost. Topla preporuka!"</p>
            <h4 className="mt-4 text-lg font-semibold text-blue-400">- Klijent A</h4>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="text-gray-400">"Njihovo znanje i posvećenost su neuporedivi. Bilo je zadovoljstvo raditi s njima!"</p>
            <h4 className="mt-4 text-lg font-semibold text-purple-400">- Klijent B</h4>
          </div>
        </div>
      </section>

      {/* Tehnologije koje koristim */}
      <section className="py-20 px-8 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">Tehnologije koje koristim</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-lg font-semibold text-gray-300">
          <div className="hover:text-blue-400 transition">Next.js</div>
          <div className="hover:text-purple-400 transition">React</div>
          <div className="hover:text-yellow-400 transition">TypeScript</div>
          <div className="hover:text-pink-400 transition">Tailwind CSS</div>
          <div className="hover:text-green-400 transition">Node.js</div>
          <div className="hover:text-teal-400 transition">MongoDB</div>
          <div className="hover:text-indigo-400 transition">Framer Motion</div>
          <div className="hover:text-red-400 transition">Git & GitHub</div>
        </div>
      </section>

      {/* Brza statistika */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Brza statistika</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-blue-500">20+</p>
            <p className="text-gray-400">Završenih projekata</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-green-500">15</p>
            <p className="text-gray-400">Zadovoljnih klijenata</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-yellow-500">3</p>
            <p className="text-gray-400">Godine iskustva</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-pink-500">100%</p>
            <p className="text-gray-400">Zadovoljstvo klijenata</p>
          </div>
        </div>
      </section>

      {/* Preuzmi CV */}
      <section className="py-20 px-8 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-6">Preuzmi moj CV</h2>
        <a
          href="/cv.pdf"
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Preuzmi CV
        </a>
      </section>
{/* Promo Kutije */}
<section className="px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="group relative p-6 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-[0_0_20px_#00f2ff] transition duration-300 hover:scale-105">
    <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition">Next.js Projekat</h3>
    <p className="text-gray-400 mt-2">Moćna full-stack aplikacija napravljena pomoću Next.js 14</p>
  </div>
  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition duration-300 transform hover:-translate-y-2 hover:rotate-1">
    <h4 className="text-white text-xl font-bold">Moderno Korisničko Sučelje</h4>
    <p className="text-gray-400 mt-2">Izgrađeno uz pomoć Tailwind CSS-a i animacija</p>
  </div>
</section>

{/* Zašto izabrati mene */}
<section className="relative bg-gray-950 py-20 px-6">
  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-10 max-w-4xl mx-auto shadow-2xl">
    <h2 className="text-3xl font-bold mb-4 text-white">Zašto izabrati mene?</h2>
    <p className="text-gray-300">
      Futuristički dizajn, moderni alati i developer kojem je stalo do performansi i stila.
    </p>
  </div>
</section>

{/* Dugme za akciju */}
<div className="text-center py-10">
  <button className="relative px-6 py-3 text-white font-semibold rounded-lg bg-gray-800 overflow-hidden group">
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-sm opacity-50 group-hover:opacity-100 transition duration-300"></span>
    <span className="relative">Kontaktiraj me</span>
  </button>
</div>

{/* Kontakt Sekcija */}
<section className="py-20 px-8 bg-gray-900">
  <h2 className="text-4xl font-bold text-center mb-12">Kontaktiraj me</h2>
  <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-400">Ime</label>
      <input type="text" id="name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
      <input type="email" id="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-400">Poruka</label>
{/*       <textarea id="message" rows="4" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
 */}    </div>
    <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
      Pošalji poruku
    </button>
  </form>
</section>


    </main>
  );
};

export default HomePage;
