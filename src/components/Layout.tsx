import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { TapestryBand, RibbonButton } from './ui/ChronicleComponents';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Commodities', path: '/commodities' },
    { name: 'Trust & Compliance', path: '/trust' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-linen w-full h-[80px] flex flex-col">
      <TapestryBand thin />
      <div className="flex-1 flex items-center justify-between px-6 max-w-7xl mx-auto w-full">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-warp flex items-center justify-center mix-blend-multiply border border-gilt/30 group-hover:border-gilt transition-colors">
             {/* Logo placeholder */}
             <div className="w-6 h-6 border rounded-full border-gilt/50 flex flex-col items-center justify-center">
                <div className="w-1 h-1 bg-madder rounded-full shrink-0"/>
             </div>
          </div>
          <div className="flex flex-col">
            <span className="font-blackletter text-2xl text-warp leading-none tracking-wide">The Roundtable</span>
            <span className="font-engraved text-[9px] md:text-[10px] text-madder tracking-[0.3em] font-medium leading-none mt-1">VENTURES · EXPORTERS OF THE HARVEST</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => {
              const isActive = location.pathname.includes(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-gothic text-lg transition-colors relative pb-1 ${
                    isActive ? 'text-madder' : 'text-warp hover:text-madder'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-madder" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group/lang">
              <button className="flex items-center gap-2 bg-warp/5 rounded-full px-3 py-1 hover:bg-warp/10 transition-colors">
                <Globe className="w-4 h-4 text-warp" />
                <span className="font-engraved text-xs font-semibold text-warp">EN</span>
              </button>
            </div>
            
            <Link to="/quote">
              <RibbonButton className="py-3 px-6 text-xs">REQUEST QUOTE</RibbonButton>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-warp p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-linen border-b border-warp/10 shadow-lg lg:hidden flex flex-col p-6 gap-4 z-40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-gothic text-2xl text-warp hover:text-madder border-b border-warp/10 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
            <RibbonButton className="w-full">REQUEST QUOTE</RibbonButton>
          </Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="relative bg-umber text-linen">
      <TapestryBand />
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ backgroundImage: 'url(#pattern-bold)', opacity: 0.06 }} 
      />
      
      <div className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column (5 cols) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-umber p-2 shrink-0">
               <div className="w-full h-full border-2 border-umber/20 rounded-full border-double flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-umber rounded-full" />
               </div>
            </div>
            <div className="flex flex-col">
              <span className="font-blackletter text-2xl text-linen">The Roundtable</span>
              <span className="font-engraved text-[10px] text-gilt tracking-widest mt-1">VENTURES · ANNO LAGOS</span>
            </div>
          </div>
          
          <p className="font-prose text-linen/80 leading-relaxed text-lg max-w-md">
            Bridging the gap between West Africa's agricultural abundance and global markets through trust, transparency, and unyielding standards.
          </p>

          <a href="mailto:info@theroundtableventures.com" className="font-prose text-gilt hover:text-white transition-colors">
            info@theroundtableventures.com
          </a>

          <div className="font-engraved text-[13px] text-linen/60 flex flex-wrap items-center gap-2 pt-4">
            <span>LC-FRIENDLY</span>
            <span className="text-madder">·</span>
            <span>SGS INSPECTED</span>
            <span className="text-madder">·</span>
            <span>FOB / CIF OPTIONS</span>
          </div>
        </div>

        {/* Right Area (7 cols) */}
        <div className="col-span-1 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <h4 className="font-engraved text-gilt tracking-widest font-semibold mb-2">TRADE HUB</h4>
            <Link to="/quote" className="font-prose text-linen/80 hover:text-white transition-colors">Instant Quote Builder</Link>
            <Link to="/trust" className="font-prose text-linen/80 hover:text-white transition-colors">Trust & Compliance</Link>
            <Link to="/lc-guide" className="font-prose text-linen/80 hover:text-white transition-colors">Letter of Credit Guide</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-engraved text-gilt tracking-widest font-semibold mb-2">COMMODITIES</h4>
            <Link to="/commodities/chia" className="font-prose text-linen/80 hover:text-white transition-colors">Chia Seeds</Link>
            <Link to="/commodities/sesame" className="font-prose text-linen/80 hover:text-white transition-colors">Sesame Seeds</Link>
            <Link to="/commodities/cashew" className="font-prose text-linen/80 hover:text-white transition-colors">Cashew Nuts</Link>
            <Link to="/commodities/ginger" className="font-prose text-linen/80 hover:text-white transition-colors">Dried Ginger</Link>
            <Link to="/commodities" className="font-engraved text-xs text-gilt pt-2">VIEW ALL →</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-engraved text-gilt tracking-widest font-semibold mb-2">COMPANY</h4>
            <Link to="/about" className="font-prose text-linen/80 hover:text-white transition-colors">About Us</Link>
            <Link to="/privacy" className="font-prose text-linen/80 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="font-prose text-linen/80 hover:text-white transition-colors">Terms of Trade</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-linen/10 relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-prose text-linen/50">
            &copy; {new Date().getFullYear()} The Roundtable Ventures. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-linen/50 hover:text-linen transition-colors"><Linkedin className="w-5 h-5"/></a>
            <a href="#" className="text-linen/50 hover:text-linen transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="text-linen/50 hover:text-linen transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="text-linen/50 hover:text-linen transition-colors"><Twitter className="w-5 h-5"/></a>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-prose text-linen/50 hover:text-linen transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="font-prose text-linen/50 hover:text-linen transition-colors text-sm">Terms of Trade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
