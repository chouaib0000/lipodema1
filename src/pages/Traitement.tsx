import { Link } from 'react-router-dom';

export default function Traitement() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Traitement du Lipœdème
          </h1>

          <div className="relative p-8 md:p-12 rounded-2xl mb-12 overflow-hidden" style={{
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg">
              Traitement du LIPŒDÈME au Maroc
            </h2>
            <p className="text-xl text-white font-medium mb-4 drop-shadow-md">
              Par le Dr Tawfik Sefrioui, expert à Casablanca
            </p>
            <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md">
              Le lipœdème : une maladie qui se soigne
            </h3>
            <p className="text-lg text-white mb-6 leading-relaxed drop-shadow-sm">
              Le lipœdème n'est pas un simple excès de graisse ou un problème esthétique. C'est une maladie chronique évolutive, douloureuse, invalidante, qui nécessite une prise en charge médicale spécialisée.
            </p>
            <p className="text-lg text-white leading-relaxed drop-shadow-sm">
              Pendant des années, les femmes atteintes ont été incomprises, mal orientées ou ignorées. Aujourd'hui, grâce aux avancées médicales et à l'engagement de praticiens comme le Dr Tawfik Sefrioui à Casablanca, des solutions efficaces existent au Maroc.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Objectifs du traitement
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Le traitement du lipœdème ne se limite pas à une approche esthétique : c'est avant tout une démarche thérapeutique globale, qui vise à soulager la patiente, ralentir la progression de la maladie et améliorer la qualité de vie au quotidien. Chaque intervention – médicale ou chirurgicale – répond à des objectifs précis et essentiels :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                <p className="text-gray-700 font-medium">
                  <span className="text-sky-600 font-bold">✓</span> Réduire les douleurs et les gonflements
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                <p className="text-gray-700 font-medium">
                  <span className="text-sky-600 font-bold">✓</span> Restaurer la mobilité et la qualité de vie
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                <p className="text-gray-700 font-medium">
                  <span className="text-sky-600 font-bold">✓</span> Améliorer l'aspect esthétique des jambes ou des bras
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm">
                <p className="text-gray-700 font-medium">
                  <span className="text-sky-600 font-bold">✓</span> Prévenir les complications (lymphœdème, déformations)
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Les options de traitement
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-lg card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-2xl font-bold text-sky-600 mb-4">1. Traitement conservateur non chirurgical</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Indiqué pour les stades précoces ou en complément de la chirurgie, il comprend :
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <div>
                      <strong>Vêtements de compression médicale sur mesure</strong>
                      <br />
                      <span className="text-gray-600">→ pour stimuler la circulation veineuse et lymphatique</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <div>
                      <strong>Drainage lymphatique manuel</strong>
                      <br />
                      <span className="text-gray-600">→ pour réduire les œdèmes et la douleur</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <div>
                      <strong>Activité physique douce et régulière</strong>
                      <br />
                      <span className="text-gray-600">(aquagym, marche nordique, yoga thérapeutique)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-600 font-bold">•</span>
                    <div>
                      <strong>Alimentation anti-inflammatoire personnalisée</strong>
                      <br />
                      <span className="text-gray-600">→ faible en sucres rapides, riche en antioxydants</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-gray-700 font-medium">
                    ⚠️ Ces méthodes soulagent, mais ne réduisent pas les amas graisseux typiques du lipœdème.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-600 to-sky-700 text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">2. Traitement chirurgical : la liposuccion spécialisée</h3>
                <p className="mb-6 leading-relaxed opacity-90">
                  La seule méthode capable de retirer définitivement la graisse malade est une liposuccion adaptée au lipœdème, réalisée par un chirurgien formé à cette pathologie.
                </p>

                <div className="bg-white/10 backdrop-blur p-6 rounded-xl mb-6">
                  <h4 className="text-xl font-bold mb-4">Types de Chirurgie du Lipœdème Disponibles</h4>
                  <p className="mb-4 leading-relaxed">
                    Il existe trois principaux types de chirurgie du lipœdème : la liposuccion avec épargne lymphatique, la liposuccion assistée par hydrolyse et la liposuccion tumescente. Votre chirurgien vous aidera à choisir l'intervention la plus adaptée en fonction de la sévérité et des spécificités de votre lipœdème.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur p-6 rounded-xl mb-6">
                  <h4 className="text-xl font-bold mb-4">Une expertise unique au Maroc</h4>
                  <p className="mb-4 leading-relaxed">
                    Le Dr Tawfik Sefrioui, chirurgien esthétique reconnu à Casablanca, propose une technique innovante, douce et sécurisée, basée sur les normes internationales du traitement du lipœdème :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="font-bold">✓</span>
                      <span><strong>Technique utilisée :</strong> Lipoaspiration douce assistée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">✓</span>
                      <span><strong>Méthode Body-Jet / WAL</strong> (Water Assisted Liposuction)</span>
                    </li>
                    <li className="flex items-start gap-3 ml-6">
                      <span className="text-sm">→</span>
                      <span className="text-sm">technique non agressive utilisant un jet d'eau stérile pour décoller les cellules graisseuses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">✓</span>
                      <span>Anesthésie locale ou générale selon les cas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">✓</span>
                      <span>Chirurgie mini-invasive : moins de douleurs, peu d'ecchymoses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">✓</span>
                      <span>Respect du système lymphatique et des nerfs cutanés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">✓</span>
                      <span>Aucune incision visible (micro-cannules)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">✓</span>
                      <span>Résultat naturel et harmonieux</span>
                    </li>
                </ul>
              </div>

                <div className="mt-6">
                  <Link
                    to="/wal"
                    className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-lg"
                  >
                    En savoir plus sur la technique WAL
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Résultats attendus
            </h2>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">📈</span>
                  <div>
                    <strong className="text-gray-900">Réduction visible des volumes</strong>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">💆</span>
                  <div>
                    <strong className="text-gray-900">Soulagement immédiat des douleurs chroniques</strong>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">🚶</span>
                  <div>
                    <strong className="text-gray-900">Amélioration de la posture et de la mobilité</strong>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">✨</span>
                  <div>
                    <strong className="text-gray-900">Restauration de la silhouette</strong>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-xl">💚</span>
                  <div>
                    <strong className="text-gray-900">Équilibre émotionnel retrouvé</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Le parcours de traitement avec le Dr Sefrioui
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">1. Consultation initiale</h3>
                <p className="text-gray-700">
                  Diagnostic précis, évaluation de votre cas, discussion des objectifs et explications détaillées du traitement proposé.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">2. Préparation pré-opératoire</h3>
                <p className="text-gray-700">
                  Bilan de santé complet, instructions pré-opératoires, organisation de votre séjour médical si vous venez de l'étranger.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">3. Intervention chirurgicale</h3>
                <p className="text-gray-700">
                  Réalisée dans un cabinet moderne et certifié, avec un bloc opératoire aux normes internationales et une équipe médicale spécialisée.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">4. Suivi post-opératoire</h3>
                <p className="text-gray-700">
                  Accompagnement personnalisé, consultations de suivi, conseils pour optimiser la récupération et maintenir les résultats.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Liposuction traditionnelle pour le lipœdème et ses limites
            </h2>

            <div className="flex justify-center mb-8">
              <img
                src="/2028/10.jpeg"
                alt="Comparaison des techniques de liposuction"
                className="w-full max-w-3xl h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 md:p-12 rounded-2xl mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Différence entre liposuction intégrative WAL Bodyjet 3D avec micro canules sous anesthésie locale et Les Liposuctions traditionnelles du Lipoedème
              </h3>
              <p className="text-3xl font-bold text-sky-600 text-center mb-8">A GAME CHANGER</p>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Traitements traditionnels du lipœdème et leurs limites
                </h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Historiquement, le lipœdème était pris en charge par :
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-sky-600 mb-3">1. Traitements conservateurs</h5>
                    <ul className="space-y-3 text-gray-700 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-sky-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Thérapie par compression :</strong> Aide à réduire le gonflement, mais n'élimine pas la graisse malade.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-sky-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Drainage lymphatique manuel (DLM) :</strong> Offre un soulagement temporaire, mais nécessite un suivi à vie.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-sky-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Régime alimentaire et exercice physique :</strong> De saines habitudes de vie sont bénéfiques, mais la graisse liée au lipœdème résiste à la perte de poids.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold text-sky-600 mb-3">2. Liposuccion traditionnelle pour le lipœdème</h5>
                    <ul className="space-y-3 text-gray-700 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 font-bold mt-1">⚠</span>
                        <div>
                          <strong>Liposuccion tumescente :</strong> Bien qu'efficace pour éliminer la graisse, elle présente un risque pour le système lymphatique fragile.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 font-bold mt-1">⚠</span>
                        <div>
                          <strong>Risques liés à l'anesthésie générale :</strong> La liposuccion standard est réalisée sous anesthésie générale, ce qui augmente les complications.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-sky-600 text-white p-8 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold mb-4 text-center">
                  ✨ La Solution: Liposuction Intégrative WAL Bodyjet 3D ✨
                </h4>
                <p className="text-lg leading-relaxed text-center mb-4">
                  Une approche révolutionnaire qui surmonte toutes les limitations des techniques traditionnelles
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">Technique douce préservant le système lymphatique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">Anesthésie locale - évite les risques de l'anesthésie générale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">Récupération rapide et confortable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">Résultats durables et spectaculaires</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pourquoi choisir le Dr Tawfik Sefrioui ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise reconnue</h3>
                <p className="text-gray-700">
                  Formation spécialisée et expérience significative dans le traitement du lipœdème par la technique WAL.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Approche personnalisée</h3>
                <p className="text-gray-700">
                  Chaque patiente bénéficie d'un plan de traitement adapté à sa situation spécifique.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Installations modernes</h3>
                <p className="text-gray-700">
                  Cabinet équipé des technologies les plus avancées, répondant aux normes sanitaires strictes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm card-3d mobile-depth mobile-depth-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Suivi complet</h3>
                <p className="text-gray-700">
                  Accompagnement avant, pendant et après l'intervention, disponible même à distance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sky-600 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à commencer votre traitement ?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous pour discuter de vos options de traitement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resultats"
                className="bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Voir les résultats
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
