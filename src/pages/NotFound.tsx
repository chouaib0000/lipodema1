import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container mx-auto py-24 lg:py-32 max-w-2xl">
      <span className="eyebrow-rule" />
      <h1 className="text-4xl lg:text-5xl">Cette page n’existe pas</h1>
      <p className="mt-5 text-lg text-ink/75">
        Le lien est peut-être ancien ou mal saisi. Retrouvez les informations sur le lipœdème et son traitement à Casablanca depuis l’une de ces pages.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">Page d’accueil</Link>
        <Link to="/maladie" className="btn-ghost">Le lipœdème</Link>
        <Link to="/contact" className="btn-ghost">Contact</Link>
      </div>
    </section>
  );
}
