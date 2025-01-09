import Navbar from "../Navbar/Navbar";
import NumbersSection from "../NumbersSection/NumbersSection";

const Header = () => {
  return (
    <div className="header text-white relative min-h-[420px] md:min-h-[600px] overflow-hidden">
      <NumbersSection />
      <img
        className="absolute w-[60%]"
        src="./assets/images/header/topLeftLight.svg"
      />

      <img
        className="absolute  md:top-[42px]"
        src="./assets/images/header/heroIll.svg"
      />

      <div className="flex flex-col items-center above-lg:items-end above-lg:pr-[122px] pt-5 p-2 above-lg:pt-[62px]  above-lg:gap-[187px]">
        <Navbar />
        <div className="max-w-[425px] flex flex-col mr-[30px] mt-10 above-lg:mt-0">
          <div className="font-quantico text-[36px] md:text-[48px] leading-[60px]">
            Chain-Agnostic, Cost-Efficient RNG
          </div>
          <div className="mt-8 ml-1 text-sm md:text-[16px] font-shareTechMono max-w-[370px] text-exampleColor leading-[26px]">
            DeRand leverages MUON decentralized TSS network to provide
            verifiable random numbers on any EVM and non-EVM blockchain.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
