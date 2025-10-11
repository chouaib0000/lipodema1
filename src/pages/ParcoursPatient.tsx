import { Link } from 'react-router-dom';
import { Calendar, FileText, Stethoscope, Activity, Heart, CheckCircle } from 'lucide-react';
import AutoSlideshow from '../components/AutoSlideshow';

export default function ParcoursPatient() {
  const doctorPhotos = [
    '/2028/10.jpeg'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Parcours Patient
          </h1>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Votre parcours de traitement du lipœdème est soigneusement planifié et personnalisé. Découvrez les étapes de votre prise en charge, de la première consultation jusqu'au suivi à long terme.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="flex gap-6 items-start">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-sky-600" size={28} />
                    <h3 className="text-xl font-bold text-gray-900">Première consultation</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Rendez-vous avec le Dr Sefrioui pour discuter de vos symptômes, réaliser un examen clinique complet et poser un diagnostic précis. C'est le moment idéal pour poser toutes vos questions.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Évaluation de vos symptômes et antécédents médicaux</li>
                    <li>• Examen physique approfondi</li>
                    <li>• Diagnostic et classification du lipœdème</li>
                    <li>• Discussion des options de traitement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="text-sky-600" size={28} />
                    <h3 className="text-xl font-bold text-gray-900">Planification du traitement</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Élaboration d'un plan de traitement personnalisé adapté à votre situation. Explication détaillée de la procédure WAL, des attentes réalistes et de la préparation nécessaire.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Plan de traitement sur mesure</li>
                    <li>• Devis détaillé et transparent</li>
                    <li>• Bilan pré-opératoire</li>
                    <li>• Instructions de préparation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Stethoscope className="text-sky-600" size={28} />
                    <h3 className="text-xl font-bold text-gray-900">Jour de l'intervention</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Accueil au cabinet, préparation pour l'intervention, réalisation de la liposuccion WAL par le Dr Sefrioui dans le bloc opératoire moderne, puis récupération en salle de soins.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Accueil personnalisé au cabinet</li>
                    <li>• Marquage pré-opératoire</li>
                    <li>• Anesthésie adaptée à votre cas</li>
                    <li>• Intervention avec technique WAL</li>
                    <li>• Surveillance post-opératoire immédiate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Activity className="text-sky-600" size={28} />
                    <h3 className="text-xl font-bold text-gray-900">Récupération</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Les jours suivant l'intervention, vous recevrez des instructions détaillées pour optimiser votre récupération. Le port de vêtements de compression et le drainage lymphatique sont recommandés.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Instructions post-opératoires détaillées</li>
                    <li>• Port de vêtements de compression</li>
                    <li>• Gestion de la douleur si nécessaire</li>
                    <li>• Repos et reprise progressive des activités</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                5
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="text-sky-600" size={28} />
                    <h3 className="text-xl font-bold text-gray-900">Suivi post-opératoire</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Consultations de suivi régulières pour évaluer votre récupération et l'évolution des résultats. Le Dr Sefrioui reste disponible pour répondre à toutes vos questions.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Consultations de suivi planifiées</li>
                    <li>• Évaluation de la récupération</li>
                    <li>• Conseils pour maintenir les résultats</li>
                    <li>• Disponibilité pour toute question ou inquiétude</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                6
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="text-sky-600" size={28} />
                    <h3 className="text-xl font-bold text-gray-900">Résultats à long terme</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Les résultats finaux sont généralement visibles après 3 à 6 mois. Un suivi à long terme permet de s'assurer du maintien des bénéfices et de votre satisfaction.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Amélioration continue de la silhouette</li>
                    <li>• Réduction durable des douleurs</li>
                    <li>• Amélioration de la qualité de vie</li>
                    <li>• Suivi à long terme disponible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Pour les patientes venant de l'étranger
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Si vous venez d'un autre pays, nous organisons votre séjour médical pour que tout se passe en douceur :
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <span>Consultation pré-opératoire à distance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <span>Aide à l'organisation du voyage et de l'hébergement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <span>Planification optimisée de votre séjour</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <span>Suivi post-opératoire à distance après votre retour</span>
              </li>
            </ul>
          </div>

          <div className="bg-sky-600 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Commencez votre parcours aujourd'hui
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Prenez rendez-vous pour votre première consultation
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
