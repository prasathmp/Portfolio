import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Microsoft Clarity & Custom Heatmap Tracking Integration Component
 * Tracks click maps, scroll depth, session recordings, and user friction points across all SPA routes.
 */
export default function HeatmapTracker({ clarityProjectId = 'p753jxyz' }) {
  const location = useLocation();

  // Initialize Microsoft Clarity script once on mount
  useEffect(() => {
    const projectId = window.VITE_CLARITY_PROJECT_ID || clarityProjectId;
    
    if (!window.clarity && projectId) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        if (y && y.parentNode) {
          y.parentNode.insertBefore(t, y);
        } else {
          document.head.appendChild(t);
        }
      })(window, document, "clarity", "script", projectId);
    }
  }, [clarityProjectId]);

  // Notify Clarity on single-page-application (SPA) route changes
  useEffect(() => {
    if (window.clarity) {
      try {
        window.clarity("set", "page", location.pathname + location.search);
      } catch (err) {
        // Silently handle if script not loaded yet
      }
    }
  }, [location]);

  return null;
}
