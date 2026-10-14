import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { RouteMeta } from '../seo/routes';

/** Visible breadcrumb trail on inner pages; mirrors the BreadcrumbList schema. */
export default function Breadcrumbs({ route }: { route: RouteMeta }) {
  return (
    <nav aria-label="Fil d’Ariane" className="border-b border-rose-100 bg-white">
      <ol className="container mx-auto flex items-center gap-1.5 py-3 text-[13px] text-ink/60 overflow-x-auto no-scrollbar whitespace-nowrap">
        <li><Link href="/" className="hover:text-rose-700">Accueil</Link></li>
        <li aria-hidden="true"><ChevronRight size={14} /></li>
        {route.parent && (
          <>
            <li><Link href={route.parent.path} className="hover:text-rose-700">{route.parent.name}</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
          </>
        )}
        <li aria-current="page" className="text-ink/85 font-medium truncate">{route.breadcrumb}</li>
      </ol>
    </nav>
  );
}
