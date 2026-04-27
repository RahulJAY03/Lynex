export default function FooterSection({ assets }) {
  return (
    <div className="bg-white h-[720px] relative w-[1440px]">

      {/* Logo — 257×260px at left=160, top=138 */}
      <div className="absolute overflow-hidden pointer-events-none" style={{ left: '160px', top: '138px', width: '257px', height: '260px' }}>
        <img alt="Lynex Studios" className="absolute max-w-none" style={{ width: '361.01%', height: '355.87%', left: '-130.69%', top: '-93.95%' }} src={assets.imgRedBlackMinimalisticSquareItSoftwareLogo1} />
      </div>

      {/* Heading */}
      <p className="absolute font-dm font-medium leading-[normal] text-[32px] text-black" style={{ left: '800px', top: '138px', width: '480px', fontVariationSettings: "'opsz' 14" }}>
        {"Let's talk about your project\nand the next steps"}
      </p>

      {/* CTA buttons */}
      <div className="absolute flex gap-[8px] items-center" style={{ left: '800px', top: '262px' }}>
        <div className="bg-[#f73000] flex items-center justify-center px-[32px] py-[10px] rounded-[4px] shadow-[0px_4px_25px_0px_rgba(247,48,0,0.25)] cursor-pointer shrink-0">
          <p className="font-dm font-normal leading-[normal] text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{"Let's Talk"}</p>
        </div>
        <div className="bg-[#f1f1f2] flex items-center justify-center px-[32px] py-[10px] rounded-[4px] cursor-pointer shrink-0">
          <p className="font-dm font-normal leading-[normal] text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>lynexstudios@gmail.com</p>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="absolute flex items-start justify-between" style={{ left: '800px', top: '383px', width: '395px' }}>
        <p className="font-dm font-light leading-[normal] text-[16px] text-[#616161] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Quick Contact</p>
        <div>
          <p className="font-dm font-light leading-[24px] text-[16px] text-[#616161] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>+94 70 320 2004</p>
          <p className="font-dm font-light leading-[24px] text-[16px] text-[#616161] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>+94 76 063 7143</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="absolute flex items-start justify-between" style={{ left: '800px', top: '510px', width: '342px' }}>
        <p className="font-dm font-light leading-[normal] text-[16px] text-[#616161] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Social Media</p>
        <div>
          <p className="font-dm font-light leading-[24px] text-[16px] text-[#616161] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>WhatsApp</p>
          <p className="font-dm font-light leading-[24px] text-[16px] text-[#616161] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>FaceBook</p>
          <p className="font-dm font-light leading-[24px] text-[16px] text-[#616161] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Instagram</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute border-t border-t-[0.5px] border-[#d2d2d2] overflow-hidden" style={{ left: 0, top: '662px', width: '1440px', height: '58px' }}>
        <p className="absolute font-dm font-normal leading-[24px] text-[12px] text-[#616161] whitespace-pre" style={{ left: '160px', top: '17px', fontVariationSettings: "'opsz' 14" }}>{"ALL RIGHTS RESERVED.  LYNEX STUDIOS 2026."}</p>
        <p className="absolute font-dm font-normal leading-[24px] text-[12px] text-[#616161] whitespace-nowrap" style={{ left: '1152px', top: '17px', fontVariationSettings: "'opsz' 14" }}>Made by Lynex Studios</p>
      </div>

    </div>
  )
}
