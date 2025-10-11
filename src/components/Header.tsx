import { Menu, X, ChevronDown, Youtube, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-[#c97a63] py-2">
        <div className="container mx-auto px-6 md:px-12 flex justify-end items-center gap-4">
          <a
            href="https://youtube.com/@scarless.cosmeticsurgery?si=Sf5-mz9iCx0w3LdP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
          <a
            href="https://www.instagram.com/lipedemacentrecasablanca?igsh=bHE0dThjNHAydjRk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/2027/logo.png" alt="Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-4 py-2 text-sm font-sans font-medium tracking-wide transition ${isActive('/') ? 'text-terracotta-600' : 'text-gray-700 hover:text-terracotta-600'}`}>
              {t('home')}
            </Link>

            <div className="relative group">
              <button className="px-4 py-2 text-sm font-sans font-medium text-gray-700 hover:text-terracotta-600 transition flex items-center gap-1 tracking-wide">
                {t('lipoedema')}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-0 w-60 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/maladie" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition border-b border-gray-100">
                  {t('lipoedemaDiseases')}
                </Link>
                <Link to="/diagnostic" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition border-b border-gray-100">
                  {t('diagnostic')}
                </Link>
                <Link to="/traitement" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition border-b border-gray-100">
                  {t('treatment')}
                </Link>
                <Link to="/wal" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition">
                  {t('walLiposuction')}
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 text-sm font-sans font-medium text-gray-700 hover:text-terracotta-600 transition flex items-center gap-1 tracking-wide">
                {t('drTawfik')}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/parcours" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition border-b border-gray-100">
                  {t('journey')}
                </Link>
                <Link to="/publications" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition border-b border-gray-100">
                  {t('publications')}
                </Link>
                <Link to="/resultats" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition">
                  {t('results')}
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 text-sm font-sans font-medium text-gray-700 hover:text-terracotta-600 transition flex items-center gap-1 tracking-wide">
                {t('center')}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-0 w-60 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/clinique" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition border-b border-gray-100">
                  {t('clinic')}
                </Link>
                <Link to="/services" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition border-b border-gray-100">
                  {t('services')}
                </Link>
                <Link to="/temoignages" className="block px-5 py-3 text-sm font-sans text-gray-700 hover:bg-beige-50 hover:text-terracotta-600 transition">
                  {t('testimonials')}
                </Link>
              </div>
            </div>

            <Link to="/parcours-patient" className={`px-4 py-2 text-sm font-sans font-medium tracking-wide transition ${isActive('/parcours-patient') ? 'text-terracotta-600' : 'text-gray-700 hover:text-terracotta-600'}`}>
              {t('patientJourney')}
            </Link>

            <Link to="/actualites" className={`px-4 py-2 text-sm font-sans font-medium tracking-wide transition ${isActive('/actualites') ? 'text-terracotta-600' : 'text-gray-700 hover:text-terracotta-600'}`}>
              {t('news')}
            </Link>

            <Link to="/contact" className="ml-3 bg-terracotta-500 text-white px-8 py-2.5 text-sm font-sans font-medium tracking-wider uppercase hover:bg-terracotta-600 transition-all duration-300 shadow-md hover:shadow-lg">
              {t('contact')}
            </Link>
          </nav>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-terracotta-600 transition font-medium py-2 text-base">
              {t('home')}
            </Link>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'lipoedeme' ? null : 'lipoedeme')}
                className="w-full text-left text-gray-700 hover:text-terracotta-600 transition font-medium flex items-center justify-between py-2 text-base"
              >
                {t('lipoedema')}
                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'lipoedeme' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'lipoedeme' && (
                <div className="ml-4 mt-2 flex flex-col gap-3 bg-beige-50 p-3 rounded">
                  <Link to="/maladie" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('lipoedemaDiseases')}
                  </Link>
                  <Link to="/diagnostic" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('diagnostic')}
                  </Link>
                  <Link to="/traitement" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('treatment')}
                  </Link>
                  <Link to="/wal" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('walLiposuction')}
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'doctor' ? null : 'doctor')}
                className="w-full text-left text-gray-700 hover:text-terracotta-600 transition font-medium flex items-center justify-between py-2 text-base"
              >
                {t('drTawfik')}
                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'doctor' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'doctor' && (
                <div className="ml-4 mt-2 flex flex-col gap-3 bg-beige-50 p-3 rounded">
                  <Link to="/parcours" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('journey')}
                  </Link>
                  <Link to="/publications" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('publications')}
                  </Link>
                  <Link to="/resultats" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('results')}
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'centre' ? null : 'centre')}
                className="w-full text-left text-gray-700 hover:text-terracotta-600 transition font-medium flex items-center justify-between py-2 text-base"
              >
                {t('center')}
                <ChevronDown size={18} className={`transition-transform ${openDropdown === 'centre' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'centre' && (
                <div className="ml-4 mt-2 flex flex-col gap-3 bg-beige-50 p-3 rounded">
                  <Link to="/clinique" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('clinic')}
                  </Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('services')}
                  </Link>
                  <Link to="/temoignages" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-terracotta-600 transition py-1">
                    {t('testimonials')}
                  </Link>
                </div>
              )}
            </div>

            <Link to="/parcours-patient" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-terracotta-600 transition font-medium py-2 text-base">
              {t('patientJourney')}
            </Link>

            <Link to="/actualites" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-terracotta-600 transition font-medium py-2 text-base">
              {t('news')}
            </Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-terracotta-500 text-white px-6 py-3 hover:bg-terracotta-600 transition text-center font-medium mt-4 rounded-sm text-base">
              {t('contact')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
