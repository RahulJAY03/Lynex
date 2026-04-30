export default function FooterSection({ assets }) {
  return (
    <footer className="bg-white border-t border-[#d2d2d2]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 xl2:px-[160px] py-16 xl2:py-[138px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between">
          {/* Left: Logo */}
          <div className="relative w-16 h-16 overflow-hidden shrink-0 pointer-events-none">
            <img
              alt="Lynex Studios"
              className="absolute h-[355.87%] left-[-130.69%] max-w-none top-[-93.95%] w-[361.01%]"
              src={assets.imgRedBlackMinimalisticSquareItSoftwareLogo1}
            />
          </div>

          {/* Right: CTA + contact info */}
          <div className="flex flex-col gap-8 max-w-[480px]">
            <p className="font-dm font-medium text-2xl xl2:text-[32px] text-black leading-snug" style={{ fontVariationSettings: "'opsz' 14" }}>
              {"Let's talk about your project\nand the next steps"}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <div
                className="bg-[#f73000] flex items-center justify-center px-8 py-[10px] rounded-[4px] shadow-[0px_4px_25px_0px_rgba(247,48,0,0.25)] cursor-pointer"
                onClick={() => window.location.href = 'tel:+94703202004'}
              >
                <p className="font-dm font-normal text-base text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{"Let's Talk"}</p>
              </div>
              <div
                className="bg-[#f1f1f2] flex items-center justify-center px-8 py-[10px] rounded-[4px] cursor-pointer"
                onClick={() => window.location.href = 'mailto:lynexstudios@gmail.com'}
              >
                <p className="font-dm font-normal text-base text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>lynexstudios@gmail.com</p>
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col gap-1">
                <p className="font-dm font-light text-base text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>Quick Contact</p>
                <p className="font-dm font-light leading-6 text-base text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>+94 70 320 2004</p>
                <p className="font-dm font-light leading-6 text-base text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>+94 76 063 7143</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-dm font-light text-base text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>Social Media</p>
                <p className="font-dm font-light leading-6 text-base text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>WhatsApp</p>
                <p className="font-dm font-light leading-6 text-base text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>FaceBook</p>
                <p className="font-dm font-light leading-6 text-base text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#d2d2d2]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 xl2:px-[160px] py-4 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-dm font-normal leading-6 text-xs text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>ALL RIGHTS RESERVED. LYNEX STUDIOS 2026.</p>
          <p className="font-dm font-normal leading-6 text-xs text-[#616161]" style={{ fontVariationSettings: "'opsz' 14" }}>Made by Lynex Studios</p>
        </div>
      </div>
    </footer>
  )
}
