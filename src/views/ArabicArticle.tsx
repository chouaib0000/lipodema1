import Link from 'next/link';
import { Check, Phone } from 'lucide-react';
import type { ArArticle } from '../content/guide-ar';
import { AR_GUIDE } from '../content/guide-ar';
import { Section } from '../components/ui';
import { WhatsAppIcon } from '../components/MobileActionBar';
import { MEDICAL_REFERENCES } from '../content/references';
import { SITE, whatsappLink } from '../config/site';

const WA_AR = 'السلام عليكم، أود الحصول على معلومات حول علاج الوذمة الشحمية (الليبوديما).';
const fmt = (d: string) => new Date(d).toLocaleDateString('ar-MA', { day: 'numeric', month: 'long', year: 'numeric' });

export default function ArabicArticle({ article: a }: { article: ArArticle }) {
  const others = AR_GUIDE.filter((x) => x.slug !== a.slug);

  return (
    <div dir="rtl" lang="ar" className="font-arabic">
      <article>
        <header className="bg-mist border-b border-rose-100">
          <div className="container mx-auto pt-8 pb-12 lg:py-16 max-w-4xl">
            <p className="text-sm text-ink/60"><Link href="/ar/" className="hover:text-rose-700">العربية</Link> · دليل الوذمة الشحمية</p>
            <h1 className="mt-3 text-[32px] leading-[1.4] sm:text-5xl sm:leading-[1.35]">{a.title}</h1>
            <p className="mt-5 text-[18px] leading-loose text-ink/75">{a.intro}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-ink/65">
              <img src={SITE.heroImage} alt="" width="40" height="40" className="h-10 w-10 rounded-full object-cover object-[50%_25%]" />
              <span>
                بقلم <Link href="/parcours/" lang="fr" className="font-bold text-ink hover:text-rose-700">الدكتور توفيق الصفريوي</Link>، جراح الوذمة الشحمية
                <br />
                آخر تحديث: <time dateTime={a.updated}>{fmt(a.updated)}</time>
              </span>
            </div>
          </div>
        </header>

        <Section>
          <div className="mx-auto max-w-3xl">
            <aside className="rounded-3xl bg-rose-50 p-6 lg:p-8" aria-label="الأساسي">
              <p className="text-2xl font-bold text-ink">الأساسي</p>
              <ul className="mt-4 space-y-3">
                {a.keyPoints.map((k) => (
                  <li key={k} className="flex gap-3 text-[17px] leading-relaxed text-ink/85">
                    <Check size={18} className="mt-1.5 shrink-0 text-rose-600" strokeWidth={3} />
                    {k}
                  </li>
                ))}
              </ul>
            </aside>

            {a.image && <img src={a.image} alt={a.imageAlt ?? ''} loading="lazy" decoding="async" className="mt-10 w-full rounded-3xl object-contain max-h-[480px] bg-white" />}

            <div className="mt-10 space-y-12">
              {a.sections.map((s) => (
                <section key={s.h2}>
                  <h2 className="text-[26px] leading-snug sm:text-3xl">{s.h2}</h2>
                  {s.paragraphs?.map((p) => <p key={p.slice(0, 40)} className="mt-4 text-[18px] leading-loose text-ink/80">{p}</p>)}
                  {s.list && (
                    <ul className="mt-5 space-y-3">
                      {s.list.map((l) => (
                        <li key={l} className="flex gap-3 text-[17px] leading-relaxed">
                          <span className="mt-1.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-700"><Check size={14} strokeWidth={3} /></span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.table && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full min-w-[480px] text-right text-[16px] ring-1 ring-rose-100 rounded-2xl overflow-hidden">
                        <thead className="bg-rose-50 text-rose-800">
                          <tr>{s.table.head.map((h) => <th key={h} scope="col" className="p-4 font-bold">{h}</th>)}</tr>
                        </thead>
                        <tbody className="divide-y divide-rose-100">
                          {s.table.rows.map((r) => (
                            <tr key={r[0]}>{r.map((c, i) => i === 0 ? <th key={i} scope="row" className="p-4 font-bold text-ink">{c}</th> : <td key={i} className="p-4 text-ink/80">{c}</td>)}</tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              <section>
                <h2 className="text-[26px] leading-snug sm:text-3xl">أسئلة شائعة</h2>
                <div className="mt-6 divide-y divide-rose-200 border-y border-rose-200">
                  {a.faq.map((f) => (
                    <details key={f.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[18px] font-bold text-ink">
                        {f.q}
                        <span className="mt-1 text-xl leading-none text-rose-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                      </summary>
                      <p className="mt-3 text-[17px] leading-loose text-ink/80">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-mist p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-ink">مصادر طبية</h2>
                <ol className="mt-4 list-decimal space-y-2 pr-5 text-[15px] leading-relaxed text-ink/75 marker:text-rose-600" dir="ltr" style={{ textAlign: 'right' }}>
                  {MEDICAL_REFERENCES.map((r) => (
                    <li key={r.url} dir="ltr"><a href={r.url} target="_blank" rel="noopener" className="underline decoration-rose-300 underline-offset-4">{r.label}</a> — {r.publisher}</li>
                  ))}
                </ol>
              </section>

              <p className="text-sm text-ink/55">مقال للتوعية، راجعه الدكتور توفيق الصفريوي. لا يغني عن الاستشارة الطبية.</p>
            </div>
          </div>
        </Section>
      </article>

      <section className="bg-rose-950 text-rose-50">
        <div className="container mx-auto py-14 lg:py-20 max-w-4xl">
          <h2 className="text-3xl text-white">هل لديكِ أسئلة حول حالتكِ؟</h2>
          <p className="mt-3 text-lg text-rose-100/85">استشارة في المركز بالدار البيضاء، أو رأي أولي عبر واتساب مع بعض الصور.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink(WA_AR)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp font-arabic text-base"><WhatsAppIcon /> راسلينا على واتساب</a>
            <a href={`tel:${SITE.phone.e164}`} className="btn-ghost font-arabic text-base !text-white !border-white/30"><Phone size={18} /> <span dir="ltr">{SITE.phone.display}</span></a>
          </div>
        </div>
      </section>

      <Section tone="mist">
        <h2 className="text-2xl">مقالات أخرى</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}><Link href={`/ar/${o.slug}/`} className="block rounded-2xl bg-white p-5 text-lg font-bold ring-1 ring-rose-100 hover:ring-rose-300">{o.title}</Link></li>
          ))}
          <li><Link href={`/guide/${a.fr}/`} lang="fr" dir="ltr" className="block rounded-2xl bg-white p-5 text-lg ring-1 ring-rose-100 hover:ring-rose-300 text-left font-sans">Lire en français →</Link></li>
        </ul>
      </Section>
    </div>
  );
}
