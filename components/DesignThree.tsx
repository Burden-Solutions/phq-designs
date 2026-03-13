import { useState } from "react";

const steps = [
  {
    id: 1,
    icon: "🔍",
    title: "Choose Product",
    desc: "Select the consumables you use most. Add Auto-Replenish to as many products as you like.",
    chips: ["Thread Tape", "Silicone", "Flux"]
  },
  {
    id: 2,
    icon: "📅",
    title: "Set Schedule",
    desc: "Pick how often you need each product delivered — every 2 weeks, monthly, or every few months. Adjust anytime from your account."
  },
  {
    id: 3,
    icon: "💰",
    title: "Save 10% Always",
    desc: "Every Auto-Replenish order saves you 10% automatically. No codes. No manual steps. It just happens."
  }
];

const products = [
  {
    icon: "🟡",
    name: "Thread Tape",
    desc: "Used on nearly every job — one of the most common plumbing consumables and ideal for scheduled delivery.",
    freq: "Every 2–4 weeks"
  },
  {
    icon: "🔧",
    name: "Silicone Sealants",
    desc: "Applied on almost every job. Auto-Replenish ensures you always have cartridges on hand.",
    freq: "Every 4 weeks"
  },
  {
    icon: "🪣",
    name: "Pipe Sealant",
    desc: "Jointing compounds used constantly across plumbing jobs — set and forget.",
    freq: "Every 4–6 weeks"
  },
  {
    icon: "🔥",
    name: "Flux & Solder",
    desc: "If you regularly solder copper pipework, these are perfect Auto-Replenish candidates.",
    freq: "Every 4–8 weeks"
  },
  {
    icon: "🧹",
    name: "Cleaning Wipes",
    desc: "Used daily on site. Small, easy to forget, and ideal for automatic restocking.",
    freq: "Every 2–4 weeks"
  },
  {
    icon: "🔩",
    name: "Fixings & Accessories",
    desc: "Small components that are easy to run out of — auto-replenish keeps them topped up.",
    freq: "Every 4–8 weeks"
  }
];

const frequencies = [
  { period: "Every<br>2 Weeks", sub: "High-use items" },
  { period: "Every<br>4 Weeks", sub: "Most popular", active: true },
  { period: "Every<br>6 Weeks", sub: "Moderate use" },
  { period: "2–3<br>Months", sub: "Low-use items" }
];

const manageItems = [
  "Pause a delivery",
  "Skip a delivery",
  "Change your delivery schedule",
  "Add or remove products",
  "Cancel anytime — no fees"
];

const subscriptions = [
  { name: "Thread Tape × 5", freq: "Every 4 weeks" },
  { name: "Silicone Sealant × 3", freq: "Every 4 weeks" },
  { name: "Flux Paste × 2", freq: "Every 6 weeks" },
  { name: "Cleaning Wipes × 10", freq: "Every 2 weeks" }
];

