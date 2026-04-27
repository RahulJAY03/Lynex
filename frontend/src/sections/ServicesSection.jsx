function Tag({ src, label }) {
  return (
    <div className="bg-[#f1f1f2] content-stretch flex gap-[8px] items-center px-[12px] py-[4px] rounded-[83px] shrink-0">
      <img alt="" className="block size-[20px]" src={src} />
      <p className="font-dm font-light leading-[32px] text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{label}</p>
    </div>
  )
}

export default function ServicesSection({ assets }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full">
      {/* Header */}
      <div className="h-[164px] relative shrink-0 w-full">
        <div className="-translate-x-1/2 absolute font-dm font-medium leading-[0] left-1/2 text-[48px] text-black text-center top-[62px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="mb-0">
            <span className="leading-[normal]">We help brands show up with </span>
            <span className="font-cormorant font-medium italic leading-[normal]">Clarity,</span>
          </p>
          <p>
            <span className="font-cormorant font-medium italic leading-[normal]">Confidence,</span>
            <span className="leading-[normal]"> and </span>
            <span className="font-cormorant font-medium italic leading-[normal]">Design</span>
            <span className="leading-[normal]"> that actually work</span>
          </p>
        </div>
        <div className="-translate-x-1/2 absolute border-[#616161] border-[0.5px] border-solid content-stretch flex items-center justify-center left-1/2 px-[12px] py-[4px] rounded-[27px] top-[12px]">
          <p className="font-dm font-normal leading-[normal] relative shrink-0 text-[12px] text-black tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>SERVICE</p>
        </div>
      </div>

      {/* Card 1: Brand Identity */}
      <div className="bg-white h-[486px] overflow-clip relative rounded-[12px] shadow-[0px_8px_25px_8px_rgba(0,0,0,0.05)] shrink-0 w-full">
        <div className="-translate-y-1/2 absolute h-[422px] left-[32px] overflow-clip rounded-[8px] top-1/2 w-[368px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={assets.imgFrame27} />
        </div>
        <p className="absolute font-dm font-medium leading-[normal] left-[432px] text-[32px] text-black top-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Brand Identity</p>
        <p className="absolute font-dm font-light leading-[32px] left-[432px] text-[#616161] text-[20px] top-[102px] w-[511px]" style={{ fontVariationSettings: "'opsz' 14" }}>We help founders shape how their brand looks, sounds, and feels. From logo to typography to colors, we craft a system that&apos;s distinct, aligned, and built to grow with your business.</p>
        <div className="absolute flex flex-wrap gap-[8px] left-[432px] bottom-[32px] w-[511px]">
          <Tag src={assets.imgHugeiconsTick3} label="Background Research" />
          <Tag src={assets.imgHugeiconsTick3} label="Business Profiles" />
          <Tag src={assets.imgHugeiconsTick3} label="Colour Palette" />
          <Tag src={assets.imgHugeiconsTick3} label="Logo" />
        </div>
      </div>

      {/* Card 2: UI/UX Design */}
      <div className="bg-white h-[486px] overflow-clip relative rounded-[12px] shadow-[0px_8px_25px_8px_rgba(0,0,0,0.05)] shrink-0 w-full">
        <div className="-translate-y-1/2 absolute h-[422px] left-[32px] overflow-clip rounded-[8px] top-1/2 w-[368px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={assets.imgFrame28} />
          <div className="-translate-y-1/2 absolute h-[442px] left-[-9px] rounded-[8px] top-1/2 w-[385px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={assets.imgFrame29} />
          </div>
        </div>
        <p className="absolute font-dm font-medium leading-[normal] left-[432px] text-[32px] text-black top-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>UI/UX Design</p>
        <p className="absolute font-dm font-light leading-[32px] left-[432px] text-[#616161] text-[20px] top-[102px] w-[511px]" style={{ fontVariationSettings: "'opsz' 14" }}>We create intuitive, scalable interfaces that not only look good but actually guide users and drive results. Whether it&apos;s for mobile apps, websites, or SaaS platforms we design products people love to use.</p>
        <div className="absolute flex flex-wrap gap-[8px] left-[432px] bottom-[32px] w-[511px]">
          <Tag src={assets.imgHugeiconsTick3} label="Wireframing" />
          <Tag src={assets.imgHugeiconsTick3} label="User Flow" />
          <Tag src={assets.imgHugeiconsTick3} label="Design System" />
          <Tag src={assets.imgHugeiconsTick3} label="Prototyping" />
          <Tag src={assets.imgHugeiconsTick3} label="UX Research" />
        </div>
      </div>

      {/* Card 3: Web Development */}
      <div className="bg-white h-[486px] overflow-clip relative rounded-[12px] shadow-[0px_8px_25px_8px_rgba(0,0,0,0.05)] shrink-0 w-full">
        <div className="-translate-y-1/2 absolute h-[422px] left-[32px] overflow-clip rounded-[8px] top-1/2 w-[368px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={assets.imgFrame28} />
          <div className="-translate-y-1/2 absolute h-[442px] left-[-9px] rounded-[8px] top-1/2 w-[385px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={assets.imgFrame30} />
          </div>
        </div>
        <p className="absolute font-dm font-medium leading-[normal] left-[432px] text-[32px] text-black top-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Web Development</p>
        <p className="absolute font-dm font-light leading-[32px] left-[432px] text-[#616161] text-[20px] top-[102px] w-[511px]" style={{ fontVariationSettings: "'opsz' 14" }}>We build custom websites using powerful no-code tools meaning you get beautiful, fast, and functional builds without the dev lag. Ideal for marketing sites, portfolios, landing pages, or simple platforms.</p>
        <div className="absolute flex flex-wrap gap-[8px] left-[432px] bottom-[32px] w-[511px]">
          <Tag src={assets.imgHugeiconsTick3} label="Responsive" />
          <Tag src={assets.imgHugeiconsTick3} label="Optimization" />
          <Tag src={assets.imgHugeiconsTick3} label="CMS Setup" />
          <Tag src={assets.imgHugeiconsTick3} label="Domain Setup" />
          <Tag src={assets.imgHugeiconsTick3} label="Hosting" />
          <Tag src={assets.imgHugeiconsTick3} label="SEO" />
        </div>
      </div>

      {/* Card 4: Website Maintenance */}
      <div className="bg-white h-[486px] overflow-clip relative rounded-[12px] shadow-[0px_8px_25px_8px_rgba(0,0,0,0.05)] shrink-0 w-full">
        <div className="-translate-y-1/2 absolute h-[422px] left-[32px] overflow-clip rounded-[8px] top-1/2 w-[368px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={assets.imgFrame31} />
        </div>
        <p className="absolute font-dm font-medium leading-[normal] left-[432px] text-[32px] text-black top-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Website Maintenance</p>
        <p className="absolute font-dm font-light leading-[32px] left-[432px] text-[#616161] text-[20px] top-[102px] w-[511px]" style={{ fontVariationSettings: "'opsz' 14" }}>We provide ongoing website maintenance to keep your site secure, updated, and performing at its best. From regular updates to performance monitoring, we ensure your website stays fast and reliable.</p>
        <div className="absolute flex flex-wrap gap-[8px] left-[432px] bottom-[32px] w-[511px]">
          <Tag src={assets.imgHugeiconsTick3} label="Security Updates" />
          <Tag src={assets.imgHugeiconsTick3} label="Performance Optimization" />
          <Tag src={assets.imgHugeiconsTick3} label="Bug Fixes & 24*7 Support" />
          <Tag src={assets.imgHugeiconsTick3} label="Content Updates" />
          <Tag src={assets.imgHugeiconsTick3} label="Technical Improvements" />
        </div>
      </div>

      {/* Card 5: Presentation Design */}
      <div className="bg-white h-[486px] overflow-clip relative rounded-[12px] shadow-[0px_8px_25px_8px_rgba(0,0,0,0.05)] shrink-0 w-full">
        <div className="-translate-y-1/2 absolute h-[422px] left-[32px] overflow-clip rounded-[8px] top-1/2 w-[368px]">
          <img alt="" className="absolute h-full left-[-37.63%] max-w-none top-[0.03%] w-[172.11%]" src={assets.imgFrame32} />
        </div>
        <p className="absolute font-dm font-medium leading-[normal] left-[432px] text-[32px] text-black top-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Presentation Design</p>
        <p className="absolute font-dm font-light leading-[32px] left-[432px] text-[#616161] text-[20px] top-[102px] w-[511px]" style={{ fontVariationSettings: "'opsz' 14" }}>We craft strategic presentation decks that transform ideas into clear, persuasive visual stories. From pitch decks to corporate reports, we design slides that are impactful, structured, and built to impress.</p>
        <div className="absolute flex flex-wrap gap-[8px] left-[432px] bottom-[32px] w-[511px]">
          <Tag src={assets.imgHugeiconsTick3} label="Custom Slide Design" />
          <Tag src={assets.imgHugeiconsTick3} label="Brand-Aligned Layouts" />
          <Tag src={assets.imgHugeiconsTick3} label="Sales Presentations" />
          <Tag src={assets.imgHugeiconsTick3} label="Corporate Reports" />
          <Tag src={assets.imgHugeiconsTick3} label="Visual Storytelling" />
        </div>
      </div>
    </div>
  )
}
