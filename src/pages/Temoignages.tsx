import { Link } from 'react-router-dom';
import { Star, Quote, Play, CheckCircle, Heart, Award } from 'lucide-react';

export default function Temoignages() {
  const videoTestimonials = [
    {
      title: 'Témoignage patiente du Maroc',
      video: '/Témoignages de Patientes/1.mp4',
      description: 'Une patiente partage son expérience complète avec le Dr Sefrioui',
      thumbnail: '/Témoignages de Patientes/WhatsApp Image 2025-10-02 at 01.24.03 (4).jpeg'
    },
    {
      title: 'Témoignage patiente',
      video: '/Témoignages de Patientes/publicTémoignages de Patientescliant send me video about how much she happy the video have 4 part this is part 1 (online-video-cutter.com).mp4 (2).mp4',
      description: 'Une patiente partage son expérience avec le Dr Sefrioui',
      thumbnail: '/Témoignages de Patientes/WhatsApp Image 2025-10-02 at 01.24.03 (4).jpeg'
    }
  ];

  const testimonials = [
    {
      name: "Imane",
      location: "Bruxelles, Belgique",
      text: "Le lipœdème est très mal connu chez nous. Quand j'ai découvert qu'un expert au Maroc proposait une solution adaptée, j'ai sauté sur l'occasion. L'intervention s'est déroulée à Casablanca dans un cabinet moderne et très bien encadré. Les résultats sont au-delà de mes espérances, je revis dans mon corps de femme.",
      rating: 5
    },
    {
      name: "Fatou",
      location: "Dakar, Sénégal",
      text: "Depuis l'adolescence, mes jambes étaient gonflées, douloureuses, et j'avais honte de les montrer. Au Sénégal, aucun médecin ne m'avait parlé du lipœdème. C'est grâce à une amie que j'ai connu le Dr Sefrioui. Il a tout de suite posé le bon diagnostic. Après ma liposuccion WAL, mes douleurs ont disparu et j'ai retrouvé confiance en moi.",
      rating: 5
    },
    {
      name: "Sarah",
      location: "Casablanca, Maroc",
      text: "Pendant des années, j'ai pensé que c'était ma faute si je ne perdais pas de poids aux jambes malgré tous mes efforts. Le Dr Sefrioui m'a expliqué que j'avais un lipœdème. L'intervention a changé ma vie. Je peux enfin porter ce que je veux et marcher sans douleur.",
      rating: 5
    },
    {
      name: "Amina",
      location: "Rabat, Maroc",
      text: "J'ai retrouvé confiance en moi. Le Dr Sefrioui a été à l'écoute et professionnel du début à la fin. Le cabinet est impeccable et l'équipe est très compétente. Je recommande vivement.",
      rating: 5
    },
    {
      name: "Khadija",
      location: "Paris, France",
      text: "Je cherchais un spécialiste du lipœdème proche culturellement et j'ai trouvé le Dr Sefrioui. Mon séjour médical au Maroc s'est très bien passé. Tout était bien organisé, de l'aéroport au cabinet. Les résultats sont visibles et durables.",
      rating: 5
    },
    {
      name: "Nadia",
      location: "Abidjan, Côte d'Ivoire",
      text: "J'avais peur de faire cette intervention loin de chez moi, mais l'équipe du Dr Sefrioui m'a mise en confiance. Ils ont tout organisé pour moi. Je suis très satisfaite du résultat et je n'ai plus ces jambes lourdes et douloureuses.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/30 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>

      <div className="relative py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold text-sm tracking-wide uppercase">Témoignages Authentiques</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-sky-800 to-blue-900 bg-clip-text text-transparent leading-tight">
                Témoignages de Patientes
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Découvrez les expériences de femmes qui ont fait confiance au Dr Tawfik Sefrioui
              </p>
            </div>

            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Témoignages Vidéo
                </h2>
                <p className="text-lg text-gray-600">Écoutez directement nos patientes partager leur parcours</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {videoTestimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transform hover:-translate-y-2 transition-all duration-500"
                    style={{
                      animation: `slideUp 0.6s ease-out ${idx * 0.2}s both`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative bg-gradient-to-br from-sky-600 via-sky-500 to-blue-500 p-8 text-white">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                      <Play className="w-8 h-8 mb-4 animate-pulse" />
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 relative z-10">{testimonial.title}</h3>
                      <p className="text-white/90 text-lg relative z-10">{testimonial.description}</p>
                    </div>

                    <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                      <div className="relative rounded-2xl overflow-hidden shadow-xl flex items-center justify-center bg-black" style={{ minHeight: '400px' }}>
                        <video
                          controls
                          className="w-auto h-auto max-w-full max-h-[500px]"
                          style={{ objectFit: 'contain' }}
                          preload="metadata"
                          poster={testimonial.thumbnail}
                        >
                          <source src={testimonial.video} type="video/mp4" />
                          Votre navigateur ne supporte pas les vidéos HTML5.
                        </video>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Témoignages Écrits
                </h2>
                <p className="text-lg text-gray-600">Des histoires inspirantes de transformation</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-400/10 to-blue-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      <Quote className="w-10 h-10 text-sky-500 mb-4 opacity-50" />

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed italic text-base">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-start gap-4 pt-6 border-t border-gray-200">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                          <p className="text-sky-600 text-sm font-medium">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 opacity-90"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

              <div className="relative p-8 md:p-12 text-center text-white">
                <Award className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Pourquoi nos patientes nous font confiance
                </h2>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                  <div className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 transform group-hover:scale-110 transition-all duration-300 shadow-xl border border-white/30">
                      <div className="text-6xl md:text-7xl font-bold mb-4 bg-white/90 bg-clip-text text-transparent">95%</div>
                      <p className="text-xl font-semibold">Taux de satisfaction</p>
                    </div>
                  </div>
                  <div className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 transform group-hover:scale-110 transition-all duration-300 shadow-xl border border-white/30">
                      <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-3xl md:text-4xl font-bold mb-4">Innombrables</div>
                      <p className="text-xl font-semibold">Patientes traitées</p>
                    </div>
                  </div>
                  <div className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 transform group-hover:scale-110 transition-all duration-300 shadow-xl border border-white/30">
                      <div className="text-6xl md:text-7xl font-bold mb-4 bg-white/90 bg-clip-text text-transparent">15+</div>
                      <p className="text-xl font-semibold">Années d'expérience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-500 to-blue-500"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_70%)]"></div>

              <div className="relative p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Rejoignez nos patientes satisfaites
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Commencez votre parcours vers une vie sans les contraintes du lipœdème
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link
                    to="/resultats"
                    className="group relative bg-white text-sky-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Voir les résultats</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link
                    to="/contact"
                    className="group relative bg-transparent text-white px-10 py-4 rounded-full font-bold text-lg border-3 border-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Prendre rendez-vous</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
