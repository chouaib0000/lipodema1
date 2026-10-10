'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, Phone, CalendarDays } from 'lucide-react';
import { SITE, whatsappLink } from '../config/site';
import { WhatsAppIcon } from './MobileActionBar';

/* Assistant of the centre: instant answers to common questions, written from the
   site's own content (no invented figures), each pointing to the right page and to a
   human on WhatsApp. Runs entirely in the browser — nothing is sent anywhere. */

interface Answer {
  text: string;
  links?: { href: string; label: string }[];
}

interface Intent {
  keys: string[];
  answer: Answer;
  weight?: number; // generic intents count less, so precise ones win
}

const CONTACT_LINE = `Téléphone : ${SITE.phone.display} · WhatsApp : ${SITE.whatsapp.display}`;

const INTENTS: Intent[] = [
  {
    keys: ['quest ce', 'c est quoi', 'definition', 'lipoedeme', 'lipedema', 'lipoedema', 'maladie'],
    answer: {
      text: 'Le lipœdème est une maladie chronique du tissu graisseux qui touche presque exclusivement les femmes. La graisse s’accumule de façon symétrique sur les jambes (et parfois les bras), avec douleur au toucher, bleus faciles et jambes lourdes. Elle résiste aux régimes et au sport.',
      links: [{ href: '/maladie', label: 'Comprendre le lipœdème' }, { href: '/guide/lipoedeme-ou-cellulite', label: 'Lipœdème ou cellulite ?' }],
    },
    weight: 0.4,
  },
  {
    keys: ['symptome', 'signe', 'reconnaitre', 'douleur', 'mal aux jambes', 'jambes lourdes', 'bleu', 'hematome', 'gonfl'],
    answer: {
      text: 'Les signes les plus fréquents : jambes ou bras qui grossissent de façon symétrique (pieds épargnés), douleur au toucher, bleus faciles, sensation de lourdeur, graisse qui ne diminue pas malgré les efforts. Souvent, une mère ou une sœur a la même silhouette.',
      links: [{ href: '/maladie', label: 'Les symptômes' }, { href: '/diagnostic', label: 'Le diagnostic' }],
    },
  },
  {
    keys: ['cellulite', 'obesite', 'surpoids', 'difference', 'lymphoedeme', 'lymphedeme'],
    answer: {
      text: 'La cellulite est un aspect de la peau, en général indolore. Le lipœdème est une maladie : graisse symétrique, douloureuse, avec des bleus faciles, qui ne répond pas au régime. Le lymphœdème, lui, touche souvent un seul membre et les pieds. Seul un examen clinique permet de trancher.',
      links: [{ href: '/guide/lipoedeme-ou-cellulite', label: 'Lipœdème ou cellulite' }, { href: '/guide/lipoedeme-ou-lymphoedeme', label: 'Lipœdème ou lymphœdème' }],
    },
  },
  {
    keys: ['stade', 'stage', 'grade', 'type'],
    answer: {
      text: 'On décrit 4 stades : 1) peau lisse, tissu épaissi ; 2) peau irrégulière avec nodules ; 3) masses graisseuses et plis ; 4) lipo-lymphœdème, quand un lymphœdème s’ajoute. Le stade se détermine lors de l’examen.',
      links: [{ href: '/guide/stades-du-lipoedeme', label: 'Les stades en détail' }],
    },
  },
  {
    keys: ['wal', 'bodyjet', 'body jet', 'jet d eau', 'technique', 'liposuccion', 'liposuction', 'operation', 'chirurgie', 'traitement', 'traiter', 'soigner', 'guerir'],
    answer: {
      text: 'Le Dr Sefrioui traite le lipœdème par liposuccion WAL Bodyjet 3D : un jet d’eau doux décolle la graisse, aspirée ensuite avec des micro-canules. Elle se fait sous anesthésie locale et préserve les vaisseaux lymphatiques. Compression et drainage soulagent, mais seule la liposuccion retire la graisse malade.',
      links: [{ href: '/wal', label: 'La technique WAL' }, { href: '/traitement', label: 'Les traitements' }],
    },
  },
  {
    keys: ['anesthesie', 'endormi', 'reveille', 'generale', 'locale'],
    answer: {
      text: 'L’intervention se fait sous anesthésie locale (tumescente) : vous restez éveillée et confortable. Cela évite les risques de l’anesthésie générale et permet de marcher dès le lendemain.',
      links: [{ href: '/wal', label: 'En savoir plus' }],
    },
  },
  {
    keys: ['prix', 'tarif', 'cout', 'coute', 'couter', 'combien', 'devis', 'cher', 'payer', 'budget', 'dh', 'dirham', 'euro', 'rembourse', 'mutuelle'],
    weight: 1.5,
    answer: {
      text: 'Le prix dépend du stade, des zones à traiter (cuisses, genoux, mollets, bras) et du nombre de séances. Un devis détaillé et sans engagement est remis après la consultation. Vous pouvez aussi envoyer quelques photos sur WhatsApp pour un premier avis.',
      links: [{ href: '/guide/prix-operation-lipoedeme-maroc', label: 'Ce qui fait varier le prix' }, { href: '/contact', label: 'Prendre rendez-vous' }],
    },
  },
  {
    keys: ['recuperation', 'convalescence', 'apres', 'suite', 'reprise', 'travail', 'sport', 'compression', 'drainage', 'cicatrice'],
    answer: {
      text: 'Retour le jour même dans la plupart des cas, marche dès le lendemain, vêtement de compression surtout le premier mois, drainage post-opératoire à partir du 3e jour environ. Le résultat final se voit généralement après 3 à 6 mois.',
      links: [{ href: '/guide/recuperation-apres-liposuccion-lipoedeme', label: 'La récupération étape par étape' }],
    },
  },
  {
    keys: ['resultat', 'avant apres', 'photo', 'temoignage', 'avis'],
    answer: {
      text: 'Vous pouvez voir des photos avant / après de patientes (publiées avec leur accord) et leurs témoignages en vidéo. Chaque cas est unique : les résultats dépendent du stade et des zones traitées.',
      links: [{ href: '/resultats', label: 'Résultats avant / après' }, { href: '/temoignages', label: 'Témoignages' }],
    },
  },
  {
    keys: ['bras', 'avant bras', 'aisselle'],
    answer: {
      text: 'Le lipœdème touche souvent aussi les bras : graisse sur le haut du bras qui s’arrête au poignet, sensible au toucher. Il se traite également par liposuccion WAL sous anesthésie locale.',
      links: [{ href: '/guide/lipoedeme-des-bras', label: 'Lipœdème des bras' }],
    },
  },
  {
    keys: ['docteur', 'dr', 'sefrioui', 'chirurgien', 'medecin', 'experience', 'qui'],
    answer: {
      text: 'Le Dr Tawfik Sefrioui, diplômé de George Washington University (USA), se consacre au lipœdème depuis plus de 15 ans. Il a été le premier à introduire la liposuccion WAL Bodyjet sous anesthésie locale au Maroc et forme des chirurgiens à l’international.',
      links: [{ href: '/parcours', label: 'Son parcours' }],
    },
  },
  {
    keys: ['ou', 'adresse', 'casablanca', 'racine', 'cabinet', 'centre', 'clinique', 'localisation', 'horaire', 'ouvert', 'heure', 'samedi'],
    answer: {
      text: `Le centre est au ${SITE.address.street}, quartier ${SITE.address.district}, à ${SITE.address.city}. Ouvert du lundi au vendredi de 9h à 18h et le samedi de 9h à 13h. ${CONTACT_LINE}.`,
      links: [{ href: '/contact', label: 'Plan et itinéraire' }, { href: '/clinique', label: 'Le centre' }],
    },
  },
  {
    keys: ['etranger', 'france', 'belgique', 'europe', 'voyage', 'hotel', 'sejour', 'rabat', 'marrakech', 'tanger', 'fes', 'agadir', 'ville'],
    answer: {
      text: 'Le centre reçoit des patientes de tout le Maroc et de l’étranger. Un premier échange peut se faire à distance (WhatsApp, visio), puis l’équipe vous aide à organiser le séjour : hébergement, transferts et planning des rendez-vous.',
      links: [{ href: '/services', label: 'Le séjour médical' }],
    },
  },
  {
    keys: ['rendez', 'rdv', 'consultation', 'contact', 'appeler', 'telephone', 'numero', 'whatsapp', 'reserver'],
    answer: {
      text: `Pour prendre rendez-vous : appelez le ${SITE.phone.display} ou écrivez sur WhatsApp au ${SITE.whatsapp.display}. La consultation dure 45 à 60 minutes, en français, en arabe ou en anglais.`,
      links: [{ href: '/contact', label: 'Prendre rendez-vous' }],
    },
  },
];

