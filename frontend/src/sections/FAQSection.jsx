import { useState } from 'react'

const faqs = [
  {
    q: "How Fast Will I receive my product?",
    a: "Most requests are delivered within 48 hours. More complex projects may take longer, but you'll always get a clear timeline upfront.",
  },
  {
    q: "Can I request unlimited revisions?",
    a: "Yes. We offer unlimited revisions on all plans until you are completely satisfied with the result.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, credit/debit cards, and major online payment platforms. Invoices are provided for all transactions.",
  },
  {
    q: "Do you offer ongoing support after delivery?",
    a: "Absolutely. All our plans include a complimentary maintenance period, and we're always available for follow-up support.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade your plan at any time. We'll simply credit the difference from your current plan toward the new one.",
  },
  {
    q: "Is there a contract or long-term commitment?",
    a: "No long-term contract required. Each project is billed individually, and ongoing retainer plans are available month-to-month.",
  },
]

export default function FAQSection({ assets }) {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="max-w-[736px] mx-auto px-5 sm:px-8 py-16 xl2:py-[80px] flex flex-col gap-10 items-center">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 xl2:gap-[18px]">
        <div className="border-[#616161] border-[0.5px] border-solid flex items-center justify-center px-3 py-1 rounded-full">
          <p className="font-dm font-normal text-xs text-black tracking-[2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>FAQ</p>
        </div>
        <h2 className="font-dm font-medium text-2xl sm:text-3xl xl2:text-[48px] text-black text-center leading-tight xl2:leading-[62px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Frequently <span className="font-cormorant italic">Asked Questions</span>
        </h2>
      </div>

      {/* FAQ items */}
      <div className="flex flex-col gap-2 w-full">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={idx}
              className="border-[#d2d2d2] border-[0.5px] border-solid overflow-hidden rounded-[6px] w-full cursor-pointer"
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
            >
              <div className="flex items-center justify-between px-[24px] py-[16px]">
                <p className="font-dm font-normal leading-[normal] text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>{item.q}</p>
                <div className="bg-[#ff2a00] flex items-center justify-center h-[36px] rounded-[4px] shrink-0 w-[36px]">
                  <img alt="" className="block size-[20px]" src={isOpen ? assets.imgMinus : assets.imgPlus} />
                </div>
              </div>
              {isOpen && (
                <>
                  <div className="mx-[24px] border-t border-[#d2d2d2]" />
                  <p className="font-dm font-light leading-[normal] px-[24px] pb-[16px] pt-[12px] text-[#616161] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>{item.a}</p>
                </>
              )}
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="bg-[#f73000] content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[10px] rounded-[4px] shrink-0 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.1)]">
        <p className="font-dm font-medium leading-[normal] text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>Schedule a Quick Meeting</p>
        <div className="flex items-center justify-center size-[20px] rotate-90 shrink-0">
          <img alt="" className="block max-w-none size-full" src={assets.imgMdiLightArrowUp} />
        </div>
      </div>
    </div>
  )
}
