import type { Metadata, Viewport } from 'next';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-600.css';
import '@fontsource/cormorant-garamond/latin-700.css';
import '@fontsource/montserrat/latin-400.css';
import '@fontsource/montserrat/latin-500.css';
import '@fontsource/montserrat/latin-600.css';
import '@fontsource/montserrat/latin-700.css';
import '@fontsource/noto-naskh-arabic/arabic-400.css';
import '@fontsource/noto-naskh-arabic/arabic-700.css';
import './globals.css';
import { SITE } from '../config/site';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/LazyChatbot';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileActionBar from '../components/MobileActionBar';
import ClientEffects from '../components/ClientEffects';
import GsapReveal from '../components/GsapReveal';
import MarketingTags from '../components/MarketingTags';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.doctor, url: `${SITE.url}/parcours/` }],
  creator: SITE.doctor,
  formatDetection: { telephone: false },
  icons: { icon: SITE.logo, apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
  // "Add to Home Screen" on iPhone opens the site full-screen, like an app
  appleWebApp: { capable: true, title: 'Lipœdème Maroc', statusBarStyle: 'default' },
  other: {
    'geo.region': 'MA-06',
    'geo.placename': 'Casablanca',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The Arabic page marks its content with lang="ar" dir="rtl"; ClientEffects also updates <html lang>.
    <html lang="fr-MA">
      <head>
        <MarketingTags />
      </head>
      <body>
        <LanguageProvider>
          <ClientEffects />
          <GsapReveal />
          <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded">
            Aller au contenu
          </a>
          <div className="min-h-screen bg-white">
            <Header />
            <main id="contenu" className="pt-[calc(4rem+env(safe-area-inset-top))] xl:pt-[112px]">
              {children}
            </main>
            <Footer />
            <Chatbot />
            <WhatsAppButton />
            <MobileActionBar />
          </div>
        </LanguageProvider>
        {/* Real-user Core Web Vitals in the Vercel dashboard (Project → Speed Insights) */}
        <SpeedInsights />
      </body>
    </html>
  );
}
