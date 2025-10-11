import { Link } from 'react-router-dom';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<'legs' | 'arms' | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const legsImages = [
    '/2027/2.jpeg',
    '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 15.52.16.jpeg',
    '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.50 (1).jpeg',
    '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (1).jpeg',
    '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (2).jpeg',
    '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (3).jpeg',
    '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (4).jpeg',
    '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (6).jpeg',
    '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (7).jpeg',
  ];

  const armsImages = [
    '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 15.53.00.jpeg',
    '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (1).jpeg',
    '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (2).jpeg',
    '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (3).jpeg',
    '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (4).jpeg',
    '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (5).jpeg',
    '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40.jpeg',
  ];

  const openLightbox = (gallery: 'legs' | 'arms', index: number = 0) => {
    setCurrentGallery(gallery);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentGallery(null);
  };

  const nextImage = () => {
    const images = currentGallery === 'legs' ? legsImages : armsImages;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = currentGallery === 'legs' ? legsImages : armsImages;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImages = currentGallery === 'legs' ? legsImages : armsImages;

  return (
    <main>
      <section className="relative min-h-[600px] overflow-hidden" style={{
        background: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 25%, #87CEEB 50%, #B0E0E6 75%, #87CEEB 100%)',
        backgroundSize: '400% 400%',
        animation: 'skyGradient 15s ease infinite'
      }}>
        <style>{`
          @keyframes skyGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32" style={{
          textShadow: '0 2px 10px rgba(0,0,0,0.1)',
          transform: 'perspective(1000px) translateZ(0)'
        }}>
          <div className="max-w-5xl mx-auto text-center">
            <header className="border-4 border-white bg-white/95 backdrop-blur-sm p-8 md:p-12 mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Dr Tawfik Sefrioui
              </p>
              <p className="text-xl text-gray-800 font-medium">
                {t('specialist')}
              </p>
            </header>
            <p className="text-lg text-gray-900 italic bg-white/90 backdrop-blur-sm px-6 py-3 inline-block mb-8">
              George Washington Medical University, USA, année 2004
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50" aria-labelledby="treatment-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 id="treatment-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
                Traitement du Lipœdème au Maroc
              </h2>

              <div className="mb-12 flex justify-center">
                <div className="cursor-pointer transform transition hover:scale-105 max-w-4xl" onClick={() => openLightbox('legs', 0)}>
                  <img
                    src="/2027/1.jpeg"
                    alt="Résultats lipœdème - Cliquez pour voir plus"
                    className="w-full h-auto object-contain rounded-lg shadow-xl"
                  />
                  <p className="text-center mt-4 text-sky-600 font-medium">Cliquez pour voir plus de photos</p>
                </div>
              </div>

              <article className="bg-gradient-to-br from-sky-600 to-blue-600 text-white p-8 md:p-12 rounded-2xl mb-12 shadow-2xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 leading-relaxed">
                  <span className="block mb-4">LIPOSUCTION INTÉGRATIVE</span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl mb-4 text-sky-100">WAL BODYJET 3D</span>
                  <span className="block text-xl md:text-2xl font-semibold mb-4">Anesthésie Locale pour le Lipœdème</span>
                  <span className="block text-lg md:text-xl font-medium text-sky-50">Une Solution Douce, Unique et Efficace</span>
                </h3>
                <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                <p className="text-2xl md:text-3xl font-bold text-center">
                  Dr. Tawfik Sefrioui
                </p>
                <nav className="text-center mt-6" aria-label="Liens traitement">
                  <Link to="/wal" className="text-white hover:text-sky-100 underline font-medium">Découvrir la technique WAL</Link>
                  <span className="mx-3">•</span>
                  <Link to="/parcours" className="text-white hover:text-sky-100 underline font-medium">Parcours du Dr Sefrioui</Link>
                </nav>
              </article>


              <nav className="bg-sky-50 p-8 md:p-12 rounded-2xl shadow-xl mb-12 text-center" aria-label="Navigation principale du site">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Voir Résultats Gallérie Photos: <Link to="/resultats" className="text-sky-600 hover:text-sky-700 underline">click✔</Link>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Sa gallérie de photos saisissantes de ses interventions précédentes témoigne de son engagement indéfectible envers la satisfaction de ses patients.
                </p>
                <ul className="flex flex-wrap justify-center gap-4 mt-6 list-none">
                  <li><Link to="/maladie" className="text-sky-600 hover:text-sky-700 underline font-medium">
                    Qu'est-ce que le lipœdème?
                  </Link></li>
                  <li aria-hidden="true" className="text-gray-400">|</li>
                  <li><Link to="/diagnostic" className="text-sky-600 hover:text-sky-700 underline font-medium">
                    Diagnostic du lipœdème
                  </Link></li>
                  <li aria-hidden="true" className="text-gray-400">|</li>
                  <li><Link to="/traitement" className="text-sky-600 hover:text-sky-700 underline font-medium">
                    Traitements disponibles
                  </Link></li>
                  <li aria-hidden="true" className="text-gray-400">|</li>
                  <li><Link to="/parcours-patient" className="text-sky-600 hover:text-sky-700 underline font-medium">
                    Parcours patient
                  </Link></li>
                </ul>
              </nav>

              <article className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                  Découvrez la Technique WAL 3D
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  *Découvrez avec nous le pouvoir transformateur de <span className="text-sky-600 font-semibold">la Liposuction intégrative WAL 3D avec micro canules</span> du <span className="text-sky-600 font-semibold">Dr Tawfik Sefrioui</span>. Sa Technique chirurgicale non invasive, innovante et exhaustive <span className="text-sky-600 font-semibold">sans cicatrices</span> sous <span className="text-sky-600 font-semibold">anesthésie locale</span>.
                </p>
                <nav className="text-center mt-6" aria-label="Navigation technique WAL">
                  <Link to="/wal" className="text-sky-600 hover:text-sky-700 underline font-medium text-lg">
                    En savoir plus sur la technique WAL →
                  </Link>
                  <span className="mx-4 text-gray-400">|</span>
                  <Link to="/wal-results" className="text-sky-600 hover:text-sky-700 underline font-medium text-lg">
                    Voir les photos
                  </Link>
                </nav>
              </article>

              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Notre Cabinet à Casablanca
                </h3>
              </div>

              <div className="mb-12">
                <video
                  controls
                  preload="metadata"
                  className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
                  poster="/photo/ecps.PNG"
                >
                  <source src="/2026/leg/2026/video/Cabinet video.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Découvrez notre cabinet moderne équipé des dernières technologies pour votre sécurité et votre confort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/clinique"
                    className="inline-block border-2 border-sky-600 text-sky-600 px-12 py-4 text-lg font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
                  >
                    En savoir plus sur notre cabinet
                  </Link>
                  <Link
                    to="/services"
                    className="inline-block border-2 border-sky-600 text-sky-600 px-12 py-4 text-lg font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
                  >
                    Nos services
                  </Link>
                </div>
              </div>
            </div>

            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                {t('understandingTitle')}
              </h2>
            </header>

            <article className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('understandingText1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('understandingText2')}
              </p>
              <nav className="flex flex-wrap justify-center gap-4 mt-6" aria-label="En apprendre plus sur le lipœdème">
                <Link to="/maladie" className="inline-block border-2 border-sky-600 text-sky-600 px-8 py-3 text-base font-medium hover:bg-sky-600 hover:text-white transition">
                  En savoir plus sur le lipœdème
                </Link>
                <Link to="/diagnostic" className="inline-block border-2 border-sky-600 text-sky-600 px-8 py-3 text-base font-medium hover:bg-sky-600 hover:text-white transition">
                  Diagnostic et symptômes
                </Link>
                <Link to="/traitement" className="inline-block border-2 border-sky-600 text-sky-600 px-8 py-3 text-base font-medium hover:bg-sky-600 hover:text-white transition">
                  Options de traitement
                </Link>
              </nav>
            </article>

            <div className="text-center mb-16">
              <Link
                to="/contact"
                className="inline-block bg-sky-600 text-white px-12 py-4 text-lg font-medium hover:bg-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('makeAppointment')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="doctor-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="doctor-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              </h2>
              <p className="text-2xl text-sky-600 font-bold mb-8">
                {t('doctorName')}
              </p>
              <p className="text-xl font-semibold text-gray-800">
                {t('doctorSpecialty')}
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="/please use this folder/doctor photo in surgary.jpeg"
                  alt="Dr Tawfik Sefrioui"
                  className="w-full h-auto shadow-2xl"
                />
              </div>
              <article className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('doctorBio1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('doctorBio2')}
                </p>
                <nav className="flex flex-col gap-3 mt-6" aria-label="En savoir plus sur Dr Sefrioui">
                  <Link to="/parcours" className="text-sky-600 hover:text-sky-700 underline font-medium text-lg">
                    → Découvrez le parcours complet du Dr Sefrioui
                  </Link>
                  <Link to="/publications" className="text-sky-600 hover:text-sky-700 underline font-medium text-lg">
                    → Consultez ses publications scientifiques
                  </Link>
                  <Link to="/actualites" className="text-sky-600 hover:text-sky-700 underline font-medium text-lg">
                    → Voir ses conférences internationales
                  </Link>
                  <Link to="/temoignages" className="text-sky-600 hover:text-sky-700 underline font-medium text-lg">
                    → Lire les témoignages de patientes
                  </Link>
                </nav>
              </article>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('doctorBio4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-100 via-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {t('massageTitle')}
              </h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('massageDescription')}
              </p>
              <p className="text-xl font-bold text-sky-600">
                {t('massageSubtext')}
              </p>
            </div>

            <div className="text-center mb-12">
              <Link
                to="/contact"
                className="inline-block bg-sky-600 text-white px-12 py-4 text-lg font-medium hover:bg-sky-700 transition-all duration-300 shadow-lg"
              >
                DEMANDER UNE CONSULTATION
              </Link>
            </div>

            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('resultsTitle')}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  to="/resultats"
                  className="inline-block border-2 border-sky-600 text-sky-600 px-12 py-4 text-lg font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
                >
                  {t('seeAllResults')}
                </Link>
                <Link
                  to="/temoignages"
                  className="inline-block border-2 border-sky-600 text-sky-600 px-12 py-4 text-lg font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
                >
                  Témoignages de patientes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Procédures de L'Intégrative WAL Bodyjet Liposuction 3D
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                La priorité du Dr Sefrioui est de comprendre les besoins et les souhaits uniques de chaque patiente atteinte de lipœdème, en collaborant étroitement avec elle pour concrétiser sa vision.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-16">
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                Des résultats constamment exceptionnels qui vous permettent de retrouver une vie sans douleur, une mobilité aisée et le pur bonheur de pouvoir jouer à nouveau avec vos enfants ou petits-enfants. Réalisez rapidement votre rêve avec des résultats immédiats et sans aucun sacrifice. Bienvenue dans un monde de transformation sans effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-100 via-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Liposuction intégrative WAL Bodyjet
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div
                  className="cursor-pointer transform transition hover:scale-105"
                  onClick={() => openLightbox('legs', 0)}
                >
                  <img
                    src="/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 15.52.16.jpeg"
                    alt="Résultats WAL Jambes - Cliquez pour voir la galerie"
                    className="w-full h-auto shadow-2xl rounded-lg"
                  />
                  <p className="text-center mt-4 text-sky-600 font-medium">Cliquez pour voir toutes les photos</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Cette Technique pour les jambes, lancé par le Dr Sefrioui offre une solution révolutionnaire pour restaurer les contours naturels de vos jambes et revitaliser votre confiance en vous. Alors que vous vous lancez dans cette aventure qui change votre vie, nous mettons en avant les avantages remarquables de la procédure pour les jambes dans le traitement du lipœdème :
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <h4 className="text-xl font-bold text-gray-900">Redécouvrez la mobilité</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    En ciblant et en éliminant l'excès de graisse causé par le lipœdème, cette technique améliore significativement votre mobilité, rendant les activités quotidiennes indolores et plus agréables.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <h4 className="text-xl font-bold text-gray-900">Boostez votre confiance</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Retrouvez la confiance que vous méritez. Cette technique pour les jambes vous aide à vous sentir à nouveau parfaitement bien dans votre peau.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <h4 className="text-xl font-bold text-gray-900">Bénéficiez d'un confort accru</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Grâce à la réduction efficace des excès de graisse, cette technique soulage la douleur souvent associée au lipœdème, vous procurant un soulagement et une plus grande liberté de mouvement.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <h4 className="text-xl font-bold text-gray-900">Procédure personnalisée</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Notre approche est unique pour chaque stade de lipœdème. Un programme de traitement personnalisé, conçu spécialement pour vous, garantit l'atteinte de vos objectifs spécifiques.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <h4 className="text-xl font-bold text-gray-900">Technique mini-invasive</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Cette technique utilise des microcanules stratégiquement conçues, permettant des incisions plus petites et un traumatisme tissulaire moindre, pour une récupération plus rapide et une cicatrisation minimale.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                    <h4 className="text-xl font-bold text-gray-900">Protection assurée</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Cette technique est pratiqué par le Dr Sefrioui, chirurgien hautement spécialisé dans chirurgie du Lipoedème où votre sécurité, votre bien-être et la prestation de soins médicaux exceptionnels sont primordiaux tout au long du processus.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/wal"
                  className="inline-block border-2 border-sky-600 text-sky-600 px-12 py-4 text-lg font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
                >
                  En savoir plus sur la technique pour les jambes
                </Link>
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Liposuction intégrative WAL Bodyjet 3D
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div
                  className="cursor-pointer transform transition hover:scale-105"
                  onClick={() => openLightbox('arms', 0)}
                >
                  <img
                    src="/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 15.53.00.jpeg"
                    alt="Résultats WAL Bras - Cliquez pour voir la galerie"
                    className="w-full h-auto shadow-2xl rounded-lg"
                  />
                  <p className="text-center mt-4 text-sky-600 font-medium">Cliquez pour voir toutes les photos</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Le traitement du lipœdème avec la technique intégrative WAL 3D de Dr Tawfik Sefrioui est une liposuccion douce mais très efficace. Réalisée sous anesthésie locale, elle cible les zones concernées, telles que les bras, les avant-bras et les aisselles.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Lorsque vous êtes pleinement réveillé et confortablement installé, le Dr Sefrioui utilise des techniques précises et méticuleuses pour éliminer l'excès de graisse et sculpter vos bras, créant ainsi les contours souhaités tout en préservant les vaisseaux lymphatiques essentiels.
                  </p>
                </div>
              </div>

              <div className="text-center mb-12">
                <Link
                  to="/wal"
                  className="inline-block border-2 border-sky-600 text-sky-600 px-12 py-4 text-lg font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
                >
                  En savoir plus sur la technique pour les bras
                </Link>
              </div>

              <div className="text-center mb-8 mt-16">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Liposuction traditionnelle pour le lipœdème et ses limites
                </h4>
                <h5 className="text-lg md:text-xl font-semibold text-sky-600">
                  Différence entre liposuction intégrative WAL Bodyjet 3D avec micro canules sous anesthésie locale et Les Liposuctions traditionnelles du Lipœdème
                </h5>
              </div>

              <div className="mb-8">
                <img
                  src="/2028/10.jpeg"
                  alt="Liposuction traditionnelle pour le lipœdème et ses limites"
                  className="w-full h-auto shadow-2xl rounded-lg"
                />
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl shadow-xl mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    !
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                    A GAME CHANGER
                  </h4>
                </div>

                <div className="space-y-8">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Historiquement, le lipœdème était pris en charge par :
                    </p>

                    <div className="bg-white p-6 rounded-xl mb-6">
                      <h6 className="text-lg font-bold text-gray-900 mb-4">
                        1. Traitements conservateurs
                      </h6>
                      <div className="space-y-3 ml-4">
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Thérapie par compression :</p>
                          <p className="text-gray-700">Aide à réduire le gonflement, mais n'élimine pas la graisse malade.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Drainage lymphatique manuel (DLM) :</p>
                          <p className="text-gray-700">Offre un soulagement temporaire, mais nécessite un suivi à vie.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Régime alimentaire et exercice physique :</p>
                          <p className="text-gray-700">De saines habitudes de vie sont bénéfiques, mais la graisse liée au lipœdème résiste à la perte de poids.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl">
                      <h6 className="text-lg font-bold text-gray-900 mb-4">
                        2. Liposuccion traditionnelle pour le lipœdème
                      </h6>
                      <div className="space-y-3 ml-4">
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Liposuccion tumescente :</p>
                          <p className="text-gray-700">Bien qu'efficace pour éliminer la graisse, elle présente un risque pour le système lymphatique fragile.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Risques liés à l'anesthésie générale :</p>
                          <p className="text-gray-700">La liposuccion standard est réalisée sous anesthésie générale, ce qui augmente les complications.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-sky-600 to-blue-600 text-white p-6 rounded-xl">
                    <h6 className="text-xl font-bold mb-4">
                      La technique révolutionnaire du Dr Sefrioui
                    </h6>
                    <p className="text-lg leading-relaxed">
                      La liposuction intégrative WAL Bodyjet 3D avec micro canules sous anesthésie locale offre une alternative plus sûre, plus précise et plus confortable que les méthodes traditionnelles, avec une récupération rapide et des résultats exceptionnels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-sky-600 to-blue-600 text-white p-8 md:p-12 rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Prêt à commencer votre transformation ?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre cas et des bénéfices que vous pouvez attendre de ce traitement révolutionnaire
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/resultats"
                  className="bg-white text-sky-600 px-10 py-4 text-base font-medium hover:bg-gray-100 transition shadow-lg"
                >
                  {t('seeAllResults')}
                </Link>
                <Link
                  to="/contact"
                  className="bg-sky-700 text-white px-10 py-4 text-base font-medium hover:bg-sky-800 transition border-2 border-white"
                >
                  {t('makeAppointment')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <X size={40} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition"
          >
            <ChevronLeft size={60} />
          </button>

          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
            <img
              src={currentImages[currentImageIndex]}
              alt={`Photo ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="text-white mt-4 text-lg">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition"
          >
            <ChevronRight size={60} />
          </button>
        </div>
      )}
    </main>
  );
}
