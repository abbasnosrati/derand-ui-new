import Navbar from "../Navbar/Navbar";
import NumbersSection from "../NumbersSection/NumbersSection";

const Header = () => {
  return (
    <div className="header text-white relative min-h-[420px] md:min-h-[600px] above-1440:min-h-[870px] overflow-hidden">
      <NumbersSection />

      <img
        className="absolute md:top-[42px] above-1440:hidden"
        src="./assets/images/header/heroIll.svg"
      />
      <img
        className="hidden above-1440:flex absolute md:top-[42px] above-1440:top-[177px]"
        src="./assets/images/header/heroIll_bg.svg"
      />

      <div className="flex flex-col items-center above-lg:items-end above-lg:pr-[122px] pt-5 p-2 above-lg:pt-[62px]  above-lg:gap-[187px]">
        <Navbar />
        <div className="max-w-[542px] -mr-[30px] above-1440:mr-0 above-1440:max-w-[650px] flex flex-col mt-10 above-lg:mt-0 above-1440:mt-[170px]">
          <div className="font-quantico text-whiteColor text-base sm:text-[36px] md:text-[48px] above-1440:text-[60px] leading-[60px]">
            Off-Chain Randomness On-Chain Trust
          </div>
          <div className="mt-6 ml-1 text-[12px] sm:text-sm md:text-[16px] above-1440:leading-[35px] lg:leading-[25px] above-1440:text-[22px] above-1440:mt-6 font-shareTechMono max-w-[320px] sm:max-w-[500px] text-whiteColor leading-[26px]">
            <p>Flexible, chain-agnostic, cost-efficient </p>
            <p>Verifiable RNG built on Muon</p>
            <p>Secured by TSS, EigenLayer & Shield Server</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
