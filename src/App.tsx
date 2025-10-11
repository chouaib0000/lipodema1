import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import SplashScreen from './components/SplashScreen';
import StructuredData from './components/StructuredData';
import MetaTags from './components/MetaTags';
import Home from './pages/Home';
import Maladie from './pages/Maladie';
import Diagnostic from './pages/Diagnostic';
import Traitement from './pages/Traitement';
import WAL from './pages/WAL';
import Parcours from './pages/Parcours';
import Publications from './pages/Publications';
import Resultats from './pages/Resultats';
import Clinique from './pages/Clinique';
import Services from './pages/Services';
import Temoignages from './pages/Temoignages';
import ParcoursPatient from './pages/ParcoursPatient';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import WALResults from './pages/WALResults';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    return !hasSeenSplash;
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MetaTags />
        <StructuredData />
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <div className="min-h-screen bg-white">
          <Header />
          <main className="pt-[88px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/maladie" element={<Maladie />} />
              <Route path="/diagnostic" element={<Diagnostic />} />
              <Route path="/traitement" element={<Traitement />} />
              <Route path="/wal" element={<WAL />} />
              <Route path="/wal-results" element={<WALResults />} />
              <Route path="/parcours" element={<Parcours />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/resultats" element={<Resultats />} />
              <Route path="/clinique" element={<Clinique />} />
              <Route path="/services" element={<Services />} />
              <Route path="/temoignages" element={<Temoignages />} />
              <Route path="/parcours-patient" element={<ParcoursPatient />} />
              <Route path="/actualites" element={<Actualites />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
