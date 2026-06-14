import { Link } from 'react-router-dom';
import { TapestryBand, RibbonButton } from '../components/ui/ChronicleComponents';

export default function LcGuide() {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <div className="bg-umber relative overflow-hidden text-linen w-full flex flex-col items-center py-20 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(232, 220, 194, 0.05) 45%, rgba(232, 220, 194, 0.05) 55%, transparent 0)', backgroundSize: '20px 20px', opacity: 0.1 }} />
        <h1 className="font-engraved font-bold text-4xl md:text-5xl relative z-10 text-center tracking-[0.2em]">THE LETTER OF CREDIT GUIDE</h1>
      </div>

      <div className="max-w-3xl mx-auto w-full px-6 py-20">
        <article className="flex flex-col gap-6">
          
          <p className="font-prose text-xl text-warp/90 leading-loose drop-cap">
            In international trade, the distance between the field and the factory can be vast—not just in geography, but in trust. For decades, the primary hurdle in cross-border commodity exchange has been the allocation of risk. To bridge this, The Roundtable Ventures holds to a timeless and unyielding standard of commerce: the Irrevocable Letter of Credit (L/C).
          </p>

          <p className="font-prose text-lg text-warp/90 leading-loose">
            When you open a Letter of Credit with your bank in favour of The Roundtable Ventures, you are not sending us money. You are placing your funds in the custody of your own financial institution, with strict instructions: the funds shall only be released when we present a flawless set of documents proving the goods have been graded, inspected, and loaded onto the vessel exactly as agreed.
          </p>

          <div className="my-10">
             <TapestryBand thin />
          </div>

          <h2 className="font-gothic text-4xl text-warp mb-4 mt-8">The Instruments of Trust</h2>
          
          <p className="font-prose text-lg text-warp/90 leading-loose">
            For us to claim payment against an L/C, we must present the exact paper trail stipulated in the credit. A typical presentation requires the following instruments:
          </p>

          <ul className="font-prose text-lg text-warp/90 leading-loose list-disc pl-6 space-y-2 my-4">
            <li><strong>The Bill of Lading (B/L):</strong> A clean, 'shipped on board' ocean bill of lading, proving the carrier has taken possession of the cargo for transit to your destination port.</li>
            <li><strong>SGS Certificate of Quality and Weight:</strong> An independent, globally-recognised surveyor's sworn declaration that the goods in the container exactly match the technical specifications of our contract.</li>
            <li><strong>Phytosanitary Certificate:</strong> Issued by the Nigerian Agricultural Quarantine Service, certifying the shipment is free of pests and diseases, ensuring it clears your customs without delay.</li>
            <li><strong>Certificate of Origin:</strong> Authenticated proof that the harvest was grown and processed in Nigeria.</li>
            <li><strong>Commercial Invoice and Packing List.</strong></li>
          </ul>

          <blockquote className="font-gothic text-3xl md:text-4xl text-center text-gilt my-16 leading-tight border-none p-0 max-w-xl mx-auto italic">
            "We do not ask for your trust; we ask you to trust the documents."
          </blockquote>

          <div className="my-10">
             <TapestryBand thin />
          </div>

          <h2 className="font-gothic text-4xl text-warp mb-4 mt-8">How to Proceed</h2>

          <p className="font-prose text-lg text-warp/90 leading-loose">
            If you are ready to begin importing with us, the procedure is straightforward. First, request a quotation detailing the commodity, tonnage, and destination port. Upon your acceptance of our pricing, we will issue a proforma invoice.
          </p>
          <p className="font-prose text-lg text-warp/90 leading-loose">
            You will present this proforma to your bank to open the Irrevocable Draft (L/C at sight). We will review the draft to ensure all clauses are operable—meaning we can reasonably obtain all requested documents—and upon mutual agreement, the L/C is finalized. Only then do we begin processing and loading your shipment.
          </p>

        </article>

        <div className="mt-24 border-t border-warp/10 pt-16 flex flex-col items-center">
           <h3 className="font-gothic text-3xl text-warp mb-6 text-center">Ready to structure a trade?</h3>
           <Link to="/quote">
              <RibbonButton variant="primary" className="px-12">BEGIN YOUR QUOTATION STATUS</RibbonButton>
           </Link>
        </div>

      </div>
    </div>
  );
}
