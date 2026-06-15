import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { TapestryBand, RibbonButton } from './ui/ChronicleComponents';
import Breadcrumbs from './Breadcrumbs';
import { motion, AnimatePresence } from 'motion/react';
import WaxSealShortcut from './WaxSealShortcut';

function changeLanguage(langCode: string) {
  const selectField = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (selectField) {
    selectField.value = langCode;
    selectField.dispatchEvent(new Event("change"));
  }
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const location = useLocation();

  const handleLangChange = (code: string, label: string) => {
    setCurrentLang(label);
    changeLanguage(code);
  };

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
        <Link to="/" aria-label="The Roundtable Ventures Home Page" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center bg-[#ECE5D5] border border-gilt/30 group-hover:border-gilt transition-colors overflow-hidden shrink-0 shadow-sm">
             <img src="/logo.png" alt="TRTV Logo" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col">
            <span className="font-blackletter text-xl md:text-2xl text-warp leading-none tracking-wide">The Roundtable</span>
            <span className="font-engraved text-[8px] md:text-[10px] text-madder tracking-[0.2em] md:tracking-[0.3em] font-medium leading-none mt-1">
              VENTURES <span className="hidden sm:inline">· EXPORTERS OF THE HARVEST</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4 animate-opacity">
            {navLinks.map((link) => {
              const isActive = location.pathname.includes(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  aria-label={`Go to ${link.name}`}
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
            <div className="relative group/lang cursor-pointer">
              <button aria-label="Select Language" className="flex items-center gap-2 bg-warp/5 rounded-full px-3 py-1 hover:bg-warp/10 transition-colors">
                <Globe className="w-4 h-4 text-warp" />
                <span className="font-engraved text-xs font-semibold text-warp">{currentLang}</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-32 bg-umber border border-thread/30 opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-200 z-50 shadow-xl">
                 <div className="flex flex-col">
                   <button onClick={() => handleLangChange('en', 'EN')} aria-label="Translate to English" className="px-4 py-3 text-left font-engraved text-xs text-warp hover:bg-warp/5 transition-colors border-b border-thread/50">ENGLISH</button>
                   <button onClick={() => handleLangChange('ar', 'AR')} aria-label="Translate to Arabic" className="px-4 py-3 text-left font-engraved text-xs text-warp hover:bg-warp/5 transition-colors border-b border-thread/50">ARABIC</button>
                   <button onClick={() => handleLangChange('zh-CN', 'ZH')} aria-label="Translate to Chinese" className="px-4 py-3 text-left font-engraved text-xs text-warp hover:bg-warp/5 transition-colors border-b border-thread/50">CHINESE</button>
                   <button onClick={() => handleLangChange('es', 'ES')} aria-label="Translate to Spanish" className="px-4 py-3 text-left font-engraved text-xs text-warp hover:bg-warp/5 transition-colors border-b border-thread/50">SPANISH</button>
                   <button onClick={() => handleLangChange('pl', 'PL')} aria-label="Translate to Polish" className="px-4 py-3 text-left font-engraved text-xs text-warp hover:bg-warp/5 transition-colors border-b border-thread/50">POLISH</button>
                   <button onClick={() => handleLangChange('ko', 'KO')} aria-label="Translate to Korean" className="px-4 py-3 text-left font-engraved text-xs text-warp hover:bg-warp/5 transition-colors border-b border-thread/50">KOREAN</button>
                   <button onClick={() => handleLangChange('ja', 'JA')} aria-label="Translate to Japanese" className="px-4 py-3 text-left font-engraved text-xs text-warp hover:bg-warp/5 transition-colors">JAPANESE</button>
                 </div>
              </div>
            </div>
            
            <Link to="/quote" aria-label="Request a trade quote">
              <RibbonButton className="py-3 px-6 text-xs">REQUEST QUOTE</RibbonButton>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-warp p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-linen border-b border-warp/10 shadow-lg lg:hidden flex flex-col p-6 gap-4 z-40">
          <div className="flex flex-wrap gap-2 mb-4">
            {['EN', 'AR', 'ZH', 'ES', 'PL', 'KO', 'JA'].map(lang => {
              const codes: Record<string, string> = { EN: 'en', AR: 'ar', ZH: 'zh-CN', ES: 'es', PL: 'pl', KO: 'ko', JA: 'ja' };
              return (
                <button 
                  key={lang}
                  onClick={() => handleLangChange(codes[lang], lang)}
                  className={`font-engraved text-xs px-3 py-1 rounded-full border ${currentLang === lang ? 'border-madder text-madder bg-madder/5' : 'border-thread/50 text-warp bg-umber'}`}
                >
                  {lang}
                </button>
              )
            })}
          </div>

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
            <div className="w-14 h-14 rounded-full flex items-center justify-center p-1 shrink-0 overflow-hidden bg-[#ECE5D5] shadow-md border border-gilt/30">
               <img src="/logo.png" alt="TRTV Decorative Logo" className="w-full h-full object-contain mix-blend-multiply" loading="lazy" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col">
              <span className="font-blackletter text-2xl text-linen leading-none">The Roundtable</span>
              <span className="font-engraved text-[11px] text-gilt tracking-widest mt-2">VENTURES</span>
            </div>
          </div>
          
          <p className="font-prose text-linen/80 leading-relaxed text-lg max-w-md">
            Bridging the gap between West Africa's agricultural abundance and global markets through trust, transparency, and unyielding standards.
          </p>

          <a href="mailto:info@theroundtableventures.com" aria-label="Send email to The Roundtable Ventures" className="font-prose text-gilt hover:text-white transition-colors">
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
            <Link to="/quote" aria-label="Open Instant Quote Builder" className="font-prose text-linen/80 hover:text-white transition-colors">Instant Quote Builder</Link>
            <Link to="/trust" aria-label="View Trust & Compliance specifications" className="font-prose text-linen/80 hover:text-white transition-colors">Trust & Compliance</Link>
            <Link to="/lc-guide" aria-label="Read Letter of Credit detailed guide" className="font-prose text-linen/80 hover:text-white transition-colors">Letter of Credit Guide</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-engraved text-gilt tracking-widest font-semibold mb-2">COMMODITIES</h4>
            <Link to="/commodities/chia" aria-label="View Chia Seeds commodity profiles" className="font-prose text-linen/80 hover:text-white transition-colors">Chia Seeds</Link>
            <Link to="/commodities/sesame" aria-label="View Sesame Seeds commodity profiles" className="font-prose text-linen/80 hover:text-white transition-colors">Sesame Seeds</Link>
            <Link to="/commodities/cashew" aria-label="View Cashew Nuts commodity profiles" className="font-prose text-linen/80 hover:text-white transition-colors">Cashew Nuts</Link>
            <Link to="/commodities/ginger" aria-label="View Dried Ginger commodity profiles" className="font-prose text-linen/80 hover:text-white transition-colors">Dried Ginger</Link>
            <Link to="/commodities" aria-label="View all commodities offered" className="font-engraved text-xs text-gilt pt-2">VIEW ALL →</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-engraved text-gilt tracking-widest font-semibold mb-2">COMPANY</h4>
            <Link to="/about" aria-label="Read our corporate history" className="font-prose text-linen/80 hover:text-white transition-colors">About Us</Link>
            <Link to="/privacy" aria-label="Read our Privacy Policy and Charter" className="font-prose text-linen/80 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" aria-label="View our global Terms of Trade" className="font-prose text-linen/80 hover:text-white transition-colors">Terms of Trade</Link>
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
            <a href="https://web.facebook.com/theroundtableventures" target="_blank" rel="noopener noreferrer" aria-label="Visit our official Facebook page" className="text-linen/50 hover:text-linen transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="https://www.instagram.com/theroundtableventuresltd/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-linen/50 hover:text-linen transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" aria-label="Visit our digital Twitter archive" className="text-linen/50 hover:text-linen transition-colors"><Twitter className="w-5 h-5"/></a>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" aria-label="Privacy covenants" className="font-prose text-linen/50 hover:text-linen transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" aria-label="Terms of trade and commerce" className="font-prose text-linen/50 hover:text-linen transition-colors text-sm">Terms of Trade</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Island */}
      <a 
        href="https://wa.link/3wd5xt" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-12 h-12 shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
        title="Chat with us on WhatsApp"
        aria-label="Initiate direct trade discussion on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WaxSealShortcut />
    </div>
  );
}
