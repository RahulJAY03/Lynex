function TickItem({ src, label, white }) {
  return (
    <div className="h-[21px] relative shrink-0 flex items-center gap-[16px]">
      <div className="relative shrink-0 size-[20px]">
        <img alt="" className="absolute block max-w-none size-full" src={src} />
      </div>
      <p className={"font-dm font-light leading-[normal] text-[14px] whitespace-nowrap " + (white ? "text-white" : "text-black")} style={{ fontVariationSettings: "'opsz' 14" }}>{label}</p>
    </div>
  )
}

function ArrowBtn({ imgArrow, label, white }) {
  return (
    <div className={"content-stretch flex items-center justify-center gap-[10px] px-[24px] py-[10px] rounded-[4px] w-full " + (white ? "bg-white" : "bg-[#f73000]")} style={{ boxShadow: white ? 'none' : '0px 2px 5px 0px rgba(0,0,0,0.1)' }}>
      <p className={"font-dm font-medium leading-[normal] text-[12px] whitespace-nowrap " + (white ? "text-[#f73000]" : "text-white")} style={{ fontVariationSettings: "'opsz' 14" }}>{label}</p>
      <div className="flex items-center justify-center size-[20px] rotate-90 shrink-0">
        <img alt="" className="block max-w-none size-full" src={imgArrow} />
      </div>
    </div>
  )
}

