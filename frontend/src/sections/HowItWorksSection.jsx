export default function HowItWorksSection() {
  const steps = [
    { label: 'Contact Us', desc: "Choose a plan that suits your needs & request as many designs as you'd like." },
    { label: 'Plan', desc: "Share your design needs. Branding, UI/UX, or development. We'll get it done." },
    { label: 'Deploy', desc: 'Receive your final work within few days. We stay ready for your next task.' },
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 xl2:px-[160px] py-16 xl2:py-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <div className="border-[#616161] border-[0.5px] border-solid flex items-center justify-center px-3 py-1 rounded-full">
          <p className="font-dm font-normal text-xs text-black tracking-[2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>HOW IT WORKS</p>
        </div>
        <h2 className="font-dm font-medium text-2xl sm:text-3xl xl2:text-[48px] text-black text-center leading-tight" style={{ fontVariationSettings: "'opsz' 14" }}>
          Bold <span className="font-cormorant italic">ideas,</span> built to <span className="font-cormorant italic">perform.</span>
        </h2>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={step.label} className="border-[#d2d2d2] border-[0.5px] border-solid rounded-[24px] overflow-hidden flex flex-col">
            {/* Image placeholder area */}
            <div className="bg-[#fbfbfb] border-[#d2d2d2] border-[0.5px] border-solid rounded-[16px] m-6 h-48 md:h-[307px]" />
            {/* Text */}
            <div className="px-8 pb-8 flex flex-col gap-2">
              <p className="font-dm font-normal text-xl xl2:text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>{step.label}</p>
              <p className="font-dm font-light text-[#616161] text-sm xl2:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
