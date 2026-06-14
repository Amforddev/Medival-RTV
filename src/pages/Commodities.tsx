import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Sprout, Wheat, Leaf, Flame, Waves } from 'lucide-react';
import { RibbonButton } from '../components/ui/ChronicleComponents';

const commoditiesData = [
  { id: 'palm', name: 'Palm Oil', cat: 'OILS & AGRICULTURAL COMMODITIES', icon: Sprout, img: 'https://images.unsplash.com/photo-1620023473210-91950e1898da?w=800' },
  { id: 'beans', name: 'Beans', cat: 'OILS & AGRICULTURAL COMMODITIES', icon: Sprout, img: 'https://images.unsplash.com/photo-1551462147-195b871c8ba6?w=800' },
  { id: 'sesame', name: 'Sesame Seeds', cat: 'SEEDS & NUTS', icon: Wheat, img: 'https://images.unsplash.com/photo-1589146199343-4dc975bde783?w=800' },
  { id: 'chia', name: 'Chia Seeds', cat: 'SEEDS & NUTS', icon: Wheat, img: 'https://images.unsplash.com/photo-1622484211148-f1c1facc0d1a?w=800' },
  { id: 'cashew', name: 'Cashew Nuts', cat: 'SEEDS & NUTS', icon: Wheat, img: 'https://images.unsplash.com/photo-1599424789506-69a03f47c207?w=800' },
  { id: 'egusi', name: 'Egusi (Melon Seeds)', cat: 'SEEDS & NUTS', icon: Wheat, img: 'https://images.unsplash.com/photo-1601620585641-fcfdd4da428f?w=800' },
  { id: 'ginger', name: 'Dried Ginger', cat: 'SPICES & AGRO-PROCESSED', icon: Leaf, img: 'https://images.unsplash.com/photo-1615485458927-4a0bfaa57a27?w=800' },
  { id: 'ginger-powder', name: 'Ginger Powder', cat: 'SPICES & AGRO-PROCESSED', icon: Leaf, img: 'https://images.unsplash.com/photo-1596541604085-f0cc04ef4c2b?w=800' },
  { id: 'chilli', name: 'Chilli Powder', cat: 'SPICES & AGRO-PROCESSED', icon: Leaf, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800' },
  { id: 'hibiscus', name: 'Hibiscus (Zobo)', cat: 'BOTANICALS', icon: Leaf, img: 'https://images.unsplash.com/photo-1596700726715-de1610427845?w=800' },
  { id: 'ogbono', name: 'Ogbono (Wild Mango Seeds)', cat: 'BOTANICALS', icon: Leaf, img: 'https://images.unsplash.com/photo-1588667523999-f41bfab958ec?w=800' },
  { id: 'charcoal', name: 'Charcoal', cat: 'ENERGY & NATURAL PRODUCTS', icon: Flame, img: 'https://images.unsplash.com/photo-1549405230-05e8e8edb132?w=800' },
  { id: 'catfish', name: 'River Catfish', cat: 'SEAFOOD', icon: Waves, img: 'https://images.unsplash.com/photo-1516684732162-801fc751a0b3?w=800' }
];

export default function Commodities() {
  const { id } = useParams();
  const [activeItem, setActiveItem] = useState(commoditiesData[0]);
  const [activeTab, setActiveTab] = useState('Specs');

  useEffect(() => {
    if (id) {
      const found = commoditiesData.find(c => c.id === id);
      if (found) setActiveItem(found);
    }
  }, [id]);

  const categories = Array.from(new Set(commoditiesData.map(c => c.cat)));

  return (
    <div className="flex flex-col min-h-screen bg-linen">
      {/* HEADER */}
      <div className="bg-umber relative overflow-hidden text-linen w-full flex flex-col items-center py-16 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(232, 220, 194, 0.05) 45%, rgba(232, 220, 194, 0.05) 55%, transparent 0)', backgroundSize: '20px 20px', opacity: 0.1 }} />
        
        <h1 className="font-engraved font-bold text-4xl md:text-5xl mb-4 relative z-10 text-center">COMMODITY HUBS</h1>
        <p className="font-prose italic text-linen/70 text-lg relative z-10 text-center">Trade-ready spec sheets, logistics details, and origin information...</p>

        {/* Zigzag bottom border via CSS */}
        <div className="absolute bottom-0 left-0 w-full h-4" style={{
          background: 'linear-gradient(-45deg, var(--color-linen) 8px, transparent 0), linear-gradient(45deg, var(--color-linen) 8px, transparent 0)',
          backgroundPosition: 'left-bottom',
          backgroundRepeat: 'repeat-x',
          backgroundSize: '16px 16px'
        }} />
      </div>

      {/* TABS STICKY BAR */}
      <div className="sticky top-20 z-30 w-full bg-linen/90 backdrop-blur-md border-b border-warp/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar py-4 flex gap-8">
           {categories.map(cat => {
              const itemsInCat = commoditiesData.filter(c => c.cat === cat);
              const hasActive = itemsInCat.some(c => c.id === activeItem.id);
              return (
                 <div key={cat} className="flex flex-col min-w-max">
                   <span className="font-engraved text-[11px] text-warp/40 tracking-widest mb-2">{cat}</span>
                   <div className="flex gap-4">
                      {itemsInCat.map(item => (
                         <Link
                           key={item.id}
                           to={`/commodities/${item.id}`}
                           className={`font-engraved font-bold uppercase text-xs pb-2 transition-colors relative ${item.id === activeItem.id ? 'text-verdure' : 'text-warp/60 hover:text-warp'}`}
                         >
                           {item.name}
                           {item.id === activeItem.id && (
                             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-verdure" />
                           )}
                         </Link>
                      ))}
                   </div>
                 </div>
              )
           })}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* LEFT PANEL - Sidebar List */}
        <div className="hidden lg:flex flex-col w-1/4 sticky top-48 self-start gap-1 max-h-[calc(100vh-14rem)] overflow-y-auto no-scrollbar pb-10">
          {commoditiesData.map(item => {
            const Icon = item.icon;
            const isActive = item.id === activeItem.id;
            return (
              <Link 
                key={item.id} 
                to={`/commodities/${item.id}`}
                className={`flex items-center gap-3 p-3 transition-colors border-l-2 ${isActive ? 'bg-warp/5 border-madder' : 'border-transparent hover:bg-warp/5'}`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-madder' : 'text-warp/40'}`} strokeWidth={1.5} />
                <span className={`font-gothic text-lg ${isActive ? 'text-warp' : 'text-warp/60'}`}>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT PANEL - Detail View */}
        <div className="flex-1 flex flex-col w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {/* Image Area */}
              <div className="relative w-full aspect-video mask-arch bg-verdure/20 overflow-hidden mb-8 group">
                <img 
                  src={activeItem.img} 
                  alt={activeItem.name}
                  className="w-full h-full object-cover filter-tapestry group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warp/90 via-warp/40 to-transparent flex flex-col justify-end p-8">
                  <span className="font-engraved text-xs text-linen/70 tracking-[0.3em] uppercase mb-2">{activeItem.cat}</span>
                  <h2 className="font-engraved font-bold text-3xl md:text-5xl text-linen">{activeItem.name}</h2>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-8 border-b border-warp/10 mb-8 overflow-x-auto no-scrollbar">
                {['Specs', 'Logistics', 'Certifications'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-engraved uppercase text-xs pb-3 pt-1 transition-colors relative ${activeTab === tab ? 'text-warp' : 'text-warp/50 hover:text-warp'}`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-madder" />
                    )}
                  </button>
                ))}
              </div>

              {/* Content Areas */}
              <div className="min-h-[300px]">
                {activeTab === 'Specs' && (
                  <div className="flex flex-col border border-thread/20 bg-linen">
                    {[
                      { l: 'Origin', v: 'Nigeria' },
                      { l: 'Quality', v: 'Export Grade A' },
                      { l: 'Moisture', v: 'Max 8%' },
                      { l: 'Admixture', v: 'Max 2%' },
                      { l: 'Cultivation', v: 'Conventional / Sun Dried' },
                    ].map((row, i) => (
                      <div key={row.l} className={`flex flex-col sm:flex-row py-4 px-6 border-b border-thread/20 last:border-b-0 ${i % 2 !== 0 ? 'bg-warp/[0.02]' : ''}`}>
                        <div className="w-1/3 font-engraved text-xs text-warp/60 uppercase tracking-widest items-center flex">{row.l}</div>
                        <div className="w-2/3 font-prose text-lg text-warp">{row.v}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'Logistics' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { l: 'Minimum Order (MOQ)', v: '20 Metric Tons' },
                      { l: 'Packaging', v: '50kg PP Bags or Custom' },
                      { l: 'Lead Time', v: '14 - 21 Days (Port Lagos)' },
                      { l: 'Incoterms', v: 'FOB, CIF' }
                    ].map(card => (
                      <div key={card.l} className="p-6 border border-thread/30 bg-linen/50 flex flex-col">
                        <span className="font-engraved text-xs text-warp/60 uppercase mb-2 tracking-widest">{card.l}</span>
                        <span className="font-prose text-xl text-warp">{card.v}</span>
                      </div>
                    ))}
                    
                    <div className="md:col-span-2 p-6 border border-thread/30 bg-linen/50 flex flex-col mt-2">
                       <span className="font-engraved text-xs text-warp/60 uppercase mb-4 tracking-widest">Included Documents</span>
                       <div className="flex flex-wrap gap-2">
                          {['SGS Certificate', 'Phytosanitary', 'Origin Cert', 'Commercial Invoice'].map(badge => (
                             <span key={badge} className="bg-madder text-linen px-3 py-1 font-engraved text-[10px] rounded hover:bg-warp transition-colors">
                               {badge}
                             </span>
                          ))}
                       </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Certifications' && (
                  <div className="flex flex-col gap-6">
                     <p className="font-prose italic text-warp/80 text-lg">
                       All consignments of {activeItem.name} are subject to full independent verification prior to sailing.
                     </p>
                     <div className="flex items-center gap-4 p-4 border border-thread/30 bg-warp/5">
                        <FileText className="text-madder w-6 h-6" />
                        <span className="font-gothic text-xl text-warp">SGS Inspection Report Available</span>
                     </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-12 pt-8 border-t border-warp/10 flex flex-col sm:flex-row items-center gap-6">
                <button className="flex items-center gap-2 group border border-transparent hover:border-warp/20 px-6 py-3 transition-colors bg-warp/5">
                  <FileText className="w-4 h-4 text-madder group-hover:text-warp transition-colors" />
                  <span className="font-engraved text-xs font-semibold tracking-widest text-warp">DOWNLOAD SPEC SHEET (PDF)</span>
                </button>
                
                <Link to={`/quote?commodity=${activeItem.id}`} className="ml-auto">
                   <RibbonButton variant="primary">REQUEST QUOTE FOR THIS COMMODITY →</RibbonButton>
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
