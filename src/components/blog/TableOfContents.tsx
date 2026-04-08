import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ htmlContent }: { htmlContent: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const els = doc.querySelectorAll('h2, h3');
    const items: Heading[] = [];
    els.forEach((el, i) => {
      const id = `heading-${i}`;
      items.push({ id, text: el.textContent || '', level: parseInt(el.tagName[1]) });
    });
    setHeadings(items);
  }, [htmlContent]);

  if (headings.length < 2) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="p-4 rounded-lg bg-muted/30 border border-border/40">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Neste artigo</h4>
      <nav className="space-y-1">
        {headings.map((h) => (
          <button
            key={h.id}
            onClick={() => scrollTo(h.id)}
            className={`block text-left text-xs text-muted-foreground hover:text-accent transition-colors w-full ${
              h.level === 3 ? 'pl-4' : ''
            }`}
          >
            {h.text}
          </button>
        ))}
      </nav>
    </div>
  );
}
