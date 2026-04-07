import { useState, useEffect } from 'react';

/**
 * useViewCounter — Mock unique view tracking
 *
 * Uses localStorage (per slug) for unique views and sessionStorage to prevent
 * refresh-spamming. In production, replace with server-side deduplication
 * using IP + fingerprint + user-agent hashing.
 */
export function useViewCounter(slug: string) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const storageKey = `imperio-views-${slug}`;
    const sessionKey = `imperio-session-${slug}`;

    const currentViews = parseInt(localStorage.getItem(storageKey) || '0', 10);

    if (!sessionStorage.getItem(sessionKey)) {
      const newViews = currentViews + 1;
      localStorage.setItem(storageKey, String(newViews));
      sessionStorage.setItem(sessionKey, '1');
      setViews(newViews);
    } else {
      setViews(currentViews);
    }
  }, [slug]);

  return views;
}
