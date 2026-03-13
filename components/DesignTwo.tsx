import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Choose Your Product",
    desc: "Browse the PlumbersHQ range and select the products you use regularly. You can add Auto-Replenish to as many products as you like.",
    tags: ["Thread Tape", "Silicone", "Flux", "Sealants", "Fixings"]
  },
  {
    num: "02",
    title: "Set Your Delivery Schedule",
    desc: "Choose how often you'd like each product delivered — every 2 weeks, monthly, or every few months. Adjust your schedule anytime from your account."
  },
  {
    num: "03",
    title: "Save 10% Automatically",
    desc: "Every Auto-Replenish order automatically receives 10% off. No coupon codes. No manual discounts. The saving is built into every delivery."
  }
];

const whyCards = [
  {
    title: "Save on Every Delivery",
    desc: "The more frequently you use a product, the more savings add up. Thread tape, silicone, sealants — always 10% less than the standard price."
  },
  {
    title: "Never Run Out Mid-Job",
    desc: "Supplies arrive before you run out. No last-minute supplier runs. No delays because something small is missing."
  },
  {
    title: "Keep Your Ute Stocked",
    desc: "Supplies arrive regularly so your ute stays stocked and ready for the next job — without any effort on your part."
  }
];

const products = [
  { name: "Thread Tape", category: "Consumables", schedule: "Every 2–4 weeks", badge: "Most Popular" },
  { name: "Silicone Sealants", category: "Sealants", schedule: "Every 4 weeks", badge: "Most Popular" },
  { name: "Pipe Sealant", category: "Sealants", schedule: "Every 4–6 weeks", badge: "Popular" },
  { name: "Flux & Solder", category: "Copper Work", schedule: "Every 4–8 weeks", badge: "Popular" },
  { name: "Cleaning Wipes", category: "PPE & Safety", schedule: "Every 2–4 weeks", badge: "Popular" },
  { name: "Fixings & Accessories", category: "Hardware", schedule: "Every 4–8 weeks", badge: "Popular" }
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
    answer: "Yes. Every Auto-Replenish delivery automatically receives the 10% discount — no codes required.",
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
    answer: "Yes. Add additional Auto-Replenish products whenever you like."
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

export default function DesignTwo() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="font-sans bg-white text-[#2b2b2b] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700;1,900&display=swap');
        .font-archivo { font-family: 'Archivo', sans-serif; }
      `}</style>

      {/* Topbar */}
      <div className="bg-[#2b2b2b] px-16 py-2.5 flex justify-between items-center">
        <span className="text-xs font-bold tracking-[2.5px] uppercase text-white/40">PlumbersHQ — Auto-Replenish</span>
        <span className="text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Subscribe &amp; Save 10%</span>
      </div>

      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[540px]">
        <div className="px-16 py-20 flex flex-col justify-center border-r border-[#e8e5e0]">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-5">
            <span className="w-6 h-0.5 bg-[#FBA42A]" />
            Auto-Replenish
          </div>
          <h1 className="text-[clamp(48px,5.5vw,80px)] font-black leading-[0.9] tracking-[-2px] text-[#2b2b2b] mb-6">
            Subscribe<br/>&amp; Save<br/><em className="italic text-[#FBA42A]">10% Every<br/>Time</em>
          </h1>
          <p className="text-base leading-[1.8] text-gray-600 max-w-[380px] mb-10">
            Auto-replenish the plumbing essentials you use every week. Set your schedule once and the savings happen automatically — no codes, no effort.
          </p>
          <button className="bg-[#FBA42A] text-[#2b2b2b] text-xs font-bold tracking-[2px] uppercase px-8 py-3 transition-all hover:bg-[#e8931a] hover:translate-y-[-2px] font-archivo">
            Start Saving Today →
          </button>
        </div>
        <div className="px-16 py-20 flex flex-col justify-center gap-10 bg-[#f7f6f3]">
          <div className="relative pl-5">
            <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-[#FBA42A]" />
            <div className="text-5xl font-black text-[#2b2b2b] leading-none tracking-[-2px]">10%</div>
            <div className="text-xs text-gray-500 mt-1">Off every Auto-Replenish delivery</div>
          </div>
          <div className="h-px bg-[#e8e5e0]" />
          <div className="relative pl-5">
            <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-[#FBA42A]" />
            <div className="text-5xl font-black text-[#2b2b2b] leading-none tracking-[-2px]">1×</div>
            <div className="text-xs text-gray-500 mt-1">Setup — runs automatically after</div>
          </div>
          <div className="h-px bg-[#e8e5e0]" />
          <div className="relative pl-5">
            <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-[#FBA42A]" />
            <div className="text-5xl font-black text-[#2b2b2b] leading-none tracking-[-2px]">0</div>
            <div className="text-xs text-gray-500 mt-1">Lock-in — cancel or pause anytime</div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="bg-[#FBA42A] px-16 py-15 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <p className="text-[clamp(24px,3vw,36px)] font-black text-[#2b2b2b] leading-[1.1] tracking-[-0.5px]">
          "Running out mid-job wastes time, delays work &amp; means <em className="italic">unnecessary trips</em> to the supplier."
        </p>
        <div className="flex flex-col gap-4">
          {[
            "No reminders needed",
            "No last-minute supplier runs",
            "No holding up jobs over something small",
            "10% off automatically, every delivery",
            "Flexible schedule — your control"
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3.5 text-sm font-semibold text-[#2b2b2b]">
              <span className="w-2 h-2 bg-[#2b2b2b] rounded-full flex-shrink-0"></span>
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="px-16 py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16 pb-8 border-b-2 border-[#2b2b2b]">
          <div>
            <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Three Simple Steps</div>
            <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-1.5px] leading-[0.95]">How Auto-Replenish Works</h2>
          </div>
          <p className="text-sm leading-[1.8] text-gray-600 self-end">
            Most plumbers already buy the same consumables every few weeks. Auto-Replenish simply makes that process automatic — and cheaper.
          </p>
        </div>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className="grid grid-cols-[80px_1fr] gap-8 py-10 border-b border-[#e8e5e0] items-start last:border-b-0">
              <div className="text-5xl font-black text-[rgba(251,164,42,0.2)] leading-none tracking-[-2px] text-right">{step.num}</div>
              <div>
                <h3 className="text-xl font-extrabold text-[#2b2b2b] mb-2.5">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-[1.75]">{step.desc}</p>
                {step.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {step.tags.map((tag, j) => (
                      <span key={j} className="bg-[#f7f6f3] text-xs font-semibold p-1 text-[#2b2b2b] tracking-[0.5px] border border-[#e8e5e0] px-3">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="px-16 py-20 bg-[#2b2b2b]">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Why Plumbers Use It</div>
        <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-1.5px] leading-[0.95] text-white mb-13">Built for the Trade</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 bg-white/6 mt-13">
          {whyCards.map((card, i) => (
            <div key={i} className="bg-[#2b2b2b] px-9 py-11 transition-colors hover:bg-[#222]">
              <div className="w-10 h-0.5 bg-[#FBA42A] mb-6"></div>
              <h3 className="text-xl font-extrabold text-white mb-3">{card.title}</h3>
              <p className="text-xs text-white/50 leading-[1.75]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Table */}
      <section className="px-16 py-20 bg-white">
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">What Works Best</div>
        <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-1.5px] leading-[0.95] mb-12">Popular Auto-Replenish Products</h2>
        <table className="w-full border-collapse mt-12">
          <thead>
            <tr className="bg-[#2b2b2b]">
              <th className="px-5 py-4 text-left text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Product</th>
              <th className="px-5 py-4 text-left text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Category</th>
              <th className="px-5 py-4 text-left text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Ideal Schedule</th>
              <th className="px-5 py-4 text-left text-xs font-bold tracking-[2px] uppercase text-[#FBA42A]">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i} className="hover:bg-[#f7f6f3] transition-colors">
                <td className="px-5 py-4.5 text-sm font-bold text-[#2b2b2b]">{product.name}</td>
                <td className="px-5 py-4.5 text-sm">{product.category}</td>
                <td className="px-5 py-4.5 text-sm">{product.schedule}</td>
                <td className="px-5 py-4.5 text-sm">
                  <span className="inline-block bg-[rgba(251,164,42,0.15)] text-[#9a6200] text-xs font-bold p-1 tracking-[0.5px]">
                    {product.badge}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Manage */}
      <section className="px-16 py-20 bg-[#FBA42A] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-[clamp(40px,4.5vw,62px)] font-black text-[#2b2b2b] leading-[0.9] tracking-[-2px] mb-6">Flexible Subscription Management</h2>
          <p className="text-sm leading-[1.8] text-[rgba(43,43,43,0.65)] mb-8">
            Your schedule isn't locked in. Auto-Replenish gives you complete control over every delivery — change it, skip it, or cancel it whenever you need.
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              "Pause a delivery",
              "Skip a delivery",
              "Change your delivery schedule",
              "Add or remove products",
              "Cancel anytime — no fees"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-semibold text-[#2b2b2b]">
                <span className="w-5.5 h-5.5 bg-[#2b2b2b] text-[#FBA42A] text-xs font-extrabold flex items-center justify-center flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#2b2b2b] p-8">
          <div className="text-xs font-bold tracking-[2px] uppercase text-white/30 mb-6">Your Active Subscriptions</div>
          {subscriptions.map((sub, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-white/6 last:border-b-0">
              <div>
                <div className="text-xs font-semibold text-white">{sub.name}</div>
                <div className="text-xs text-white/40 mt-0.5">{sub.freq}</div>
              </div>
              <span className="text-xs font-extrabold text-[#FBA42A]">−10%</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-16 py-20 bg-white">
        <div className="grid grid-cols-[280px_1fr] gap-16 mt-12 items-start">
          <div className="faq__intro">
            <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-3">Questions Answered</div>
            <h2 className="text-[36px] font-black tracking-[-1.5px] leading-[0.95] mb-3">Frequently Asked</h2>
            <p className="text-sm leading-[1.8] text-gray-600 mt-3">
              Everything you need to know about Auto-Replenish. Can't find your answer? Get in touch.
            </p>
            <a href="#" className="inline-block mt-5 text-xs font-bold tracking-[2px] uppercase text-[#2b2b2b] border-b-2 border-[#FBA42A] pb-0.5">
              Contact PlumbersHQ →
            </a>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <details key={i} className="border-b border-[#e8e5e0]" open={faq.open}>
                <summary 
                  className="py-4.5 text-sm font-bold text-[#2b2b2b] cursor-pointer flex justify-between items-center list-none"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaq(openFaq === i ? null : i);
                  }}
                >
                  {faq.question}
                  <span className="text-xl text-[#FBA42A] font-normal shrink-0">{openFaq === i ? '−' : '+'}</span>
                </summary>
                <p className="text-sm leading-[1.75] text-gray-600 pb-4.5">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-16 py-25 bg-[#2b2b2b] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[rgba(251,164,42,0.07)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[rgba(251,164,42,0.04)]" />
        <div className="text-xs font-bold tracking-[3px] uppercase text-[#FBA42A] mb-5 relative">Ready to get started?</div>
        <h2 className="text-[clamp(52px,6.5vw,88px)] font-black text-white leading-[0.88] tracking-[-3px] mb-5 relative">
          Start Saving<br/><em className="italic text-[#FBA42A]">10% Today</em>
        </h2>
        <p className="text-base text-white/40 mb-11 relative">Keep your ute stocked. Keep your jobs moving. Save 10% every time.</p>
        <div className="flex justify-center gap-3.5 flex-wrap relative">
          <button className="bg-[#FBA42A] text-[#2b2b2b] text-xs font-bold tracking-[2px] uppercase px-10 py-4 transition-all hover:bg-[#e8931a] hover:translate-y-[-2px] font-archivo">
            Browse Auto-Replenish Products
          </button>
          <button className="bg-transparent text-white text-xs font-bold tracking-[2px] uppercase px-10 py-4 border border-white/15 transition-all hover:border-[#FBA42A] hover:text-[#FBA42A] font-archivo">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
