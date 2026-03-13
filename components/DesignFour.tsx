import { useState } from "react";

const howSteps = [
  {
    num: "01",
    title: "Choose Your Product",
    desc: "Browse the PlumbersHQ range and select the consumables you use most. Add Auto-Replenish to as many products as you like.",
    tags: ["Thread Tape", "Silicone", "Flux", "Sealants"]
  },
  {
    num: "02",
    title: "Set Your Schedule",
    desc: "Choose how often you'd like each product delivered. Pick every 2 weeks, monthly, or every few months — and adjust anytime from your account."
  },
  {
    num: "03",
    title: "Save 10% Automatically",
    desc: "Every Auto-Replenish order receives 10% off automatically. No codes, no manual discounts — the saving is built in every time."
  }
];

const features = [
  {
    icon: "💵",
    title: "Save 10% on Every Delivery",
    desc: "Thread tape, silicone, sealants — always 10% less than the standard price, automatically, every order."
  },
  {
    icon: "📦",
    title: "Never Run Out Mid-Job",
    desc: "Supplies arrive before you run out. No last-minute supplier runs. No delays because something small is missing."
  },
  {
    icon: "🚐",
    title: "Keep Your Ute Stocked",
    desc: "Your supplies arrive regularly so your ute stays stocked and ready — without any effort on your part."
  },
  {
    icon: "⚙️",
    title: "Full Subscription Control",
    desc: "Pause, skip, change your schedule, add or remove products, or cancel anytime — all from your account. No lock-in."
  }
];

const products = [
  { name: "Thread Tape", category: "Consumables", schedule: "Every 2–4 weeks", freq: "Very High" },
  { name: "Silicone Sealant", category: "Sealants", schedule: "Every 4 weeks", freq: "Very High" },
  { name: "Pipe Sealant", category: "Sealants", schedule: "Every 4–6 weeks", freq: "High" },
  { name: "Flux & Solder", category: "Copper Work", schedule: "Every 4–8 weeks", freq: "High" },
  { name: "Cleaning Wipes", category: "PPE & Safety", schedule: "Every 2–4 weeks", freq: "High" },
  { name: "Fixings & Accessories", category: "Hardware", schedule: "Every 4–8 weeks", freq: "Moderate" }
];

