import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function WaxSealShortcut() {
  return (
    <Link 
      to="/quote" 
      aria-label="Dispatch trade proposal to the trading desk"
      className="fixed bottom-6 left-6 z-50 group pointer-events-auto"
    >
      <div className="relative flex items-center justify-center">
        {/* Hover label (Parchment Aesthetic) */}
        <div className="absolute left-16 bg-umber border border-gilt/40 py-1.5 px-3.5 shadow-xl rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
          <span className="font-engraved text-[10px] md:text-xs text-warp tracking-[0.18em] uppercase font-bold flex items-center gap-1.5">
            <span className="text-madder">✥</span> SEAL COVENANT
          </span>
        </div>

        {/* Squiggly fluid wax ring simulating a hand-pressed seal */}
        <motion.div 
          className="w-14 h-14 flex items-center justify-center relative select-none"
          style={{
            background: 'radial-gradient(circle at 32% 28%, #D4543B 0%, #B5452F 30%, #852615 65%, #4F1409 100%)',
            boxShadow: '0 6px 14px rgba(38,28,18,0.48), inset 0 0.5px 0 1px rgba(255,255,255,0.2), inset 0 -4px 6px rgba(0,0,0,0.45)',
            borderRadius: '48% 52% 49% 51% / 52% 48% 53% 47%' // Organically uneven
          }}
          whileHover={{ 
            scale: 1.12,
            rotate: 12,
            borderRadius: '52% 48% 51% 49% / 48% 52% 47% 53%', // Smooth fluid morph
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Internal stamped circular ridge */}
          <div 
            className="absolute inset-1.5 border border-dashed border-linen/25 flex items-center justify-center overflow-hidden" 
            style={{ borderRadius: 'inherit' }}
          >
            {/* Tudor Rose Crest Icon */}
            <img 
              src="/rose.png" 
              alt="Tudor Rose Crest" 
              className="w-9 h-9 object-contain rounded-full opacity-90 transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
