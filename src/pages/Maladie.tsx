import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Maladie() {
  const { t } = useLanguage();
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t('maladieTitle')}
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img
                src="/2027/3.jpeg"
                alt="Lipœdème"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img
                src="/2027/4.jpeg"
                alt="Lipœdème traitement"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t('whatIsLipoedema')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('whatIsLipoedemaText1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('whatIsLipoedemaText2')}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t('whatAreCauses')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('causesIntro')}
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-sky-600 mb-3">1. {t('geneticPredisposition')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('geneticText')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-sky-600 mb-3">2. {t('hormonalInfluence')}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t('hormonalText')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{t('puberty')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{t('pregnancy')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{t('postPartum')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{t('menopause')}</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {t('hormonalConcluion')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-sky-600 mb-3">3. {t('circulatoryDisorders')}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t('circulatoryText')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{t('venousInsufficiency')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{t('lymphedema')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{t('capillaryFragility')}</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {t('circulatoryConclusion')}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t('howToRecognize')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('recognizeIntro')}
            </p>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 rounded-xl mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">✓</span>
                  <span>{t('symmetricSwelling')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">✓</span>
                  <span>{t('spontaneousPain')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">✓</span>
                  <span>{t('unusualSensitivity')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">✓</span>
                  <span>{t('bruising')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">✓</span>
                  <span>{t('heavyLegs')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">✓</span>
                  <span>{t('disproportionateLegs')}</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-6 leading-relaxed italic">
                {t('symptomsEvolution')}
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              {t('detailedSymptoms')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('physicalSymptoms')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('symmetricFatAccumulation')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('heavinessInLimbs')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('painOnTouch')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('easyBruising')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('dimplingSkin')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('dailyLifeImpact')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('clothingDifficulties')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('walkingFatigue')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('psychologicalImpact')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('physicalLimitations')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600">•</span>
                    <span>{t('socialIsolation')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t('lipoedemaStages')}
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">{t('stage1')}</h3>
                <p className="text-gray-700">{t('stage1Description')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">{t('stage2')}</h3>
                <p className="text-gray-700">{t('stage2Description')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">{t('stage3')}</h3>
                <p className="text-gray-700">{t('stage3Description')}</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t('whyPoorlyKnown')}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t('poorlyKnownText1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('poorlyKnownText2')}
            </p>
          </div>

          <div className="bg-sky-600 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('concernedQuestion')}
            </h2>
            <p className="text-lg mb-6 opacity-90">
              {t('bookAppointment')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/diagnostic"
                className="bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                {t('learnMoreDiagnostic')}
              </Link>
              <Link
                to="/contact"
                className="bg-sky-700 text-white px-8 py-3 rounded-full font-medium hover:bg-sky-800 transition border-2 border-white"
              >
                {t('bookAppointmentButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
