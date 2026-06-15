import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import cultivationImg from '../assets/images/strawberry_harvest_1781456355178.jpg';
import shipLoadingImg from '../assets/images/export_loading_ship_african_1781549845231.jpg';
import truckLoadingImg from '../assets/images/export_loading_truck_african_1781549859610.jpg';
import { 
  TapestryBand, 
  MillefleurStrip, 
  OrnamentDivider, 
  RibbonButton, 
  PanelFrame,
  WaxSeal
} from '../components/ui/ChronicleComponents';
import ScrollReveal from '../components/ScrollReveal';

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* PANEL 1: PROLOGUE */}
      <section className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center pb-20">
        <TapestryBand />
        <div className="absolute inset-0 bg-pattern-linen opacity-60 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(#pattern-soft)', opacity: 0.6 }} />

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto pt-24 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-engraved text-thread tracking-[0.3em] text-[11px] md:text-sm mb-6 uppercase">
              Lagos · Nigeria — Exporters of the Harvest
            </h3>
          </motion.div>

          <motion.h1 
            className="font-blackletter leading-[0.95]"
            style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <span className="text-warp block">From Soil</span>
            <span className="text-madder block mt-[-0.2em]">unto Sea</span>
          </motion.h1>

          <motion.div 
            className="flex items-center gap-4 mt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-[1px] w-10 md:w-20 bg-gilt" />
            <h2 className="font-gothic text-warp text-xl md:text-2xl tracking-wide">— A Roundtable Chronicle —</h2>
            <div className="h-[1px] w-10 md:w-20 bg-gilt" />
          </motion.div>

          <motion.p 
            className="font-prose italic text-thread text-lg md:text-xl max-w-2xl text-center mt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Herein is told the passage of West Africa's harvest — grown by many hands, graded to a single standard, and shipped under seal to the kitchens and factories of the world.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6 mt-10 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/quote">
              <RibbonButton variant="primary">REQUEST A QUOTE</RibbonButton>
            </Link>
            <Link to="/commodities">
              <RibbonButton variant="ghost">BEHOLD THE GOODS</RibbonButton>
            </Link>
          </motion.div>
        </div>

        <MillefleurStrip className="h-20 absolute bottom-0 left-0 w-full" />
      </section>

      {/* PANEL 2: CHAPTER I */}
      <TapestryBand thin />
      <section className="py-24 px-6 relative bg-linen z-10">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="text-center mb-14 w-full flex flex-col items-center">
              <span className="font-engraved text-xs text-madder tracking-[0.3em] uppercase mb-3">Chapter the First — Origin</span>
              <h2 className="font-gothic text-[40px] md:text-[50px] text-warp">
                <span className="text-gilt mr-2">I.</span>The Land
              </h2>
              <OrnamentDivider />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="flex flex-col gap-6">
                <p className="font-prose text-lg text-warp/90 leading-[1.9] drop-cap">
                  Before any vessel is laden, there is the land. Across the river plains and red-earth belts of Nigeria, smallholder farmers raise the crops this house was founded to carry: oil palm and sesame, cowpea and ginger, hibiscus, egusi and cashew. We buy at origin, from the people who grow it.
                </p>
                <p className="font-prose text-lg text-warp/80 italic">
                  The Roundtable takes its name in earnest: farmer, processor, surveyor and buyer each hold a seat, and no consignment moves until every seat is satisfied.
                </p>
                <Link to="/about" className="font-engraved text-xs text-madder border-b border-madder/40 pb-1 w-max hover:text-warp transition-colors mt-2">
                  READ THE FULL HISTORY →
                </Link>
              </div>

              <div className="flex flex-col items-center w-full">
                <div className="w-full max-w-[28rem] aspect-[3/4] mask-arch bg-verdure relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=70&w=800&auto=format&fit=crop" 
                    alt="West African Farm Cultivation"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter-tapestry group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </div>
                <span className="font-engraved text-[11px] text-thread mt-4 text-center">PLATE I — THE CULTIVATION</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PANEL 3: CHAPTER II */}
      <TapestryBand thin />
      <section className="py-24 px-6 relative bg-linen">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(#pattern-soft)', opacity: 0.4 }} />
        
        <ScrollReveal>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
            <div className="text-center mb-16 w-full flex flex-col items-center">
              <span className="font-engraved text-xs text-madder tracking-[0.3em] uppercase mb-3">Chapter the Second — What we export</span>
              <h2 className="font-gothic text-[40px] md:text-[50px] text-warp">
                <span className="text-gilt mr-2">II.</span>The Treasures
              </h2>
              <OrnamentDivider />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 md:gap-7 w-full">
              {[
                { id: 'palm', name: 'Palm Oil', cat: 'OILS & AGRICULTURAL COMMODITIES', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW662y3XYVtbpBmpEoMkCyvdMGqsbRYGDpvwjMzeIuhQ' },
                { id: 'sesame', name: 'Sesame Seeds', cat: 'SEEDS & NUTS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkjShdn_iKUzP3Ln-kPX4XadWHLe-13bZu4jIcJO0FA' },
                { id: 'ginger', name: 'Dried Ginger', cat: 'SPICES & AGRO-PROCESSED', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnZFn8OQhD-D9NLlzg2oux8I2REfhRR7tDKVcqZnLPg' },
                { id: 'hibiscus', name: 'Hibiscus (Zobo)', cat: 'BOTANICALS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgQayQ8Yf5oGIeY0YWpkejiDHeT3cObvjMdo7VT33AQ' }
              ].map((item, idx) => (
                <div key={item.name}>
                   <Link to={`/commodities/${item.id}`} aria-label={`View complete specifications for ${item.name}`}>
                      <PanelFrame className="p-3 md:p-4 group">
                        <div className="aspect-[4/5] mask-arch bg-verdure/20 overflow-hidden relative mb-4">
                          <img 
                            src={item.img} 
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover filter-tapestry group-hover:scale-105 transition-transform duration-700" 
                          />
                        </div>
                        <div className="flex flex-col items-center text-center pb-2 px-1">
                          <h3 className="font-gothic text-xl md:text-2xl text-warp leading-tight mb-2">{item.name}</h3>
                          <span className="font-engraved text-[9px] md:text-[10px] text-thread tracking-[0.3em] uppercase">{item.cat}</span>
                        </div>
                      </PanelFrame>
                   </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-14 w-full flex justify-center">
               <Link to="/commodities">
                  <RibbonButton variant="ghost">VIEW ALL TREASURES</RibbonButton>
               </Link>
            </div>

            <p className="font-prose italic text-thread text-lg mt-12 text-center max-w-xl">
              Thirteen goods, one standard. Each card opens its full specification and logistics.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* PANEL 4: CHAPTER III */}
      <TapestryBand thin />
      <section className="py-24 px-6 relative bg-warp text-linen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(#pattern-bold)', opacity: 0.07 }} />

        <ScrollReveal>
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
            <div className="text-center mb-16 w-full flex flex-col items-center">
              <span className="font-engraved text-xs text-gilt tracking-[0.3em] uppercase mb-3">Chapter the Third — Trust</span>
              <h2 className="font-gothic text-[40px] md:text-[50px] text-linen">
                <span className="text-gilt mr-2">III.</span>The Seals
              </h2>
              <p className="font-prose italic text-lg text-linen/70 mt-4">
                No oath is asked of a buyer; the documents swear for us.
              </p>
              <div className="mt-6 border-b border-gilt/20 w-32" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
              {[
                { l: 'S', title: 'SGS INSPECTED', desc: 'Every consignment examined by independent surveyors before it sails.' },
                { l: 'P', title: 'PHYTOSANITARY', desc: 'Certified clean of pest and blight, papered for any port of entry.' },
                { l: 'L', title: 'LC-FRIENDLY', desc: 'We trade by Letter of Credit — payment bound to documents, not promises.' },
                { l: 'F', title: 'FOB / CIF', desc: 'Incoterms honoured from Lagos to your harbour of choice.' }
              ].map((badge) => (
                <div 
                  key={badge.title} 
                  className="flex flex-col items-center text-center gap-5"
                >
                  <WaxSeal letter={badge.l} />
                  <div className="flex flex-col items-center gap-3">
                    <h4 className="font-engraved text-[13px] tracking-[0.18em] text-gilt">{badge.title}</h4>
                    <p className="font-prose text-[15px] text-linen/75 leading-relaxed">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PANEL 5: CHAPTER IV */}
      <TapestryBand thin />
      <section className="py-24 px-6 relative bg-linen">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="text-center mb-14 w-full flex flex-col items-center">
              <span className="font-engraved text-xs text-madder tracking-[0.3em] uppercase mb-3">Chapter the Fourth — From order to ocean</span>
              <h2 className="font-gothic text-[40px] md:text-[50px] text-warp">
                <span className="text-gilt mr-2">IV.</span>The Voyage
              </h2>
              <OrnamentDivider />
            </div>

            <div className="w-full bg-thread/40 p-[1px] relative shadow-[inset_0_0_0_4px_var(--color-linen),inset_0_0_0_5px_var(--color-thread)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px]">
                {[
                  { n: 'I', title: 'The Soil', desc: 'Smallholder farms across Nigeria yield the harvest — palm, sesame, ginger, hibiscus.' },
                  { n: 'II', title: 'The Sorting', desc: 'Cleaned, graded and dried to export specification at our processing yards.' },
                  { n: 'III', title: 'The Seal', desc: 'Inspected, fumigated and certified; the documents are drawn and sworn.' },
                  { n: 'IV', title: 'The Sail', desc: 'Containers loaded at the Port of Lagos — 10 to 21 days from order to ocean.' }
                ].map((step) => (
                  <div key={step.n} className="bg-linen p-8 flex flex-col">
                    <span className="font-engraved font-semibold text-[48px] text-gilt block mb-4">{step.n}</span>
                    <h3 className="font-gothic text-2xl text-warp mb-3">{step.title}</h3>
                    <p className="font-prose text-[15px] text-warp/75 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Link to="/lc-guide" className="font-engraved text-xs text-madder border-b border-madder/40 pb-1 w-max hover:text-warp transition-colors block">
                HOW A LETTER OF CREDIT PROTECTS YOU
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PANEL 6: THE WORD AND THE WORK (TESTIMONIALS & OPERATIONS) */}
      <TapestryBand thin />
      <section className="py-24 px-6 relative bg-linen overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-16 w-full flex flex-col items-center">
              <span className="font-engraved text-xs text-madder tracking-[0.3em] uppercase mb-3">Chapter the Fifth — Voices of Trade</span>
              <h2 className="font-gothic text-[40px] md:text-[50px] text-warp">
                <span className="text-gilt mr-2">V.</span>The Word & The Work
              </h2>
              <OrnamentDivider />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
              <div className="flex flex-col gap-10">
                <blockquote className="relative p-8 md:p-10 border border-gilt/20 bg-warp/5">
                  <span className="absolute -top-6 left-6 text-6xl text-gilt opacity-40 font-serif">"</span>
                  <p className="font-prose italic text-lg text-warp/90 leading-relaxed mb-6 relative z-10">
                    A partner in truth. They maintained exact phytosanitary standards for every ton of sesame we received. The documentation process was seamless, and the shipment arrived exactly as contracted at the port of Rotterdam.
                  </p>
                  <footer className="flex flex-col relative z-10">
                    <strong className="font-gothic text-warp text-xl uppercase tracking-wider">Henrik Lindstrom</strong>
                    <span className="font-engraved text-xs text-thread mt-1 uppercase">Procurement Director, Nordic Agritrade</span>
                  </footer>
                </blockquote>

                <blockquote className="relative p-8 md:p-10 border border-gilt/20 bg-warp/5 mt-4">
                  <span className="absolute -top-6 left-6 text-6xl text-gilt opacity-40 font-serif">"</span>
                  <p className="font-prose italic text-lg text-warp/90 leading-relaxed mb-6 relative z-10">
                    We rely heavily on their steady supply of palm oil and dried ginger. When you trade by Letter of Credit, you need a house that understands swift compliance. The Roundtable has never missed a shipment window.
                  </p>
                  <footer className="flex flex-col relative z-10">
                    <strong className="font-gothic text-warp text-xl uppercase tracking-wider">Aisha Al-Fayed</strong>
                    <span className="font-engraved text-xs text-thread mt-1 uppercase">Head of Sourcing, GCC Essentials</span>
                  </footer>
                </blockquote>
              </div>
              
              <div className="flex flex-col w-full gap-4">
                <div className="w-full relative shadow-xl overflow-hidden border-4 border-warp bg-warp p-1">
                  <img 
                    src={shipLoadingImg} 
                    alt="Dock workers loading export products onto a docked cargo ship at port" 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[2s] hover:scale-105"
                  />
                </div>
                <div className="w-full relative shadow-xl overflow-hidden border-4 border-warp bg-warp p-1">
                  <img 
                    src={truckLoadingImg} 
                    alt="Workers loading agricultural products into a large truck" 
                    className="w-full aspect-[21/9] object-cover transition-transform duration-[2s] hover:scale-105"
                  />
                </div>
                <p className="font-engraved text-xs text-thread text-center uppercase tracking-widest mt-2">
                  Active loading operations at port
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PANEL 7: GLOBAL TRAJECTORY */}
      <TapestryBand thin />
      <section className="py-24 px-6 relative bg-umber">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(#pattern-bold)', opacity: 0.05 }} />
        <ScrollReveal direction="up" duration={1.1}>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center w-full">
            <div className="text-center mb-12 w-full flex flex-col items-center">
              <span className="font-engraved text-xs text-gilt tracking-[0.3em] uppercase mb-3">Our Footprint</span>
              <h2 className="font-gothic text-[40px] md:text-[50px] text-linen">
                Global Trajectory
              </h2>
              <div className="w-16 h-[1px] bg-gilt/40 mx-auto mt-6" />
            </div>

            <div className="w-full max-w-6xl relative group flex justify-center">
              <div className="w-full bg-[#000918] overflow-hidden shadow-2xl relative">
                <img 
                  src="/Map.png"
                  alt="Global map showing Nigeria, Ghana, Kenya, Rwanda" 
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  referrerPolicy="no-referrer"
                  className="w-full object-contain transition-opacity duration-500" 
                  style={{ backgroundColor: '#000918' }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PANEL 6: EPILOGUE */}
      <TapestryBand />
      <section className="relative w-full text-center">
        <MillefleurStrip className="absolute inset-0 z-0 opacity-100" />
        <div className="relative z-10 py-24 px-6 flex flex-col items-center justify-center min-h-[400px]">
          <span className="font-engraved text-xs text-linen/80 tracking-[0.3em] uppercase mb-4">Epilogue</span>
          
          <h2 className="font-blackletter text-[48px] md:text-[72px] text-linen leading-tight mb-4">
            Take a Seat at the Table
          </h2>
          
          <p className="font-prose italic text-lg md:text-xl text-linen/85 max-w-3xl mb-10">
            Tell us the good, the grade and the tonnage, and we will return a sealed quotation with specification, lead time and incoterms.
          </p>

          <Link to="/quote">
            <RibbonButton variant="linen" className="px-12">BEGIN YOUR QUOTATION</RibbonButton>
          </Link>
        </div>
      </section>

    </div>
  );
}
