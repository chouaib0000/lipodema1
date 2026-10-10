import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import MobileActionBar from './components/MobileActionBar';
import { applyHead } from './seo/head';
import { getRoute } from './seo/routes';
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
import NotFound from './pages/NotFound';

/** Scrolls to top and updates <title>, meta, canonical and JSON-LD on navigation. */
function RouteEffects() {
  const { pathname } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (!first.current) window.scrollTo(0, 0);
    first.current = false;
    applyHead(getRoute(pathname));
  }, [pathname]);

  return null;
}

export const appRoutes = [
  { path: '/', element: <Home /> },
  { path: '/maladie', element: <Maladie /> },
  { path: '/diagnostic', element: <Diagnostic /> },
  { path: '/traitement', element: <Traitement /> },
  { path: '/wal', element: <WAL /> },
  { path: '/wal-results', element: <WALResults /> },
  { path: '/parcours', element: <Parcours /> },
  { path: '/publications', element: <Publications /> },
  { path: '/resultats', element: <Resultats /> },
  { path: '/clinique', element: <Clinique /> },
  { path: '/services', element: <Services /> },
  { path: '/temoignages', element: <Temoignages /> },
  { path: '/parcours-patient', element: <ParcoursPatient /> },
  { path: '/actualites', element: <Actualites /> },
  { path: '/contact', element: <Contact /> },
];

export default function App() {
  return (
    <LanguageProvider>
      <RouteEffects />
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded">
        Aller au contenu
      </a>
      <div className="min-h-screen bg-white">
        <Header />
        <main id="contenu" className="pt-16 xl:pt-[112px]">
          <Routes>
            {appRoutes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <WhatsAppButton />
        <MobileActionBar />
      </div>
    </LanguageProvider>
  );
}
