import { Youtube, Instagram, Mail, Phone, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-serif mb-6 text-terracotta-300 tracking-wide">Centre</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
Centre de Référence pour le Traitement du Lipœdème au Maroc
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-terracotta-300 tracking-wide">Contact</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <a href="tel:+21205223-98689" className="flex items-center gap-3 hover:text-terracotta-400 transition font-light">
                <Phone size={16} />
                <span>05223-98689</span>
              </a>
              <a href="mailto:contact@lipoedem.ma" className="flex items-center gap-3 hover:text-terracotta-400 transition font-light">
                <Mail size={16} />
                <span>contact@lipoedem.ma</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <span className="font-light">Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-terracotta-300 tracking-wide">Horaires</h4>
            <div className="space-y-3 text-gray-400 text-sm font-light">
              <p>Lundi - Vendredi</p>
              <p>9h00 - 18h00</p>
              <p className="pt-3">Samedi: 9h00 - 13h00</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-terracotta-300 tracking-wide">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://youtube.com/@scarless.cosmeticsurgery?si=Sf5-mz9iCx0w3LdP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta-500 p-3 hover:bg-terracotta-600 transition-all duration-300 hover-lift"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/lipedemacentrecasablanca?igsh=bHE0dThjNHAydjRk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta-500 p-3 hover:bg-terracotta-600 transition-all duration-300 hover-lift"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://web.facebook.com/lipedem?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta-500 p-3 hover:bg-terracotta-600 transition-all duration-300 hover-lift"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10">
          <p className="text-gray-400 text-sm text-center font-light leading-relaxed">
            © {new Date().getFullYear()} Lipœdème Maroc – Traitement & Liposuccion WAL Casablanca
          </p>
          <p className="text-gray-500 text-xs mt-3 text-center font-light">
            Traitement du lipœdème par liposuccion WAL
          </p>
        </div>
      </div>
    </footer>
  );
}
