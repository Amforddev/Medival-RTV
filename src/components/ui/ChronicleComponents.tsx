import { ReactNode, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function CustomSelect({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select..." 
}: { 
  value: string; 
  onChange: (val: string) => void;
  options: {value: string, label: string}[];
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(o => o.value === value);

  return (
    <div className="relative w-full" ref={ref}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-umber/40 border border-thread/40 p-4 font-prose text-lg text-left flex items-center justify-between transition-colors hover:border-gilt focus:border-gilt outline-none"
      >
        <span className={value ? "text-warp" : "text-warp/50"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-5 h-5 text-warp/70 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-umber border border-thread/40 shadow-xl z-50 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`w-full text-left p-4 font-prose text-lg transition-colors hover:bg-warp/5 ${value === option.value ? 'bg-warp/10 text-gilt font-bold' : 'text-warp'}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function TapestryBand({ thin = false }: { thin?: boolean }) {
  const height = thin ? 14 : 26;
  return (
    <div
      className="w-full relative shadow-[inset_0_2px_rgba(232,220,194,0.08),inset_0_-2px_rgba(0,0,0,0.4)]"
      style={{ height, backgroundColor: "var(--color-warp)" }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 13 Q13 0, 26 13 T52 13' stroke='%23B68A3C' fill='none' stroke-width='1.5'/%3E%3Cpath d='M0 13 Q13 26, 26 13 T52 13' stroke='%237A6233' fill='none' stroke-width='1'/%3E%3Ccircle cx='13' cy='6.5' r='2' fill='%2393311F'/%3E%3Ccircle cx='39' cy='19.5' r='2' fill='%2393311F'/%3E%3Ccircle cx='26' cy='13' r='1.4' fill='%23B68A3C'/%3E%3Ccircle cx='0' cy='13' r='1.4' fill='%23B68A3C'/%3E%3C/svg>")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
}

export function MillefleurStrip({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`w-full ${className}`}
      style={{ 
        backgroundColor: "var(--color-verdure)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 64 Q20 40, 15 20' stroke='%236E5B41' fill='none'/%3E%3Ccircle cx='15' cy='20' r='3' fill='%2393311F'/%3E%3Cpath d='M50 64 Q45 30, 60 10' stroke='%236E5B41' fill='none'/%3E%3Ccircle cx='60' cy='10' r='2.5' fill='%23E8DCC2'/%3E%3Cpath d='M90 64 Q100 50, 95 30' stroke='%236E5B41' fill='none'/%3E%3Ccircle cx='95' cy='30' r='3.5' fill='%23B68A3C'/%3E%3Ccircle cx='30' cy='45' r='1' fill='%23E8DCC2'/%3E%3Ccircle cx='80' cy='15' r='1.5' fill='%2393311F'/%3E%3Cpath d='M20 40 Q25 45, 30 40' stroke='%2357624A' fill='none'/%3E%3C/svg>")`,
        backgroundRepeat: 'repeat'
      }}
    />
  );
}

export function OrnamentDivider() {
  return (
    <div className="flex justify-center w-full my-4">
      <svg width="220" height="24" viewBox="0 0 220 24" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="12" x2="88" y2="12" stroke="#B68A3C" strokeWidth="1.2" />
        <line x1="132" y1="12" x2="220" y2="12" stroke="#B68A3C" strokeWidth="1.2" />
        <path d="M110,2 L120,12 L110,22 L100,12 Z" stroke="#B68A3C" fill="none" strokeWidth="1.2" />
        <circle cx="110" cy="12" r="2.4" fill="#B68A3C" />
        <circle cx="92" cy="12" r="1.6" fill="#B68A3C" />
        <circle cx="128" cy="12" r="1.6" fill="#B68A3C" />
      </svg>
    </div>
  );
}

export function WaxSeal({ letter }: { letter: string }) {
  return (
    <div 
      className="w-24 h-24 rounded-full flex items-center justify-center relative mx-auto"
      style={{
        background: 'radial-gradient(circle at 32% 28%, #B5452F 0%, #B5452F 28%, #93311F 45%, #5E1D12 100%)',
        boxShadow: '0 3px 6px rgba(38,28,18,0.45), inset 0 0 0 1px rgba(232,220,194,0.18), inset 0 -4px 6px rgba(0,0,0,0.35)'
      }}
    >
      <span className="font-blackletter text-3xl text-linen">{letter}</span>
    </div>
  );
}

export function RibbonButton({ 
  children, 
  variant = 'primary', 
  className = "",
  ...props
}: { 
  children: ReactNode; 
  variant?: 'primary' | 'ghost' | 'linen';
  className?: string;
  [x: string]: any;
}) {
  const baseClasses = "relative px-10 py-4 font-engraved tracking-[0.22em] uppercase text-sm font-medium transition-colors duration-200 inline-block text-center";
  let variantClasses = "";
  
  if (variant === 'primary') {
    variantClasses = "bg-madder text-linen hover:bg-warp hover:text-linen";
  } else if (variant === 'ghost') {
    variantClasses = "border border-warp/50 text-warp hover:bg-warp hover:text-linen";
  } else if (variant === 'linen') {
    variantClasses = "bg-linen text-warp hover:bg-gilt";
  }

  return (
    <button className={`${baseClasses} ${variantClasses} group ${className}`} {...props}>
      <span className="absolute left-[6px] top-[6px] bottom-[6px] w-[1px] bg-current opacity-45 pointer-events-none" />
      {children}
      <span className="absolute right-[6px] top-[6px] bottom-[6px] w-[1px] bg-current opacity-45 pointer-events-none" />
    </button>
  );
}

export function PanelFrame({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div 
      className={`relative bg-parchment border border-thread transition-transform duration-300 hover:-translate-y-1 ${className}`}
      style={{
        boxShadow: 'inset 0 0 0 4px var(--color-linen), inset 0 0 0 5px var(--color-thread)'
      }}
    >
      {children}
    </div>
  );
}

export function BackgroundPatterns() {
  return (
    <svg width="0" height="0" className="absolute pointer-events-none">
      <defs>
        <pattern id="pattern-bold" width="96" height="96" patternUnits="userSpaceOnUse" viewBox="0 0 64 64">
          <path d="M32,4 L60,32 L32,60 L4,32 Z" stroke="#B68A3C" fill="none" strokeWidth="1.5" />
          <path d="M32,16 L48,32 L32,48 L16,32 Z" stroke="#93311F" fill="none" strokeWidth="1" />
          <circle cx="32" cy="32" r="2.5" fill="#B68A3C" />
        </pattern>
        <pattern id="pattern-soft" width="96" height="96" patternUnits="userSpaceOnUse" viewBox="0 0 64 64">
          <path d="M32,4 L60,32 L32,60 L4,32 Z" stroke="rgba(38, 28, 18, 0.12)" fill="none" strokeWidth="1.5" />
        </pattern>
      </defs>
    </svg>
  );
}
