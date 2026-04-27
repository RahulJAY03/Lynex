const testimonials = [
  { name: "Aisha Rahman", role: "CEO & Founder @NEXA", quote: "Before, we wasted time going back and forth with designers. Now we get clean, clear visuals on the first try. Which lets us focus on what really matters." },
  { name: "James Carter", role: "Director @BrightPath", quote: "Lynex transformed our brand identity completely. The attention to detail and speed of delivery was unlike anything we'd experienced before." },
  { name: "Sara Lin", role: "CMO @CloudStack", quote: "From our first call to the final delivery, the process was smooth. Our website now converts at 3x the rate it did before." },
  { name: "Marcus Reed", role: "Founder @Volta", quote: "We had a tight deadline and Lynex delivered a stunning presentation deck in 48 hours. Our investors were blown away." },
  { name: "Priya Nair", role: "Head of Brand @Zentry", quote: "The team understood our vision immediately. The design system they built has scaled perfectly as our company has grown." },
  { name: "David Osei", role: "CEO @TechFlow", quote: "Outstanding quality and professionalism. Lynex handled everything from logo design to full web development. Highly recommended." },
  { name: "Lena Hoffmann", role: "Product Lead @StackBase", quote: "Our UX needed a complete overhaul. Lynex delivered a beautiful, intuitive interface that our users love. Bounce rate dropped 40%." },
  { name: "Tom Nguyen", role: "CTO @Pulsara", quote: "Professional, responsive, and easy to work with. The results exceeded all our expectations. Would not hesitate to work with them again." },
]

function TestCard({ quote, name, role, avatar }) {
  return (
    <div className="bg-white border-[#d2d2d2] border-[0.5px] border-solid h-[136px] relative rounded-[8px] shrink-0 w-[350px]">
      <p className="absolute font-dm font-light leading-[18px] left-[23.5px] text-[#616161] text-[12px] top-[15.5px] w-[302px]" style={{ fontVariationSettings: "'opsz' 14" }}>{quote}</p>
      <div className="absolute flex gap-[8px] items-center left-[23.5px] top-[87.5px]">
        <img alt="" className="block rounded-full size-[32px]" src={avatar} />
        <div className="flex flex-col gap-[2px]">
          <p className="font-dm font-normal leading-[normal] text-[12px] text-black tracking-[-0.6px]" style={{ fontVariationSettings: "'opsz' 14" }}>{name}</p>
          <p className="font-dm font-light leading-[normal] text-[10px] text-[#636260]" style={{ fontVariationSettings: "'opsz' 14" }}>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection({ assets }) {
  const rowOffsets = [0, -93, -200, -17]
  const rowTops = [0, 152, 304, 456]

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative w-full">
      {/* Header */}
      <div className="h-[102px] relative shrink-0 w-[916px]">
        <p className="-translate-x-1/2 absolute font-dm font-medium leading-[0] left-1/2 text-[48px] text-black text-center top-[40px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="leading-[normal]">We love what we do, and </span>
          <span className="font-cormorant font-medium italic leading-[normal]">they love the results.</span>
        </p>
        <div className="-translate-x-1/2 absolute border-[#616161] border-[0.5px] border-solid content-stretch flex items-center justify-center left-1/2 px-[12px] py-[4px] rounded-[27px] top-0">
          <p className="font-dm font-normal leading-[normal] relative shrink-0 text-[12px] text-black tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>TESTIMONIALS</p>
        </div>
      </div>

      {/* Staggered rows */}
      <div className="h-[600px] overflow-hidden relative shrink-0 w-full">
        {rowTops.map((top, rowIdx) => (
          <div
            key={rowIdx}
            className="absolute flex gap-[16px]"
            style={{ top: `${top}px`, left: `${rowOffsets[rowIdx]}px` }}
          >
            {testimonials.slice(rowIdx * 2, rowIdx * 2 + 4).map((t, i) => (
              <TestCard
                key={i}
                quote={t.quote}
                name={t.name}
                role={t.role}
                avatar={assets.imgEllipse4}
              />
            ))}
          </div>
        ))}
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-[135px] pointer-events-none" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-[135px] pointer-events-none" style={{ background: 'linear-gradient(to left, white 0%, rgba(255,255,255,0) 100%)' }} />
      </div>
    </div>
  )
}