const AR_ANSWER: Answer = {
  text: `مرحبًا! يعالج الدكتور توفيق الصفريوي الوذمة الشحمية (الليبوديما) في الدار البيضاء بتقنية شفط الدهون WAL تحت التخدير الموضعي. للحجز: الهاتف ${SITE.phone.display} أو واتساب ${SITE.whatsapp.display}.`,
  links: [{ href: '/ar', label: 'الصفحة العربية' }],
};

const FALLBACK: Answer = {
  text: 'Je n’ai pas de réponse précise à cette question. L’équipe du centre peut vous répondre directement sur WhatsApp ou par téléphone.',
  links: [{ href: '/guide', label: 'Le guide du lipœdème' }],
};

const QUICK = ['Qu’est-ce que le lipœdème ?', 'Quel est le prix ?', 'Comment se passe la récupération ?', 'Où se trouve le centre ?'];

const normalize = (s: string) =>
  ` ${s.toLowerCase().replace(/œ/g, 'oe').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9؀-ۿ]+/g, ' ')} `;

function answerFor(input: string): Answer {
  if (/[؀-ۿ]/.test(input)) return AR_ANSWER;
  const q = normalize(input);
  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const score = intent.keys.reduce((n, k) => (q.includes(` ${k} `) || (k.length > 4 && q.includes(` ${k}`)) ? n + k.length : n), 0) * (intent.weight ?? 1);
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  return best?.answer ?? FALLBACK;
}

