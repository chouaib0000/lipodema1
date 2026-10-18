'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, MapPin, Phone, Clock } from 'lucide-react';
import { SITE, mapsLink, whatsappLink } from '../config/site';
import { arFaq } from '../seo/faq';
import { WhatsAppIcon } from '../components/MobileActionBar';
import { AR_GUIDE } from '../content/guide-ar';

const WA_AR = 'السلام عليكم، أود الحصول على معلومات حول علاج الوذمة الشحمية (الليبوديما).';

const SYMPTOMS = [
  'زيادة متماثلة في حجم الساقين أو الذراعين، مع بقاء القدمين غالبًا نحيفتين',
  'ألم وثقل في الساقين وحساسية عند أقل لمسة',
  'ظهور كدمات بسهولة دون صدمة قوية',
  'دهون لا تنقص رغم الحمية والرياضة',
  'ظهور أو تفاقم الأعراض عند البلوغ أو بعد الحمل أو عند انقطاع الطمث',
  'وجود نفس الشكل عند الأم أو الأخت أو الخالة',
];

const BENEFITS = [
  { t: 'تخدير موضعي', d: 'تبقين مستيقظة ومرتاحة طوال العملية، دون مخاطر التخدير العام.' },
  { t: 'الماء وقنيات دقيقة', d: 'تُفصل الدهون بنفث مائي لطيف ثم تُشفط بقنيات دقيقة، مع الحفاظ على الأوعية اللمفاوية.' },
  { t: 'ألم أقل وحركة أسهل', d: 'إزالة دهون الوذمة الشحمية تخفف الثقل والألم وتسهّل المشي من جديد.' },
  { t: 'المشي من اليوم التالي', d: 'لباس الضغط والتصريف بعد العملية حسب بروتوكول المركز، مع متابعة منتظمة.' },
];

const STEPS = [
  { t: 'التواصل الأول', d: 'عبر الهاتف أو واتساب: أسئلتك، المناطق المعنية، وصور إن أردتِ لرأي أولي.' },
  { t: 'الاستشارة في المركز', d: 'فحص سريري لدى الدكتور الصفريوي، تأكيد التشخيص، تحديد المرحلة وخطة العلاج.' },
  { t: 'العملية', d: 'شفط الدهون بتقنية WAL Bodyjet 3D تحت التخدير الموضعي في المركز بالدار البيضاء.' },
  { t: 'المتابعة', d: 'لباس الضغط، التصريف بعد العملية ومراقبة منتظمة، والفريق متاح للإجابة عن أسئلتك.' },
];

