import { Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="py-20 bg-gradient-to-br from-sky-600 to-sky-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl mb-12 opacity-90">
            {t('contactDescription')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="tel:+212522398689"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition group"
            >
              <Phone size={40} className="mx-auto mb-4 group-hover:scale-110 transition" />
              <h2 className="font-bold text-lg mb-2">{t('phone')}</h2>
              <p className="text-white/90">05223-98689</p>
            </a>

            <a
              href="https://wa.me/212661050523"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition group"
            >
              <MessageCircle size={40} className="mx-auto mb-4 group-hover:scale-110 transition" />
              <h2 className="font-bold text-lg mb-2">{t('whatsapp')}</h2>
              <p className="text-white/90">+212 661-050523</p>
            </a>

            <a
              href="mailto:contact@lipoedem.ma"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition group"
            >
              <Mail size={40} className="mx-auto mb-4 group-hover:scale-110 transition" />
              <h2 className="font-bold text-lg mb-2">{t('email')}</h2>
              <p className="text-white/90">contact@lipoedem.ma</p>
            </a>

            <a
              href="https://www.facebook.com/lipedem"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition group"
            >
              <Facebook size={40} className="mx-auto mb-4 group-hover:scale-110 transition" />
              <h2 className="font-bold text-lg mb-2">{t('facebook')}</h2>
              <p className="text-white/90">@lipedem</p>
            </a>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <MapPin size={40} className="mx-auto mb-4" />
              <h2 className="font-bold text-lg mb-2">{t('address')}</h2>
              <p className="text-white/90">
                5 boulevard Abdellatif Benqaddour<br />
                Racine, Casablanca<br />
                Morocco
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('openingHours')}</h2>
            <div className="space-y-2 text-white/90">
              <p>{t('mondayFriday')}</p>
              <p>{t('saturday')}</p>
              <p>{t('sunday')}</p>
            </div>
          </div>

          <button
            onClick={() => window.location.href = 'mailto:contact@lipoedem.ma'}
            className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-lg"
          >
            {t('bookNow')}
          </button>

          <div className="mt-12 text-white/80 text-sm">
            <p>{t('internationalPatients')}</p>
            <p className="mt-2">{t('medicalStayInfo')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
