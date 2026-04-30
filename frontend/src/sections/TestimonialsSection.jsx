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
    <div className="bg-white border-[#d2d2d2] border-[0.5px] border-solid rounded-[8px] p-4 flex flex-col gap-3 shrink-0 w-full md:w-[350px]">
      <p className="font-dm font-light leading-[18px] text-[#616161] text-xs" style={{ fontVariationSettings: "'opsz' 14" }}>{quote}</p>
      <div className="flex items-center gap-2 mt-auto">
        <img alt="" className="block rounded-full size-8" src={avatar} />
        <div className="flex flex-col gap-0.5">
          <p className="font-dm font-normal text-xs text-black tracking-[-0.6px]" style={{ fontVariationSettings: "'opsz' 14" }}>{name}</p>
          <p className="font-dm font-light text-[10px] text-[#636260]" style={{ fontVariationSettings: "'opsz' 14" }}>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection({ assets }) {
  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 xl2:px-[160px] py-16 xl2:py-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <div className="border-[#616161] border-[0.5px] border-solid flex items-center justify-center px-3 py-1 rounded-full">
          <p className="font-dm font-normal text-xs text-black tracking-[2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>TESTIMONIALS</p>
        </div>
        <h2 className="font-dm font-medium text-2xl sm:text-3xl xl2:text-[48px] text-black text-center leading-tight" style={{ fontVariationSettings: "'opsz' 14" }}>
          We love what we do, and{' '}
          <span className="font-cormorant italic">they love the results.</span>
        </h2>
      </div>

      {/* Desktop: staggered rows (hidden on mobile) */}
      <div className="hidden md:block relative overflow-hidden" style={{ height: '600px' }}>
        {[0, -93, -200, -17].map((offsetLeft, rowIdx) => (
          <div
            key={rowIdx}
            className="absolute flex gap-4"
            style={{ top: `${rowIdx * 152}px`, left: `${offsetLeft}px` }}
          >
            {testimonials.slice(rowIdx * 2, rowIdx * 2 + 4).map((t, i) => (
              <TestCard key={i} quote={t.quote} name={t.name} role={t.role} avatar={assets.imgEllipse4} />
            ))}
          </div>
        ))}
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-[135px] pointer-events-none" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-[135px] pointer-events-none" style={{ background: 'linear-gradient(to left, white 0%, rgba(255,255,255,0) 100%)' }} />
      </div>

      {/* Mobile: simple 1-col grid */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <TestCard key={i} quote={t.quote} name={t.name} role={t.role} avatar={assets.imgEllipse4} />
        ))}
      </div>
    </div>
  )
}


