export default function HowItWorksSection() {
  const steps = [
    {
      label: "Contact Us",
      desc: "Choose a plan that suits your needs & request as many designs as you'd like.",
    },
    {
      label: "Plan",
      desc: "Share your design needs. Branding, UI/UX, or development. We'll get it done.",
    },
    {
      label: "Deploy",
      desc: "Receive your final work within few days. We stay ready for your next task.",
    },
  ]

  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative w-full">
      {/* Header */}
      <div className="h-[102px] relative shrink-0 w-[538px]">
        <p className="-translate-x-1/2 absolute font-dm font-medium leading-[0] left-1/2 text-[48px] text-black text-center top-[40px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="leading-[normal]">Bold </span>
          <span className="font-cormorant font-medium italic leading-[normal]">ideas,</span>
          <span className="leading-[normal]"> built to </span>
          <span className="font-cormorant font-medium italic leading-[normal]">perform.</span>
        </p>
        <div className="-translate-x-1/2 absolute border-[#616161] border-[0.5px] border-solid content-stretch flex items-center justify-center left-[calc(50%+0.5px)] px-[12px] py-[4px] rounded-[27px] top-0">
          <p className="font-dm font-normal leading-[normal] relative shrink-0 text-[12px] text-black tracking-[2.4px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>HOW IT WORKS</p>
        </div>
      </div>

      {/* 3 Cards */}
      <div className="h-[478px] relative shrink-0 w-full">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="absolute border-[#d2d2d2] border-[0.5px] border-solid h-[478px] overflow-clip rounded-[24px] w-[352px]"
            style={{ left: `${i * 384}px`, top: 0 }}
          >
            <div className="-translate-x-1/2 absolute bg-[#fbfbfb] border-[#d2d2d2] border-[0.5px] border-solid h-[307px] left-1/2 rounded-[16px] top-[31.5px] w-[288px]" />
            <div className="absolute h-[81px] leading-[normal] left-[31.5px] top-[368.5px] w-[283px]">
              <p className="absolute font-dm font-normal left-0 text-[24px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{step.label}</p>
              <p className="absolute font-dm font-light left-0 text-[#616161] text-[16px] top-[39px] w-[283px]" style={{ fontVariationSettings: "'opsz' 14" }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
