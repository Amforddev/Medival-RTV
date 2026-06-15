import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  // Human-readable names for paths
  const routeNames: Record<string, string> = {
    'about': 'About Us',
    'commodities': 'Commodities',
    'trust': 'Trust & Compliance',
    'quote': 'Request Quote',
    'lc-guide': 'Letter of Credit Guide',
    'privacy': 'Privacy Charter',
    'terms': 'Terms of Trade',
  };

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="max-w-7xl mx-auto w-full px-6 pt-6 flex items-center gap-2 text-[10px] md:text-xs font-engraved tracking-[0.2em] text-warp/60"
    >
      <Link 
        to="/" 
        aria-label="Back to Chronicle home page" 
        className="hover:text-madder transition-colors font-semibold"
      >
        HOME
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const rawLabel = routeNames[value] || value;
        const label = rawLabel.toUpperCase();

        return (
          <React.Fragment key={to}>
            <span className="text-gilt text-[8px] select-none" aria-hidden="true">✥</span>
            {isLast ? (
              <span className="text-madder font-semibold" aria-current="page">
                {label}
              </span>
            ) : (
              <Link 
                to={to} 
                aria-label={`Navigate to ${rawLabel}`}
                className="hover:text-madder transition-colors"
              >
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
