function TickItem({ src, label, white }) {
  return (
    <div className="flex items-center gap-4">
      <img alt="" className="shrink-0 size-5" src={src} />
      <p className={"font-dm font-light text-sm whitespace-nowrap " + (white ? "text-white" : "text-black")} style={{ fontVariationSettings: "'opsz' 14" }}>{label}</p>
    </div>
  )
}

function ArrowBtn({ imgArrow, label, white }) {
  return (
    <div
      className={"flex items-center justify-center gap-2 px-6 py-[10px] rounded-[4px] w-full cursor-pointer " + (white ? "bg-white" : "bg-[#f73000]")}
      style={{ boxShadow: white ? "none" : "0px 2px 5px 0px rgba(0,0,0,0.1)" }}
      onClick={() => window.location.href = "tel:+94703202004"}
    >
      <p className={"font-dm font-medium text-xs whitespace-nowrap " + (white ? "text-[#f73000]" : "text-white")} style={{ fontVariationSettings: "'opsz' 14" }}>{label}</p>
      <div className="size-5 rotate-90 shrink-0">
        <img alt="" className="block size-full" src={imgArrow} />
      </div>
    </div>
  )
}

export default function PricingSection({ assets }) {
  const tick = assets.imgHugeiconsTick02Pricing
  const arrow = assets.imgMdiLightArrowUp

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 xl2:px-[160px] py-16 xl2:py-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <div className="border-[#616161] border-[0.5px] border-solid flex items-center justify-center px-3 py-1 rounded-full">
          <p className="font-dm font-normal text-xs text-black tracking-[2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>WEB DEV PRICING</p>
        </div>
        <h2 className="font-dm font-medium text-2xl sm:text-3xl xl2:text-[48px] text-black text-center leading-tight" style={{ fontVariationSettings: "'opsz' 14" }}>
          Transparent pricing,<span className="font-cormorant italic"> no hidden fees.</span>
        </h2>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Foundation */}
        <div className="bg-white border-[#d2d2d2] border-[0.5px] border-solid rounded-t-[20px] rounded-b-[8px] overflow-hidden flex flex-col">
          <div className="bg-[#fbfbfb] border-[#d2d2d2] border-[0.5px] border-solid rounded-[16px] m-4 p-4 flex flex-col gap-2">
            <p className="font-dm font-medium text-2xl text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Foundation</p>
            <p className="font-dm font-light text-[#616161] text-sm" style={{ fontVariationSettings: "'opsz' 14" }}>Build your digital presence with clarity and confidence.</p>
            <p className="font-dm font-bold text-3xl xl2:text-[40px] text-black tracking-[-2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 95,000</p>
            <p className="font-dm font-light text-[#616161] text-sm" style={{ fontVariationSettings: "'opsz' 14" }}>Basic project investment</p>
          </div>
          <div className="flex flex-col gap-4 px-4 py-4 flex-1">
            <TickItem src={tick} label="limited Pages (1 - 4)" />
            <TickItem src={tick} label="Custom UI Design" />
            <TickItem src={tick} label="Basic On-Page SEO" />
            <TickItem src={tick} label="Responsive Development" />
            <TickItem src={tick} label="1 Month Complimentary Maintenance" />
          </div>
          <div className="p-4">
            <ArrowBtn imgArrow={arrow} label="Schedule a Quick Meeting" />
          </div>
        </div>

        {/* Growth (dark) */}
        <div className="bg-black rounded-t-[20px] rounded-b-[8px] overflow-hidden shadow-[0px_4px_15px_-2px_rgba(0,0,0,0.25)] flex flex-col">
          <div className="relative bg-black border-[rgba(210,210,210,0.5)] border-[0.5px] border-solid rounded-[16px] m-4 p-4 overflow-hidden flex flex-col gap-2">
            <div className="absolute inset-0 pointer-events-none">
              <img alt="" className="block w-full h-full object-cover" src={assets.imgFrame71} />
            </div>
            <div className="relative z-10 flex items-start justify-between">
              <p className="font-dm font-medium text-2xl text-white" style={{ fontVariationSettings: "'opsz' 14" }}>Growth</p>
              <div className="border-[#00f731] border-[0.5px] border-solid flex items-center justify-center px-1.5 py-0.5 rounded-full shrink-0">
                <p className="font-dm font-medium text-[#00f731] text-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Most Popular ;)</p>
              </div>
            </div>
            <p className="relative z-10 font-dm font-light text-[#aaaaaa] text-sm" style={{ fontVariationSettings: "'opsz' 14" }}>Designed to attract traffic and convert visitors into leads.</p>
            <p className="relative z-10 font-dm font-bold text-3xl xl2:text-[40px] text-white tracking-[-2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 160,000</p>
            <p className="relative z-10 font-dm font-light text-[#aaaaaa] text-sm" style={{ fontVariationSettings: "'opsz' 14" }}>Strategic growth-focused build.</p>
          </div>
          <div className="flex flex-col gap-4 px-4 py-4 flex-1">
            <TickItem src={tick} label="Unlimited Pages" white />
            <TickItem src={tick} label="Custom UI With Advanced UX Strategy" white />
            <TickItem src={tick} label="Conversion-Focused Structure" white />
            <TickItem src={tick} label="Advanced On-Page SEO" white />
            <TickItem src={tick} label="Performance Optimization" white />
            <TickItem src={tick} label="Analytics and Tracking Setup" white />
            <TickItem src={tick} label="6 Months Complimentary Maintenance" white />
          </div>
          <div className="p-4">
            <ArrowBtn imgArrow={arrow} label="Schedule a Quick Meeting" white />
          </div>
        </div>

        {/* Authority */}
        <div className="bg-white border-[#d2d2d2] border-[0.5px] border-solid rounded-t-[20px] rounded-b-[8px] overflow-hidden flex flex-col">
          <div className="bg-[#fbfbfb] border-[#d2d2d2] border-[0.5px] border-solid rounded-[16px] m-4 p-4 flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <p className="font-dm font-medium text-2xl text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Authority</p>
              <div className="border-[#f73000] border-[0.5px] border-solid flex items-center justify-center px-1.5 py-0.5 rounded-full shrink-0">
                <p className="font-dm font-medium text-[#f73000] text-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Best Deal!</p>
              </div>
            </div>
            <p className="font-dm font-light text-[#616161] text-sm" style={{ fontVariationSettings: "'opsz' 14" }}>A fully engineered system for brands ready to lead.</p>
            <p className="font-dm font-bold text-3xl xl2:text-[40px] text-black tracking-[-2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 220,000+</p>
            <p className="font-dm font-light text-[#616161] text-sm" style={{ fontVariationSettings: "'opsz' 14" }}>Custom scope based on complexity.</p>
          </div>
          <div className="flex flex-col gap-4 px-4 py-4 flex-1">
            <TickItem src={tick} label="Unlimited Pages" />
            <TickItem src={tick} label="Custom UI With Advanced UX Strategy" />
            <TickItem src={tick} label="Funnel and Conversion Planning" />
            <TickItem src={tick} label="Technical SEO Architecture" />
            <TickItem src={tick} label="Core Web Vitals Optimization" />
            <TickItem src={tick} label="Advanced Integrations (CRM / Payments)" />
            <TickItem src={tick} label="12 Months Complimentary Maintenance" />
          </div>
          <div className="p-4">
            <ArrowBtn imgArrow={arrow} label="Schedule a Quick Meeting" />
          </div>
        </div>
      </div>

      {/* Testimonial quote banner */}
      <div className="border-[#d2d2d2] border-[0.5px] border-solid rounded-[24px] overflow-hidden px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center gap-4">
        <p className="font-dm font-light text-base xl2:text-[20px] text-black flex-1" style={{ fontVariationSettings: "'opsz' 14" }}>
          &ldquo;Professional, responsive, and easy to work with. Lynex delivered a high-quality and exceeded our expectations.&rdquo;
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <img alt="" className="size-8 rounded-full" src={assets.imgEllipse4} />
          <div>
            <p className="font-dm font-light text-base text-black tracking-[-0.8px]" style={{ fontVariationSettings: "'opsz' 14" }}>Aisha Rahman</p>
            <p className="font-dm font-light text-[10px] text-[#636260]" style={{ fontVariationSettings: "'opsz' 14" }}>Manager @Lotus Hotels</p>
          </div>
        </div>
      </div>
    </div>
  )
}
