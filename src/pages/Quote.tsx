import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RibbonButton, PanelFrame, TapestryBand } from '../components/ui/ChronicleComponents';
import { Check } from 'lucide-react';

const commodities = [
  { id: 'palm', name: 'Palm Oil', img: 'https://images.unsplash.com/photo-1620023473210-91950e1898da?w=300' },
  { id: 'sesame', name: 'Sesame Seeds', img: 'https://images.unsplash.com/photo-1589146199343-4dc975bde783?w=300' },
  { id: 'ginger', name: 'Dried Ginger', img: 'https://images.unsplash.com/photo-1615485458927-4a0bfaa57a27?w=300' },
  { id: 'charcoal', name: 'Charcoal', img: 'https://images.unsplash.com/photo-1549405230-05e8e8edb132?w=300' },
  { id: 'hibiscus', name: 'Hibiscus', img: 'https://images.unsplash.com/photo-1596700726715-de1610427845?w=300' },
  { id: 'cashew', name: 'Cashew Nuts', img: 'https://images.unsplash.com/photo-1599424789506-69a03f47c207?w=300' },
];

export default function Quote() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    commodityId: searchParams.get('commodity') || '',
    quantity: '',
    packaging: '',
    incoterm: '',
    payment: '',
    companyName: '',
    email: '',
    phone: '',
    whatsapp: '',
    destinationPort: ''
  });

  useEffect(() => {
    if (searchParams.get('commodity')) {
      setFormData(prev => ({ ...prev, commodityId: searchParams.get('commodity')! }));
    }
  }, [searchParams]);

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev + 1);
  };
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev - 1);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen bg-linen items-center justify-center p-6 text-center">
        <TapestryBand thin />
        <div className="bg-umber w-32 h-32 rounded-full flex items-center justify-center text-linen font-blackletter text-5xl shadow-2xl border-4 border-gilt/50 relative z-10 my-10">
          S
        </div>
        <h1 className="font-gothic text-5xl md:text-6xl text-warp mb-4">The Seal is Set</h1>
        <p className="font-prose text-xl text-warp/80 max-w-xl mx-auto italic mb-10">
          Your quotation request has been securely sealed and dispatched. Our trading desk will prepare your custom specification and pricing within one business day.
        </p>
        <button onClick={() => window.location.href = '/'} className="font-engraved text-xs text-madder tracking-widest border-b border-madder pb-1 hover:text-warp">
          RETURN TO THE CHRONICLE
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <div className="py-12 bg-umber text-center text-linen shadow-lg relative z-10">
         <h1 className="font-engraved font-bold text-3xl tracking-widest">REQUEST A QUOTE</h1>
      </div>
      
      <div className="max-w-4xl mx-auto w-full px-4 py-12 flex-1 flex flex-col">
        
        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-16">
          {[1, 2, 3, 4].map(num => {
            const roman = ['I', 'II', 'III', 'IV'][num - 1];
            let activeClass = "text-warp/30";
            if (num === step) activeClass = "text-madder scale-125";
            if (num < step) activeClass = "text-gilt";
            
            return (
              <div key={num} className={`font-engraved font-bold text-2xl md:text-3xl transition-all duration-300 ${activeClass}`}>
                {roman}
              </div>
            )
          })}
        </div>

        <div className="flex-1">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-10">
                <h2 className="font-gothic text-[40px] text-warp">I. Choose Your Good</h2>
                <div className="h-[1px] w-20 bg-gilt mx-auto mt-4" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {commodities.map(c => {
                  const isSelected = formData.commodityId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => updateForm('commodityId', c.id)}
                      className={`relative group overflow-hidden transition-all duration-300 ${isSelected ? 'ring-2 ring-madder outline-none' : 'hover:ring-1 hover:ring-warp/30'}`}
                    >
                      <div className="aspect-[4/5] mask-arch bg-verdure">
                        <img src={c.img} className={`w-full h-full object-cover filter-tapestry transition-transform duration-700 ${isSelected ? 'scale-105 opacity-80' : 'group-hover:scale-105'}`} alt={c.name} />
                      </div>
                      <div className="absolute bottom-4 left-0 w-full text-center px-2">
                         <span className="font-gothic text-xl md:text-2xl text-linen bg-warp/80 px-3 py-1 bg-blur">{c.name}</span>
                      </div>
                      {isSelected && (
                        <div className="absolute top-4 right-4 bg-madder text-linen rounded-full p-1 shadow-lg">
                          <Check className="w-5 h-5" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-gothic text-[40px] text-warp">II. Define Your Order</h2>
                <div className="h-[1px] w-20 bg-gilt mx-auto mt-4" />
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Quantity (Metric Tons)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      min="1"
                      value={formData.quantity}
                      onChange={e => updateForm('quantity', e.target.value)}
                      className="w-full bg-white border border-thread p-4 font-prose text-xl outline-none focus:border-madder transition-colors"
                      placeholder="e.g. 20"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-engraved text-warp/40">MT</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Packaging Type</label>
                  <select 
                    value={formData.packaging}
                    onChange={e => updateForm('packaging', e.target.value)}
                    className="w-full bg-white border border-thread p-4 font-prose text-lg outline-none focus:border-madder transition-colors appearance-none rounded-none"
                  >
                    <option value="">Select packaging...</option>
                    <option value="50kg PP Bags">50kg PP Bags</option>
                    <option value="25kg PP Bags">25kg PP Bags</option>
                    <option value="Jute Bags">Jute Bags</option>
                    <option value="Flexitank">Flexitank (for Oils)</option>
                    <option value="Custom">Custom / Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Incoterm</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['FOB (Free On Board, Lagos)', 'CIF (Cost, Ins., Freight)'].map(term => (
                       <button
                         key={term}
                         onClick={() => updateForm('incoterm', term)}
                         className={`p-4 border text-left font-prose text-lg transition-colors ${formData.incoterm === term ? 'border-madder bg-madder/5 text-madder' : 'border-thread bg-white hover:border-warp'}`}
                       >
                         {term}
                       </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Preferred Payment Method</label>
                  <div className="flex flex-col gap-3">
                    {['Irrevocable Letter of Credit (L/C)', 'Telegraphic Transfer (T/T)'].map(term => (
                       <button
                         key={term}
                         onClick={() => updateForm('payment', term)}
                         className={`p-4 border text-left font-prose text-lg transition-colors ${formData.payment === term ? 'border-warp bg-warp text-white' : 'border-thread bg-white hover:border-warp'}`}
                       >
                         {term}
                       </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-gothic text-[40px] text-warp">III. Your Details</h2>
                <div className="h-[1px] w-20 bg-gilt mx-auto mt-4" />
              </div>

              <div className="flex flex-col gap-6">
                {[
                  { label: "Company Name", key: "companyName", type: "text" },
                  { label: "Email Address", key: "email", type: "email" },
                  { label: "Phone Number", key: "phone", type: "tel" },
                  { label: "WhatsApp Number (Optional)", key: "whatsapp", type: "tel" },
                  { label: "Destination Port (City, Country)", key: "destinationPort", type: "text" },
                ].map(field => (
                  <div key={field.key} className="flex flex-col">
                    <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">{field.label}</label>
                    <input 
                      type={field.type}
                      value={(formData as any)[field.key]}
                      onChange={e => updateForm(field.key, e.target.value)}
                      className="w-full bg-white border-b border-thread px-2 py-4 font-prose text-xl outline-none focus:border-madder transition-colors placeholder:text-warp/20 rounded-none"
                      placeholder={`Enter ${field.label.toLowerCase()}...`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-gothic text-[40px] text-warp">IV. Seal the Document</h2>
                <div className="h-[1px] w-20 bg-gilt mx-auto mt-4" />
              </div>

              <PanelFrame className="p-8 mb-10">
                <h3 className="font-engraved font-bold tracking-widest text-center mb-8 text-warp border-b border-thread/20 pb-4">QUOTATION SUMMARY</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                   <div className="flex flex-col">
                     <span className="font-engraved text-[9px] text-warp/60 tracking-widest">COMMODITY</span>
                     <span className="font-prose text-xl capitalize text-madder font-semibold">{formData.commodityId || 'Not selected'}</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="font-engraved text-[9px] text-warp/60 tracking-widest">QUANTITY</span>
                     <span className="font-prose text-xl">{formData.quantity ? `${formData.quantity} MT` : '-'}</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="font-engraved text-[9px] text-warp/60 tracking-widest">PACKAGING</span>
                     <span className="font-prose text-xl">{formData.packaging || '-'}</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="font-engraved text-[9px] text-warp/60 tracking-widest">INCOTERM</span>
                     <span className="font-prose text-xl">{formData.incoterm || '-'}</span>
                   </div>
                   <div className="flex flex-col sm:col-span-2">
                     <span className="font-engraved text-[9px] text-warp/60 tracking-widest">DESTINATION PORT</span>
                     <span className="font-prose text-xl">{formData.destinationPort || '-'}</span>
                   </div>
                   <div className="flex flex-col sm:col-span-2 border-t border-thread/20 pt-6 mt-2">
                     <span className="font-engraved text-[9px] text-warp/60 tracking-widest">ISSUED TO</span>
                     <span className="font-prose text-xl">{formData.companyName || '-'}</span>
                     <span className="font-prose text-warp/70">{formData.email}</span>
                   </div>
                </div>
              </PanelFrame>
              
              <div className="text-center form-submit">
                 <form onSubmit={submitForm}>
                    <RibbonButton type="submit" variant="primary" className="w-full sm:w-auto">SEND YOUR QUOTATION STATUS</RibbonButton>
                 </form>
              </div>
            </div>
          )}

        </div>

        {/* Navigation Buttons */}
        <div className="mt-16 flex items-center justify-between border-t border-thread/20 pt-8">
          {step > 1 ? (
            <button onClick={prevStep} className="font-engraved text-xs text-warp/60 hover:text-warp tracking-widest transition-colors flex items-center gap-2">
              ← RETURN
            </button>
          ) : <div />}
          
          {step < 4 && (
            <RibbonButton onClick={nextStep} variant="ghost" className="!py-3 !px-6">PROCEED →</RibbonButton>
          )}
        </div>

      </div>
    </div>
  );
}
