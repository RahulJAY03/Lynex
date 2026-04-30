import { useState } from 'react'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const navLinks = [
  ['Lynex', 'hero'],
  ['Services', 'services'],
  ['Benefits', 'benefits'],
  ['Testimonials', 'testimonials'],
  ['Pricing', 'pricing'],
  ['FAQ', 'faq'],
]

export default function LynexHeroSection({ assets }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section id="hero" className="relative bg-white">
      {/* ── Navbar ── */}
      <nav className="relative z-50 flex items-center justify-between px-5 sm:px-10 xl2:px-[160px] py-7">
        {/* Logo */}
        <div className="relative w-16 h-16 overflow-hidden shrink-0 pointer-events-none">
          <img
            alt="Lynex"
            className="absolute h-[355.87%] left-[-130.69%] max-w-none top-[-93.95%] w-[361.01%]"
            src={assets.imgRedBlackMinimalisticSquareItSoftwareLogo1}
          />
        </div>

        {/* Desktop nav pill */}
        <div className="hidden md:flex bg-white items-center gap-8 px-4 py-[10px] rounded-md shadow-[0px_2px_5px_rgba(0,0,0,0.1)] text-black text-xs font-normal font-inter whitespace-nowrap">
          {navLinks.map(([label, id]) => (
            <p key={id} className="cursor-pointer" onClick={() => scrollToSection(id)}>{label}</p>
          ))}
        </div>

        {/* Right: Contact btn + hamburger */}
        <div className="flex items-center gap-3">
          <div
            className="bg-[#f73000] px-6 py-[10px] rounded-[6px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.1)] cursor-pointer shrink-0"
            onClick={() => window.location.href = 'tel:+94703202004'}
          >
            <p className="font-dm font-medium text-xs text-white whitespace-nowrap">Contact Us</p>
          </div>
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px bg-black" />
            <span className="block w-5 h-px bg-black" />
            <span className="block w-5 h-px bg-black" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[84px] left-0 right-0 bg-white shadow-lg z-50 flex flex-col px-6 py-4 gap-4 text-sm font-dm text-black border-t border-[#f1f1f2]">
          {navLinks.map(([label, id]) => (
            <p
              key={id}
              className="cursor-pointer py-1"
              onClick={() => { scrollToSection(id); setMenuOpen(false) }}
            >
              {label}
            </p>
          ))}
        </div>
      )}

      {/* ── Hero Content ── */}
      <div className="flex flex-col items-center text-center px-5 sm:px-10 xl2:px-[224px] pt-6 md:pt-10 pb-10">
        {/* Social proof */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative h-8 w-16 shrink-0">
            <img alt="" className="absolute left-0 top-0 size-8 rounded-full" src={assets.imgEllipse1} />
            <img alt="" className="absolute left-4 top-0 size-8 rounded-full" src={assets.imgEllipse2} />
            <img alt="" className="absolute left-8 top-0 size-8 rounded-full" src={assets.imgEllipse3} />
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map(i => (
                  <img key={i} alt="" className="size-2.5" src={assets.imgTdesignStarFilled} />
                ))}
              </div>
              <div className="bg-black flex items-center justify-center px-1 rounded-full">
                <span className="font-dm text-[#fcfcfc] text-[8px]">5.0</span>
              </div>
            </div>
            <p className="font-dm font-normal text-base text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              100+ Satisfied Clients
            </p>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-dm font-medium text-3xl sm:text-4xl xl2:text-[48px] text-black leading-tight xl2:leading-[62px] mb-4 xl2:mb-5"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          We Don&apos;t Just Design Websites.
          <br />
          We Engineer{' '}
          <span className="font-cormorant font-medium italic">Digital Growth.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-dm font-light text-[#616161] text-sm xl2:text-[16px] max-w-[700px] mb-7"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          From UX strategy to SEO-driven development, we build systems that turn traffic into revenue and brands into authority.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-7">
          <div
            className="bg-[#f73000] flex items-center justify-center px-6 py-[10px] rounded-[6px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.1)] cursor-pointer"
            onClick={() => window.location.href = 'tel:+94703202004'}
          >
            <p className="font-dm font-medium text-xs text-white whitespace-nowrap">Contact Us</p>
          </div>
          <div
            className="bg-white border-[#f73000] border-[0.5px] border-solid flex items-center justify-center px-6 py-[10px] rounded-[6px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.1)] cursor-pointer"
            onClick={() => scrollToSection('pricing')}
          >
            <p className="font-dm font-normal text-[#f73000] text-xs whitespace-nowrap">See Pricing</p>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            [assets.imgHugeiconsTick02, 'Senior Design Experience'],
            [assets.imgHugeiconsTick02, '24*7 Customer Support'],
            [assets.imgHugeiconsTick02, 'Free Revisions'],
          ].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-1.5">
              <img alt="" className="size-5 shrink-0" src={icon} />
              <p className="font-dm font-normal text-xs text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Portfolio Strip (Desktop >= md) ── */}
      <div className="hidden md:block relative overflow-hidden h-[608px] mt-4">
        <div className="absolute left-1/2 -translate-x-1/2" style={{ width: '2105px' }}>
          {[
            { src: assets.imgFrame13, left: 169, top: 0 },
            { src: assets.imgFrame14, left: 661, top: 0 },
            { src: assets.imgFrame15, left: 1153, top: 0 },
            { src: assets.imgFrame20, left: 1645, top: 0 },
            { src: assets.imgFrame19, left: 0, top: 320 },
            { src: assets.imgFrame18, left: 492, top: 320 },
            { src: assets.imgFrame16, left: 984, top: 320 },
            { src: assets.imgFrame17, left: 1476, top: 320 },
          ].map(({ src, left, top }, i) => (
            <div
              key={i}
              className="absolute rounded-[12px] overflow-hidden"
              style={{ left: `${left}px`, top: `${top}px`, width: '460px', height: '288px' }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={src} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Portfolio Grid (Mobile < md) ── */}
      <div className="md:hidden grid grid-cols-2 gap-3 px-5 pb-10">
        {[assets.imgFrame13, assets.imgFrame14, assets.imgFrame15, assets.imgFrame20].map((src, i) => (
          <div key={i} className="rounded-[12px] overflow-hidden h-[160px]">
            <img alt="" className="w-full h-full object-cover" src={src} />
          </div>
        ))}
      </div>
    </section>
  )
}
