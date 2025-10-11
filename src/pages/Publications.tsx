import { Link } from 'react-router-dom';
import { BookOpen, FileText, Users } from 'lucide-react';

export default function Publications() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Publications Scientifiques
          </h1>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Contribution à la recherche médicale
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le Dr Tawfik Sefrioui contribue activement à l'avancement des connaissances médicales sur le lipœdème et son traitement. Ses travaux et son expertise sont reconnus dans la communauté médicale internationale.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Domaines d'expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm text-center">
                <div className="bg-sky-100 p-4 rounded-full inline-block mb-4">
                  <BookOpen className="text-sky-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lipœdème</h3>
                <p className="text-gray-700">
                  Diagnostic, classification et traitement par liposuccion WAL
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm text-center">
                <div className="bg-sky-100 p-4 rounded-full inline-block mb-4">
                  <FileText className="text-sky-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Techniques chirurgicales</h3>
                <p className="text-gray-700">
                  Liposuccion assistée par jet d'eau et approches innovantes
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm text-center">
                <div className="bg-sky-100 p-4 rounded-full inline-block mb-4">
                  <Users className="text-sky-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité de vie</h3>
                <p className="text-gray-700">
                  Impact psychologique et amélioration du bien-être des patientes
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Interview télévisée
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
              Le Professeur Tawfik Sefrioui, spécialiste en médecine régénérative, invité sur Sabahiyat
            </p>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-8">
              <video
                className="w-full h-full"
                controls
                preload="metadata"
              >
                <source src="/البروفيسور توفيق الصفريوي , اخصائي في الطب التجديدي , ضيف صباحيات (1) (1) (1).mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Congrès et formations
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Le Dr Sefrioui participe régulièrement à des congrès médicaux internationaux consacrés au lipœdème et à la chirurgie esthétique. Ces échanges lui permettent de rester à la pointe des dernières avancées et de partager son expérience avec d'autres spécialistes.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">Formation continue</h3>
                <p className="text-gray-700">
                  Participation à des formations spécialisées sur les nouvelles techniques de traitement du lipœdème et les protocoles de soins optimisés.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">Échanges internationaux</h3>
                <p className="text-gray-700">
                  Collaboration avec des centres d'excellence européens et internationaux spécialisés dans le traitement du lipœdème.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-600 mb-2">Conférences</h3>
                <p className="text-gray-700">
                  Interventions dans des événements médicaux pour partager son expertise et sensibiliser la communauté médicale locale.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Engagement dans l'excellence médicale
            </h2>
            <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                L'engagement du Dr Sefrioui dans la recherche et la formation continue garantit que ses patientes bénéficient des meilleures pratiques médicales actuelles. Il applique les protocoles les plus récents et les plus efficaces, basés sur les données scientifiques les plus à jour.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cette rigueur scientifique, combinée à une approche humaine et personnalisée, fait du Dr Sefrioui un spécialiste de référence pour le traitement du lipœdème au Maroc et dans la région.
              </p>
            </div>
          </div>

          <div className="bg-sky-600 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bénéficiez d'une expertise de pointe
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Consultez un spécialiste reconnu pour votre traitement du lipœdème
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/parcours"
                className="bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Découvrir le parcours
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
