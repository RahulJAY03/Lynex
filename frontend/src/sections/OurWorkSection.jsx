export default function OurWorkSection({ assets }) {
  const rows = [
    { top: 0 },
    { top: 392 },
    { top: 784 },
  ]
  const cols = [
    { left: 0, img: assets.imgFrame75 },
    { left: 337, img: assets.imgFrame74 },
    { left: 674, img: assets.imgFrame60 },
  ]

  return (
    <div className="content-stretch flex flex-col gap-[48px] relative w-full">
      {/* Header */}
      <div className="h-[62px] relative shrink-0 w-full">
        <p className="absolute font-dm font-medium leading-[0] left-0 text-[48px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="leading-[normal]">Some of Our </span>
          <span className="font-cormorant font-medium italic leading-[normal]">Work.</span>
        </p>
        <div className="-translate-x-1/2 absolute border-[#616161] border-[0.5px] border-solid content-stretch flex items-center justify-center left-[calc(50%+450px)] px-[12px] py-[4px] rounded-[27px] top-[19px]">
          <p className="font-dm font-normal leading-[normal] relative shrink-0 text-[12px] text-black tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>TESTIMONIALS</p>
        </div>
      </div>

      {/* 3x3 Grid with gradient fades */}
      <div className="h-[1160px] relative shrink-0 w-full overflow-hidden">
        {rows.map((row) =>
          cols.map((col) => (
            <div
              key={`${row.top}-${col.left}`}
              className="absolute border-[#d2d2d2] border-[0.5px] border-solid h-[376px] rounded-[8px] overflow-hidden"
              style={{ top: `${row.top}px`, left: `${col.left}px`, width: '321px' }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={col.img} />
            </div>
          ))
        )}
        {/* Top fade */}
        <div className="absolute left-0 top-0 w-full h-[135px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)' }} />
        {/* Bottom fade */}
        <div className="absolute left-0 w-full h-[135px] pointer-events-none" style={{ top: '1025px', background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 100%)' }} />
      </div>
    </div>
  )
}