const frequencies = [
  { label: "Every<br>2 Weeks", sub: "High-use" },
  { label: "Every<br>4 Weeks", sub: "Most popular", active: true },
  { label: "Every<br>6 Weeks", sub: "Moderate" },
  { label: "2–3<br>Months", sub: "Low-use" }
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
    answer: "Yes. Every Auto-Replenish delivery automatically receives the 10% discount. No codes required.",
    open: true
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes — cancel at any time with no lock-in period and no cancellation fees."
  },
  {
    question: "Can I change my delivery schedule?",
    answer: "Yes. Adjust frequency, skip a delivery, or pause your subscription anytime from your account."
  },
  {
    question: "When will my payment be charged?",
    answer: "Your payment is processed automatically when each scheduled order is generated, prior to despatch."
  },
  {
    question: "Can I add more products later?",
    answer: "Yes. Add as many additional Auto-Replenish products as you need, whenever you like."
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

export default function DesignFour() {
  const [activeFreq, setActiveFreq] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="font-sans bg-white text-[#2b2b2b] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap');
        .font-archivo { font-family: 'Archivo', sans-serif; }
        :root {
          --body-custom-width-container: 1470px;
        }
        .container {
          max-width: var(--body-custom-width-container);
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 1025px) {
          .container {
            max-width: var(--body-custom-width-container);
            padding-left: 15px;
            padding-right: 15px;
          }
        }
      `}</style>

      {/* Announce */}
      <div className="bg-[#2b2b2b] px-16 py-2.5 flex justify-between items-center">
        <span className="text-xs font-medium text-white/50 tracking-[0.5px]">PlumbersHQ — Supporting Aussie Plumbers Since 1990</span>
        <span className="text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Free Shipping Over $200</span>
      </div>

      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_380px] min-h-[540px] border-b-3 border-[#FBA42A]">
        <div className="px-16 py-18 flex flex-col justify-center">
          <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-4.5">New — Subscribe &amp; Save</div>
          <h1 className="text-[clamp(52px,6vw,84px)] font-black leading-[0.88] tracking-[-2.5px] text-[#2b2b2b] mb-6">
            Auto-Replenish.<br/><em className="italic text-[#FBA42A]">10% Off<br/>Every Order.</em>
          </h1>
          <p className="text-base leading-[1.8] text-gray-600 max-w-[460px] mb-11">
            Auto-replenish the plumbing essentials you use every week. Set your schedule once — your consumables arrive automatically, 10% cheaper, every single time.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#FBA42A] text-[#2b2b2b] text-xs font-bold tracking-[2px] uppercase px-8 py-3 transition-all hover:bg-[#e8931a] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(251,164,42,0.35)] font-archivo">
              Start Saving Today →
            </button>
            <button className="bg-transparent text-[#2b2b2b] text-xs font-bold tracking-[2px] uppercase px-8 py-3 border-2 border-[#2b2b2b] transition-all hover:bg-[#2b2b2b] hover:text-[#FBA42A] font-archivo">
              Browse Products
            </button>
          </div>
        </div>
        <div className="bg-[#2b2b2b] px-10 py-13 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[280px] h-[280px] rounded-full bg-[rgba(251,164,42,0.06)]" />
          {[
            ["Discount on every delivery", "10%", "Applied automatically"],
            ["Schedule options", "4", "2 weeks to 3 months"],
            ["Lock-in period", "None", "Cancel or pause anytime"]
          ].map(([label, val, sub], i) => (
            <div key={i} className="py-7 border-b border-white/7 last:border-b-0">
              <div className="text-xs font-bold tracking-[2.5px] uppercase text-white/35 mb-2">{label}</div>
              <div className="text-5xl font-black text-[#FBA42A] leading-none tracking-[-2px]">{val}</div>
              <div className="text-xs text-white/35 mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <div className="bg-[#FBA42A] grid grid-cols-2 lg:grid-cols-4">
        {[
          { icon: "💰", title: "10% Off Always", sub: "Built into every delivery" },
          { icon: "🚚", title: "Same-Day Despatch", sub: "In-stock items shipped fast" },
          { icon: "🔄", title: "Flexible Schedule", sub: "Change or skip anytime" },
          { icon: "🇦🇺", title: "Aus Business", sub: "Australian owned &amp; operated" }
        ].map((item, i) => (
          <div key={i} className="px-7 py-5.5 border-r border-[rgba(43,43,43,0.15)] flex items-center gap-3.5 last:border-r-0">
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div>
              <div className="text-xs font-extrabold text-[#2b2b2b] block">{item.title}</div>
              <div className="text-xs text-[rgba(43,43,43,0.6)]">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* How */}
      <section className="px-16 py-22 bg-white">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Three Steps</div>
        <h2 className="text-[clamp(38px,4.5vw,58px)] font-black tracking-[-2px] leading-[0.9] text-[#2b2b2b] mb-15">How Auto-Replenish Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {howSteps.map((step) => (
            <div key={step.num} className="border-t-3 border-[#e8e5e0] pt-8 transition-colors hover:border-t-[#FBA42A]">
              <div className="text-6xl font-black text-[rgba(251,164,42,0.15)] leading-none tracking-[-3px] mb-4">{step.num}</div>
              <h3 className="text-xl font-extrabold text-[#2b2b2b] mb-2.5">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-[1.75]">{step.desc}</p>
              {step.tags && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {step.tags.map((tag, j) => (
                    <span key={j} className="bg-[#f7f6f3] border border-[#e8e5e0] text-xs font-semibold p-1 text-[#2b2b2b] tracking-[0.5px]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-16 py-22 bg-[#2b2b2b]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Why It Works</div>
        <h2 className="text-[clamp(38px,4.5vw,58px)] font-black tracking-[-2px] leading-[0.9] text-white mb-15">Built for Busy Plumbers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 bg-white/5 mt-13">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#2b2b2b] px-10 py-11 flex gap-6 transition-colors hover:bg-[#222]">
              <div className="w-13 h-13 bg-[rgba(251,164,42,0.1)] border border-[rgba(251,164,42,0.2)] flex items-center justify-center text-2xl shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-2.5">{feature.title}</h3>
                <p className="text-xs text-white/50 leading-[1.75]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Table */}
      <section className="px-16 py-22 bg-[#f7f6f3]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Top Products</div>
        <h2 className="text-[clamp(38px,4.5vw,58px)] font-black tracking-[-2px] leading-[0.9] text-[#2b2b2b] mb-15">What Works Best for Auto-Replenish</h2>
        <table className="w-full border-collapse mt-13">
          <thead>
            <tr className="bg-[#2b2b2b]">
              <th className="px-5 py-4 text-left text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Product</th>
              <th className="px-5 py-4 text-left text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Category</th>
              <th className="px-5 py-4 text-left text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Recommended Schedule</th>
              <th className="px-5 py-4 text-left text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Use Frequency</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i} className="hover:bg-[#fef9f0] transition-colors">
                <td className="px-5 py-4.5 text-sm font-bold text-[#2b2b2b] bg-white">{product.name}</td>
                <td className="px-5 py-4.5 text-sm bg-white">{product.category}</td>
                <td className="px-5 py-4.5 text-sm bg-white">{product.schedule}</td>
                <td className="px-5 py-4.5 text-sm bg-white">
                  <span className="inline-block bg-[rgba(251,164,42,0.15)] text-[#9a6200] text-xs font-bold p-1 tracking-[0.5px]">
                    {product.freq}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Frequency */}
      <section className="px-16 py-22 bg-white">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Your Control</div>
        <h2 className="text-[clamp(38px,4.5vw,58px)] font-black tracking-[-2px] leading-[0.9] text-[#2b2b2b] mb-15">Choose Your Frequency</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#e8e5e0] mt-13">
          {frequencies.map((freq, i) => (
            <div 
              key={i} 
              className={`bg-white px-6 py-9 cursor-pointer transition-all relative text-center ${activeFreq === i ? 'bg-[#2b2b2b]' : ''}`}
              onClick={() => setActiveFreq(i)}
            >
              {activeFreq === i && (
                <div className="absolute top-3.5 right-4 text-xs font-extrabold text-[#FBA42A]">✓</div>
              )}
              <div className={`text-2xl font-black text-[#2b2b2b] leading-[1.1] mb-2 tracking-[-1px] transition-colors ${activeFreq === i ? 'text-[#FBA42A]' : ''}`} dangerouslySetInnerHTML={{ __html: freq.label }} />
              <div className={`text-xs font-semibold tracking-[1.5px] uppercase text-gray-500 transition-colors ${activeFreq === i ? 'text-white/40' : ''}`}>{freq.sub}</div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-gray-500">Pause, skip, change or cancel anytime — no lock-in, no fees.</p>
      </section>

      {/* Who */}
      <section className="px-16 py-22 bg-[#FBA42A]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[rgba(43,43,43,0.6)] mb-3">Ideal For</div>
        <h2 className="text-[clamp(38px,4.5vw,58px)] font-black tracking-[-2px] leading-[0.9] text-[#2b2b2b] mb-15">Who Auto-Replenish Is Perfect For</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 bg-[rgba(43,43,43,0.15)] mt-13">
          {whoCards.map((card, i) => (
            <div key={i} className="bg-white/85 px-9 py-9 transition-colors hover:bg-white">
              <h3 className="text-base font-extrabold text-[#2b2b2b] mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-[1.7]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-16 py-22 bg-[#2b2b2b]">
        <div className="grid grid-cols-[300px_1fr] gap-16 mt-13 items-start">
          <div className="faq__intro">
            <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Questions</div>
            <h2 className="text-[40px] font-black tracking-[-2px] leading-[0.9] text-white mb-0">Frequently Asked</h2>
            <p className="text-sm leading-[1.8] text-white/50 mt-3">
              Everything you need to know about Auto-Replenish. Can't find an answer? Reach out to the team.
            </p>
            <a href="#" className="inline-block mt-5 text-xs font-bold tracking-[2px] uppercase text-[#FBA42A] border-b-2 border-[rgba(251,164,42,0.3)] pb-0.5 transition-colors hover:border-[#FBA42A]">
              Contact Us →
            </a>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <details key={i} className="mb-0.5" open={faq.open}>
                <summary 
                  className="bg-white/4 px-5 py-4.5 text-sm font-bold text-white cursor-pointer flex justify-between items-center list-none border-l-3 border-transparent transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaq(openFaq === i ? null : i);
                  }}
                >
                  {faq.question}
                  <span className="text-xl text-[#FBA42A] font-normal shrink-0">{openFaq === i ? '−' : '+'}</span>
                </summary>
                <p className="bg-white/3 px-5 py-3.5 pb-4.5 text-sm text-white/50 leading-[1.8]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-16 py-25 bg-white grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center border-t-3 border-[#FBA42A]">
        <div>
          <h2 className="text-[clamp(44px,5.5vw,72px)] font-black text-[#2b2b2b] leading-[0.9] tracking-[-2.5px]">
            Start Saving<br/><em className="italic text-[#FBA42A]">10% Today</em>
          </h2>
          <div className="flex flex-col gap-2.5 mt-5">
            {["Keep your ute stocked", "Keep your jobs moving", "Save 10% on every delivery"].map((point, i) => (
              <span key={i} className="flex items-center gap-2.5 text-sm font-medium text-gray-500">
                <span className="w-1.5 h-1.5 bg-[#FBA42A] rounded-full shrink-0"></span>
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end shrink-0">
          <button className="bg-[#2b2b2b] text-[#FBA42A] text-sm font-bold tracking-[2px] uppercase px-11 py-5 transition-all hover:bg-[#111] hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] font-archivo whitespace-nowrap">
            Browse Auto-Replenish Products →
          </button>
          <p className="text-xs text-gray-400 tracking-[0.5px] text-right">No lock-in · Cancel anytime · Free shipping over $200</p>
        </div>
      </section>
    </div>
  );
}
