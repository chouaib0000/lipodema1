import Link from 'next/link';
import { Check } from 'lucide-react';
import type { GuideArticle as Article } from '../content/guide';
import { getArticle } from '../content/guide';
import { Section, CtaBand, Checklist, References } from '../components/ui';
import { MEDICAL_REFERENCES } from '../content/references';
import { arForFr } from '../content/guide-ar';
import { SITE } from '../config/site';

const fmt = (d: string) => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export default function GuideArticle({ article: a }: { article: Article }) {
  const related = a.related.map(getArticle).filter(Boolean) as Article[];

  return (
    <>
      <article>
        <header className="bg-mist border-b border-rose-100">
          <div className="container mx-auto pt-8 pb-12 lg:py-16 max-w-4xl fade-in">
            <h1 className="text-[36px] leading-[1.08] sm:text-5xl lg:text-[56px]">{a.title}</h1>
            <p className="mt-5 text-[17px] lg:text-lg leading-relaxed text-ink/75">{a.intro}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-ink/65">
              <img src={SITE.heroImage} alt="" width="40" height="40" className="h-10 w-10 rounded-full object-cover object-[50%_25%]" />
              <span>
                Par <Link href="/parcours/" className="font-semibold text-ink hover:text-rose-700">Dr Tawfik Sefrioui</Link>, chirurgien du lipœdème
                <br />
                Mis à jour le <time dateTime={a.updated}>{fmt(a.updated)}</time>
              </span>
              {arForFr(a.slug) && (
                <Link href={`/ar/${arForFr(a.slug)!.slug}/`} lang="ar" className="ms-auto rounded-full bg-white px-3 py-1.5 font-arabic text-[15px] text-rose-700 ring-1 ring-rose-200">العربية</Link>
              )}
            </div>
          </div>
        </header>

        <Section>
          <div className="mx-auto max-w-3xl">
            {/* Short, quotable summary – useful for readers in a hurry and for AI answers */}
            <aside className="rounded-3xl bg-rose-50 p-6 lg:p-8" aria-label="L’essentiel">
              <p className="font-serif text-2xl text-ink">L’essentiel</p>
              <ul className="mt-4 space-y-3">
                {a.keyPoints.map((k) => (
                  <li key={k} className="flex gap-3 text-[16px] leading-relaxed text-ink/85">
                    <Check size={18} className="mt-1 shrink-0 text-rose-600" strokeWidth={3} />
                    {k}
                  </li>
                ))}
              </ul>
            </aside>

            <p className="mt-5 text-[15px] text-ink/70">
              À lire aussi : <Link href="/maladie/" className="font-semibold text-rose-700 underline underline-offset-4">le lipœdème, définition, symptômes et stades</Link>
              {' · '}<Link href="/questions-frequentes/" className="font-semibold text-rose-700 underline underline-offset-4">toutes les questions fréquentes</Link>
            </p>

            {a.image && (
              <img src={a.image} alt={a.imageAlt ?? ''} loading="lazy" decoding="async" className="mt-10 w-full rounded-3xl object-cover max-h-[520px] bg-rose-50" />
            )}

            <div className="mt-10 space-y-12">
              {a.sections.map((s) => (
                <section key={s.h2}>
                  <h2 className="text-[28px] leading-tight sm:text-3xl lg:text-4xl">{s.h2}</h2>
                  {s.paragraphs?.map((p) => (
                    <p key={p.slice(0, 40)} className="mt-4 text-[17px] leading-[1.8] text-ink/80">{p}</p>
                  ))}
                  {s.list && <div className="mt-5"><Checklist items={s.list} /></div>}
                  {s.table && (
                    <div className="mt-6 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
                      <table className="w-full min-w-[520px] text-left text-[15px] rounded-2xl overflow-hidden ring-1 ring-rose-100">
                        <thead className="bg-rose-50 text-rose-800">
                          <tr>{s.table.head.map((h) => <th key={h} scope="col" className="p-4 font-semibold">{h}</th>)}</tr>
                        </thead>
                        <tbody className="divide-y divide-rose-100">
                          {s.table.rows.map((r) => (
                            <tr key={r[0]}>
                              {r.map((c, i) => i === 0
                                ? <th key={i} scope="row" className="p-4 font-semibold text-ink">{c}</th>
                                : <td key={i} className="p-4 text-ink/80">{c}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              <section>
                <h2 className="text-[28px] leading-tight sm:text-3xl lg:text-4xl">Questions fréquentes</h2>
                <div className="mt-6 divide-y divide-rose-200 border-y border-rose-200">
                  {a.faq.map((f) => (
                    <details key={f.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] font-semibold text-ink">
                        {f.q}
                        <span className="mt-1 text-rose-600 transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
                      </summary>
                      <p className="mt-3 text-[16px] leading-relaxed text-ink/80">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              <References items={MEDICAL_REFERENCES} />

              <p className="text-sm text-ink/55">
                Article d’information, relu par le Dr Tawfik Sefrioui. Il ne remplace pas une consultation médicale.
              </p>
            </div>
          </div>
        </Section>
      </article>

      {related.length > 0 && (
        <Section tone="mist">
          <h2 className="text-[28px] sm:text-3xl">À lire aussi</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/guide/${r.slug}`} className="block h-full rounded-3xl bg-white p-6 ring-1 ring-rose-100 hover:ring-rose-300 active:scale-[0.99] transition">
                  <span className="font-serif text-xl leading-snug text-ink">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CtaBand title="Parler de votre cas avec le Dr Sefrioui" secondary={{ href: '/guide/', label: 'Tout le guide' }} />
    </>
  );
}
