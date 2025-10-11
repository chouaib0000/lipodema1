import { Link } from 'react-router-dom';
import { Plane, Hotel, Car, Calendar } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Services sur Mesure
          </h1>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Pour les patientes venant de l'étranger, nous proposons un accompagnement complet pour organiser votre séjour médical au Maroc en toute sérénité. De la réservation de votre vol à votre hébergement, nous prenons soin de chaque détail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
              <Plane className="text-sky-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aide aux déplacements</h3>
              <p className="text-gray-700">
                Conseils pour votre voyage, informations sur les vols et l'aéroport, organisation du transfert depuis l'aéroport jusqu'à votre hébergement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
              <Hotel className="text-sky-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hébergement</h3>
              <p className="text-gray-700">
                Recommandations d'hôtels et résidences à proximité du cabinet, adaptés à votre budget et confort. Possibilité d'assistance pour la réservation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
              <Car className="text-sky-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transport local</h3>
              <p className="text-gray-700">
                Organisation des déplacements entre votre hébergement et le cabinet pour vos consultations et rendez-vous de suivi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
              <Calendar className="text-sky-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning personnalisé</h3>
              <p className="text-gray-700">
                Coordination de votre séjour médical avec les différentes étapes : consultation, intervention, suivi post-opératoire.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Accompagnement avant, pendant et après votre séjour
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <p className="text-gray-700">Consultation à distance avant votre arrivée pour préparer votre venue</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <p className="text-gray-700">Assistance administrative pour faciliter vos démarches</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <p className="text-gray-700">Suivi à distance après votre retour dans votre pays</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <p className="text-gray-700">Communication multilingue (français, arabe, anglais)</p>
              </div>
            </div>
          </div>

          <div className="bg-sky-600 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Organisez votre séjour médical facilement
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