export default function PricingSection({ assets }) {
  const tick = assets.imgHugeiconsTick02Pricing
  const arrow = assets.imgMdiLightArrowUp

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative w-full">
      {/* Header */}
      <div className="h-[102px] relative shrink-0 w-[712px]">
        <p className="-translate-x-1/2 absolute font-dm font-medium leading-[0] left-1/2 text-[48px] text-black text-center top-[40px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="leading-[normal]">Transparent pricing,</span>
          <span className="font-cormorant font-medium italic leading-[normal]"> no hidden fees.</span>
        </p>
        <div className="-translate-x-1/2 absolute border-[#616161] border-[0.5px] border-solid content-stretch flex items-center justify-center left-[calc(50%+0.5px)] px-[12px] py-[4px] rounded-[27px] top-0">
          <p className="font-dm font-normal leading-[normal] relative shrink-0 text-[12px] text-black tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>WEB DEV PRICING</p>
        </div>
      </div>

      {/* 3 Cards */}
      <div className="h-[564px] relative shrink-0 w-full">
        {/* Foundation */}
        <div className="absolute bg-white border-[#d2d2d2] border-[0.5px] border-solid h-[564px] left-0 overflow-clip rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[8px] rounded-br-[8px] top-0 w-[352px]">
          <div className="-translate-x-1/2 absolute bg-[#fbfbfb] border-[#d2d2d2] border-[0.5px] border-solid h-[194px] left-1/2 overflow-clip rounded-[16px] top-[15.5px] w-[320px]">
            <p className="absolute font-dm font-medium leading-[normal] left-[16px] text-[24px] text-black top-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Foundation</p>
            <p className="absolute font-dm font-light leading-[normal] left-[16px] text-[#616161] text-[16px] top-[51px] w-[288px]" style={{ fontVariationSettings: "'opsz' 14" }}>Build your digital presence with clarity and confidence.</p>
            <p className="absolute font-dm font-bold leading-[normal] left-[16px] text-[40px] text-black top-[101px] tracking-[-2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 95,000</p>
            <p className="absolute font-dm font-light leading-[normal] left-[16px] text-[#616161] text-[16px] top-[161px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Basic project investment</p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[15.5px] top-[225.5px] w-[313px]">
            <TickItem src={tick} label="limited Pages (1 - 4)" />
            <TickItem src={tick} label="Custom UI Design" />
            <TickItem src={tick} label="Basic On-Page SEO" />
            <TickItem src={tick} label="Responsive Development" />
            <TickItem src={tick} label="1 Month Complimentary Maintenance" />
          </div>
          <div className="absolute bottom-[15.5px] left-[15.5px] right-[15.5px]">
            <ArrowBtn imgArrow={arrow} label="Schedule a Quick Meeting" />
          </div>
        </div>

        {/* Growth (dark) */}
        <div className="absolute bg-black h-[564px] left-[384px] overflow-clip rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[8px] rounded-br-[8px] shadow-[0px_4px_15px_-2px_rgba(0,0,0,0.25)] top-0 w-[352px]">
          <div className="-translate-x-1/2 absolute bg-black border-[rgba(210,210,210,0.5)] border-[0.5px] border-solid h-[194px] left-1/2 overflow-clip rounded-[16px] top-[15.5px] w-[320px]">
            <div className="absolute inset-[0_-0.84%_-14.95%_0]">
              <img alt="" className="block max-w-none size-full" src={assets.imgFrame71} />
            </div>
            <div className="-translate-x-1/2 absolute border-[#00f731] border-[0.5px] border-solid content-stretch flex items-center justify-center left-[calc(50%+111.5px)] px-[4px] py-[2px] rounded-[27px] top-[19px]">
              <p className="font-dm font-medium leading-[normal] relative shrink-0 text-[#00f731] text-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Most Popular ;)</p>
            </div>
            <p className="absolute font-dm font-medium leading-[normal] left-[16px] text-[24px] text-white top-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Growth</p>
            <p className="absolute font-dm font-light leading-[normal] left-[16px] text-[#aaaaaa] text-[16px] top-[51px] w-[288px]" style={{ fontVariationSettings: "'opsz' 14" }}>Designed to attract traffic and convert visitors into leads.</p>
            <p className="absolute font-dm font-bold leading-[normal] left-[16px] text-[40px] text-white top-[101px] tracking-[-2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 160,000</p>
            <p className="absolute font-dm font-light leading-[normal] left-[16px] text-[#aaaaaa] text-[16px] top-[161px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Strategic growth-focused build.</p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[15.5px] top-[225.5px] w-[313px]">
            <TickItem src={tick} label="Unlimited Pages" white />
            <TickItem src={tick} label="Custom UI With Advanced UX Strategy" white />
            <TickItem src={tick} label="Conversion-Focused Structure" white />
            <TickItem src={tick} label="Advanced On-Page SEO" white />
            <TickItem src={tick} label="Performance Optimization" white />
            <TickItem src={tick} label="Analytics & Tracking Setup" white />
            <TickItem src={tick} label="6 Months Complimentary Maintenance" white />
          </div>
          <div className="absolute bottom-[15.5px] left-[15.5px] right-[15.5px]">
            <ArrowBtn imgArrow={arrow} label="Schedule a Quick Meeting" />
          </div>
        </div>

        {/* Authority */}
        <div className="absolute bg-white border-[#d2d2d2] border-[0.5px] border-solid h-[564px] left-[768px] overflow-clip rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[8px] rounded-br-[8px] top-0 w-[352px]">
          <div className="-translate-x-1/2 absolute bg-[#fbfbfb] border-[#d2d2d2] border-[0.5px] border-solid h-[194px] left-1/2 overflow-clip rounded-[16px] top-[15.5px] w-[320px]">
            <div className="-translate-x-1/2 absolute border-[#f73000] border-[0.5px] border-solid content-stretch flex items-center justify-center left-[calc(50%+120.5px)] px-[4px] py-[2px] rounded-[27px] top-[19px]">
              <p className="font-dm font-medium leading-[normal] relative shrink-0 text-[#f73000] text-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Best Deal!</p>
            </div>
            <p className="absolute font-dm font-medium leading-[normal] left-[16px] text-[24px] text-black top-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Authority</p>
            <p className="absolute font-dm font-light leading-[normal] left-[16px] text-[#616161] text-[16px] top-[51px] w-[288px]" style={{ fontVariationSettings: "'opsz' 14" }}>A fully engineered system for brands ready to lead.</p>
            <p className="absolute font-dm font-bold leading-[normal] left-[16px] text-[40px] text-black top-[101px] tracking-[-2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>LKR 220,000+</p>
            <p className="absolute font-dm font-light leading-[normal] left-[16px] text-[#616161] text-[16px] top-[161px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Custom scope based on complexity.</p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[15.5px] top-[225.5px] w-[313px]">
            <TickItem src={tick} label="Unlimited Pages" />
            <TickItem src={tick} label="Custom UI With Advanced UX Strategy" />
            <TickItem src={tick} label="Funnel & Conversion Planning" />
            <TickItem src={tick} label="Technical SEO Architecture" />
            <TickItem src={tick} label="Core Web Vitals Optimization" />
            <TickItem src={tick} label="Advanced Integrations (CRM / Payments)" />
            <TickItem src={tick} label="12 Months Complimentary Maintenance" />
          </div>
          <div className="absolute bottom-[15.5px] left-[15.5px] right-[15.5px]">
            <ArrowBtn imgArrow={arrow} label="Schedule a Quick Meeting" />
          </div>
        </div>
      </div>

      {/* Testimonial quote */}
      <div className="border-[#d2d2d2] border-[0.5px] border-solid h-[127px] overflow-clip relative rounded-[24px] shrink-0 w-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[82px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] w-[1037px]">
          <p className="absolute font-dm font-light leading-[normal] left-0 text-[20px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            &ldquo;Professional, responsive, and easy to work with. Lynex delivered a high-quality and exceeded our expectations.&rdquo;
          </p>
          <div className="-translate-x-1/2 absolute h-[32px] left-1/2 top-[50px] w-[163px]">
            <div className="absolute left-0 size-[32px] top-0">
              <img alt="" className="absolute block max-w-none size-full" src={assets.imgEllipse4} />
            </div>
            <div className="absolute h-[26px] left-[40px] top-[-8px] w-[146px]">
              <p className="absolute font-dm font-light h-[26px] leading-[32px] left-0 text-[16px] text-black top-0 tracking-[-0.8px] w-[94px]" style={{ fontVariationSettings: "'opsz' 14" }}>Aisha Rahman</p>
              <div className="absolute h-[11px] left-0 top-[26px] w-[123px]">
                <p className="absolute font-dm font-light leading-[32px] left-0 text-[#636260] text-[10px] top-[-10px] tracking-[-0.5px] w-[99px]" style={{ fontVariationSettings: "'opsz' 14" }}>Manager @Lotus Hotels</p>
                <div className="absolute bg-[#f73000] content-stretch flex h-[11px] items-center justify-center left-[104px] px-[3px] rounded-[73px] top-0">
                  <p className="font-dm font-normal leading-[32px] relative shrink-0 text-[10px] text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>AU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
