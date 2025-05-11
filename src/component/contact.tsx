'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
  company: string;
  website: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    company: '',
    website: '',
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // CAPTCHA provjera (ako je aktivna)
    // if (!captchaToken) {
    //   alert('Molimo vas da potvrdite da niste robot.');
    //   return;
    // }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, token: captchaToken }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          company: '',
          website: '',
        });
        setCaptchaToken(null);
      } else {
        console.error('Greška na serveru:', await res.text());
        setStatus('error');
      }
    } catch (err) {
      console.error('Greška prilikom slanja:', err);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Kontaktirajte nas</h2>
      <form
        onSubmit={handleSubmit}
        className="relative max-w-2xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl shadow-2xl transition-transform hover:scale-[1.01]"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1">
            Ime
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            placeholder="Unesi svoje ime"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            placeholder="tvoj@email.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1">
            Poruka
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            placeholder="Napiši poruku..."
          ></textarea>
        </div>

        {/* Honeypot polja (ne prikazuju se korisniku) */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="hidden"
        />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="hidden"
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-lg transition duration-300 shadow-lg"
        >
          {status === 'loading' ? 'Slanje...' : 'Pošalji poruku'}
        </button>

        {status === 'success' && (
          <p className="mt-4 text-green-400 text-center">Poruka uspješno poslana!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 text-center">Došlo je do greške. Pokušajte ponovo.</p>
        )}
      </form>
    </section>
  );
}
