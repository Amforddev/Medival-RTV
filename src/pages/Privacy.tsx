import { motion } from 'motion/react';
import { PanelFrame, TapestryBand } from '../components/ui/ChronicleComponents';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-linen text-warp">
      {/* Banner */}
      <div className="py-16 bg-umber text-center text-linen shadow-lg relative z-10">
        <h1 className="font-engraved font-bold text-3xl tracking-widest uppercase">Privacy Charter</h1>
        <p className="font-prose text-sm italic text-gilt mt-2">The Roundtable Ventures Limited &bull; Covenant of Confidentiality</p>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 py-16 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          {/* Intro Seal */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-blackletter text-4xl text-madder">C</span>
            <p className="font-prose text-lg text-warp/80 italic mt-2">
              "We hold that trust is not a modern innovation, but an ancient foundation. Every detail of your trade, every coordinate of your organization, is received under the seal of confidentiality."
            </p>
            <div className="h-[1px] w-24 bg-gilt/40 mx-auto mt-6" />
          </div>

          <PanelFrame className="p-8 md:p-12 bg-white/70 border-gilt/15 shadow-sm">
            <div className="flex flex-col gap-10">
              
              {/* Sec 1 */}
              <div>
                <h2 className="font-gothic text-2xl text-madder border-b border-thread/20 pb-2 mb-4">I. The Scope of Covenant</h2>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85 mb-3">
                  This Confidentiality Charter governs all communication and data collection handled by <strong>The Roundtable Ventures Limited</strong> and its international affiliates (referred to herein as "The House" or "We").
                </p>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85">
                  When you request a quotation, register for trade updates, or engage with our platform, you trust us with your enterprise data. This charter sets forth the strict parameters of our custody.
                </p>
              </div>

              {/* Sec 2 */}
              <div>
                <h2 className="font-gothic text-2xl text-madder border-b border-thread/20 pb-2 mb-4">II. Information Retained by the Desk</h2>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85 mb-4">
                  In compiling export specifications and setting quotation bounds, we gather key indicators via our secure trade intake forms:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-prose text-[15px] text-warp/80">
                  <li><strong>Enterprise Credentials:</strong> Company name, registration status, and sovereign base of operations.</li>
                  <li><strong>Contact Coordinates:</strong> Email addresses, telephone lines, and active WhatsApp credentials used to verify the legitimacy of your trade desk.</li>
                  <li><strong>Cargo Parameters:</strong> Selected commodities (palm oil, ginger, hibiscus, sesame), required tonnage, custom packaging parameters, preferred Incoterms (e.g., FOB, CIF, CFR), and active destination harbors.</li>
                </ul>
              </div>

              {/* Sec 3 */}
              <div>
                <h2 className="font-gothic text-2xl text-madder border-b border-thread/20 pb-2 mb-4">III. Purpose of Processing</h2>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85 mb-3">
                  Your details are utilized solely for authorizing and finalizing dry, raw, and processed product trade contracts. We do not participate in the brokerage or sale of customer information to third-party list houses inside or outside our territories.
                </p>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85">
                  Typical operations include drawing up provisional specification sheets, forecasting ocean freight timelines, establishing credit worthiness under standard Letters of Credit, and keeping you informed of seasonal crop calendars.
                </p>
              </div>

              {/* Sec 4 */}
              <div>
                <h2 className="font-gothic text-2xl text-madder border-b border-thread/20 pb-2 mb-4">IV. Storage, Formspree and Transmission Security</h2>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85 mb-3">
                  Our web intake system employs <strong>Formspree Inc.</strong> as a secure transmission broker to safely compile and forward inbound requests directly to our head of trading desk.
                </p>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85">
                  All transmissions are encrypted over Secure Socket Layers (SSL/TLS). Physical data archives are maintained in access-controlled environments behind secure cloud architectures, preventing unauthorized leakage or entry.
                </p>
              </div>

              {/* Sec 5 */}
              <div>
                <h2 className="font-gothic text-2xl text-madder border-b border-thread/20 pb-2 mb-4">V. Sovereign Data Compliance & Sovereign Rights</h2>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85 mb-4">
                  We observe and defer to standard regulations corresponding to our global shipping footprint and offices:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-thread/20 p-4 bg-linen/30">
                    <h3 className="font-gothic text-sm text-warp uppercase tracking-wider mb-2">West Africa (NDPR/GDPA)</h3>
                    <p className="font-prose text-xs text-warp/70 leading-relaxed">
                      Complies with the Nigerian Data Protection Regulation (NDPR) and Ghana Data Protection Act protecting trade inquiries.
                    </p>
                  </div>
                  <div className="border border-thread/20 p-4 bg-linen/30">
                    <h3 className="font-gothic text-sm text-warp uppercase tracking-wider mb-2">East Africa (KDPA)</h3>
                    <p className="font-prose text-xs text-warp/70 leading-relaxed">
                      Aligns with the Kenya Data Protection Act, safeguarding data processing within sovereign borders.
                    </p>
                  </div>
                  <div className="border border-thread/20 p-4 bg-linen/30">
                    <h3 className="font-gothic text-sm text-warp uppercase tracking-wider mb-2">European Union (GDPR)</h3>
                    <p className="font-prose text-xs text-warp/70 leading-relaxed">
                      Maintains strict criteria regarding erase-and-forget requests, enterprise security protocols, and export audits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sec 6 */}
              <div>
                <h2 className="font-gothic text-2xl text-madder border-b border-thread/20 pb-2 mb-4">VI. Rectification & Cleansing</h2>
                <p className="font-prose text-[15px] leading-relaxed text-warp/85">
                  Should you wish to have your contact registers purged or your corporate data modified, kindly dispatch a signed order to our general secretary via email or directly to our legal office. All approved purges are executed within seven calendar business days.
                </p>
              </div>

            </div>
          </PanelFrame>

          <TapestryBand thin />

          <div className="text-center font-prose text-xs text-warp/60 italic">
            This Privacy Charter was updated and sealed on June 14, 2026. This covenant remains binding until general revision as notified by public decree.
          </div>

        </motion.div>
      </div>
    </div>
  );
}
