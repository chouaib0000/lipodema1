import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getRoute, NOT_FOUND } from '../seo/routes';

/** Visible breadcrumb trail on inner pages; mirrors the BreadcrumbList schema. */
export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const route = getRoute(pathname);
  if (route.path === '/' || route.path === '/ar' || route === NOT_FOUND) return null;

  return (
    <nav aria-label="Fil d’Ariane" className="border-b border-rose-100 bg-white">
      <ol className="container mx-auto flex items-center gap-1.5 py-3 text-[13px] text-ink/60 overflow-x-auto no-scrollbar whitespace-nowrap">
        <li><Link to="/" className="hover:text-rose-700">Accueil</Link></li>
        <li aria-hidden="true"><ChevronRight size={14} /></li>
        <li aria-current="page" className="text-ink/85 font-medium">{route.breadcrumb}</li>
      </ol>
    </nav>
  );
}
