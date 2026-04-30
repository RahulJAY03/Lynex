import LynexHeroSection from './sections/LynexHeroSection'
import ServicesSection from './sections/ServicesSection'
import BenefitsSection from './sections/BenefitsSection'
import OurWorkSection from './sections/OurWorkSection'
import HowItWorksSection from './sections/HowItWorksSection'
import PricingSection from './sections/PricingSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FAQSection from './sections/FAQSection'
import FooterSection from './sections/FooterSection'

const imgRedBlackMinimalisticSquareItSoftwareLogo1 = "/assets/632dc8f4653b2136170553835afacbd3a4a7874f.png";
const imgEllipse1 = "/assets/540293f3e39a39992b965873116b502d41ceb1d0.png";
const imgEllipse2 = "/assets/a75845efdfbaa5eccbd401f1a8b09f05c30f146a.png";
const imgEllipse3 = "/assets/3cb828a0fd85b5a053a8e288178c902361b5a415.png";
const imgFrame13 = "/assets/844c8b5ef47ca9d5f217eff39b05a1782fe095e1.png";
const imgFrame14 = "/assets/39a0fb7c746ed6186a8f015425ebe8279509c674.png";
const imgFrame15 = "/assets/d8d48c3b519ab233b4ccd8b38bbb9ceb3c68fc22.png";
const imgFrame20 = "/assets/463bef01e2d514b547ee2847d088fe8f9d42edfa.png";
const imgFrame16 = "/assets/97e1b0af786be0dbe012f2fbd1b9fa7b29e4292b.png";
const imgFrame17 = "/assets/4608744e6bb124398ebdc425570ce2378ce5b3ca.png";
const imgFrame18 = "/assets/de789ef42a9f9523b0c68218efc06a3731e9851b.png";
const imgFrame19 = "/assets/c82fb6f004a3f5c96c47ec05d70d2682d4221326.png";
const imgTdesignStarFilled = "/assets/8a36c31ea0aae2acf6178da2997a31225ae0c9ad.svg";
const imgHugeiconsTick02 = "/assets/4f1e7a7aba3ebe9d36d245972e98344d1bcf9b45.svg";
const imgFrame27 = "/assets/dec1f00620389a3ddbd497921e6a4265ff4e7889.png";
const imgFrame28 = "/assets/2e96ee90952f959399f342b03e57c77617e89daf.png";
const imgFrame29 = "/assets/90897583da6de12d18cf3e3045783026115ad376.png";
const imgFrame30 = "/assets/858a7253f61ce85ebfad3632430e570d1c751088.png";
const imgFrame31 = "/assets/14c066e97d23fd7d18b2e6409b632d9f1e636852.png";
const imgFrame32 = "/assets/14c066e97d23fd7d18b2e6409b632d9f1e636852.png";
const imgHugeiconsTick3 = "/assets/28f5c5c3ce81dae2e6e8fedd8cf6bee770995945.svg";
const imgMoney = "/assets/58033ab402a22578af02dd77bde102d6c15ed72d.svg";
const imgLightning = "/assets/8a54cd01d93788c0aec5c11932b0d3c7a8256f3f.svg";
const imgSketchLogo = "/assets/8fc2511e3c4038df64f7b0e8c1f2eacf11b6bc68.svg";
const imgRuler = "/assets/d30886251b2d41296d3af53bedddb14d007c4a12.svg";
const imgPenNib = "/assets/a80dafc80f16013cee0454a61530285d3c1010d5.svg";
const imgPolygon = "/assets/fd333bc976277b7931f83e1b5bb911402200a8d5.svg";
const imgFrame75 = "/assets/ae913615999f0dc28dc6606d30d07573ae936763.png";
const imgFrame74 = "/assets/bbc108454076086f03f845c5b94ba8b471db3df2.png";
const imgFrame60 = "/assets/97ee93b7e6a572c644e8bba2b13bea55ef5ecdf3.png";
const imgEllipse4 = "/assets/3cb828a0fd85b5a053a8e288178c902361b5a415.png";
const imgHugeiconsTick02Pricing = "/assets/5e54409561dcaf3896a637086ff467984f39cb44.svg";
const imgMdiLightArrowUp = "/assets/aca89860a2aa967c512b36bfaa65e2ee818533e9.svg";
const imgFrame71 = "/assets/a16a5079232bf8b00778b10274f22f17d7b1c9af.svg";
const imgMinus = "/assets/4847530d0a0ad2aa410a48bb092f832242f00fed.svg";
const imgPlus = "/assets/0454b9afee5adc8c5cb43d7afce012cd6833e072.svg";
const imgLine7 = "/assets/b9ff60db2b86c1875246d297d81f9f5c034d565c.svg";

export default function FigmaDesktop() {
  const assets = {
    imgRedBlackMinimalisticSquareItSoftwareLogo1,
    imgEllipse1, imgEllipse2, imgEllipse3,
    imgFrame13, imgFrame14, imgFrame15, imgFrame20,
    imgFrame16, imgFrame17, imgFrame18, imgFrame19,
    imgTdesignStarFilled, imgHugeiconsTick02,
    imgFrame27, imgFrame28, imgFrame29, imgFrame30, imgFrame31, imgFrame32,
    imgHugeiconsTick3,
    imgMoney, imgLightning, imgSketchLogo, imgRuler, imgPenNib, imgPolygon,
    imgFrame75, imgFrame74, imgFrame60,
    imgEllipse4, imgHugeiconsTick02Pricing, imgMdiLightArrowUp, imgFrame71,
    imgMinus, imgPlus, imgLine7,
  }

  return (
    <div className="bg-white w-full">
      <LynexHeroSection assets={assets} />

      <section id="services">
        <ServicesSection assets={assets} />
      </section>

      <section id="benefits">
        <BenefitsSection assets={assets} />
      </section>

      <section id="ourwork">
        <OurWorkSection assets={assets} />
      </section>

      <section id="howitworks">
        <HowItWorksSection />
      </section>

      <section id="pricing">
        <PricingSection assets={assets} />
      </section>

      <section id="testimonials">
        <TestimonialsSection assets={assets} />
      </section>

      <section id="faq">
        <FAQSection assets={assets} />
      </section>

      {/* LYNEX watermark */}
      <div className="overflow-hidden text-center py-4 xl2:py-8">
        <p
          className="font-dm font-medium"
          style={{
            fontSize: 'clamp(40px, 8.9vw, 128px)',
            letterSpacing: 'clamp(8px, 13.2vw, 189.44px)',
            color: 'rgba(217,217,217,0.15)',
            fontVariationSettings: "'opsz' 14",
          }}
        >
          LYNEX
        </p>
      </div>

      <FooterSection assets={assets} />
    </div>
  )
}