export default function Arabic() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div dir="rtl" lang="ar" className="font-arabic">
      <section className="bg-mist">
        <div className="container mx-auto grid gap-10 pt-10 pb-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:py-20">
          <div>
            <p className="text-[15px] font-semibold text-rose-700">مركز مخصص لعلاج الوذمة الشحمية منذ 2015 · الدار البيضاء</p>
            <h1 className="mt-4 text-[38px] leading-[1.35] sm:text-5xl lg:text-6xl lg:leading-[1.3]">
              علاج الوذمة الشحمية (الليبوديما) في المغرب
            </h1>
            <p className="mt-6 max-w-[36rem] text-lg leading-loose text-ink/80">
              يعالج الدكتور توفيق الصفريوي الوذمة الشحمية في الساقين والذراعين بتقنية شفط الدهون WAL Bodyjet 3D بمساعدة الماء وبقنيات دقيقة، تحت التخدير الموضعي، في مركزه بالدار البيضاء.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(WA_AR)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp font-arabic text-base">
                <WhatsAppIcon /> راسلينا على واتساب
              </a>
              <a href={`tel:${SITE.phone.e164}`} className="btn-ghost font-arabic text-base">
                <Phone size={18} /> <span dir="ltr">{SITE.phone.display}</span>
              </a>
            </div>
            <p className="mt-6 text-sm text-ink/60">
              <Link href="/" lang="fr" dir="ltr" className="underline underline-offset-4">Version française</Link>
            </p>
          </div>
          <figure className="relative mx-auto w-full max-w-[400px]">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-rose-100 ring-1 ring-rose-200">
              <img src={SITE.heroImage} alt="الدكتور توفيق الصفريوي، جراح متخصص في علاج الوذمة الشحمية بالدار البيضاء"
                width="800" height="930" className="h-full w-full object-cover object-[50%_30%]" />
            </div>
            <figcaption className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_40px_-18px_rgba(46,16,24,0.35)]">
              <span className="block text-xl font-bold text-ink">الدكتور توفيق الصفريوي</span>
              <span className="block text-sm text-ink/70">خريج جامعة جورج واشنطن (الولايات المتحدة) · رائد تقنية WAL في المغرب</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="container mx-auto py-16 lg:py-24 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl lg:text-4xl leading-snug">هل هي مجرد زيادة في الوزن؟</h2>
          <p className="mt-5 text-lg leading-loose text-ink/75">
            الوذمة الشحمية مرض مزمن يصيب النسيج الدهني عند النساء، ولا يزال غير معروف بما يكفي في المغرب، فكثيرًا ما يُخلط بينه وبين السمنة أو السيلوليت، مما يؤخر التشخيص.
          </p>
          <ul className="mt-8 space-y-4">
            {SYMPTOMS.map((s) => (
              <li key={s} className="flex gap-3 text-[17px] leading-relaxed">
                <span className="mt-1.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-700"><Check size={14} strokeWidth={3} /></span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl leading-snug">شفط الدهون بتقنية WAL تحت التخدير الموضعي</h2>
          <ul className="mt-6">
            {BENEFITS.map((b) => (
              <li key={b.t} className="border-t border-rose-200 py-5">
                <h3 className="text-2xl">{b.t}</h3>
                <p className="mt-1 text-[17px] leading-relaxed text-ink/75">{b.d}</p>
              </li>
            ))}
          </ul>
          <Link href="/wal" lang="fr" className="mt-4 inline-block font-semibold text-rose-700 underline underline-offset-4">
            التفاصيل بالفرنسية: Liposuccion WAL
          </Link>
        </div>
      </section>

      <section className="bg-rose-950 text-rose-50">
        <div className="container mx-auto py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl text-white">مراحل العلاج في المركز</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="border-t-2 border-white/20 pt-6">
                <span className="text-4xl text-rose-300">{i + 1}</span>
                <h3 className="mt-2 text-2xl text-white">{s.t}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-rose-100/80">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container mx-auto py-16 lg:py-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="text-3xl lg:text-4xl leading-snug">أسئلة شائعة حول الوذمة الشحمية</h2>
          <a href={whatsappLink(WA_AR)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6 font-arabic text-base"><WhatsAppIcon /> اطرحي سؤالك</a>
        </div>
        <div className="divide-y divide-rose-200 border-y border-rose-200">
          {arFaq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3 className="font-arabic">
                  <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 py-5 text-right text-lg font-bold text-ink">
                    {f.q}
                    <ChevronDown size={20} className={`mt-1 shrink-0 text-rose-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div hidden={!isOpen} className="pb-6 pl-8 text-[17px] leading-loose text-ink/80"><p>{f.a}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto pb-16 lg:pb-24">
        <h2 className="text-3xl lg:text-4xl">دليل الوذمة الشحمية</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {AR_GUIDE.map((g) => (
            <li key={g.slug}><Link href={`/ar/${g.slug}/`} className="block h-full rounded-2xl bg-white p-5 text-lg font-bold leading-relaxed ring-1 ring-rose-100 hover:ring-rose-300">{g.title}</Link></li>
          ))}
        </ul>
      </section>

      <section className="bg-mist">
        <div className="container mx-auto py-16 lg:py-20">
          <h2 className="text-3xl lg:text-4xl">المركز في الدار البيضاء</h2>
          <p className="mt-4 max-w-2xl text-lg leading-loose text-ink/75">
            يقع المركز بحي راسين، ويستقبل مريضات من الدار البيضاء والرباط ومراكش وطنجة وفاس وأكادير، ومن خارج المغرب.
          </p>
          <address className="not-italic mt-8 grid gap-4 text-[17px] sm:grid-cols-3">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-rose-600" size={20} />
              <span>5 شارع عبد اللطيف بنقدور، حي راسين<br />20250 الدار البيضاء، المغرب</span>
            </a>
            <a href={`tel:${SITE.phone.e164}`} className="flex gap-3">
              <Phone className="mt-1 shrink-0 text-rose-600" size={20} />
              <span dir="ltr">{SITE.phone.display}</span>
            </a>
            <p className="flex gap-3">
              <Clock className="mt-1 shrink-0 text-rose-600" size={20} />
              <span>من الإثنين إلى الجمعة 9:00 – 18:00<br />السبت 9:00 – 13:00</span>
            </p>
          </address>
        </div>
      </section>
    </div>
  );
}
