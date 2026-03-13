import { useState } from "react";

const steps = [
  {
    id: 1,
    icon: "🔍",
    title: "Choose Your Product",
    desc: "Browse the PlumbersHQ range and select the consumables you use regularly. Add Auto-Replenish to as many products as you like.",
    pills: ["Thread Tape", "Silicone", "Flux", "Sealants"]
  },
  {
    id: 2,
    icon: "📅",
    title: "Set Your Schedule",
    desc: "Choose how often you'd like each product delivered — every 2 weeks, monthly, or every few months. Adjust anytime from your account."
  },
  {
    id: 3,
    icon: "💰",
    title: "Save 10% Automatically",
    desc: "No coupon codes. No manual discounts. The 10% saving is built into every Auto-Replenish delivery, automatically."
  }
];

const whyCards = [
  {
    id: 1,
    title: "Save 10% on Every Delivery",
    desc: "Whether it's thread tape, silicone, sealants or fixings, you'll always be paying less than the standard price on every order."
  },
  {
    id: 2,
    title: "Never Run Out of Essentials",
    desc: "Auto-Replenish ensures supplies arrive before you run out. No last-minute runs. No holding up a job over something small."
  },
  {
    id: 3,
    title: "Keep Your Ute Stocked",
    desc: "You already buy the same consumables every few weeks. Auto-Replenish makes that automatic so your ute is always ready."
  }
];

const products = [
  { icon: "🟡", name: "Thread Tape" },
  { icon: "🔧", name: "Silicone Sealants" },
  { icon: "🪣", name: "Pipe Sealant" },
  { icon: "🔥", name: "Flux & Solder" },
  { icon: "🧹", name: "Cleaning Wipes" },
  { icon: "🔩", name: "Fixings" },
  { icon: "💧", name: "Jointing Compound" },
  { icon: "🛡️", name: "PPE Consumables" },
  { icon: "⚙️", name: "Accessories" },
  { icon: "➕", name: "Any Product" }
];

const frequencies = [
  { label: "Every<br>2 Weeks", sub: "High use items" },
  { label: "Every<br>4 Weeks", sub: "Most popular", active: true },
  { label: "Every<br>6 Weeks", sub: "Moderate use" },
  { label: "Every<br>2–3 Months", sub: "Low use items" }
];

const whoCards = [
  {
    title: "Sole Trader Plumbers",
    desc: "If you're doing jobs every week and buying the same consumables on every run, Auto-Replenish eliminates the hassle and saves you 10% automatically."
  },
  {
    title: "Plumbing Business Owners",
    desc: "Running a team means managing more stock. Auto-Replenish keeps your supply chain predictable and consumable costs lower with no extra admin."
  },
  {
    title: "Plumbers on Tight Schedules",
    desc: "When every hour matters, the last thing you need is a supplier run. Auto-Replenish removes that friction entirely."
  },
  {
    title: "Regular PlumbersHQ Customers",
    desc: "If you're already ordering regularly, switching your regulars to Auto-Replenish is the easiest way to cut your spend by 10%."
  }
];

