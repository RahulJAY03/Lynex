export default function OurWorkSection({ assets }) {
  const images = [assets.imgFrame75, assets.imgFrame74, assets.imgFrame60]

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 xl2:px-[224px] py-16 xl2:py-[80px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 xl2:mb-12">
        <h2 className="font-dm font-medium text-2xl sm:text-3xl xl2:text-[48px] text-black leading-tight" style={{ fontVariationSettings: "'opsz' 14" }}>
          Some of Our <span className="font-cormorant font-medium italic">Work.</span>
        </h2>
        <div className="border-[#616161] border-[0.5px] border-solid hidden sm:flex items-center justify-center px-3 py-1 rounded-full">
          <p className="font-dm font-normal text-xs text-black tracking-[2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>OUR WORK</p>
        </div>
      </div>

      {/* Responsive grid with top/bottom gradient fades */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...images, ...images, ...images].map((img, i) => (
            <div key={i} className="rounded-[8px] overflow-hidden border-[#d2d2d2] border-[0.5px] border-solid h-[280px] xl2:h-[376px]">
              <img alt="" className="w-full h-full object-cover" src={img} />
            </div>
          ))}
        </div>
        {/* Top fade */}
        <div className="absolute left-0 top-0 w-full h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)' }} />
        {/* Bottom fade */}
        <div className="absolute left-0 bottom-0 w-full h-20 pointer-events-none" style={{ background: 'linear-gradient(to top, white 0%, rgba(255,255,255,0) 100%)' }} />
      </div>
    </div>
  )
}
