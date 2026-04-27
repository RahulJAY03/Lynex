export default function BenefitsSection({ assets }) {
  const benefits = [
    {
      icon: assets.imgMoney,
      title: "Flexible Plans",
      desc: "3 packages designed to fit your needs and scale with your business",
    },
    {
      icon: assets.imgLightning,
      title: "Fast Delivery",
      desc: "High-quality designs delivered in days, not weeks",
    },
    {
      icon: assets.imgSketchLogo,
      title: "Premium Quality",
      desc: "Clean, modern design focused on real results.",
    },
    {
      icon: assets.imgRuler,
      title: "Scalable",
      desc: "Easily adjust your plan as your business grows.",
    },
    {
      icon: assets.imgPenNib,
      title: "Custom Design",
      desc: "Every design is built from scratch for your brand.",
    },
    {
      icon: assets.imgPolygon,
      title: "Design Dashboard",
      desc: "Request, track, and review all in one place.",
    },
  ]

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative w-full">
      {/* Header */}
      <div className="h-[102px] relative shrink-0 w-[538px]">
        <p className="-translate-x-1/2 absolute font-dm font-medium leading-[0] left-1/2 text-[48px] text-black text-center top-[40px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="leading-[normal]">Benefits of Choosing </span>
          <span className="font-cormorant font-medium italic leading-[normal]">Lynex.</span>
        </p>
        <div className="-translate-x-1/2 absolute border-[#616161] border-[0.5px] border-solid content-stretch flex items-center justify-center left-1/2 px-[12px] py-[4px] rounded-[27px] top-0">
          <p className="font-dm font-normal leading-[normal] relative shrink-0 text-[12px] text-black tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>BENEFITS</p>
        </div>
      </div>

      {/* 3x2 Grid */}
      <div className="flex flex-wrap gap-[32px] content-start shrink-0">
        {benefits.map((b) => (
          <div key={b.title} className="bg-white border-[#d2d2d2] border-[0.5px] border-solid h-[188px] rounded-[8px] shadow-[0px_8px_25px_8px_rgba(0,0,0,0.05)] relative w-[310px]">
            <div className="absolute bg-[#ff2a00] flex items-center justify-center h-[36px] left-[23.5px] rounded-[4px] top-[23.5px] w-[36px]">
              <img alt="" className="block size-[20px]" src={b.icon} />
            </div>
            <p className="absolute font-dm font-normal leading-[normal] left-[23.5px] text-[20px] text-black top-[83.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>{b.title}</p>
            <p className="absolute font-dm font-light leading-[normal] left-[23.5px] text-[#616161] text-[16px] top-[117.5px] w-[262px]" style={{ fontVariationSettings: "'opsz' 14" }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
