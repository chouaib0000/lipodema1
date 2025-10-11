import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
      <Globe size={18} className="text-gray-600 ml-2" />
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
          language === 'fr'
            ? 'bg-sky-600 text-white'
            : 'text-gray-600 hover:text-sky-600'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
          language === 'en'
            ? 'bg-sky-600 text-white'
            : 'text-gray-600 hover:text-sky-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
          language === 'es'
            ? 'bg-sky-600 text-white'
            : 'text-gray-600 hover:text-sky-600'
        }`}
      >
        ES
      </button>
    </div>
  );
}
