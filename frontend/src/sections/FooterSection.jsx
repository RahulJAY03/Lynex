export default function FooterSection({ assets }) {
  return (
    <div className="bg-white h-[720px] relative w-full">
      {/* Logo */}
      <div className="absolute" style={{ left: '160px', top: '138px', width: '257px', height: '260px' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Lynex Studios" className="absolute h-[355.87%] left-[-130.69%] max-w-none top-[-93.95%] w-[361.01%]" src={assets.imgRedBlackMinimalisticSquareItSoftwareLogo1} />
        </div>
      </div>

      {/* Right side content */}
      <p className="absolute font-dm font-medium leading-[40px] text-[32px] text-black" style={{ left: '800px', top: '138px', width: '480px', fontVariationSettings: "'opsz' 14" }}>
        {"Let's talk about your project and the next steps"}
      </p>

      {/* Buttons */}
      <div className="absolute flex gap-[16px] items-center" style={{ left: '800px', top: '262px' }}>
        <div className="bg-[#f73000] content-stretch flex items-center justify-center px-[32px] py-[10px] rounded-[4px] shadow-[0px_2px_8px_0px_rgba(247,48,0,0.4)] cursor-pointer">
          <p className="font-dm font-medium leading-[normal] text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{"Let's Talk"}</p>
        </div>
        <div className="bg-[#f1f1f2] content-stretch flex items-center justify-center px-[32px] py-[10px] rounded-[4px] cursor-pointer">
          <p className="font-dm font-light leading-[normal] text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>lynexstudios@gmail.com</p>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="absolute flex gap-[32px] items-start" style={{ left: '800px', top: '383px' }}>
        <p className="font-dm font-normal leading-[normal] text-[12px] text-[#616161] tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Quick Contact</p>
        <p className="font-dm font-light leading-[normal] text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>+94 70 320 2004 / +94 76 063 7143</p>
      </div>

      {/* Social Media */}
      <div className="absolute flex gap-[32px] items-start" style={{ left: '800px', top: '510px' }}>
        <p className="font-dm font-normal leading-[normal] text-[12px] text-[#616161] tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Social Media</p>
        <p className="font-dm font-light leading-[normal] text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>WhatsApp / FaceBook / Instagram</p>
      </div>

      {/* Bottom bar */}
      <div className="absolute border-t-[#d2d2d2] border-t-[0.5px] border-solid flex items-center justify-between" style={{ left: 0, top: '662px', right: 0, height: '58px', paddingLeft: '160px', paddingRight: '160px' }}>
        <p className="font-dm font-light leading-[normal] text-[12px] text-[#616161] tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>ALL RIGHTS RESERVED.  LYNEX STUDIOS 2026.</p>
        <p className="font-dm font-light leading-[normal] text-[12px] text-[#616161] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Made by Lynex Studios</p>
      </div>
    </div>
  )
}
