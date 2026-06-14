import { motion } from 'motion/react';
import { Users, Globe, Leaf } from 'lucide-react';
import { PanelFrame } from '../components/ui/ChronicleComponents';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      {/* HEADER */}
      <div className="bg-umber relative overflow-hidden text-linen w-full flex flex-col items-center justify-center py-24 px-6 min-h-[350px]">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(232, 220, 194, 0.05) 45%, rgba(232, 220, 194, 0.05) 55%, transparent 0)', backgroundSize: '16px 16px', opacity: 0.1 }} />
        
        <h1 className="font-engraved font-bold text-4xl md:text-[60px] mb-6 relative z-10 text-center tracking-wide">OUR STORY</h1>
        <p className="font-prose italic text-linen/70 text-xl relative z-10 text-center max-w-2xl">Bridging the gap between West Africa's agricultural abundance and the world's most discerning buyers.</p>

        {/* Zigzag bottom border via CSS */}
        <div className="absolute bottom-0 left-0 w-full h-4" style={{
          background: 'linear-gradient(-45deg, var(--color-linen) 8px, transparent 0), linear-gradient(45deg, var(--color-linen) 8px, transparent 0)',
          backgroundPosition: 'left-bottom',
          backgroundRepeat: 'repeat-x',
          backgroundSize: '16px 16px'
        }} />
      </div>

      {/* MISSION SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="relative flex justify-center items-center w-full max-w-[500px] mx-auto aspect-square"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 rounded-full border border-madder/30" style={{ background: '#5A2F21' }}></div>
          <div className="absolute inset-[10%] rounded-full border border-gilt/40" style={{ background: '#D9A24A' }}></div>
          <div className="absolute inset-[20%] rounded-full border border-verdure/40" style={{ background: '#2E7A3E' }}></div>
          <div className="absolute inset-[30%] rounded-full overflow-hidden border-4 border-linen shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop" 
              alt="Farmer"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <h2 className="font-engraved font-bold text-3xl md:text-4xl text-warp leading-tight border-b border-gilt/30 pb-6">
            ROOTED IN ORIGIN.<br/>BUILT FOR GLOBAL TRADE.
          </h2>
          <p className="font-prose text-lg text-warp/90 leading-relaxed mt-2 drop-cap">
            The Roundtable Ventures was established with a singular vision: to formalize and elevate the export of West African agricultural commodities. We recognized that the true value of the harvest was often lost in fragmented supply chains, opaque quality standards, and unreliable logistics.
          </p>
          <p className="font-prose text-lg text-warp/90 leading-relaxed">
            By sitting at the table with the growers, the processors, and the independent surveyors, we ensure that every metric ton leaving the Port of Lagos meets an unyielding standard. We trade not just in goods, but in certainty.
          </p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 px-6 bg-warp/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { i: Users, t: 'The People', d: 'We source directly from farmer cooperatives, ensuring fair compensation and fostering sustainable agricultural practices across Nigeria.' },
            { i: Leaf, t: 'The Standard', d: 'Every grain, seed, and pod is graded and sorted in our facilities, then independently verified by SGS before the container doors close.' },
            { i: Globe, t: 'The Reach', d: 'Operating seamlessly on FOB and CIF terms, our logistics network spans from the rural hinterlands to the deep-water ports, extending globally.' }
          ].map((val, idx) => {
            const Icon = val.i;
            return (
              <motion.div 
                key={val.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <PanelFrame className="p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-madder/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-madder" />
                  </div>
                  <h3 className="font-engraved text-gilt text-xl font-bold mb-4">{val.t}</h3>
                  <p className="font-prose text-warp/80 text-[16px] leading-relaxed">{val.d}</p>
                </PanelFrame>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* TEAM / FOUNDING SECTION */}
      <section className="py-24 px-6 bg-umber text-linen relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(#pattern-bold)', opacity: 0.05 }} />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="font-blackletter text-5xl md:text-6xl text-linen mb-10">The Founding Charter</h2>
          <div className="w-full max-w-2xl px-8 py-10 border border-gilt/20 bg-warp/20 backdrop-blur-sm">
             <p className="font-prose italic text-xl text-linen/90 leading-loose">
               "Let it be known that on this day, we establish a house of trade bound by the soil but governed by the seal. We shall move the harvest not on promises, but on paper. We shall sit at the table as one body: the farmer who sows, the yard that sorts, and the surveyor who swears to the standard."
             </p>
             <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-madder/50" />
                <span className="font-engraved text-xs text-gilt tracking-widest">ANNO LAGOS</span>
                <div className="h-[1px] w-12 bg-madder/50" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
