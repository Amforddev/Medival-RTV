import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { RibbonButton, PanelFrame, TapestryBand, CustomSelect } from '../components/ui/ChronicleComponents';
import { Check } from 'lucide-react';

const commodities = [
  { id: 'palm', name: 'Palm Oil' },
  { id: 'beans', name: 'Beans' },
  { id: 'sesame', name: 'Sesame Seeds' },
  { id: 'chia', name: 'Chia Seeds' },
  { id: 'cashew', name: 'Cashew Nuts' },
  { id: 'egusi', name: 'Egusi (Melon Seeds)' },
  { id: 'ginger', name: 'Dried Ginger' },
  { id: 'ginger-powder', name: 'Ginger Powder' },
  { id: 'hibiscus', name: 'Hibiscus (Zobo)' },
  { id: 'ogbono', name: 'Ogbono (Wild Mango Seeds)' },
  { id: 'charcoal', name: 'Charcoal' },
  { id: 'catfish', name: 'River Catfish' },
  { id: 'pineapple', name: 'Pineapple' }
];

const commodityPackagingOptions: Record<string, { value: string; label: string }[]> = {
  palm: [
    { value: "Flexitank (20-24 MT)", label: "Flexitank (20-24 MT)" },
    { value: "20L Jerry Cans", label: "20L Jerry Cans" },
    { value: "210L Steel Drums", label: "210L Steel Drums" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  beans: [
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "100kg PP Bags", label: "100kg PP Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  sesame: [
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "Premium Jute Bags", label: "Premium Jute Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  chia: [
    { value: "25kg PP Bags", label: "25kg PP Bags" },
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  cashew: [
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "80kg Jute Bags", label: "80kg Jute Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  egusi: [
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  ginger: [
    { value: "40kg PP Bags", label: "40kg PP Bags" },
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "Cleaned Jute Bags", label: "Cleaned Jute Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  'ginger-powder': [
    { value: "25kg Kraft Paper Bags", label: "25kg Kraft Paper Bags" },
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  hibiscus: [
    { value: "20-25kg PP Bags", label: "20-25kg PP Bags" },
    { value: "Press-Packed Jute Bags", label: "Press-Packed Jute Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  ogbono: [
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  charcoal: [
    { value: "Bulk Cargo Bags", label: "Bulk Cargo Bags" },
    { value: "25kg PP Bags", label: "25kg PP Bags" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  catfish: [
    { value: "10kg Frozen Cartons", label: "10kg Frozen Cartons" },
    { value: "Premium Vacuum Packs", label: "Premium Vacuum Packs" },
    { value: "Custom / Other", label: "Custom / Other" }
  ],
  default: [
    { value: "50kg PP Bags", label: "50kg PP Bags" },
    { value: "25kg PP Bags", label: "25kg PP Bags" },
    { value: "Jute Bags", label: "Jute Bags" },
    { value: "Flexitank (for Oils)", label: "Flexitank (for Oils)" },
    { value: "Custom / Other", label: "Custom / Other" }
  ]
};

export default function Quote() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState('');
  
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
      const selectedCommodity = searchParams.get('commodity')!;
      setFormData(prev => ({ 
        ...prev, 
        commodityId: selectedCommodity,
        packaging: '' // Reset packaging when default search param changes
      }));
    }
  }, [searchParams]);

  const updateForm = (key: string, value: string) => {
    setFormData(prev => {
      const updated = { ...prev, [key]: value };
      if (key === 'commodityId') {
        updated.packaging = ''; // Reset packaging on commodity change so they select from the new options
      }
      return updated;
    });
  };

  const handleAjaxSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorSubmit('');
    
    try {
      const response = await fetch('https://formspree.io/f/xgobnpga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          commodity: commodities.find(c => c.id === formData.commodityId)?.name || formData.commodityId,
          quantity: formData.quantity,
          packaging: formData.packaging,
          incoterm: formData.incoterm,
          payment: formData.payment,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          destinationPort: formData.destinationPort
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const result = await response.json();
        if (result && result.errors) {
          setErrorSubmit(result.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorSubmit('Failed to submit form. Please check your inputs.');
        }
      }
    } catch (err) {
      setErrorSubmit('Unable to connect to submission server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev + 1);
  };
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev - 1);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen bg-linen items-center justify-center p-6 text-center">
        <TapestryBand thin />
        <div className="bg-umber w-32 h-32 rounded-full flex items-center justify-center text-linen font-blackletter text-5xl shadow-2xl border-4 border-gilt/50 relative z-10 my-10">
          S
        </div>
        <h1 className="font-gothic text-4xl md:text-5xl text-warp mb-4">The Seal is Set</h1>
        <p className="font-prose text-lg text-warp/80 max-w-xl mx-auto italic mb-10">
          Your quotation request has been securely sealed and dispatched. Our trading desk will prepare your custom specification and pricing within one business day.
        </p>
        <Link to="/" className="font-engraved text-xs text-madder tracking-widest border-b border-madder pb-1 hover:text-warp">
          RETURN TO THE CHRONICLE
        </Link>
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
          {[1, 2, 3].map(num => {
            const roman = ['I', 'II', 'III'][num - 1];
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
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-gothic text-[40px] text-warp">I. Define Your Order</h2>
                <div className="h-[1px] w-20 bg-gilt mx-auto mt-4" />
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Select Commodity</label>
                  <CustomSelect 
                    value={formData.commodityId}
                    onChange={(val) => updateForm('commodityId', val)}
                    options={commodities.map(c => ({ value: c.id, label: c.name }))}
                    placeholder="Choose your good..."
                  />
                </div>

                 <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Quantity (Metric Tons)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      min="1"
                      value={formData.quantity}
                      onChange={e => updateForm('quantity', e.target.value)}
                      className="w-full bg-umber/40 border border-thread/40 p-4 font-prose text-xl outline-none focus:border-gilt transition-colors text-warp placeholder:text-warp/30"
                      placeholder="e.g. 20"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-engraved text-warp/40">MT</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Packaging Type</label>
                  <CustomSelect 
                    value={formData.packaging}
                    onChange={(val) => updateForm('packaging', val)}
                    options={commodityPackagingOptions[formData.commodityId] || commodityPackagingOptions.default}
                    placeholder="Select packaging..."
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Incoterm</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['FOB (Free On Board, Lagos)', 'CIF (Cost, Ins., Freight)'].map(term => (
                       <button
                         key={term}
                         type="button"
                         onClick={() => updateForm('incoterm', term)}
                         className={`p-4 border text-left font-prose text-lg transition-colors ${formData.incoterm === term ? 'border-gilt bg-gilt/15 text-gilt font-bold shadow-[0_0_15px_rgba(207,169,83,0.1)]' : 'border-thread/40 bg-umber/40 text-warp hover:border-gilt hover:bg-umber/60'}`}
                       >
                         {term}
                       </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-engraved text-[11px] text-warp/60 uppercase tracking-widest mb-2">Preferred Payment Method</label>
                  <div className="flex flex-col gap-3">
                    {[
                      'Irrevocable Letter of Credit (L/C)', 
                      'Telegraphic Transfer (T/T) - 80% Advance, 20% After Delivery',
                      'Direct Bank Transfer (T/T or Wire)'
                    ].map(term => (
                       <button
                         key={term}
                         type="button"
                         onClick={() => updateForm('payment', term)}
                         className={`p-4 border text-left font-prose text-lg transition-colors ${formData.payment === term ? 'border-gilt bg-gilt/15 text-gilt font-bold shadow-[0_0_15px_rgba(207,169,83,0.1)]' : 'border-thread/40 bg-umber/40 text-warp hover:border-gilt hover:bg-umber/60'}`}
                       >
                         {term}
                       </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-gothic text-[40px] text-warp">II. Your Details</h2>
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
                      className="w-full bg-umber/40 border-b border-thread/40 px-4 py-4 font-prose text-xl outline-none focus:border-gilt transition-colors text-warp placeholder:text-warp/30 rounded-none"
                      placeholder={`Enter ${field.label.toLowerCase()}...`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-gothic text-[40px] text-warp">III. Seal the Document</h2>
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
                  <form onSubmit={handleAjaxSubmit}>
                    {errorSubmit && (
                      <p className="text-madder text-sm font-prose mb-4 italic">{errorSubmit}</p>
                    )}
                    <RibbonButton type="submit" variant="primary" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? 'SEALING FOR QUOTATION...' : 'SEND YOUR QUOTATION STATUS'}
                    </RibbonButton>
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
          
          {step < 3 && (
            <RibbonButton onClick={nextStep} variant="ghost" className="!py-3 !px-6">PROCEED →</RibbonButton>
          )}
        </div>

      </div>
    </div>
  );
}
