function TickItem({ src, label, white }) {
  return (
    <div className="flex items-center gap-4">
      <img alt="" className="shrink-0 size-5" src={src} />
      <p className={"font-dm font-light text-sm whitespace-nowrap " + (white ? "text-white" : "text-black")} style={{ fontVariationSettings: "'opsz' 14" }}>{label}</p>
    </div>
  )
}

function ArrowBtn({ imgArrow, label }) {
  return (
    <div
      className="flex items-center justify-center gap-[10px] px-6 py-[10px] rounded-[4px] w-full cursor-pointer bg-[#f73000]"
      style={{ boxShadow: "0px 2px 2.5px rgba(0,0,0,0.1)" }}
      onClick={() => window.location.href = "tel:+94703202004"}
    >
      <p className="font-inter font-normal text-[12px] text-white whitespace-nowrap">{label}</p>
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
      <div className="flex flex-col items-center gap-3 xl2:gap-[18px] mb-10 xl2:mb-12">
        <div className="border-[#616161] border-[0.5px] border-solid flex items-center justify-center px-3 py-1 rounded-full">
          <p className="font-dm font-normal text-xs text-black tracking-[2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>WEB DEV PRICING</p>
        </div>
        <h2 className="font-dm font-medium text-2xl sm:text-3xl xl2:text-[48px] text-black text-center leading-tight xl2:leading-[62px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Transparent pricing,<span className="font-cormorant italic"> no hidden fees.</span>
        </h2>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl2:gap-8 mb-8">
        {/* Foundation */}
        <div className="bg-white border-[#d2d2d2] border-[0.5px] border-solid rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[8px] rounded-br-[8px] overflow-hidden flex flex-col">
          <div className="bg-[#fbfbfb] border-[#d2d2d2] border-[0.5px] border-solid rounded-[16px] m-4 p-4 flex flex-col gap-2">
            <p className="font-dm font-medium text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Foundation</p>
            <p className="font-dm font-light text-[#616161] text-[14px] xl2:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>Build your digital presence with clarity and confidence.</p>
            <p className="font-dm font-bold text-3xl xl2:text-[40px] text-black tracking-[-2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 95,000</p>
            <p className="font-dm font-light text-[#616161] text-[14px] xl2:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>Basic project investment</p>
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
        <div className="bg-black rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[8px] rounded-br-[8px] overflow-hidden shadow-[0px_4px_15px_-2px_rgba(0,0,0,0.25)] flex flex-col">
          <div className="relative bg-black border-[rgba(210,210,210,0.5)] border-[0.5px] border-solid rounded-[16px] m-4 p-4 overflow-hidden flex flex-col gap-2">
            <div className="absolute pointer-events-none" style={{ left: '-78px', top: '-26px', width: '476px', height: '254px' }}>
              <img alt="" className="block w-full h-full" src={assets.imgFrame71} />
            </div>
            <div className="relative z-10 flex items-start justify-between">
              <p className="font-dm font-medium text-[24px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>Growth</p>
              <div className="border-[#00f731] border-[0.5px] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-full shrink-0">
                <p className="font-dm font-medium text-[#00f731] text-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Most Popular ;)</p>
              </div>
            </div>
            <p className="relative z-10 font-dm font-light text-white text-[14px] xl2:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>Designed to attract traffic and convert visitors into leads.</p>
            <p className="relative z-10 font-dm font-bold text-3xl xl2:text-[40px] text-white tracking-[-2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 160,000</p>
            <p className="relative z-10 font-dm font-light text-white text-[14px] xl2:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>Strategic growth focused build.</p>
          </div>
          <div className="flex flex-col gap-4 px-4 py-4 flex-1">
            <TickItem src={tick} label="Unlimited Pages" white />
            <TickItem src={tick} label="Custom UI With Advanced UX Strategy" white />
            <TickItem src={tick} label="Conversion-Focused Structure" white />
            <TickItem src={tick} label="Advanced On-Page SEO" white />
            <TickItem src={tick} label="Performance Optimization" white />
            <TickItem src={tick} label="Analytics & Tracking Setup" white />
            <TickItem src={tick} label="6 Months Complimentary Maintenance" white />
          </div>
          <div className="p-4">
            <ArrowBtn imgArrow={arrow} label="Schedule a Quick Meeting" />
          </div>
        </div>

        {/* Authority */}
        <div className="bg-white border-[#d2d2d2] border-[0.5px] border-solid rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[8px] rounded-br-[8px] overflow-hidden flex flex-col">
          <div className="bg-[#fbfbfb] border-[#d2d2d2] border-[0.5px] border-solid rounded-[16px] m-4 p-4 flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <p className="font-dm font-medium text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Authority</p>
              <div className="border-[#f73000] border-[0.5px] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-full shrink-0">
                <p className="font-dm font-medium text-[#f73000] text-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Best Deal!</p>
              </div>
            </div>
            <p className="font-dm font-light text-[#616161] text-[14px] xl2:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>A fully engineered system for brands ready to lead.</p>
            <p className="font-dm font-bold text-3xl xl2:text-[40px] text-black tracking-[-2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 220,000+</p>
            <p className="font-dm font-light text-[#616161] text-[14px] xl2:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>Custom scope based on complexity.</p>
          </div>
          <div className="flex flex-col gap-4 px-4 py-4 flex-1">
            <TickItem src={tick} label="Unlimited Pages" />
            <TickItem src={tick} label="Custom UI With Advanced UX Strategy" />
            <TickItem src={tick} label="Funnel & Conversion Planning" />
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
      <div className="border-[#d2d2d2] border-[0.5px] border-solid rounded-[24px] overflow-hidden flex flex-col items-center justify-center gap-4 xl2:gap-[18px] px-6 py-6 xl2:px-8 xl2:h-[127px]">
        <p className="font-dm font-light text-sm xl2:text-[20px] text-black text-center xl2:whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          &ldquo;Professional, responsive, and easy to work with. Lynex delivered a high-quality and exceeded our expectations.&rdquo;
        </p>
        <div className="flex items-center gap-2.5">
          <img alt="" className="size-8 rounded-full shrink-0" src={assets.imgEllipse4} />
          <div>
            <p className="font-dm font-light text-[16px] text-black tracking-[-0.8px] leading-[normal]" style={{ fontVariationSettings: "'opsz' 14" }}>Aisha Rahman</p>
            <div className="flex items-center gap-1.5">
              <p className="font-dm font-light text-[10px] text-[#636260] tracking-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>Manager @Lotus Hotels</p>
              <div className="bg-[#f73000] flex items-center justify-center px-[3px] h-[11px] rounded-full">
                <p className="font-dm font-normal text-[10px] text-white tracking-[-0.5px]">AU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
