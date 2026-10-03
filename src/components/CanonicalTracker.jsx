import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Dynamic Canonical Link Manager Component
 * Ensures every single route explicitly renders the primary canonical URL tag
 * pointing to https://www.lifeofprasath.com{pathname}
 */
export default function CanonicalTracker() {
  const location = useLocation();

  useEffect(() => {
    const primaryDomain = 'https://www.lifeofprasath.com';
    let path = location.pathname;
    
    // Normalize root path
    if (path === '/' || path === '') {
      path = '/';
    }

    const canonicalUrl = `${primaryDomain}${path}`;

    // Find or create canonical link tag in head
    let linkTag = document.querySelector("link[rel='canonical']");
    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.setAttribute('rel', 'canonical');
      document.head.appendChild(linkTag);
    }
    
    linkTag.setAttribute('href', canonicalUrl);
  }, [location]);

  return null;
}