type Msg = { from: 'bot' | 'me'; answer: Answer };

const WELCOME: Msg = {
  from: 'bot',
  answer: { text: 'Bonjour ! Je réponds à vos questions sur le lipœdème et le centre. Choisissez une question ou écrivez la vôtre.' },
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('chatbot-state', { detail: { isOpen: open } }));
    // Full-screen sheet on phones: stop the page behind from scrolling
    document.body.style.overflow = open && window.innerWidth < 640 ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [msgs, typing]);

  const ask = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: 'me', answer: { text: t } }]);
    setInput('');
    setTyping(true);
    window.setTimeout(() => {
      setMsgs((m) => [...m, { from: 'bot', answer: answerFor(t) }]);
      setTyping(false);
    }, 450);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed right-3 bottom-[calc(84px+env(safe-area-inset-bottom))] xl:bottom-6 xl:right-6 z-40 flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-plum-800 text-white shadow-[0_12px_30px_-10px_rgba(40,24,38,0.7)] ring-2 ring-white hover:bg-plum-700 active:scale-95 transition xl:h-auto xl:w-auto xl:py-3 xl:pl-3.5 xl:pr-4"
          aria-label="Ouvrir l’assistant du centre"
        >
          <MessageCircle size={22} aria-hidden="true" />
          <span className="hidden text-sm font-semibold xl:inline">Questions ?</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Assistant du Centre Lipœdème Maroc"
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-white sm:inset-auto sm:bottom-4 sm:right-4 sm:h-[min(620px,calc(100dvh-32px))] sm:w-[380px] sm:rounded-3xl sm:shadow-2xl sm:ring-1 sm:ring-rose-100"
        >
          <div className="flex items-center gap-3 bg-plum-900 px-4 pb-3 text-white" style={{ paddingTop: 'max(12px, env(safe-area-inset-top))' }}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white">
              <img src={SITE.logo} alt="" width="32" height="32" className="h-8 w-8 object-contain" />
            </span>
            <div className="flex-1">
              <p className="font-semibold leading-tight">Assistant du centre</p>
              <p className="text-xs text-plum-200">Réponses immédiates · l’équipe répond sur WhatsApp</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/10" aria-label="Fermer">
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-mist px-4 py-4" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${m.from === 'me' ? 'rounded-br-md bg-rose-600 text-white' : 'rounded-bl-md bg-white text-ink ring-1 ring-rose-100'}`}>
                  <p dir="auto">{m.answer.text}</p>
                  {m.answer.links && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.answer.links.map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-full bg-rose-50 px-3 py-1.5 text-[13px] font-semibold text-rose-700 hover:bg-rose-100">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {msgs.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button key={q} type="button" onClick={() => ask(q)} className="rounded-full border border-rose-200 bg-white px-3.5 py-2 text-[14px] text-rose-800 transition hover:bg-rose-50 active:scale-95">
                    {q}
                  </button>
                ))}
              </div>
            )}

            {typing && (
              <div className="flex w-16 gap-1 rounded-2xl bg-white px-4 py-3 ring-1 ring-rose-100" aria-label="Rédaction de la réponse">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-rose-400" style={{ animationDelay: `${d * 0.15}s` }} />
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-rose-100 bg-white px-3 pt-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
            <div className="mb-3 grid grid-cols-3 gap-2">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#1FA855] text-[13px] font-semibold text-white">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a href={`tel:${SITE.phone.e164}`} className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-rose-50 text-[13px] font-semibold text-rose-700">
                <Phone size={15} /> Appeler
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-rose-600 text-[13px] font-semibold text-white">
                <CalendarDays size={15} /> RDV
              </Link>
            </div>
            <form onSubmit={submit} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre question…"
                aria-label="Votre question"
                enterKeyHint="send"
                dir="auto"
                className="h-12 flex-1 rounded-full border border-rose-200 px-4 text-base outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              />
              <button type="submit" disabled={!input.trim()} className="grid h-12 w-12 place-items-center rounded-full bg-rose-600 text-white transition disabled:opacity-40 active:scale-95" aria-label="Envoyer">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
