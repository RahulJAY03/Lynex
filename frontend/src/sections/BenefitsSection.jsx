export default function BenefitsSection({ assets }) {
  const benefits = [
    { icon: assets.imgMoney, title: "Flexible Plans", desc: "3 packages designed to fit your needs and scale with your business" },
    { icon: assets.imgLightning, title: "Fast Delivery", desc: "High-quality designs delivered in days, not weeks" },
    { icon: assets.imgSketchLogo, title: "Premium Quality", desc: "Clean, modern design focused on real results." },
    { icon: assets.imgRuler, title: "Scalable", desc: "Easily adjust your plan as your business grows." },
    { icon: assets.imgPenNib, title: "Custom Design", desc: "Every design is built from scratch for your brand." },
    { icon: assets.imgPolygon, title: "Design Dashboard", desc: "Request, track, and review all in one place." },
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 xl2:px-[224px] py-16 xl2:py-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 xl2:gap-[18px] mb-10 xl2:mb-12">
        <div className="border-[#616161] border-[0.5px] border-solid flex items-center justify-center px-3 py-1 rounded-full">
          <p className="font-dm font-normal text-xs text-black tracking-[2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>BENEFITS</p>
        </div>
        <h2 className="font-dm font-medium text-2xl sm:text-3xl xl2:text-[48px] text-black text-center leading-tight xl2:leading-[62px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Benefits of Choosing <span className="font-cormorant font-medium italic">Lynex.</span>
        </h2>
      </div>

      {/* 3-col grid → 2-col → 1-col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="bg-white border-[#d2d2d2] border-[0.5px] border-solid rounded-[8px] shadow-[0px_8px_25px_8px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-3">
            <div className="bg-[#ff2a00] flex items-center justify-center h-9 w-9 rounded-[4px] shrink-0">
              <img alt="" className="block size-5" src={b.icon} />
            </div>
            <p className="font-dm font-normal text-lg xl2:text-[20px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>{b.title}</p>
            <p className="font-dm font-light text-[#616161] text-sm xl2:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
