import { useEffect, useRef } from 'react';

/**
 * PostContent renders sanitized HTML and adds IDs to headings for TOC navigation.
 */
export function PostContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const headings = ref.current.querySelectorAll('h2, h3');
    headings.forEach((el, i) => {
      el.id = `heading-${i}`;
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="imperio-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
