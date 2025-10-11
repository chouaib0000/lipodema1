import { Link } from 'react-router-dom';
import { Calendar, BookOpen } from 'lucide-react';

export default function Actualites() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Actualités
          </h1>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-12 text-center">
            <BookOpen className="text-sky-600 mx-auto mb-4" size={48} />
            <p className="text-lg text-gray-700 leading-relaxed">
              Restez informée des dernières actualités sur le lipœdème, les avancées médicales et les événements de notre cabinet.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-lg">
              <div className="flex items-center gap-2 text-sky-600 mb-4">
                <Calendar size={20} />
                <span className="text-sm font-medium">Mars 2025</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sensibilisation au lipœdème au Maroc
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le Dr Tawfik Sefrioui continue sa mission de sensibilisation au lipœdème auprès du public marocain et africain. Cette pathologie reste encore méconnue dans notre région, conduisant à des diagnostics tardifs et des souffrances inutiles pour de nombreuses femmes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-lg">
              <div className="flex items-center gap-2 text-sky-600 mb-4">
                <Calendar size={20} />
                <span className="text-sm font-medium">Février 2025</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nouvelle technique de drainage post-opératoire
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Notre cabinet adopte les dernières techniques de drainage lymphatique manuel pour optimiser la récupération après liposuccion WAL, réduisant encore davantage les œdèmes et accélérant les résultats.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-lg">
              <div className="flex items-center gap-2 text-sky-600 mb-4">
                <Calendar size={20} />
                <span className="text-sm font-medium">Janvier 2025</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Participation à un congrès international sur le lipœdème
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le Dr Sefrioui a participé à un congrès européen sur le lipœdème, où il a échangé avec d'autres spécialistes et découvert les dernières avancées en matière de diagnostic et de traitement de cette pathologie.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Suivez-nous sur les réseaux sociaux
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Rejoignez notre communauté Facebook pour ne rien manquer de nos actualités, conseils et témoignages de patientes.
            </p>
            <div className="text-center">
              <a
                href="https://www.facebook.com/lipedem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-600 text-white px-8 py-3 rounded-full font-medium hover:bg-sky-700 transition"
              >
                Suivre sur Facebook
              </a>
            </div>
          </div>

          <div className="bg-sky-600 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Des questions sur le lipœdème ?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous pour obtenir plus d'informations
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