const faqs = [
  {
    question: "Do I always get the 10% discount?",
    answer: "Yes. Every Auto-Replenish delivery automatically receives the 10% discount, no codes required.",
    open: true
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes — cancel anytime. No lock-in, no cancellation fees."
  },
  {
    question: "Can I change my delivery schedule?",
    answer: "Yes. Adjust frequency, skip a delivery, or pause your subscription anytime from your account."
  },
  {
    question: "When will my payment be charged?",
    answer: "Payment is processed automatically when each scheduled order is generated, prior to despatch."
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

export default function DesignThree() {
  const [activeFreq, setActiveFreq] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="font-sans bg-white text-[#2b2b2b] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,900&display=swap');
        .font-archivo { font-family: 'Archivo', sans-serif; }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.3; transform:scale(.7); } }
        .animate-pulse { animation: pulse 1.5s ease-in-out infinite; }
      `}</style>

      {/* Hero */}
      <section className="bg-[#2b2b2b] px-18 py-24 relative overflow-hidden">
        <div className="absolute -top-50 -right-37.5 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(251,164,42,0.1)_0%,transparent_65%)]" />
        <div className="flex items-center gap-2 bg-[rgba(251,164,42,0.1)] border border-[rgba(251,164,42,0.25)] text-[#FBA42A] text-xs font-bold tracking-[2.5px] uppercase px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-[#FBA42A] rounded-full animate-pulse" />
          New — Auto-Replenish is Live
        </div>
        <h1 className="text-[clamp(64px,9vw,120px)] font-black leading-[0.85] text-white mb-4 tracking-[-4px]">
          Subscribe<br/><span className="text-[#FBA42A]">&amp; Save</span><em className="italic block [-webkit-text-stroke:2px_rgba(251,164,42,0.6)] text-transparent">10% Off</em>
        </h1>
        <p className="text-base leading-[1.8] text-white/50 max-w-[500px] mx-0 my-7">
          Auto-replenish the plumbing essentials you use every week. Set it once — supplies arrive automatically, 10% cheaper, every time.
        </p>
        <div className="flex items-center gap-6 flex-wrap">
          <button className="bg-[#FBA42A] text-[#2b2b2b] text-xs font-bold tracking-[2.5px] uppercase px-10 py-4 transition-all hover:bg-[#e8931a] hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(251,164,42,0.3)] font-archivo">
            Start Auto-Replenish →
          </button>
          <a href="#" className="text-xs font-semibold text-white/40 tracking-[1px] border-b border-white/20 pb-0.5 transition-all hover:text-[#FBA42A] hover:border-[#FBA42A]">
            See how it works
          </a>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-white grid grid-cols-2 lg:grid-cols-4 border-b-3 border-[#FBA42A]">
        {[
          ["10%", "Off every delivery"],
          ["1×", "Setup — auto after"],
          ["4", "Schedule options"],
          ["0", "Lock-in period"]
        ].map(([num, label], i) => (
          <div key={i} className="px-9 py-8 border-r border-[#e8e5e0] transition-colors hover:bg-[#f7f6f3] last:border-r-0">
            <div className="text-5xl font-black text-[#FBA42A] leading-none tracking-[-2px] mb-1">{num}</div>
            <div className="text-xs font-semibold tracking-[1px] uppercase text-gray-500">{label}</div>
          </div>
        ))}
      </div>

      {/* How */}
      <section className="px-18 py-22 bg-[#f7f6f3]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Simple Setup</div>
        <h2 className="text-[clamp(40px,4.5vw,60px)] font-black text-[#2b2b2b] tracking-[-2px] mb-15 leading-[0.95]">How It Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-[#e8e5e0]">
          {steps.map((step) => (
            <div key={step.id} className="bg-[#f7f6f3] px-9 py-12 relative transition-colors hover:bg-white">
              <div className="text-6xl font-black text-[rgba(251,164,42,0.1)] leading-none absolute top-3 right-4 tracking-[-3px]">{step.id}</div>
              <div className="w-13 h-13 bg-[#2b2b2b] flex items-center justify-center text-2xl mb-6">{step.icon}</div>
              <h3 className="text-xl font-extrabold text-[#2b2b2b] mb-3">{step.title}</h3>
              <p className="text-sm leading-[1.75] text-gray-600">{step.desc}</p>
              {step.chips && (
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {step.chips.map((chip, i) => (
                    <span key={i} className="bg-[#2b2b2b] text-[#FBA42A] text-xs font-semibold p-1 tracking-[0.5px]">
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="px-18 py-22 bg-[#2b2b2b]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Best Suited For</div>
        <h2 className="text-[clamp(40px,4.5vw,60px)] font-black text-white tracking-[-2px] mb-13 leading-[0.95]">Top Auto-Replenish Products</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-white/5 mt-13">
          {products.map((product, i) => (
            <div key={i} className="bg-[#2b2b2b] px-9 py-9 transition-colors hover:bg-[#222] relative overflow-hidden cursor-pointer">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#FBA42A] scale-y-0 transition-transform origin-bottom hover:scale-y-100" />
              <div className="text-3xl mb-3.5">{product.icon}</div>
              <h3 className="text-lg font-extrabold text-white mb-2">{product.name}</h3>
              <p className="text-xs text-white/45 leading-[1.65] mb-4">{product.desc}</p>
              <span className="text-xs font-bold tracking-[1px] uppercase text-[#FBA42A] bg-[rgba(251,164,42,0.1)] px-2.5 py-1 inline-block">
                {product.freq}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Frequency */}
      <section className="px-18 py-22 bg-white">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Your Schedule, Your Control</div>
        <h2 className="text-[clamp(40px,4.5vw,60px)] font-black text-[#2b2b2b] tracking-[-2px] mb-13 leading-[0.95]">Choose Your Frequency</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#e8e5e0] mt-13">
          {frequencies.map((freq, i) => (
            <div 
              key={i} 
              className={`bg-white px-7 py-9 text-center cursor-pointer transition-all relative border-b-3 border-transparent ${activeFreq === i ? 'bg-[#2b2b2b] border-b-[#FBA42A]' : ''}`}
              onClick={() => setActiveFreq(i)}
            >
              <div className={`text-2xl font-black text-[#2b2b2b] leading-[1.1] mb-2 tracking-[-1px] transition-colors ${activeFreq === i ? 'text-white' : ''}`} dangerouslySetInnerHTML={{ __html: freq.period }} />
              <div className={`text-xs font-semibold tracking-[1.5px] uppercase text-gray-500 transition-colors ${activeFreq === i ? 'text-white/40' : ''}`}>{freq.sub}</div>
              {activeFreq === i && (
                <div className="absolute top-3.5 right-4 text-xs font-extrabold text-[#FBA42A]">✓</div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-gray-500 text-center">Pause, skip, change or cancel anytime — no lock-in, no fees.</p>
      </section>

      {/* Manage */}
      <section className="px-18 py-22 bg-[#FBA42A] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-[clamp(44px,5vw,64px)] font-black text-[#2b2b2b] leading-[0.9] tracking-[-2px] mb-6">
            Flexible <em className="italic">Subscription</em> Management
          </h2>
          <p className="text-sm leading-[1.8] text-[rgba(43,43,43,0.65)] mb-8">
            Your schedule isn't locked in. Auto-Replenish gives you complete control over every delivery — change it, skip it, or cancel it whenever you need.
          </p>
          <div className="flex flex-col gap-3">
            {manageItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3.5 text-sm font-semibold text-[#2b2b2b]">
                <span className="w-6 h-6 bg-[#2b2b2b] text-[#FBA42A] text-xs font-bold flex items-center justify-center flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          <div className="text-xs font-bold tracking-[2px] uppercase text-gray-500 mb-6 pb-3 border-b border-[#e8e5e0]">Your Active Subscriptions</div>
          {subscriptions.map((sub, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-[#e8e5e0] last:border-b-0">
              <div>
                <div className="text-xs font-bold text-[#2b2b2b]">{sub.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{sub.freq}</div>
              </div>
              <span className="text-xs font-black text-[#FBA42A]">−10%</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-18 py-22 bg-[#f7f6f3]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Questions Answered</div>
        <h2 className="text-[clamp(40px,4.5vw,60px)] font-black text-[#2b2b2b] tracking-[-2px] mb-10 leading-[0.95]">FAQ</h2>
        <div className="max-w-[800px]">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white mb-0.5" open={faq.open}>
              <summary 
                className="px-6 py-5 text-sm font-bold text-[#2b2b2b] cursor-pointer flex justify-between items-center list-none border-l-3 border-transparent transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenFaq(openFaq === i ? null : i);
                }}
              >
                {faq.question}
                <span className="text-xl text-[#FBA42A] font-normal shrink-0">{openFaq === i ? '−' : '+'}</span>
              </summary>
              <p className="px-6 pb-5 text-sm text-gray-600 leading-[1.8]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-18 py-25 bg-[#2b2b2b] text-center relative overflow-hidden">
        <div className="absolute text-[220px] font-black text-[rgba(251,164,42,0.03)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-[-8px] italic pointer-events-none">SAVE</div>
        <h2 className="text-[clamp(56px,7vw,96px)] font-black text-white leading-[0.88] tracking-[-3px] mb-5 relative">
          Start <em className="italic text-[#FBA42A]">Saving</em><br/>10% Today
        </h2>
        <p className="text-base text-white/40 mb-12 relative">Browse the PlumbersHQ range and enable Auto-Replenish on the products you use most.</p>
        <button className="bg-[#FBA42A] text-[#2b2b2b] text-sm font-bold tracking-[2.5px] uppercase px-12 py-4.5 transition-all hover:bg-[#e8931a] hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(251,164,42,0.3)] relative font-archivo">
          Browse Auto-Replenish Products →
        </button>
        <div className="flex justify-center gap-9 mt-9 flex-wrap">
          {["Keep your ute stocked", "Keep your jobs moving", "Save 10% every time"].map((tag, i) => (
            <span key={i} className="text-xs font-semibold tracking-[1.5px] uppercase text-white/30 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#FBA42A] rounded-full"></span>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
