import { useEffect } from 'react';

export default function useHashNavigation(hash, onHit) {
  useEffect(() => {
    if (!hash) return;

    const targetId = hash.slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      if (typeof onHit === 'function') onHit(targetId);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash, onHit]);
}
