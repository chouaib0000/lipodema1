import { Link } from 'react-router-dom';

export default function Clinique() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Le Cabinet
          </h1>

          <div className="bg-gradient-to-br from-terracotta-50 to-beige-100 p-8 md:p-12 rounded-2xl mb-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Un centre d'excellence à Casablanca
            </h2>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              Situé en plein cœur de Casablanca, notre cabinet est dédié à la chirurgie esthétique et au traitement médical du lipœdème. Conçu pour offrir un cadre à la fois médical et haut de gamme, nous allions soins de haute précision, technologies innovantes et accompagnement personnalisé.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Chaque détail a été pensé pour assurer votre confort, votre sécurité et votre sérénité tout au long de votre parcours de soins.
            </p>
          </div>

          <div className="mb-12">
            <video
              controls
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            >
              <source src="Cabinet video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="bg-gradient-to-br from-beige-100 to-terracotta-50 p-8 md:p-12 rounded-2xl mb-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Technologies de pointe
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl hover-lift">
                <h3 className="text-xl font-bold text-terracotta-600 mb-2">Système WAL de dernière génération</h3>
                <p className="text-gray-700">
                  Équipement spécialisé pour la liposuccion assistée par jet d'eau, offrant précision et douceur maximales dans le traitement du lipœdème.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl hover-lift">
                <h3 className="text-xl font-bold text-terracotta-600 mb-2">Équipements d'anesthésie modernes</h3>
                <p className="text-gray-700">
                  Matériel d'anesthésie et de surveillance de pointe pour assurer votre sécurité et votre confort pendant l'intervention.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl hover-lift">
                <h3 className="text-xl font-bold text-terracotta-600 mb-2">Systèmes de stérilisation avancés</h3>
                <p className="text-gray-700">
                  Protocoles de stérilisation rigoureux et équipements de haute technologie pour éliminer tout risque d'infection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl hover-lift">
                <h3 className="text-xl font-bold text-terracotta-600 mb-2">Outils de diagnostic précis</h3>
                <p className="text-gray-700">
                  Technologies permettant une évaluation détaillée de votre condition pour un plan de traitement optimal.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Localisation privilégiée
            </h2>
            <div className="bg-white p-8 rounded-xl border-2 border-terracotta-100 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Notre cabinet bénéficie d'un emplacement central à Casablanca, facilement accessible depuis toutes les parties de la ville et à proximité des principaux axes routiers. Pour les patientes venant de l'étranger, nous sommes situés à proximité de l'aéroport international Mohammed V.
              </p>
              <div className="bg-gradient-to-br from-terracotta-50 to-beige-100 p-6 rounded-xl">
                <p className="text-gray-900 font-bold mb-2">Adresse :</p>
                <p className="text-gray-700">
                  5 boulevard Abdellatif Benqaddour<br />
                  Racine, Casablanca<br />
                  Morocco
                </p>
              </div>
            </div>
          </div>


          <div className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white p-8 md:p-12 rounded-2xl text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Visitez notre cabinet
            </h2>
            <p className="text-lg mb-6 text-white/95">
              Prenez rendez-vous pour découvrir nos installations et rencontrer notre équipe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/confort"
                className="bg-white text-terracotta-600 px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Confort & Sécurité
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
