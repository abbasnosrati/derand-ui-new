const BoxSection = () => {
  return (
    <div className="relative">
      <img
        className="absolute -bottom-[200px] -left-[150px]  !z-10"
        src="./assets/images/charts/bg.svg"
        alt=""
      />
      <img
        className="absolute -top-[80px] right-0 w-full"
        src="./assets/images/bg/exampleSectionBg.svg"
        alt=""
      />
      <div className="text-whiteColor hidden lg:flex text-sm above-1024:text-base above-1440:text-[18px] font-shareTechMono relative md:min-h-[1950px] -mt-[325px] box-section select-none z-30">
        <div className="box-container absolute right-[43.5%] top-[28%] custom-lg:top-[29%] custom-lg:right-[44%] above-1440:top-[28%] above-1440:right-[45%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5  ">
              <div className="w-[168px] h-[168px] box-style">
                <BorderAnimate />
                <div>Chain-Agnostic</div>
              </div>
              <div className=" max-w-[255px] above-1024:max-w-[370px] font-lato -mb-[5px] ">
                Generate a random number on one chain and use it on any EVM and
                non-EVM chains. Thanks to Muon’s intrinsic chain-independent
                nature.
              </div>
            </div>
            <div className="number-box absolute left-[160px] top-[310px]">
              1
            </div>
            <div className=" w-[320px]  number-box-border rotate-[83deg] top-[160px] left-[29px]"></div>
            <div className=" w-[192px]  number-box-border rotate-[78deg] top-[262px] left-[92px]"></div>
            <div className=" w-[250px]  number-box-border rotate-[50deg] top-[265px] -left-[44px]"></div>
          </div>
        </div>

        <div className="box-container absolute right-[12%] above-1440:right-[21%] top-[36%] custom-lg:top-[37%]  custom-lg:right-[5%] ">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5 ">
              <div className="sm:w-[124px] sm:h-[124px] w-[80px] h-[80px] box-style text-center">
                <BorderAnimate />
                <div className="text-center w-full">Flexible</div>
              </div>
              <div className="max-w-[245px] above-1024:max-w-[350px] font-lato -mb-[5px]">
                Due to the innate flexibility of MuonApps, devs can customize
                the generation process according to their unique needs.
              </div>
            </div>
            <div className="number-box absolute -left-[105px] top-[175px]">
              2
            </div>
            <div className=" w-[200px]  number-box-border -rotate-[59deg] top-[85px] -left-[152px]"></div>
            <div className=" w-[134px]  number-box-border -rotate-[43deg] top-[170px] -left-[116px]"></div>
            <div className=" w-[204px]  number-box-border -rotate-[28deg] top-[172px] -left-[67px]"></div>
          </div>
        </div>

        <div className="box-container absolute above-lg:left-[8%] above-1440:left-[22%] top-[44%]  custom-lg:left-[15%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5 ">
              <div className="w-[150px] h-[150px] box-style">
                <BorderAnimate />
                <div>Tamper-Proof</div>
              </div>
              <div className="above-1024:max-w-[350px] max-w-[255px] font-lato -mb-[5px]">
                Leveraging Muon modular security stack (TSS, EigenLayer, &
                Shield Server) makes the random number highly tamper-resistant.
              </div>
            </div>

            <div className="number-box absolute left-[480px] top-[155px] custom-lg:left-[280px] custom-lg:top-[118px]">
              3
            </div>
            <div className=" w-[410px] custom-lg:w-[230px] number-box-border rotate-[22deg] top-[78px] left-[135px] custom-lg:rotate-[30deg] custom-lg:top-[60px] custom-lg:left-[112px]"></div>
            <div className=" w-[370px] custom-lg:w-[195px] number-box-border rotate-[8deg] top-[175px] custom-lg:top-[144px] left-[150px]"></div>
            <div className=" w-[480px] custom-lg:w-[280px] number-box-border rotate-[6deg] top-[177px] custom-lg:top-[144px] -left-[0px]"></div>
          </div>
        </div>

        <div className="box-container absolute right-[5%] top-[52%] above-1440:right-[15%] custom-lg:right-[2%] custom-lg:top-[52%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5 ">
              <div className=" w-[168px] h-[168px] box-style">
                <BorderAnimate />
                <div>Cost-Efficient</div>
              </div>
              <div className="above-1024:max-w-[430px] max-w-[255px] font-lato -mb-[5px]">
                Generating random numbers on DeRand is almost free. Just pay the
                gas fee for the blockchain and Muon (which is much lower than
                current RNGs).
              </div>
            </div>
            <div className="number-box absolute -left-[100px] top-[15px]">
              4
            </div>
            <div className=" w-[100px] number-box-border -rotate-[8deg] top-[7px] -left-[100px]"></div>
            <div className=" w-[180px] number-box-border -rotate-[5deg] top-[7px] -left-[50px]"></div>
            <div className=" w-[145px] number-box-border rotate-[46deg] top-[117px] -left-[122px]"></div>
          </div>
        </div>

        <div className="box-container absolute right-[46%] top-[62%] custom-lg:right-[48%] custom-lg:top-[61%] above-1440:right-[49%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col  gap-5 custom-lg:flex-col custom-lg:items-start">
              <div className=" box-style w-[200px] h-[200px]">
                <BorderAnimate />
                <div>Decentralized & Permissionless</div>
              </div>
              <div className="above-1024:max-w-[364px] max-w-[255px] font-lato -mb-[5px]">
                Built on a network with hundreds of nodes, there is no central
                authority and different parties can run different components.
              </div>
            </div>
            <div className="number-box absolute left-[180px] -top-[100px]">
              5
            </div>
            <div className=" w-[196px] number-box-border -rotate-[29deg] -top-[50px] -left-[6px]"></div>
            <div className=" w-[108px] number-box-border -rotate-[74deg] -top-[52px] left-[160px]"></div>
            <div className=" w-[248px] number-box-border -rotate-[84deg] top-[72px] left-[91px]"></div>
          </div>
        </div>
        <div className="box-container absolute right-[17%] top-[67%] custom-lg:right-[14%]  custom-lg:top-[67%]  above-1440:top-[68%] above-1440:right-[25%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5 ">
              <div className="w-[168px] h-[168px] box-style">
                <BorderAnimate />
                <div className="text-left">Easy-Implementation</div>
              </div>
              <div className="above-1024:max-w-[384px] max-w-[255px] font-lato -mb-[5px]">
                Implement DeRand with minimal code changes. The protocol
                structure is compatible with other VRF platforms including
                Chainlink.
              </div>
            </div>
            <div className="number-box absolute -left-[75px] -top-[180px]">
              6
            </div>
            <div className=" w-[258px] number-box-border rotate-[43deg] -top-[92px] -left-[60px]"></div>
            <div className=" w-[188px] number-box-border rotate-[68deg] -top-[88px] -left-[130px]"></div>
            <div className=" w-[300px] number-box-border rotate-[76deg] top-[15px] -left-[188px]"></div>
          </div>
        </div>
      </div>

      <div className="flex sm:justify-center pl-5 sm:md-0 flex-wrap items-center justify-center flex-row w-full lg:hidden text-whiteColor gap-10 mt-20 sm:mt-40 mb-40">
        <div className="box-container">
          <div className="">
            <div className="small_box">
              <div className="sm:w-[124px] sm:h-[124px] w-[100px] h-[100px] box-style-small">
                <BorderAnimate />
                <div>Chain-Agnostic</div>
              </div>
              <div className="max-w-[285px] font-lato -mb-[5px]">
                Generate a random number on one chain and use it on any EVM and
                non-EVM chains. Thanks to Muon’s intrinsic chain-independent
                nature.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box">
              <div className="sm:w-[124px] sm:h-[124px] w-[100px] h-[100px] box-style-small">
                <BorderAnimate />
                <div>Flexible</div>
              </div>
              <div className="max-w-[270px] font-lato -mb-[5px]">
                Due to the innate flexibility of MuonApps, devs can customize
                the generation process according to their unique needs.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box ">
              <div className="sm:w-[124px] sm:h-[124px] w-[100px] h-[100px] box-style-small">
                <BorderAnimate />
                <div>Tamper-Proof</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Leveraging Muon modular security stack (Muon TSS, EigenLayer , &
                a Shield Server) makes the random number highly
                tamper-resistant.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box ">
              <div className="sm:w-[124px] sm:h-[124px] w-[100px] h-[100px] box-style-small">
                <BorderAnimate />
                <div>Cost-Efficient</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Generating random numbers on DeRand is almost free. Just pay the
                gas fee for the blockchain and Muon.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box">
              <div className="sm:w-[124px] sm:h-[124px] w-[100px] h-[100px] box-style-small">
                <BorderAnimate />
                <div>Decentralized & Permissionless</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Built on a network with hundreds of nodes, there is no central
                authority and different parties can run different components.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box">
              <div className="sm:w-[124px] sm:h-[124px] w-[100px] h-[100px] box-style-small">
                <BorderAnimate />
                <div>Easy-Implementation</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Implement DeRand with minimal code changes. The protocol
                structure is compatible with other VRF platforms including
                Chainlink.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;

const BorderAnimate = () => {
  return (
    <div>
      <span className="animation-border-spin-x  dashing absolute left-0 top-0 border-whiteColor border-t border-dashed w-[200%] h-full opacity-50"></span>
      <span className="animation-border-spin-y border-r border-dashed top-0 left-0 absolute w-full h-[200%] border-whiteColor opacity-50"></span>
      <span className="animation-border-spin-yy animation-test  dashing absolute left-0 top-0  border-l border-dashed w-full h-[200%] border-whiteColor opacity-50"></span>
      <span className="animation-border-spin-xx absolute left-0 bottom-0 border-b border-dashed w-[200%] h-full border-whiteColor opacity-50"></span>
    </div>
  );
};
