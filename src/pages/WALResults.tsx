import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

interface BeforeAfter {
  before: string;
  after: string;
  id: number;
}

export default function WALResults() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeAfterPairs: BeforeAfter[] = [
    { id: 1, before: '/2031/1-before.png', after: '/2031/1-after.jpeg' },
    { id: 2, before: '/2031/2-before.png', after: '/2031/2-after.jpeg' },
    { id: 3, before: '/2031/3-before.png', after: '/2031/3-after.jpeg' },
    { id: 4, before: '/2031/4-before.png', after: '/2031/4-after.jpeg' },
    { id: 5, before: '/2031/5-before.png', after: '/2031/5-after.jpeg' },
    { id: 6, before: '/2031/6-before.png', after: '/2031/6-after.jpeg' },
    { id: 7, before: '/2031/7-before.png', after: '/2031/7-after.jpeg' },
    { id: 8, before: '/2031/8-before.png', after: '/2031/8-after.jpeg' },
    { id: 9, before: '/2031/9-before.png', after: '/2031/9-after.jpeg' },
    { id: 10, before: '/2031/10-before.png', after: '/2031/10-after.jpeg' },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterPairs.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);
  };

  return (
    <div className="bg-white">
      <section className="relative min-h-[400px] overflow-hidden" style={{
        background: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #87CEEB 100%)'
      }}>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border-4 border-white bg-white/95 backdrop-blur-sm p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Résultats Avant / Après
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Technique WAL Bodyjet 3D
              </p>
              <p className="text-xl text-gray-800 font-medium">
                Dr Tawfik Sefrioui
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transformations Exceptionnelles
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Découvrez les résultats remarquables obtenus grâce à la technique intégrative WAL Bodyjet 3D du Dr Tawfik Sefrioui. Faites glisser le curseur sur chaque image pour comparer avant et après.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {beforeAfterPairs.map((pair, index) => (
                <div
                  key={pair.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative">
                    <BeforeAfterSlider
                      beforeImage={pair.before}
                      afterImage={pair.after}
                      imageNumber={pair.id}
                    />
                  </div>
                  <div className="p-6 text-center bg-gradient-to-r from-sky-600 to-blue-600 text-white">
                    <p className="font-semibold text-lg mb-2">Cas {pair.id}</p>
                    <p className="text-sm opacity-90">Faites glisser le curseur pour comparer</p>
                  </div>
                  <div className="p-4 text-center bg-white border-t border-gray-100">
                    <button
                      onClick={() => openLightbox(index)}
                      className="text-sky-600 hover:text-sky-700 font-medium underline"
                    >
                      Voir en plein écran
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-sky-600 to-blue-600 text-white p-8 md:p-12 rounded-2xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Prêt à commencer votre transformation ?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Prenez rendez-vous pour une consultation personnalisée avec le Dr Tawfik Sefrioui
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/wal"
                  className="bg-white text-sky-600 px-10 py-4 text-base font-medium hover:bg-gray-100 transition shadow-lg"
                >
                  En savoir plus sur la technique WAL
                </Link>
                <Link
                  to="/contact"
                  className="bg-sky-700 text-white px-10 py-4 text-base font-medium hover:bg-sky-800 transition border-2 border-white"
                >
                  Demander une consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
            aria-label="Close"
          >
            <X size={40} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-50 bg-black/50 rounded-full p-3"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-50 bg-black/50 rounded-full p-3"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>

          <div className="max-w-6xl w-full mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <BeforeAfterSlider
                beforeImage={beforeAfterPairs[currentIndex].before}
                afterImage={beforeAfterPairs[currentIndex].after}
                imageNumber={beforeAfterPairs[currentIndex].id}
              />
            </div>

            <div className="text-center mt-6">
              <p className="text-white text-lg font-medium">
                Cas {beforeAfterPairs[currentIndex].id} / {beforeAfterPairs.length}
              </p>
              <p className="text-white/70 text-sm mt-2">
                Faites glisser le curseur pour comparer avant et après
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
