import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import AutoSlideshow from '../components/AutoSlideshow';

export default function Parcours() {
  const doctorPhotos = [
    '/2028/1.jpeg',
    '/2028/2.jpeg',
    '/2028/3.jpeg',
    '/2028/4.jpeg',
    '/2028/5.jpeg',
    '/2028/6.jpeg',
    '/2028/7.jpeg',
    '/2028/8.jpeg',
    '/2028/9.jpeg'
  ];

  const trainingLocations = [
    { location: 'Thailand', image: '/2027/Thailand.jpeg' },
    { location: 'Dubai', image: '/2027/DUBAI.jpeg' },
    { location: 'Boston, USA', image: '/2027/Boston USA.jpeg' },
    { location: 'New York, USA', image: '/2027/New York , USA.jpeg' },
    { location: 'New York, USA', image: '/2027/New York , USA 1.jpeg' },
    { location: 'Californie, USA', image: '/2027/Californie, USA.jpeg' },
    { location: 'Californie, USA', image: '/2027/Californie, USA 1.jpeg' },
    { location: 'Orlando, USA', image: '/2027/IFATS , congrès Orlando USA.jpeg' },
    { location: 'USA', image: '/2027/usa.jpeg' }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            DR TAWFIK SEFRIOUI
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 text-center">
            Parcours
          </h2>

          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="w-full md:w-3/4 lg:w-2/3">
                <AutoSlideshow images={doctorPhotos} interval={5000} showControls={false} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Expert Internationalement Reconnu
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Depuis plus de 15 ans au Maroc, le Dr Tawfik Sefrioui est un chirurgien hautement qualifié et internationalement réputé, spécialisé dans le traitement chirurgical du lipœdème. Sa passion pour aider les patientes atteintes de lipœdème à vivre une vie meilleure est palpable.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Diplômé de l'université de George Washington aux USA, fort de nombreuses années de carrière hautement spécialisée dans le traitement chirurgical du lipœdème utilisant la Liposuction WAL intégrative 3D avec micro canules sous anesthésie locale.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Il est le médecin référent et formateur de la liposuction Bodyjet par Humanmed depuis des années, et le premier au Maroc à avoir introduit la liposuction WAL Bodyjet sous anesthésie locale à Casablanca il y a 15 ans. Aujourd'hui, son centre du Lipœdème est le Centre de Référence et d'Expertise du Lipœdème au Maroc.
            </p>
          </div>


          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Formations Internationales
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Le Dr Sefrioui a partagé son expertise et formé des chirurgiens dans le monde entier
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {trainingLocations.map((item, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group card-3d mobile-depth mobile-depth-hover">
                  <img
                    src={item.image}
                    alt={`Formation à ${item.location}`}
                    className="w-full h-64 object-contain bg-gradient-to-br from-sky-50 to-blue-50 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex items-center gap-2 text-white">
                        <MapPin size={20} />
                        <h3 className="text-xl font-bold">{item.location}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Une Approche Innovante et Personnalisée
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Les compétences innovantes du Dr Sefrioui, combinées à son approche chirurgicale unique et performante, vous offrent un cadre serein pour votre intervention chirurgicale. Son succès en chirurgie du lipœdème sous anesthésie locale repose non seulement sur son expertise médicale, mais aussi sur sa compréhension du parcours émotionnel qui accompagne le lipœdème.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Il est à la fois votre chirurgien et votre allié, s'engageant à créer un environnement sûr et bienveillant pour vous. Chaque traitement est adapté individuellement, en tenant compte de la sévérité du lipœdème, des objectifs de la patiente et de sa situation personnelle.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              La galerie de photos avant/après saisissantes de ses interventions précédentes témoigne de son engagement indéfectible envers la satisfaction de ses patients. Choisir de subir une chirurgie du lipœdème sous anesthésie locale avec le Dr Sefrioui, c'est choisir un parcours bien informé, compatissant et responsable pour alléger le fardeau du lipœdème avec un expert reconnu à vos côtés.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Engagement dans la sensibilisation
            </h2>
            <div className="bg-white p-8 rounded-xl border-2 border-sky-100 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le Dr Sefrioui est profondément engagé dans la sensibilisation au lipœdème au Maroc et en Afrique. Il travaille activement à faire connaître cette pathologie auprès du public et des professionnels de santé, afin que davantage de femmes puissent être diagnostiquées et traitées correctement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Son objectif est de rendre le traitement du lipœdème accessible aux femmes de toute la région, en offrant une expertise de niveau international dans un environnement local, sûr et accueillant.
              </p>
            </div>
          </div>

          <div className="bg-sky-600 text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Rencontrez le Dr Sefrioui
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Prenez rendez-vous pour une consultation personnalisée
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
