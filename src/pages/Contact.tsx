import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Navigation, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE, mapsEmbed, mapsLink, whatsappLink } from '../config/site';
import { WhatsAppIcon } from '../components/MobileActionBar';

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = `Bonjour, je suis ${name || '…'}${city ? ` (${city})` : ''}. ${message || 'Je souhaite prendre rendez-vous pour une consultation lipœdème.'}`;
    window.open(whatsappLink(text), '_blank', 'noopener');
  };

  return (
    <>
      <section className="bg-mist border-b border-rose-100">
        <div className="container mx-auto py-14 lg:py-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow-rule" />
            <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl">
              Rendez-vous au centre du lipœdème à Casablanca
            </h1>
            <p className="mt-6 max-w-prose text-lg text-ink/75">{t('contactDescription')}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a href={`tel:${SITE.phone.e164}`} className="btn-primary w-full"><Phone size={18} /> {SITE.phone.display}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full"><WhatsAppIcon /> WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-14 lg:py-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl lg:text-4xl">Coordonnées</h2>
          <address className="not-italic mt-8 divide-y divide-rose-100 border-y border-rose-100">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-4 py-5 group">
              <MapPin className="mt-1 shrink-0 text-rose-600" size={22} />
              <span>
                <span className="block font-semibold">{t('address')}</span>
                <span className="block text-ink/75">{SITE.address.street}<br />{SITE.address.district}, {SITE.address.postalCode} {SITE.address.city}, Maroc</span>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-rose-700 group-hover:underline"><Navigation size={14} /> Itinéraire Google Maps</span>
              </span>
            </a>
            <a href={`tel:${SITE.phone.e164}`} className="flex gap-4 py-5">
              <Phone className="mt-1 shrink-0 text-rose-600" size={22} />
              <span><span className="block font-semibold">{t('phone')}</span><span className="text-ink/75">{SITE.phone.display}</span></span>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-4 py-5">
              <span className="mt-1 shrink-0 text-[#1FA855]"><WhatsAppIcon /></span>
              <span><span className="block font-semibold">{t('whatsapp')}</span><span className="text-ink/75">{SITE.whatsapp.display}</span></span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex gap-4 py-5">
              <Mail className="mt-1 shrink-0 text-rose-600" size={22} />
              <span><span className="block font-semibold">{t('email')}</span><span className="text-ink/75">{SITE.email}</span></span>
            </a>
            <div className="flex gap-4 py-5">
              <Clock className="mt-1 shrink-0 text-rose-600" size={22} />
              <span>
                <span className="block font-semibold">{t('openingHours')}</span>
                <span className="block text-ink/75">{t('mondayFriday')}</span>
                <span className="block text-ink/75">{t('saturday')}</span>
                <span className="block text-ink/75">{t('sunday')}</span>
              </span>
            </div>
          </address>

          <div className="mt-8 flex gap-4 rounded-3xl bg-rose-50 p-6">
            <Globe2 className="mt-1 shrink-0 text-rose-600" size={22} />
            <div className="text-ink/80">
              <p className="font-semibold text-ink">Vous venez d’une autre ville ou de l’étranger ?</p>
              <p className="mt-1 text-[15px]">
                Le centre reçoit des patientes de Rabat, Marrakech, Tanger, Fès, Agadir et de l’étranger. Envoyez vos questions et quelques photos par WhatsApp pour un premier avis, puis nous organisons la consultation et votre séjour à Casablanca.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl lg:text-4xl">Demande de rendez-vous</h2>
          <p className="mt-3 text-ink/70">Votre message s’ouvre dans WhatsApp, prêt à être envoyé au centre.</p>
          <form onSubmit={send} className="mt-8 grid gap-4">
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">Nom et prénom</span>
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required
                className="h-12 rounded-2xl border border-rose-200 bg-white px-4 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200" />
            </label>
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">Ville</span>
              <input value={city} onChange={(e) => setCity(e.target.value)} autoComplete="address-level2" placeholder="Casablanca, Rabat, Paris…"
                className="h-12 rounded-2xl border border-rose-200 bg-white px-4 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200" />
            </label>
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">Votre message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="Zones concernées, questions, disponibilités…"
                className="rounded-2xl border border-rose-200 bg-white px-4 py-3 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200" />
            </label>
            <button type="submit" className="btn-whatsapp w-full sm:w-auto sm:justify-self-start"><WhatsAppIcon /> Envoyer sur WhatsApp</button>
          </form>

          <div className="mt-12 overflow-hidden rounded-3xl border border-rose-100 aspect-[4/3]">
            <iframe
              title="Plan d’accès – Centre Lipœdème Maroc, Casablanca"
              src={mapsEmbed}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <p className="container mx-auto pb-14 text-sm text-ink/60">
        {t('internationalPatients')} {t('medicalStayInfo')}
      </p>
    </>
  );
}
