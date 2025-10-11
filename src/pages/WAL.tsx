import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function WAL() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[500px] overflow-hidden" style={{
        background: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #87CEEB 100%)'
      }}>
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border-4 border-white bg-white/95 backdrop-blur-sm p-8 md:p-12 mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                La liposuction Intégrative WAL Bodyjet 3D avec micro canules
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Dr Tawfik Sefrioui
              </p>
              <p className="text-xl text-gray-800 font-medium">
                Expert en lipœdème de renommée mondiale
              </p>
            </div>
            <p className="text-lg text-gray-900 italic bg-white/90 backdrop-blur-sm px-6 py-3 inline-block">
              George Washington Medical University, USA, année 2004
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Excellence inégalée en liposuction du lipœdème
              </h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Intégrative WAL Bodyjet Liposuction avec micro canules, votre centre de traitement du lipœdème à la pointe de la technologie, où la satisfaction des patients et des résultats exceptionnels sont au cœur de notre mission. Le Dr Tawfik Sefrioui, pionnier de la technique et reconnu mondialement, se concentre sur des procédures innovantes et sûres qui révolutionnent le traitement du lipœdème.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cette procédure révolutionnaire sous anesthésie locale du Dr Sefrioui est la pierre angulaire de notre pratique. Elle offre des avantages significatifs, notamment la sécurité des patients, le confort, la précision, un temps de récupération réduit et des résultats durables et toujours impressionnants.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link
                to="/contact"
                className="inline-block bg-sky-600 text-white px-12 py-4 text-lg font-medium hover:bg-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                DEMANDER UNE CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                RENCONTREZ LE DR Tawfik Sefrioui
              </h2>
              <p className="text-2xl text-sky-600 font-bold mb-8">
                Expert mondiale en lipœdème
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Excellence inégalée en Liposuction du Lipoedème
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="/please use this folder/doctor photo in surgary.jpeg"
                  alt="Dr Tawfik Sefrioui en chirurgie"
                  className="w-full h-auto shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Lancez-vous dès aujourd'hui dans une aventure transformatrice avec l'un des meilleurs chirurgiens du lipœdème, le <strong>Dr. Tawfik Sefrioui</strong> Pionnier et référence incontournable internationale dans la liposuction WAL pour le traitement du Lipoedème sous anesthésie locale.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Chirurgien spécialisé dans le traitement du lipoedème, il est le premier à avoir introduit et lancé La WAL Liposuction au Maroc depuis plus de 15 ans, Fort d'une précision esthétique et d'une connaissance approfondie de l'impact du lipœdème, le Dr Sefrioui prône une solution plus douce, plus sûre et plus efficace grâce à sa technique intégrative WAL Bodyjet Liposuction 3D avec micro canules.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Le Dr Sefrioui est un membre respecté de l'American College of Surgeons, de l'American Society of cosmetic surgery, de l'IFATS, de l'IMCAS et un membre éminent et Directeur du Board de L'ABRM aux USA.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ses vastes connaissances et son dévouement à l'avancement de la discipline l'ont propulsé à travers le monde comme conférencier et présentateur professionnel reconnu. Ses contributions scientifiques sont également importantes dans plusieurs sociétés savantes dans le domaine.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fort d'une solide formation en médecine et son deuxième Doctorat obtenues à la prestigieuse Université américaine de George Washington, le Dr Sefrioui a approfondi son expertise grâce à sa longue expérience de la chirurgie du Lipoedème depuis plus de 15 ans au service de ces patientes et à sa dedication en tant que précepteur international dans la technique du WAL Bodyjet Liposuction de part de monde.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Le Dr Tawfik Sefrioui a également reçu le prix d'excellence de sa formation professionnelle qui lui a valu une distinction votée par ses pairs en tant que lauréat de prix Diamond Crystal 2017 dans le traitement du lipoedème avec les médias sociaux Esthétique Everything aux USA et Gold global Award of Lipedema in 2020 à la star académie à Paris.
              </p>
              <p className="text-lg text-gray-800 font-medium">
                La galerie de photos avant/après saisissantes de ses précédentes interventions témoigne de son engagement indéfectible envers la satisfaction de ses patients.
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
                Choisir de subir une chirurgie du lipœdème sous anesthésie locale
              </h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le Dr Tawfik Sefrioui allie expertise clinique, techniques innovantes et une approche profonde de la liposuccion du lipœdème sous anesthésie locale pour vous aider à retrouver confiance et beauté naturelle évitant toutes les complications inhérentes à l'anesthésie générale avec une convalescence rapide sans bleu ni douleur.
              </p>
              <p className="text-xl font-bold text-sky-600">
                Découvrez les transformations révolutionnaires rendues possibles par le Dr. Sefrioui.
              </p>
            </div>

            <div className="text-center">
              <Link
                to="/resultats"
                className="inline-block border-2 border-sky-600 text-sky-600 px-12 py-4 text-lg font-medium hover:bg-sky-600 hover:text-white transition-all duration-300"
              >
                Galerie photos Before & Afters
              </Link>
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
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
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
                  INTÉGRATIVE BODYJET LIPOSUCTION 3D Pour Les Jambes
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <img
                    src="/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 15.52.16.jpeg"
                    alt="Résultats WAL Jambes"
                    className="w-full h-auto shadow-2xl rounded-lg"
                  />
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

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <img src="/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.50 (1).jpeg" alt="Résultat Jambes 1" className="w-full h-auto" />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <img src="/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (1).jpeg" alt="Résultat Jambes 2" className="w-full h-auto" />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <img src="/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (2).jpeg" alt="Résultat Jambes 3" className="w-full h-auto" />
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  INTÉGRATIVE BODYJET LIPOSUCTION 3D Pour Les Bras
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Le traitement du lipœdème avec la technique intégrative WAL 3D de Dr Tawfik Sefrioui est une liposuccion douce mais très efficace. Réalisée sous anesthésie locale, elle cible les zones concernées, telles que les bras, les avant-bras et les aisselles.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Lorsque vous êtes pleinement réveillé et confortablement installé, le Dr Sefrioui utilise des techniques précises et méticuleuses pour éliminer l'excès de graisse et sculpter vos bras, créant ainsi les contours souhaités tout en préservant les vaisseaux lymphatiques essentiels.
                  </p>
                </div>
                <div>
                  <img
                    src="/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 15.53.00.jpeg"
                    alt="Résultats WAL Bras"
                    className="w-full h-auto shadow-2xl rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <img src="/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (1).jpeg" alt="Résultat Bras 1" className="w-full h-auto" />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <img src="/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (2).jpeg" alt="Résultat Bras 2" className="w-full h-auto" />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <img src="/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (3).jpeg" alt="Résultat Bras 3" className="w-full h-auto" />
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
                  Voir tous les résultats
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
    </div>
  );
}
