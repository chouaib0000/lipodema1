import { PageHero, Section, CtaBand, FaqList } from '../components/ui';
import { FAQ_HUB, FAQ_HUB_ALL } from '../content/faq-hub';

export default function QuestionsReponses() {
  return (
    <>
      <PageHero
        title={<>Lipœdème&nbsp;: questions et réponses</>}
        intro={`Les ${FAQ_HUB_ALL.length} questions que nous posent le plus souvent les patientes, avec des réponses claires du Centre Lipœdème Maroc et du Dr Tawfik Sefrioui, à Casablanca.`}
      />
      <nav aria-label="Thèmes" className="container mx-auto -mt-2 flex flex-wrap gap-2 pt-8">
        {FAQ_HUB.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-800 ring-1 ring-rose-100 hover:bg-rose-100">{c.title}</a>
        ))}
      </nav>
      {FAQ_HUB.map((c, i) => (
        <Section key={c.id} id={c.id} tone={i % 2 ? 'mist' : 'white'}>
          <FaqList items={c.items} title={c.title} />
        </Section>
      ))}
      <CtaBand title="Votre question n’est pas dans la liste ?" text="Écrivez-nous sur WhatsApp ou appelez le centre : l’équipe vous répond." />
    </>
  );
}
