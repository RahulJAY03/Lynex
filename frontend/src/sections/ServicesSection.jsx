function Tag({ src, label }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#f1f1f2] px-3 py-1 rounded-full">
      <img alt="" className="shrink-0 size-5" src={src} />
      <p className="font-dm font-light text-sm text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{label}</p>
    </div>
  )
}

function ServiceCard({ img, title, desc, tags, tickSrc }) {
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row">
      {/* Image */}
      <div className="md:w-[385px] md:shrink-0 h-48 md:h-auto relative m-4 md:m-8 rounded-[8px] overflow-hidden">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={img} />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-center px-6 md:px-0 md:py-8 pb-6 md:pr-8 gap-4">
        <p className="font-dm font-medium text-2xl xl2:text-[32px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>{title}</p>
        <p className="font-dm font-light text-[#616161] text-base xl2:text-[20px] leading-7 xl2:leading-8" style={{ fontVariationSettings: "'opsz' 14" }}>{desc}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map(tag => <Tag key={tag} src={tickSrc} label={tag} />)}
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection({ assets }) {
  const services = [
    {
      img: assets.imgFrame27,
      title: 'Brand Identity',
      desc: "We help founders shape how their brand looks, sounds, and feels. From logo to typography to colors, we craft a system that's distinct, aligned, and built to grow with your business.",
      tags: ['Background Research', 'Business Profiles', 'Colour Palette', 'Logo'],
    },
    {
      img: assets.imgFrame28,
      title: 'UI/UX Design',
      desc: "We create intuitive, scalable interfaces that not only look good but actually guide users and drive results. Whether it's for mobile apps, websites, or SaaS platforms we design products people love to use.",
      tags: ['Wireframing', 'User Flow', 'Design System', 'Prototyping', 'UX Research'],
    },
    {
      img: assets.imgFrame29,
      title: 'Web Development',
      desc: 'We build custom websites using powerful no code tools meaning you get beautiful, fast, and functional builds without the dev lag. Ideal for marketing sites, portfolios, landing pages, or simple platforms.',
      tags: ['Responsive', 'Optimization', 'CMS Setup', 'Domain Setup', 'Hosting', 'SEO'],
    },
    {
      img: assets.imgFrame30,
      title: 'Website Maintenance',
      desc: 'We provide ongoing website maintenance to keep your site secure, updated, and performing at its best. From regular updates to performance monitoring, we ensure your website stays fast, reliable, and optimized.',
      tags: ['Security Updates', 'Performance Optimization', 'Bug Fixes & 24*7 Support', 'Content Updates', 'Technical Improvements'],
    },
    {
      img: assets.imgFrame31,
      title: 'Presentation Design',
      desc: 'We craft strategic presentation decks that transform ideas into clear, persuasive visual stories. From pitch decks to corporate reports, we design slides that are impactful, structured, and built to impress.',
      tags: ['Custom Slide Design', 'Visual Storytelling', 'Sales Presentations', 'Corporate Reports', 'Brand-Aligned Layouts'],
    },
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 xl2:px-[224px] py-16 xl2:py-[80px]">
      {/* Section header */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <div className="border-[#616161] border-[0.5px] border-solid flex items-center justify-center px-3 py-1 rounded-full">
          <p className="font-dm font-normal text-xs text-black tracking-[2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>SERVICE</p>
        </div>
        <h2
          className="font-dm font-medium text-2xl sm:text-3xl xl2:text-[48px] text-black text-center leading-tight"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          We help brands show up with{' '}
          <span className="font-cormorant italic">Clarity,</span>
          <br className="hidden sm:block" />
          <span className="font-cormorant italic">Confidence,</span>
          {' '}and{' '}
          <span className="font-cormorant italic">Design</span>
          {' '}that actually work
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8">
        {services.map(s => (
          <ServiceCard key={s.title} {...s} tickSrc={assets.imgHugeiconsTick3} />
        ))}
      </div>
    </div>
  )
}