const faqs = [
  {
    question: "Do I always get the 10% discount?",
    answer: "Yes. Every Auto-Replenish delivery automatically receives the 10% discount — no coupon codes required.",
    open: true
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes. You can cancel at any time — no lock-in, no fees."
  },
  {
    question: "Can I change my delivery schedule?",
    answer: "Yes. Adjust frequency or skip a delivery whenever needed from your account."
  },
  {
    question: "When will my payment be charged?",
    answer: "Your payment is processed automatically when each scheduled order is generated, prior to despatch."
  },
  {
    question: "Can I add more products later?",
    answer: "Yes. Add additional Auto-Replenish products to your subscription whenever you like."
  }
];

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 bg-gray-100 ${className}`}>
      <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span className="text-xs tracking-widest uppercase text-gray-400">{label}</span>
    </div>
  );
}

export default function DesignOne() {
  const [activeFreq, setActiveFreq] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="font-sans bg-white text-[#2b2b2b] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap');
        .font-archivo { font-family: 'Archivo', sans-serif; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-ticker { animation: ticker 22s linear infinite; }
      `}</style>

      {/* Hero */}
      <section className="bg-white px-16 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch border-b-4 border-[#FBA42A]">
        <div className="pb-18 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-6">
            <span className="w-7 h-0.5 bg-[#FBA42A]" />
            New Feature
          </div>
          <h1 className="text-[clamp(56px,7vw,88px)] font-black leading-[0.88] text-[#2b2b2b] mb-6 tracking-[-1px]">
            Subscribe<br/>&amp; Save<br/><em className="italic text-[#FBA42A]">10% Off</em>
          </h1>
          <p className="text-base leading-[1.75] text-gray-600 max-w-[460px] mb-11">
            Auto-replenish the plumbing essentials you use every week. Set your schedule once — never run out mid-job again.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#FBA42A] text-[#2b2b2b] text-xs font-bold tracking-[2px] uppercase px-8 py-3 transition-all hover:bg-[#e8931a] hover:translate-y-[-2px] hover:shadow-[0_8px_28px_rgba(251,164,42,0.35)] font-archivo">
              Start Saving Today →
            </button>
            <button className="bg-transparent text-[#2b2b2b] text-xs font-bold tracking-[2px] uppercase px-8 py-3 border-2 border-[#2b2b2b] transition-all hover:bg-[#2b2b2b] hover:text-[#FBA42A] font-archivo">
              Browse Products
            </button>
          </div>
        </div>
        <div className="bg-[#2b2b2b] px-11 py-14 flex flex-col gap-9 justify-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[rgba(251,164,42,0.06)]" />
          <div>
            <div className="text-5xl font-black text-[#FBA42A] leading-none tracking-[-2px]">10%</div>
            <div className="text-xs font-semibold tracking-[2px] uppercase text-white/40 mt-1">Off every delivery, automatically</div>
          </div>
          <div className="h-px bg-white/8" />
          <div>
            <div className="text-5xl font-black text-[#FBA42A] leading-none tracking-[-2px]">1×</div>
            <div className="text-xs font-semibold tracking-[2px] uppercase text-white/40 mt-1">Setup — runs automatically after</div>
          </div>
          <div className="h-px bg-white/8" />
          <div>
            <div className="text-5xl font-black text-[#FBA42A] leading-none tracking-[-2px]">0</div>
            <div className="text-xs font-semibold tracking-[2px] uppercase text-white/40 mt-1">Lock-in — cancel or pause anytime</div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-[#FBA42A] py-3 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-ticker">
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">10% OFF EVERY ORDER</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">SAME-DAY DESPATCH</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">CANCEL ANYTIME</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">NO LOCK-IN</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">FLEXIBLE SCHEDULES</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">10% OFF EVERY ORDER</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">SAME-DAY DESPATCH</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">CANCEL ANYTIME</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">NO LOCK-IN</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
          <span className="text-xs font-extrabold tracking-[3px] uppercase text-[#2b2b2b]">FLEXIBLE SCHEDULES</span>
          <span className="text-[rgba(43,43,43,0.35)]">·</span>
        </div>
      </div>

      {/* No Run Section */}
      <section className="bg-[#2b2b2b] px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-18 items-center relative overflow-hidden">
        <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 text-[120px] font-black text-white/25 leading-[0.9] tracking-[-2px] whitespace-pre">
          AUTO<br/>AREPLENISH
        </div>
        <div>
          <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3.5">The Problem It Solves</div>
          <h2 className="text-[clamp(36px,4vw,54px)] font-black leading-[0.95] tracking-[-1px] text-white mb-4">Stop Running Out Mid-Job</h2>
          <p className="text-sm leading-[1.8] text-white/50 mt-4">
            Running out of basic plumbing supplies wastes time, delays jobs, and means unnecessary trips to the supplier. Auto-Replenish removes that frustration entirely.
          </p>
        </div>
        <ul className="flex flex-col list-none">
          {[
            "No reminders needed",
            "No supplier runs", 
            "No running out mid-job",
            "10% off every delivery",
            "Cancel anytime"
          ].map((item, i) => (
            <li key={i} className="text-base font-bold uppercase tracking-[0.5px] text-white py-4.5 border-b border-white/7 flex items-center gap-4">
              <span className="w-8 h-8 bg-[rgba(251,164,42,0.15)] border border-[rgba(251,164,42,0.3)] flex items-center justify-center text-xs text-[#FBA42A] flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="px-16 py-20 bg-white">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3.5">Simple Setup</div>
        <h2 className="text-[clamp(36px,4vw,54px)] font-black leading-[0.95] tracking-[-1px] mb-13">How Auto-Replenish Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-[#e8e5e0] mt-13">
          {steps.map((step) => (
            <div key={step.id} className="bg-white px-9 py-11 relative transition-colors hover:bg-[#fef9f0]">
              <div className="text-6xl font-black text-[rgba(251,164,42,0.08)] leading-none absolute top-3 right-4 tracking-[-4px]">{step.id}</div>
              <div className="w-12 h-12 bg-[#FBA42A] flex items-center justify-center text-2xl mb-5">{step.icon}</div>
              <h3 className="text-xl font-extrabold text-[#2b2b2b] mb-2.5">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-[1.7]">{step.desc}</p>
              {step.pills && (
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {step.pills.map((pill, i) => (
                    <span key={i} className="bg-[#f7f6f3] border border-[#e8e5e0] text-xs font-semibold p-1 text-[#2b2b2b] tracking-[0.5px]">
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="px-16 py-20 bg-[#2b2b2b]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3.5">Why Plumbers Use It</div>
        <h2 className="text-[clamp(36px,4vw,54px)] font-black leading-[0.95] tracking-[-1px] text-white mb-13">Built for the Trade</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-white/6 mt-13">
          {whyCards.map((card) => (
            <div key={card.id} className="bg-[#2b2b2b] px-8 py-10 transition-colors hover:bg-[#222] relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FBA42A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="text-5xl font-black text-[rgba(251,164,42,0.1)] leading-none mb-3 tracking-[-3px]">0{card.id}</div>
              <h3 className="text-lg font-extrabold text-[#FBA42A] mb-2.5">{card.title}</h3>
              <p className="text-xs text-white/50 leading-[1.7]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="px-16 py-20 bg-white">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3.5">Best for Auto-Replenish</div>
        <h2 className="text-[clamp(36px,4vw,54px)] font-black leading-[0.95] tracking-[-1px] mb-13">Popular Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0.5 bg-[#e8e5e0] mt-13">
          {products.map((product, i) => (
            <div key={i} className="bg-white px-5 py-7 text-center transition-all cursor-pointer border-b-3 border-transparent hover:bg-[#fef9f0] hover:border-[#FBA42A] hover:translate-y-[-2px]">
              <span className="text-3xl mb-2.5 block">{product.icon}</span>
              <span className="text-xs font-bold uppercase tracking-[1px] text-[#2b2b2b]">{product.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Frequency */}
      <section className="px-16 py-20 bg-[#FBA42A]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[rgba(43,43,43,0.6)] mb-3.5">You're in Control</div>
        <h2 className="text-[clamp(36px,4vw,54px)] font-black leading-[0.95] tracking-[-1px] text-[#2b2b2b] mb-13">Choose Your Schedule</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[rgba(43,43,43,0.15)] mt-13">
          {frequencies.map((freq, i) => (
            <div 
              key={i} 
              className={`bg-white/85 px-6 py-8 text-center cursor-pointer transition-all relative ${activeFreq === i ? 'bg-[#2b2b2b]' : ''}`}
              onClick={() => setActiveFreq(i)}
            >
              {activeFreq === i && (
                <div className="absolute top-3 right-3.5 text-sm font-extrabold text-[#FBA42A]">✓</div>
              )}
              <div className={`text-xl font-black text-[#2b2b2b] leading-[1.1] mb-1.5 tracking-[-0.5px] transition-colors ${activeFreq === i ? 'text-white' : ''}`} dangerouslySetInnerHTML={{ __html: freq.label }} />
              <div className={`text-xs font-semibold tracking-[1.5px] uppercase text-gray-600 transition-colors ${activeFreq === i ? 'text-white/50' : ''}`}>{freq.sub}</div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-[rgba(43,43,43,0.6)]">Pause, skip, or change frequency anytime. Cancel anytime — no lock-in.</p>
      </section>

      {/* Who */}
      <section className="px-16 py-20 bg-white">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3.5">Perfect For</div>
        <h2 className="text-[clamp(36px,4vw,54px)] font-black leading-[0.95] tracking-[-1px] mb-13">Who Uses Auto-Replenish</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 bg-[#e8e5e0] mt-13">
          {whoCards.map((card, i) => (
            <div key={i} className="bg-white px-9 transition-all border-l-4 border-transparent hover:border-l-[#FBA42A] hover:bg-[#fef9f0] hover:pl-8">
              <h3 className="text-base font-extrabold text-[#2b2b2b] mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-[1.7]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-16 py-20 bg-[#2b2b2b]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3.5">Got Questions?</div>
        <h2 className="text-[clamp(36px,4vw,54px)] font-black leading-[0.95] tracking-[-1px] text-white mb-10">Frequently Asked</h2>
        <div className="max-w-[780px] mt-10">
          {faqs.map((faq, i) => (
            <details key={i} className="border-b border-white/7" open={faq.open}>
              <summary 
                className="py-5 text-base font-bold text-white cursor-pointer flex justify-between items-center list-none"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenFaq(openFaq === i ? null : i);
                }}
              >
                {faq.question}
                <span className="text-2xl text-[#FBA42A] font-normal shrink-0">{openFaq === i ? '−' : '+'}</span>
              </summary>
              <p className="text-sm text-white/50 leading-[1.8] pb-5">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-16 py-25 bg-white text-center border-t border-[#e8e5e0]">
        <h2 className="text-[clamp(48px,6vw,80px)] font-black text-[#2b2b2b] leading-[0.9] tracking-[-2px] mb-5">
          Start Saving<br/><em className="italic text-[#FBA42A]">10% Today</em>
        </h2>
        <p className="text-base text-gray-600 mb-12">Browse the PlumbersHQ range and enable Auto-Replenish on the products you use most.</p>
        <button className="bg-[#FBA42A] text-[#2b2b2b] text-sm font-bold tracking-[2px] uppercase px-12 py-4.5 transition-all hover:bg-[#e8931a] hover:translate-y-[-2px] hover:shadow-[0_8px_28px_rgba(251,164,42,0.35)] font-archivo">
          Browse Auto-Replenish Products →
        </button>
        <div className="flex justify-center gap-10 mt-8 flex-wrap">
          {["Keep your ute stocked", "Keep your jobs moving", "Save 10% every time"].map((point, i) => (
            <span key={i} className="flex items-center gap-2 text-xs font-semibold tracking-[1px] uppercase text-gray-400">
              <span className="w-1.5 h-1.5 bg-[#FBA42A] rounded-full"></span>
              {point}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
