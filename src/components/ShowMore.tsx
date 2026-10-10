'use client';

import { Children, useState, type ReactNode } from 'react';

/** Shows the first `initial` items, then the rest on demand – keeps long galleries short on phones. */
export default function ShowMore({ initial = 6, children, className = '', label = 'Voir plus de résultats' }: { initial?: number; children: ReactNode; className?: string; label?: string }) {
  const [all, setAll] = useState(false);
  const items = Children.toArray(children);
  return (
    <>
      <div className={className}>{all ? items : items.slice(0, initial)}</div>
      {!all && items.length > initial && (
        <div className="mt-8 flex justify-center">
          <button type="button" onClick={() => setAll(true)} className="btn-ghost">
            {label} ({items.length - initial})
          </button>
        </div>
      )}
    </>
  );
}
