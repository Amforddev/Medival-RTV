import { FileText, CheckCircle, ShieldCheck } from 'lucide-react';
import { RibbonButton, WaxSeal, PanelFrame } from '../components/ui/ChronicleComponents';

export default function Trust() {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      {/* HEADER */}
      <div className="bg-umber relative overflow-hidden text-linen w-full flex flex-col items-center justify-center py-20 px-6 min-h-[300px]">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(232, 220, 194, 0.05) 45%, rgba(232, 220, 194, 0.05) 55%, transparent 0)', backgroundSize: '16px 16px', opacity: 0.1 }} />
        
        <h1 className="font-engraved font-bold text-4xl md:text-[50px] mb-4 relative z-10 text-center tracking-wide">TRUST & COMPLIANCE</h1>
        <p className="font-prose italic text-linen/70 text-xl relative z-10 text-center max-w-2xl">Ensuring every metric ton meets international export standards.</p>

        {/* Zigzag bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-4" style={{
          background: 'linear-gradient(-45deg, var(--color-linen) 8px, transparent 0), linear-gradient(45deg, var(--color-linen) 8px, transparent 0)',
          backgroundPosition: 'left-bottom',
          backgroundRepeat: 'repeat-x',
          backgroundSize: '16px 16px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 py-20 flex flex-col gap-24">
        
        {/* SECTION A */}
        <section className="flex flex-col md:flex-row gap-10 items-start">
          <div className="shrink-0 flex justify-center w-full md:w-auto">
             <WaxSeal letter="S" />
          </div>
          <div className="flex-1 flex flex-col">
             <span className="font-engraved tracking-widest text-[11px] text-madder mb-2">SECTION A</span>
             <h2 className="font-gothic text-4xl text-warp mb-4">SGS Inspection & Certification</h2>
             <p className="font-prose text-lg text-warp/80 leading-relaxed mb-6">
               Trust is good, but certification is better. We partner with SGS (Société Générale de Surveillance) to provide independent inspection, verification, testing, and certification services for all our outward shipments. Before the shipping containers are sealed, an SGS surveyor confirms the quality, weight, and condition of the goods against the agreed specifications.
             </p>

          </div>
        </section>

        <div className="h-[1px] w-full bg-gilt/30 relative">
           <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rotate-45 border border-gilt/50 bg-linen" />
        </div>

        {/* SECTION B */}
        <section className="flex flex-col md:flex-row gap-10 items-start">
          <div className="shrink-0 flex justify-center w-full md:w-auto hidden md:flex">
             <div className="w-24 h-24 rounded-full border-2 border-warp border-dashed flex items-center justify-center opacity-30">
                <FileText className="w-10 h-10" />
             </div>
          </div>
          <div className="flex-1 flex flex-col w-full">
             <span className="font-engraved tracking-widest text-[11px] text-madder mb-2">SECTION B</span>
             <h2 className="font-gothic text-4xl text-warp mb-6">Export Documentation Checklist</h2>
             
             <PanelFrame className="p-6 md:p-8 bg-white/50 mb-8">
               <ul className="flex flex-col gap-4">
                 {[
                   "Commercial Invoice (3 Originals, 3 Copies)",
                   "Packing List detailing exact weights and container numbers",
                   "Certificate of Origin (issued by Chamber of Commerce)",
                   "Phytosanitary Certificate (issued by Ministry of Agriculture)",
                   "SGS Certificate of Quality and Weight",
                   "Full set of Clean On-Board Bill of Lading (B/L)"
                 ].map((doc, i) => (
                   <li key={i} className="flex items-start gap-4">
                      <span className="font-engraved text-gilt font-bold text-lg leading-none mt-1">{i + 1}.</span>
                      <span className="font-prose text-lg text-warp leading-snug">{doc}</span>
                   </li>
                 ))}
               </ul>
             </PanelFrame>


          </div>
        </section>

        <div className="h-[1px] w-full bg-gilt/30 relative">
           <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rotate-45 border border-gilt/50 bg-linen" />
        </div>

        {/* SECTION C */}
        <section className="flex flex-col md:flex-row gap-10 items-start">
          <div className="shrink-0 flex justify-center w-full md:w-auto">
             <WaxSeal letter="L" />
          </div>
          <div className="flex-1 flex flex-col w-full">
             <span className="font-engraved tracking-widest text-[11px] text-madder mb-2">SECTION C</span>
             <h2 className="font-gothic text-4xl text-warp mb-4">Letter of Credit Guidelines</h2>
             <p className="font-prose text-lg text-warp/80 leading-relaxed mb-6">
               We strongly encourage trade via irrevokable Letter of Credit (L/C) at sight. This ensures that your funds are protected by your banking institution until all specified export documents are presented and found to be in order.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white p-4 border border-warp/10">
                   <ShieldCheck className="w-5 h-5 text-verdure" />
                   <span className="font-prose text-warp">Zero Advance Risk</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-warp/10">
                   <CheckCircle className="w-5 h-5 text-verdure" />
                   <span className="font-prose text-warp">Document-bound Payment</span>
                </div>
             </div>

             <RibbonButton 
                variant="primary" 
                className="w-max" 
                onClick={() => window.location.href = '/lc-guide'}
              >
                READ THE FULL L/C GUIDE →
              </RibbonButton>
          </div>
        </section>

      </div>
    </div>
  );
}
