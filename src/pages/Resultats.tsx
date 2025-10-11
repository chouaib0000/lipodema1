import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function Resultats() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const beforeAfterImages = [
    { id: 5, before: '/2030/1.png', after: '/2030/1a.png' },
    { id: 5, before: '/2030/2.png', after: '/2030/2b.png' },
    { id: 5, before: '/2030/3.png', after: '/2030/3b.png' },
    { id: 5, before: '/2030/4.png', after: '/2030/4a.png' },
    { id: 5, before: '/2030/5.png', after: '/2030/5a.png' },
    { id: 5, before: '/2030/6.png', after: '/2030/6a.png' },
    { id: 5, before: '/2030/7.png', after: '/2030/7a.png' },
    { id: 5, before: '/2030/8.png', after: '/2030/8a.png' },
    { id: 5, before: '/2030/9.png', after: '/2030/9a.png' },
    { id: 5, before: '/2030/10.png', after: '/2030/10a.png' },
    { id: 5, before: '/2030/11.png', after: '/2030/11a.png' },
    { id: 5, before: '/2030/12.png', after: '/2030/12a.png' },
    { id: 5, before: '/2030/13.png', after: '/2030/13a.png' },
    { id: 5, before: '/2030/14.png', after: '/2030/14a.png' },
    { id: 1, before: '/photo/photo 1 before.png', after: '/photo/photo 1 after.png' },
    { id: 2, before: '/photo/photo2 before.png', after: '/photo/photo 2 after.png' },
    { id: 3, before: '/photo/photo3 before.png', after: '/photo/photo3 after.png' },
  ];

  const staticImages = [
    '/photo/photo 4 have before and after.png',
    '/photo/photo 7 have before and after.png',
    '/photo/photo 8 have before and after.png',
    '/photo/photo 9 have before and after.png'
  ];

  const photo2Images = [
    '/bra2/WhatsApp_Image_2025-09-29_at_23.03.45__3_-removebg-preview.png',
    '/bra2/WhatsApp_Image_2025-09-29_at_23.03.46__3_-removebg-preview.png',
    '/bra2/WhatsApp_Image_2025-09-29_at_23.03.47-removebg-preview.png',
    '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__1_-removebg-preview.png',
    '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__2_-removebg-preview.png',
    '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__3_-removebg-preview.png',
    '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__5_-removebg-preview.png',
    '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40-removebg-preview.png',
    '/bra2/photo 1 avant.png',
    '/bra2/WhatsApp Image 2025-09-29 at 23.03.46 (2).jpeg',
    '/bra2/WhatsApp Image 2025-09-29 at 23.03.46 (2).png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photo2Images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [photo2Images.length]);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Résultats Avant / Après
          </h1>

          <div className="bg-gradient-to-br from-terracotta-50 to-beige-100 p-8 md:p-12 rounded-2xl mb-12 shadow-lg">
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              Découvrez les transformations réalisées par le Dr Tawfik Sefrioui grâce à la technique WAL. Ces résultats témoignent de l'efficacité du traitement et de l'expertise du Dr Sefrioui dans la prise en charge du lipœdème.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Chaque patiente est unique, et les résultats varient selon la sévérité du lipœdème et les zones traitées. Ces photos vous donnent un aperçu des améliorations significatives possibles avec la liposuccion WAL.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {beforeAfterImages.map((image) => (
            <BeforeAfterSlider
              key={image.id}
              beforeImage={image.before}
              afterImage={image.after}
              imageNumber={image.id}
            />
          ))}

          {staticImages.map((image, index) => (
            <div key={`static-${index}`} className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-xl">
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                Photo {index + 7}
              </div>
              <img
                src={image}
                alt={`Résultat ${index + 7}`}
                className="w-full h-auto object-contain max-h-[600px] md:max-h-[800px]"
              />
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Plus de Résultats
            </h2>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Découvrez davantage de transformations remarquables réalisées par le Dr Tawfik Sefrioui
            </p>
          </div>

          <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl" style={{
            background: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 25%, #87CEEB 50%, #B0E0E6 75%, #87CEEB 100%)',
            backgroundSize: '400% 400%',
            animation: 'skyGradient 15s ease infinite',
            minHeight: '700px'
          }}>
            <style>{`
              @keyframes skyGradient {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              @keyframes fadeInOut {
                0%, 100% { opacity: 0; }
                10%, 90% { opacity: 1; }
              }
            `}</style>

            <div className="relative w-full h-full flex items-center justify-center p-8 min-h-[700px]">
              {photo2Images.map((image, index) => (
                <div
                  key={`slideshow-${index}`}
                  className="absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-1000"
                  style={{
                    opacity: currentImageIndex === index ? 1 : 0,
                    animation: currentImageIndex === index ? 'fadeInOut 3s ease-in-out' : 'none'
                  }}
                >
                  <img
                    src={image}
                    alt={`Résultat ${index + 1}`}
                    className="w-auto h-auto max-w-full max-h-[650px] object-contain rounded-lg shadow-2xl"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800">
              {currentImageIndex + 1} / {photo2Images.length}
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              {photo2Images.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-terracotta-50 to-beige-100 p-8 md:p-12 rounded-2xl mb-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Témoignage de nos patientes
            </h2>
            <p className="text-lg text-gray-800 mb-8 text-center">
              La galerie de photos avant/après saisissantes témoigne de l'engagement indéfectible du Dr Sefrioui envers la satisfaction de ses patients
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-terracotta-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "Les résultats ont dépassé mes attentes. Enfin je peux porter les vêtements que je veux et je n'ai plus ces douleurs constantes."
                </p>
                <p className="font-bold text-gray-900">Sarah</p>
                <p className="text-terracotta-600 text-sm">Casablanca, Maroc</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-terracotta-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "J'ai retrouvé confiance en moi. Le Dr Sefrioui a été à l'écoute et professionnel du début à la fin."
                </p>
                <p className="font-bold text-gray-900">Amina</p>
                <p className="text-terracotta-600 text-sm">Rabat, Maroc</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white p-8 md:p-12 rounded-2xl text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à commencer votre transformation ?
            </h2>
            <p className="text-lg mb-6 text-white/95">
              Prenez rendez-vous pour discuter de vos objectifs et des résultats que vous pouvez attendre
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wal"
                className="bg-white text-terracotta-600 px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                En savoir plus sur la WAL
              </Link>
              <Link
                to="/contact"
                className="bg-terracotta-700 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-terracotta-800 transition-all duration-300 border-2 border-white"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
