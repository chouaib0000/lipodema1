import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Diagnostic() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Diagnostic du Lipœdème
          </h1>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Comment diagnostique-t-on le lipœdème ?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Le diagnostic du lipœdème repose principalement sur un examen clinique approfondi réalisé par un médecin spécialisé. Il n'existe pas de test sanguin spécifique pour le lipœdème, c'est pourquoi l'expertise du praticien est essentielle.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le Dr Tawfik Sefrioui possède une expertise reconnue dans le diagnostic et le traitement du lipœdème, acquise grâce à sa formation spécialisée et son expérience avec de nombreuses patientes.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Les étapes du diagnostic
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entretien médical</h3>
                  <p className="text-gray-700">
                    Discussion sur vos symptômes, leur évolution, vos antécédents médicaux et familiaux. Le médecin cherche à comprendre votre historique de santé et l'impact de la condition sur votre vie quotidienne.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Examen physique</h3>
                  <p className="text-gray-700">
                    Évaluation de la distribution de la graisse, de la symétrie, de la texture de la peau, et test de sensibilité. Le médecin vérifie également la présence d'œdème et l'état de la circulation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnostic différentiel</h3>
                  <p className="text-gray-700">
                    Exclusion d'autres pathologies comme le lymphœdème ou l'obésité simple. Cette étape est cruciale pour établir un plan de traitement adapté.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plan de traitement personnalisé</h3>
                  <p className="text-gray-700">
                    Proposition d'une stratégie de prise en charge adaptée à votre situation, incluant les options thérapeutiques disponibles et un accompagnement sur mesure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Signes cliniques du lipœdème
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-sky-600 flex-shrink-0" size={24} />
                <span className="text-gray-700">Distribution symétrique de la graisse</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-sky-600 flex-shrink-0" size={24} />
                <span className="text-gray-700">Sensibilité accrue au toucher</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-sky-600 flex-shrink-0" size={24} />
                <span className="text-gray-700">Tendance aux ecchymoses</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-sky-600 flex-shrink-0" size={24} />
                <span className="text-gray-700">Absence d'amélioration avec le régime</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-sky-600 flex-shrink-0" size={24} />
                <span className="text-gray-700">Pieds et mains non affectés</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-sky-600 flex-shrink-0" size={24} />
                <span className="text-gray-700">Texture de peau irrégulière</span>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pourquoi une consultation spécialisée est-elle indispensable ?
            </h2>
            <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-lg mb-6">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le lipœdème est une maladie encore trop souvent méconnue et mal diagnostiquée. Dans de nombreux cas, les femmes vivent pendant des années avec des douleurs, une silhouette disproportionnée, et des sensations de jambes lourdes… sans jamais obtenir d'explication claire.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cette pathologie est fréquemment confondue avec :
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold">•</span>
                  <span><strong>L'obésité :</strong> alors que la graisse du lipœdème est localisée et résistante aux régimes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold">•</span>
                  <span><strong>La rétention d'eau :</strong> bien que le gonflement du lipœdème soit inflammatoire et douloureux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold">•</span>
                  <span><strong>La cellulite :</strong> qui est superficielle et sans douleur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold">•</span>
                  <span><strong>Le lymphœdème :</strong> qui touche les pieds et présente des signes cliniques différents</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                ➡️ Seule une consultation spécialisée avec un médecin formé au lipœdème peut poser un diagnostic précis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Comment se déroule la consultation ?
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-sky-600 mb-2">✅ 1. Écoute & antécédents</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Analyse complète de votre historique médical, hormonal et familial</li>
                    <li>• Discussion sur vos symptômes (douleurs, fatigue, mobilité, gêne esthétique)</li>
                    <li>• Compréhension de vos attentes physiques et émotionnelles</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-sky-600 mb-2">✅ 2. Examen clinique ciblé</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Observation morphologique : symétrie, zones sensibles, œdèmes</li>
                    <li>• Palpation des tissus graisseux : douleur, nodules, signes caractéristiques</li>
                    <li>• Vérification du signe de Stemmer, différentiateur clé</li>
                    <li>• Mesures anthropométriques et photos médicales si nécessaire</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-sky-600 mb-2">✅ 3. Examens complémentaires (si besoin)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Écho-Doppler veineux</li>
                    <li>• Bilan biologique</li>
                    <li>• Lymphoscintigraphie (en cas de doute avec un lymphœdème)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🔍 À l'issue de la consultation
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Vous repartez avec :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl">
                <p className="text-gray-700">✓ Un diagnostic clair et argumenté</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-gray-700">✓ Un plan de traitement personnalisé</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-gray-700">✓ Un devis transparent, sans engagement</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-gray-700">✓ Un calendrier de soin réaliste et sécurisé</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              🌍 Vous êtes une patiente internationale ?
            </h2>
            <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-sm">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le Dr Tawfik Sefrioui propose aussi des consultations préliminaires à distance, par téléphone ou visioconférence (WhatsApp ou Zoom). Cela permet de :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold">•</span>
                  <span>Présélectionner les bonnes candidates à la chirurgie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold">•</span>
                  <span>Préparer les analyses à faire avant le déplacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold">•</span>
                  <span>Planifier un séjour médical court et efficace à Casablanca</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🕒 Durée & prise de rendez-vous
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Durée moyenne de la consultation :</strong>
                </p>
                <p className="text-gray-700">45 à 60 minutes</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Langues :</strong>
                </p>
                <p className="text-gray-700">Français, Arabe ou Anglais</p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              <strong>Dossier confidentiel et sécurisé</strong>
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pourquoi consulter le Dr Tawfik Sefrioui ?
            </h2>
            <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                Le Dr Tawfik Sefrioui est l'un des rares spécialistes au Maroc et en Afrique à avoir développé une expertise spécifique dans le diagnostic et le traitement du lipœdème. Sa formation et son expérience lui permettent d'identifier avec précision cette pathologie et de proposer les solutions les plus adaptées.
              </p>
            </div>
          </div>

          <div className="bg-sky-600 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à obtenir un diagnostic précis ?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Prenez rendez-vous pour une consultation avec le Dr Tawfik Sefrioui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/traitement"
                className="bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Découvrir les traitements
              </Link>
              <Link
                to="/contact"
                className="bg-sky-700 text-white px-8 py-3 rounded-full font-medium hover:bg-sky-800 transition border-2 border-white"
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
